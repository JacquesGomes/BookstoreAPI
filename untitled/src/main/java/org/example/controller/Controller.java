package org.example.controller;
import org.example.model.TodoItem;


import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {
    @GetMapping("/usersList")
    ResponseEntity<List<TodoItem>> controller() {


        List<TodoItem> todoItems = new ArrayList<>();

        String jdbcUrl = "jdbc:postgresql://localhost:5432/banco";
        String username = "open_user";
        String password = "password";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password)) {
            String query = "SELECT id, name, email FROM users";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    String email = resultSet.getString("email");

                    TodoItem todoItem = new TodoItem(id, name, email);
                    todoItems.add(todoItem);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle the exception
        }

        return ResponseEntity.ok(todoItems);
    }

    @PostMapping("/addUser")
    public ResponseEntity<String> addTodoItem(@RequestBody TodoItem todoItem) {
        String jdbcUrl = "jdbc:postgresql://localhost:5432/banco";
        String username = "open_user";
        String password = "password";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password)) {
            String query = "INSERT INTO users (id, name, email) VALUES (?, ?," +
                    " ?)";

            try (PreparedStatement statement = connection.prepareStatement(query)) {

                int generatedId = generateNextId(connection);

                statement.setInt(1, generatedId);
                statement.setString(2, todoItem.getName());
                statement.setString(3, todoItem.getEmail());
                statement.executeUpdate();

                todoItem.setId(generatedId);
            }

            return ResponseEntity.status(HttpStatus.CREATED).body("Todo item added successfully");
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while adding todo item");
        }
    }

    private int generateNextId(Connection connection) throws SQLException {
        String query = "SELECT MAX(id) FROM users";

        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            if (resultSet.next()) {
                int maxId = resultSet.getInt(1);
                return maxId + 1;
            }
        }

        return 1; // If no existing records, start with ID 1
    }
}


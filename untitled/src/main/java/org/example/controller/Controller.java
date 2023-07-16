package org.example.controller;
import org.example.model.Livro;


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


@CrossOrigin(origins = "*")
@RestController
public class Controller {
    @GetMapping("/booksList")
    ResponseEntity<List<Livro>> controller() {


        List<Livro> livros = new ArrayList<>();

        String jdbcUrl = "jdbc:postgresql://localhost:5432/banco";
        String username = "open_user";
        String password = "password";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password)) {
            String query = "SELECT id, titulo, autor, ano_publicacao, " +
                    "editora, numero_paginas FROM livros";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String titulo = resultSet.getString("titulo");
                    String autor = resultSet.getString("autor");
                    int ano_publicacao = resultSet.getInt(
                            "ano_publicacao");
                    String editora = resultSet.getString("editora");
                    int numero_paginas = resultSet.getInt(
                            "numero_paginas");

                    Livro livro = new Livro(id, titulo, autor, editora,
                            ano_publicacao,
                            numero_paginas);
                    livros.add(livro);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle the exception
        }

        return ResponseEntity.ok(livros);
    }

    @PostMapping("/addBook")
    public ResponseEntity<String> addTodoItem(@RequestBody Livro livro) {
        String jdbcUrl = "jdbc:postgresql://localhost:5432/banco";
        String username = "open_user";
        String password = "password";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password)) {
            String query = "INSERT INTO livros (id, titulo, autor, " +
                    "ano_publicacao, editora, numero_paginas) VALUES (?, ?," +
                    " ?, ?, ?, ?)";

            try (PreparedStatement statement = connection.prepareStatement(query)) {

                int generatedId = generateNextId(connection);

                statement.setInt(1, generatedId);
                statement.setString(2, livro.getTitulo());
                statement.setString(3, livro.getAutor());
                statement.setInt(4, livro.getAnoPublicacao());
                statement.setString(5, livro.getEditora());
                statement.setInt(6, livro.getNumeroPaginas());
                statement.executeUpdate();

                livro.setId(generatedId);
            }

            return ResponseEntity.status(HttpStatus.CREATED).body("Livro " +
                    "added " +
                    "successfully");
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while adding todo item");
        }
    }

    private int generateNextId(Connection connection) throws SQLException {
        String query = "SELECT MAX(id) FROM livros";

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


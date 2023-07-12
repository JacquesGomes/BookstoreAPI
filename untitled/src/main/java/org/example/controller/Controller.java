package org.example.controller;

import org.example.model.TodoItem;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {
    @GetMapping("/hello")
    ResponseEntity<List<TodoItem>> controller(){

        TodoItem teste = new TodoItem("jacques", 1, true);
        TodoItem teste2 = new TodoItem("jacques", 2, false);
        TodoItem teste3 = new TodoItem("jacques", 3, true);

        List<TodoItem> lista = List.of(teste, teste2, teste3);

        return ResponseEntity.ok(lista);

    }
}

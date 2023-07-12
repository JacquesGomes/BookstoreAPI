package org.example.model;

public class TodoItem {
    private Integer id;
    private String name;
    private String email;

    public TodoItem(Integer id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}

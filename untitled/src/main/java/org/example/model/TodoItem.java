package org.example.model;

public class TodoItem {
    private String title;
    private Integer id;

    private Boolean completed;

    public TodoItem(String title, Integer id, Boolean completed) {
        this.title = title;
        this.id = id;
        this.completed = completed;
    }

    public String getTitle() {
        return title;
    }

    public Integer getId() {
        return id;
    }

    public Boolean getCompleted() {
        return completed;
    }

}

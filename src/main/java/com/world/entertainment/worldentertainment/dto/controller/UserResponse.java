package com.world.entertainment.worldentertainment.dto.controller;

final public class UserResponse {

    private final String name;

    private final String email;

    public UserResponse(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}

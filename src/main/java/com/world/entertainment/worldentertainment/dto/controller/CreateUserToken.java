package com.world.entertainment.worldentertainment.dto.controller;

final public class CreateUserToken {

    private String email;

    private String password;

    public String getEmail() {
        return email;
    }

    public CreateUserToken setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public CreateUserToken setPassword(String password) {
        this.password = password;
        return this;
    }
}

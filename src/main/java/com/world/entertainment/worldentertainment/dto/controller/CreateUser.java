package com.world.entertainment.worldentertainment.dto.controller;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

final public class CreateUser implements Serializable {

    @NotNull
    @Size(min = 1, max = 30)
    private String name;

    private String email;

    private String password;

    public String getName() {
        return name;
    }

    public CreateUser setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public CreateUser setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public CreateUser setPassword(String password) {
        this.password = password;
        return this;
    }
}

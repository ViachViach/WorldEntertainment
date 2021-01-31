package com.world.entertainment.worldentertainment.dto.controller;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

final public class CreateCustomer implements Serializable {

    @NotNull
    @Size(min = 1, max = 30)
    private String name;

    @NotNull
    @Email
    private String email;

    public String getName() {
        return name;
    }

    public CreateCustomer setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public CreateCustomer setEmail(String email) {
        this.email = email;
        return this;
    }
}

package com.world.entertainment.worldentertainment.dto.controller;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

final public class CreateCustomer implements Serializable {

    private String name;
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

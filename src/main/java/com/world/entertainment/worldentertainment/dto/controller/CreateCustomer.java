package com.world.entertainment.worldentertainment.dto.controller;

import com.world.entertainment.worldentertainment.entity.Customer;

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

    public Customer create() {
        return new Customer()
                .setName(name)
                .setEmail(email)
                .setActive(true);
    }
}

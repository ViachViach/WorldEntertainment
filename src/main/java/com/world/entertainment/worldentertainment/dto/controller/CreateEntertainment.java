package com.world.entertainment.worldentertainment.dto.controller;

import java.io.Serializable;

final public class CreateEntertainment implements Serializable {

    private String name;

    public String getName() {
        return name;
    }

    public CreateEntertainment setName(String name) {
        this.name = name;
        return this;
    }
}

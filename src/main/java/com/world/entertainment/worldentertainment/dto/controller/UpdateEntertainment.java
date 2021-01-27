package com.world.entertainment.worldentertainment.dto.controller;

import java.io.Serializable;

final public class UpdateEntertainment implements Serializable {

    private String name;

    public String getName() {
        return name;
    }

    public UpdateEntertainment setName(String name) {
        this.name = name;
        return this;
    }
}

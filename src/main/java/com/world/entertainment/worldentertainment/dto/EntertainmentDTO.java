package com.world.entertainment.worldentertainment.dto;

import java.io.Serializable;

final public class EntertainmentDTO implements Serializable {

    private String name;

    public String getName() {
        return name;
    }

    public EntertainmentDTO setName(String name) {
        this.name = name;
        return this;
    }
}

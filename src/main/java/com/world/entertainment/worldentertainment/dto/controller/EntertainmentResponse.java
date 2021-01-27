package com.world.entertainment.worldentertainment.dto.controller;

import java.io.Serializable;

final public class EntertainmentResponse implements Serializable {

    private final String name;

    public EntertainmentResponse(String name) {
        this.name = name;
    }
}

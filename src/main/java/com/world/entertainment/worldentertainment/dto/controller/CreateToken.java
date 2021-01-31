package com.world.entertainment.worldentertainment.dto.controller;

import java.io.Serializable;

final public class CreateToken implements Serializable {

    private final String token;

    public CreateToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }
}

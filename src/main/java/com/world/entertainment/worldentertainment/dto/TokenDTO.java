package com.world.entertainment.worldentertainment.dto;

import java.io.Serializable;

final public class TokenDTO implements Serializable {

    private String email;

    private String token;

    public String getEmail() {
        return email;
    }

    public TokenDTO setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getToken() {
        return token;
    }

    public TokenDTO setToken(String token) {
        this.token = token;
        return this;
    }
}

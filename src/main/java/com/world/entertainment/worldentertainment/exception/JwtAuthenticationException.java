package com.world.entertainment.worldentertainment.exception;

import org.springframework.http.HttpStatus;

public class JwtAuthenticationException extends RestException {

    public JwtAuthenticationException(String message) {
        super(message, HttpStatus.UNAUTHORIZED);
    }
}

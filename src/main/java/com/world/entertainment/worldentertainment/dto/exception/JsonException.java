package com.world.entertainment.worldentertainment.dto.exception;

import org.springframework.http.HttpStatus;

import java.io.Serializable;

final public class JsonException implements Serializable {

    private final String message;
    private final HttpStatus status;

    public JsonException (String message, HttpStatus status) {
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public HttpStatus getStatus() {
        return status;
    }
}

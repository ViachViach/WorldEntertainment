package com.world.entertainment.worldentertainment.exception;

import org.springframework.http.HttpStatus;

public abstract class RestException extends RuntimeException {

    private HttpStatus status = HttpStatus.BAD_REQUEST;

    public RestException(String message) {
        super(message);
    }

    public RestException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
}

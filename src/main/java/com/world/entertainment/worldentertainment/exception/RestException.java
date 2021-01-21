package com.world.entertainment.worldentertainment.exception;

public abstract class RestException extends RuntimeException {
    public RestException(String message) {
        super(message);
    }
}

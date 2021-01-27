package com.world.entertainment.worldentertainment.dto.exception;

final public class JsonException {

    public String message;

    public int code;

    public JsonException (String message, int code) {
        this.message = message;
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public JsonException setMessage(String message) {
        this.message = message;
        return this;
    }
}

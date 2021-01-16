package com.world.entertainment.worldentertainment.exception;

import java.net.HttpRetryException;

public class HttpNotFoundException extends HttpRetryException {

    public HttpNotFoundException(String detail, int code) {
        super(detail, code);
    }

    public HttpNotFoundException(String detail, int code, String location) {
        super(detail, code, location);
    }
}

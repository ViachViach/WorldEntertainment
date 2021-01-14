package com.world.entertainment.worldentertainment.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;

@ControllerAdvice
public class ResponseExceptionHandlers extends ResponseEntityExceptionHandler {

    private static final Logger LOG = LoggerFactory.getLogger(ResponseExceptionHandlers.class);


    @ExceptionHandler(Exception.class)
    protected ResponseEntity<String> handleException(Exception e) {
        LOG.error(e.getMessage(), e);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
    }

    @ExceptionHandler(IOException.class)
    protected ResponseEntity<String> handleIOException(IOException e) {
        LOG.error(e.getMessage(), e);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
    }

}

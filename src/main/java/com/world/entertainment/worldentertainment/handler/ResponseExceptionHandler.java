package com.world.entertainment.worldentertainment.handler;

import com.world.entertainment.worldentertainment.dto.exception.JsonException;
import com.world.entertainment.worldentertainment.exception.RestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import org.springframework.security.core.AuthenticationException;
import java.io.IOException;
import java.util.function.BiFunction;

@ControllerAdvice
public class ResponseExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger LOG = LoggerFactory.getLogger(ResponseExceptionHandler.class);
    private static final BiFunction<String, Throwable, String> GENERATE_EXCEPTION_MESSAGE =
            (responsePhrase, throwable) -> responsePhrase + ": " + throwable.getMessage();


    @ExceptionHandler(Exception.class)
    protected ResponseEntity<Object> handleException(Exception e) {
        LOG.error(e.getMessage(), e);
        var jsonException = new JsonException(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        return buildResponse(jsonException);
    }

    @ExceptionHandler(IOException.class)
    protected ResponseEntity<Object> handleIOException(IOException e) {
        LOG.error(e.getMessage(), e);
        var jsonException = new JsonException(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        return buildResponse(jsonException);
    }

    @ExceptionHandler(AuthenticationException.class)
    private ResponseEntity<Object> handleNotFoundException(AuthenticationException e) {
        LOG.error(e.getMessage(), e);
        var jsonException = new JsonException(e.getMessage(), HttpStatus.NOT_FOUND);
        return buildResponse(jsonException);
    }

    @ExceptionHandler(RestException.class)
    private ResponseEntity<Object> handleRestException(RestException e) {
        LOG.error(e.getMessage(), e);
        var jsonException = new JsonException(e.getMessage(), e.getStatus());
        return buildResponse(jsonException);
    }

    private ResponseEntity<Object> buildResponse(JsonException exception) {
        return new ResponseEntity<>(exception, exception.getStatus());
    }
}

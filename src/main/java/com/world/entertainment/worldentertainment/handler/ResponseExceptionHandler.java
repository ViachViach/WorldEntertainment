package com.world.entertainment.worldentertainment.handler;

import com.world.entertainment.worldentertainment.dto.JsonException;
import com.world.entertainment.worldentertainment.exception.RestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;
import java.util.function.BiFunction;

@ControllerAdvice
public class ResponseExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger LOG = LoggerFactory.getLogger(ResponseExceptionHandler.class);
    private static final BiFunction<String, Throwable, String> GENERATE_EXCEPTION_MESSAGE =
            (responsePhrase, throwable) -> responsePhrase + ": " + throwable.getMessage();


    @ExceptionHandler(Exception.class)
    protected ResponseEntity<String> handleException(Exception e) {
        LOG.error(e.getMessage(), e);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(GENERATE_EXCEPTION_MESSAGE.apply(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e));
    }

    @ExceptionHandler(IOException.class)
    protected ResponseEntity<String> handleIOException(IOException e) {
        LOG.error(e.getMessage(), e);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(GENERATE_EXCEPTION_MESSAGE.apply(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e));
    }

    @ExceptionHandler(RestException.class)
    protected ResponseEntity<Object> handleException(RestException e) {
        LOG.error(e.getMessage(), e);
        JsonException jsonException = new JsonException(e.getMessage(), e.getStatus().value());
        return new ResponseEntity<>(jsonException, e.getStatus());
    }
}

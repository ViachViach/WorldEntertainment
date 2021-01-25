package com.world.entertainment.worldentertainment.controller;

import com.world.entertainment.worldentertainment.dto.TokenDTO;
import com.world.entertainment.worldentertainment.dto.UserAuthDTO;
import com.world.entertainment.worldentertainment.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "Authentication")
@RequestMapping(
        value = "/api/auth",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class AuthenticationController {

    private final UserService userService;

    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/login")
    public TokenDTO login(@RequestBody UserAuthDTO request) {
        return userService.authenticate(request);
    }
}

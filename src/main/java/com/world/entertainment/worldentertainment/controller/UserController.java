package com.world.entertainment.worldentertainment.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user/v1")
public class UserController {

    @GetMapping(value = "/get")
    public String get() {
        return new String("sdfsdf");
    }
}

package com.world.entertainment.worldentertainment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/simple")
public class SimpleController {

    @GetMapping("get")
    public String get() {
        return "Test";
    }
}

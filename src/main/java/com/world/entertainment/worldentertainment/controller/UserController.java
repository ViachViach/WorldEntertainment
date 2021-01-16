package com.world.entertainment.worldentertainment.controller;

import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.exception.UserNotFoundException;
import com.world.entertainment.worldentertainment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/get")
    public List<UserDTO> get() {
        return this.userService.getAll();
    }

    @GetMapping(value = "/get/{id}")
    public UserDTO get(@PathVariable("id") int id) throws UserNotFoundException {
        return this.userService.getByName(id);
    }
}

package com.world.entertainment.worldentertainment.controller.v1;

import com.world.entertainment.worldentertainment.dto.controller.CreateUser;
import com.world.entertainment.worldentertainment.dto.controller.UserResponse;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@Api(tags = "User")
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/")
    public List<UserResponse> get() {
        return userService.getAll();
    }

    @GetMapping(value = "/{id}")
    public UserResponse get(@PathVariable("id") int id) throws EntityNotFoundException {
        return userService.getById(id);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") int id) {

    }

    @PostMapping()
    public void create(@RequestBody CreateUser createUser) {

    }

    @PutMapping(value = "/{id}")
    public void update(@PathVariable("id") int id, @RequestBody CreateUser createUser) {

    }
}

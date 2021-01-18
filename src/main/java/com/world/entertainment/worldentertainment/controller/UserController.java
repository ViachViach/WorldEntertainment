package com.world.entertainment.worldentertainment.controller;

import com.world.entertainment.worldentertainment.dao.UserDAO;
import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.exception.UserNotFoundException;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/user/v1")
public class UserController {

    @Autowired
    private UserDAO userDAO;

    @GetMapping(value = "/")
    public List<UserDTO> get() {
        return userDAO.getAll();
    }

    @GetMapping(value = "/{id}")
    public UserDTO get(@PathVariable("id") int id) throws UserNotFoundException {
        return userDAO.getById(id);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") int id) {

    }

    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public void create(@RequestBody @Valid UserDTO userDTO, BindingResult bindingResult) {
        //TODO ask how to make response
        //TODO ask about debugging

        if (bindingResult.hasErrors()) {
            int t = 1;
        }


        userDAO.create(userDTO);
    }

    @PutMapping(value = "/{id}")
    public void update(@PathVariable("id") int id) {

    }
}

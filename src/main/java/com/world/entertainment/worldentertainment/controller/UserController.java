package com.world.entertainment.worldentertainment.controller;

import com.world.entertainment.worldentertainment.dao.UserDAO;
import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping()
    public void create(@ModelAttribute("user") UserDTO userDTO) {

    }

    @PutMapping(value = "/{id}")
    public void update(@PathVariable("id") int id) {

    }
}

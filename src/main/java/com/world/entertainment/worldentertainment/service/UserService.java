package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.exception.UserNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class UserService {

    private List<UserDTO> users = Arrays.asList(
            new UserDTO("test", "test"),
            new UserDTO("test", "test")
    );

    public List<UserDTO> getAll() {
        return this.users;
    }

    public UserDTO getByName(int id) {
        try {
            return this.users.get(id);
        } catch (IndexOutOfBoundsException e) {
            throw new UserNotFoundException("User not found", e);
        }
    }
}

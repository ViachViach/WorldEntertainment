package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.UserDTO;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class UserService {

    public List<UserDTO> getAll() {
        return Arrays.asList(
                new UserDTO("test", "test"),
                new UserDTO("test", "test")
        );
    }
}

package com.world.entertainment.worldentertainment.adapter;

import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.entity.User;

public class UserAdapter {

    private final User user;

    public UserAdapter (User user) {
        this.user = user;
    }

    public UserDTO createDto() {
        return new UserDTO()
                .setEmail(user.getEmail())
                .setName(user.getName())
        ;
    }
}

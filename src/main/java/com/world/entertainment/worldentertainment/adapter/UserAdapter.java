package com.world.entertainment.worldentertainment.adapter;

import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.entity.UserEntity;

public class UserAdapter {

    private final UserEntity userEntity;

    public UserAdapter (UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    public UserDTO createDto() {
        return new UserDTO()
                .setEmail(userEntity.getEmail())
                .setName(userEntity.getName())
        ;
    }
}

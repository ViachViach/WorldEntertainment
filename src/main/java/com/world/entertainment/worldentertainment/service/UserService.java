package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.adapter.UserAdapter;
import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.entity.UserEntity;
import com.world.entertainment.worldentertainment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDTO getById(int id) {
        UserEntity userEntity = userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        UserAdapter userAdapter = new UserAdapter(userEntity);

        return userAdapter.createDto();
    }

    public List<UserDTO> getAll() {
        List<UserEntity> users = new ArrayList<>();
        List<UserDTO> result = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        users.forEach((entity)-> {
            UserAdapter userAdapter = new UserAdapter(entity);
            result.add(userAdapter.createDto());
        });

        return result;
    }
}

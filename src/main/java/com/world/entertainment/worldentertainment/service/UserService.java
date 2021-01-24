package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.adapter.UserAdapter;
import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.entity.UserEntity;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDTO getById(int id) {
        UserEntity userEntity = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException(String.format("User by id %d not found", id))
        );
        UserAdapter userAdapter = new UserAdapter(userEntity);

        return userAdapter.createDto();
    }

    public List<UserDTO> getAll() {
        var users = new ArrayList<UserEntity>();
        var result = new ArrayList<UserDTO>();

        userRepository.findAll().forEach(users::add);

        users.forEach((entity)-> {
            UserAdapter userAdapter = new UserAdapter(entity);
            result.add(userAdapter.createDto());
        });

        return result;
    }

    public UserDetails createUserDetails(UserEntity user) {
        return new User(
                user.getEmail(),
                user.getPassword(),
                user.getDeleteAt() == null && user.isActive(),
                user.getDeleteAt() == null && user.isActive(),
                user.getDeleteAt() == null && user.isActive(),
                user.getDeleteAt() == null && user.isActive(),
                user.getRole().authorities()
        );
    }
}

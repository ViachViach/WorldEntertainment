package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.controller.CreateUserToken;
import com.world.entertainment.worldentertainment.dto.controller.CreateToken;
import com.world.entertainment.worldentertainment.dto.controller.UserResponse;
import com.world.entertainment.worldentertainment.entity.User;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.exception.JwtAuthenticationException;
import com.world.entertainment.worldentertainment.repository.UserRepository;
import com.world.entertainment.worldentertainment.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserService {

    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public UserService(
            UserRepository userRepository,
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider
    ) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public UserResponse getById(int id) {
        var entity = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException(String.format("User by id %d not found", id))
        );

        return new UserResponse(
                entity.getName(),
                entity.getEmail()
        );
    }

    public List<UserResponse> getAll() {
        var users = new ArrayList<User>();
        var result = new ArrayList<UserResponse>();

        userRepository.findAll().forEach(users::add);
        users.forEach((entity)-> {
            var userResponse = new UserResponse(
                    entity.getName(),
                    entity.getEmail()
            );
            result.add(userResponse);
        });

        return result;
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException(String.format("User by email %s not found", email)));
    }

    public CreateToken authenticate(CreateUserToken createUserToken) throws JwtAuthenticationException {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(createUserToken.getEmail(), createUserToken.getPassword())
        );
        var user = findByEmail(createUserToken.getEmail());
        var token = jwtTokenProvider.createToken(createUserToken.getEmail(), user.getRole().name());

        return new CreateToken(token);
    }
}

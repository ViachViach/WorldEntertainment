package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.adapter.UserAdapter;
import com.world.entertainment.worldentertainment.dto.TokenDTO;
import com.world.entertainment.worldentertainment.dto.UserAuthDTO;
import com.world.entertainment.worldentertainment.dto.UserDTO;
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

    public UserDTO getById(int id) {
        var user = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException(String.format("User by id %d not found", id))
        );
        UserAdapter userAdapter = new UserAdapter(user);

        return userAdapter.createDto();
    }

    public List<UserDTO> getAll() {
        var users = new ArrayList<User>();
        var result = new ArrayList<UserDTO>();

        userRepository.findAll().forEach(users::add);

        users.forEach((entity)-> {
            UserAdapter userAdapter = new UserAdapter(entity);
            result.add(userAdapter.createDto());
        });

        return result;
    }

    public TokenDTO authenticate(UserAuthDTO userAuthDTO) throws JwtAuthenticationException {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userAuthDTO.getEmail(), userAuthDTO.getPassword())
        );
        var user = userRepository.findByEmail(userAuthDTO.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        var token = jwtTokenProvider.createToken(userAuthDTO.getEmail(), user.getRole().name());

        var result = new TokenDTO();
        result.setEmail(userAuthDTO.getEmail());
        result.setToken(token);

        return result;
    }
}

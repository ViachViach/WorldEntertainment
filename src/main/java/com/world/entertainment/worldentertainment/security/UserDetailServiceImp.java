package com.world.entertainment.worldentertainment.security;

import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.repository.UserRepository;
import com.world.entertainment.worldentertainment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserDetailServiceImp implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                new EntityNotFoundException(
                        String.format("User by email %s not found", email)
                )
        );

        return userService.createUserDetails(user);
    }
}

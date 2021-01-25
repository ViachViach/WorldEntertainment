package com.world.entertainment.worldentertainment.security;

import com.world.entertainment.worldentertainment.entity.UserEntity;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.repository.UserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserDetailServiceImp implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                new EntityNotFoundException(
                        String.format("User by email %s not found", email)
                )
        );

        return createUserDetails(user);
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

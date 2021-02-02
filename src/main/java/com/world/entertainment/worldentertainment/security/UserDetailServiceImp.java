package com.world.entertainment.worldentertainment.security;

import com.world.entertainment.worldentertainment.entity.User;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.repository.UserRepository;
import com.world.entertainment.worldentertainment.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserDetailServiceImp implements UserDetailsService {

    private final UserService userService;

    public UserDetailServiceImp(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return createUserDetails(userService.findByEmail(email));
    }

    public UserDetails createUserDetails(User user) {
        return new org.springframework.security.core.userdetails.User(
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

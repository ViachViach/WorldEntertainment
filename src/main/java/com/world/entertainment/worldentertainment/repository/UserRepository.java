package com.world.entertainment.worldentertainment.repository;

import com.world.entertainment.worldentertainment.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}


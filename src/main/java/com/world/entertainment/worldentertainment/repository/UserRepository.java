package com.world.entertainment.worldentertainment.repository;

import com.world.entertainment.worldentertainment.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Integer> {
}

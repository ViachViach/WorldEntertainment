package com.world.entertainment.worldentertainment.repository;

import com.world.entertainment.worldentertainment.entity.EntertainmentEntity;
import org.springframework.data.repository.CrudRepository;

public interface EntertainmentRepository extends CrudRepository<EntertainmentEntity, Integer> {
}

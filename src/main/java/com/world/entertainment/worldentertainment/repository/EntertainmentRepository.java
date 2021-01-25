package com.world.entertainment.worldentertainment.repository;

import com.world.entertainment.worldentertainment.entity.Entertainment;
import org.springframework.data.repository.CrudRepository;

public interface EntertainmentRepository extends CrudRepository<Entertainment, Integer> {
}

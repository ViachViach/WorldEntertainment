package com.world.entertainment.worldentertainment.repository;

import com.world.entertainment.worldentertainment.entity.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

}

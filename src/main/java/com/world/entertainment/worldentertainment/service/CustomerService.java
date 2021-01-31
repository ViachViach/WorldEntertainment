package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.controller.CustomerResponse;
import com.world.entertainment.worldentertainment.entity.Customer;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(
            CustomerRepository customerRepository
    ) {
        this.customerRepository = customerRepository;
    }

    public CustomerResponse getById(int id) {
        var entity = customerRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException(String.format("Customer by id %d not found", id))
        );

        return new CustomerResponse(
                entity.getName(),
                entity.getEmail()
        );
    }

    public List<CustomerResponse> getAll() {
        var customers = new ArrayList<Customer>();
        var result = new ArrayList<CustomerResponse>();

        customerRepository.findAll().forEach(customers::add);
        customers.forEach((entity) -> {
            var customerResponse = new CustomerResponse(
                    entity.getName(),
                    entity.getEmail()
            );
            result.add(customerResponse);
        });

        return result;
    }

    public void create(Customer customer) {
        customerRepository.save(customer);
    }

    public void update(Integer customerId) {
        customerRepository.findById(customerId);
    }

    public void deleteById(Integer customerId) {
        customerRepository.deleteById(customerId);
    }
}

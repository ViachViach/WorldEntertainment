package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.controller.CreateCustomer;
import com.world.entertainment.worldentertainment.dto.controller.CustomerResponse;
import com.world.entertainment.worldentertainment.dto.controller.UpdateCustomer;
import com.world.entertainment.worldentertainment.entity.Customer;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.repository.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CustomerService(
            CustomerRepository customerRepository,
            ModelMapper modelMapper) {
        this.customerRepository = customerRepository;
        this.modelMapper = modelMapper;
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

    public void create(CreateCustomer createCustomer) {
        var customer = modelMapper.map(createCustomer, Customer.class);
        customerRepository.save(customer);
    }

    public void update(int customerId, UpdateCustomer updateCustomer) {
        var customer = customerRepository.findById(customerId).orElseThrow(()
                -> new EntityNotFoundException(String.format("Customer by id %d not found", customerId)));
        customer = modelMapper.map(updateCustomer, Customer.class).setId(customerId);
        customerRepository.save(customer);
    }

    public void deleteById(int customerId) {
        customerRepository.deleteById(customerId);
    }
}

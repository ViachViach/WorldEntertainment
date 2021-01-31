package com.world.entertainment.worldentertainment.controller.v1;

import com.world.entertainment.worldentertainment.dto.controller.CreateCustomer;
import com.world.entertainment.worldentertainment.dto.controller.CustomerResponse;
import com.world.entertainment.worldentertainment.dto.controller.UpdateCustomer;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.service.CustomerService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags = "Customer")
@RequestMapping("/api/v1/customer")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping(value = "/")
    public List<CustomerResponse> get() {
        return customerService.getAll();
    }

    @GetMapping(value = "/{id}")
    public CustomerResponse get(@PathVariable("id") int id) throws EntityNotFoundException {
        return customerService.getById(id);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") int id) {
        customerService.deleteById(id);
    }

    @PostMapping()
    public void create(@RequestBody CreateCustomer createCustomer) {
        customerService.create(createCustomer);
    }

    @PutMapping(value = "/{id}")
    public void update(@PathVariable("id") int id, @RequestBody UpdateCustomer updateCustomer) {
        customerService.update(id, updateCustomer);
    }
}

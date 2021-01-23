package com.world.entertainment.worldentertainment.controller;

import com.world.entertainment.worldentertainment.dto.EntertainmentDTO;
import com.world.entertainment.worldentertainment.service.EntertainmentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags = "Entertainment")
@RequestMapping(
        value = "/entertainment",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class EntertainmentController {

    @Autowired
    EntertainmentService entertainmentRepository;

    @GetMapping(value = "/{id}", consumes = MediaType.ALL_VALUE)
    public EntertainmentDTO get(@PathVariable int id) {
        return entertainmentRepository.getById(id);
    }

    @GetMapping(value = "/", consumes = MediaType.ALL_VALUE)
    public List<EntertainmentDTO> getAll() {
        return entertainmentRepository.getAll();
    }

    @PostMapping(value = "/")
    public void create(@RequestBody EntertainmentDTO body) {
        entertainmentRepository.create(body);
    }

    @PutMapping(value = "/")
    public void update(@RequestBody EntertainmentDTO body, int id) {
        entertainmentRepository.update(body, id);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable int id) {
        entertainmentRepository.delete(id);
    }

}

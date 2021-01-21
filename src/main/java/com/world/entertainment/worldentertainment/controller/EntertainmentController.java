package com.world.entertainment.worldentertainment.controller;

import com.world.entertainment.worldentertainment.dto.EntertainmentDTO;
import com.world.entertainment.worldentertainment.service.EntertainmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/entertainment")
public class EntertainmentController {

    @Autowired
    EntertainmentService entertainmentRepository;

    @GetMapping(value = "/{id}")
    public EntertainmentDTO get(@PathVariable int id) {
        return entertainmentRepository.getById(id);
    }

    @GetMapping(value = "/")
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
    public void delete(int id) {
        entertainmentRepository.delete(id);
    }

}

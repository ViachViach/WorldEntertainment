package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.controller.CreateEntertainment;
import com.world.entertainment.worldentertainment.dto.controller.EntertainmentResponse;
import com.world.entertainment.worldentertainment.dto.controller.UpdateEntertainment;
import com.world.entertainment.worldentertainment.entity.Entertainment;
import com.world.entertainment.worldentertainment.repository.EntertainmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class EntertainmentService {

    private final EntertainmentRepository entertainmentRepository;

    @Autowired
    public EntertainmentService(EntertainmentRepository entertainmentRepository) {
        this.entertainmentRepository = entertainmentRepository;
    }

    public void delete(int id) {

        var now = new Date();
        var entertainment = geEntityById(id).setDateDelete(now).setDateUpdate(now);

        entertainmentRepository.save(entertainment);
    }

    public void update(UpdateEntertainment updateEntertainment, int id) {

        var now = new Date();
        var entertainment = geEntityById(id).setName(updateEntertainment.getName()).setDateUpdate(now);

        entertainmentRepository.save(entertainment);
    }

    public void create(CreateEntertainment entertainmentDTO) {

        var now = new Date();
        var entertainment = new Entertainment()
                .setName(entertainmentDTO.getName())
                .setDateUpdate(now)
                .setDateCreate(now);

        entertainmentRepository.save(entertainment);
    }

    public EntertainmentResponse getById(int id) {
        var entertainment = geEntityById(id);

        return new EntertainmentResponse(
                entertainment.getName()
        );
    }

    public List<EntertainmentResponse> getAll() {
        var entertainmentDTOs = new ArrayList<EntertainmentResponse>();
        var entertainments = new ArrayList<Entertainment>();

        entertainmentRepository.findAll().forEach(entertainments::add);
        entertainments.forEach((entity) -> {
            entertainmentDTOs.add(new EntertainmentResponse(entity.getName()));
        });

        return entertainmentDTOs;
    }

    private Entertainment geEntityById(int id) {
        return entertainmentRepository
                .findById(id)
                .orElseThrow(EntityNotFoundException::new)
        ;
    }
}

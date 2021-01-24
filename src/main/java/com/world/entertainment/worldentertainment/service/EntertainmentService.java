package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.EntertainmentDTO;
import com.world.entertainment.worldentertainment.entity.EntertainmentEntity;
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
        var entertainment = geEntityById(id);

        entertainment
                .setDateDelete(now)
                .setDateUpdate(now)
        ;

        entertainmentRepository.save(entertainment);
    }

    public void update(EntertainmentDTO entertainmentDTO, int id) {

        var now = new Date();
        var entertainment = geEntityById(id);

        entertainment
                .setName(entertainmentDTO.getName())
                .setDateUpdate(now)
        ;

        entertainmentRepository.save(entertainment);
    }

    public void create(EntertainmentDTO entertainmentDTO) {

        var now = new Date();
        var entertainment = new EntertainmentEntity();

        entertainment
                .setName(entertainmentDTO.getName())
                .setDateUpdate(now)
                .setDateCreate(now)
        ;

        entertainmentRepository.save(entertainment);
    }

    public EntertainmentDTO getById(int id) {
        var entertainment = geEntityById(id);

        return new EntertainmentDTO()
                .setName(entertainment.getName())
        ;
    }

    public List<EntertainmentDTO> getAll() {
        var entertainmentDTOs = new ArrayList<EntertainmentDTO>();
        var entertainments = new ArrayList<EntertainmentEntity>();

        entertainmentRepository.findAll().forEach(entertainments::add);

        entertainments.forEach((entity) -> {
            entertainmentDTOs.add(new EntertainmentDTO().setName(entity.getName()));
        });

        return entertainmentDTOs;
    }

    private EntertainmentEntity geEntityById(int id) {
        return entertainmentRepository
                .findById(id)
                .orElseThrow(EntityNotFoundException::new)
        ;
    }
}

package com.world.entertainment.worldentertainment.service;

import com.world.entertainment.worldentertainment.dto.controller.CountryResponse;
import com.world.entertainment.worldentertainment.dto.controller.CreateCountry;
import com.world.entertainment.worldentertainment.dto.controller.UpdateCountry;
import com.world.entertainment.worldentertainment.entity.Country;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.repository.CountryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
@Service
public class CountryService {

    private final CountryRepository countryRepository;
    private final ModelMapper modelMapper;

    public CountryService(
            CountryRepository countryRepository,
            ModelMapper modelMapper
    ) {
        this.countryRepository = countryRepository;
        this.modelMapper = modelMapper;
    }

    public CountryResponse getById(int id) {
        var entity = countryRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException(String.format("Country by id %d not found", id))
        );

        return new CountryResponse(
                entity.getName(),
                entity.getCode()
        );
    }

    public List<CountryResponse> getAll() {
        var countries = new ArrayList<Country>();
        var result = new ArrayList<CountryResponse>();

        countryRepository.findAll().forEach(countries::add);
        countries.forEach((entity) -> {
            var countryResponse = new CountryResponse(
                    entity.getName(),
                    entity.getCode()
            );
            result.add(countryResponse);
        });

        return result;
    }

    public void create(CreateCountry createCountry) {
        var country = modelMapper.map(createCountry, Country.class);
        countryRepository.save(country);
    }

    public void update(int countryId, UpdateCountry updateCountry) {
        var country = countryRepository.findById(countryId).orElseThrow(()
                -> new EntityNotFoundException(String.format("Country by id %id not found", countryId)));
        country = modelMapper.map(updateCountry, Country.class).setId(countryId);
        countryRepository.save(country);
    }

    public void deleteById(int countryId) {
        countryRepository.deleteById(countryId);
    }
}

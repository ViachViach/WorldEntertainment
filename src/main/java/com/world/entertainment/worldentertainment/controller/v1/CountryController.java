package com.world.entertainment.worldentertainment.controller.v1;

import com.world.entertainment.worldentertainment.dto.controller.CountryResponse;
import com.world.entertainment.worldentertainment.dto.controller.CreateCountry;
import com.world.entertainment.worldentertainment.dto.controller.UpdateCountry;
import com.world.entertainment.worldentertainment.exception.EntityNotFoundException;
import com.world.entertainment.worldentertainment.service.CountryService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags = "Country")
@RequestMapping("/api/v1/country")
public class CountryController {

    private final CountryService countryService;

    @Autowired
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping(value = "/")
    public List<CountryResponse> get() {
        return countryService.getAll();
    }

    @GetMapping(value = "/{id}")
    public CountryResponse get(@PathVariable("id") int id) throws EntityNotFoundException {
        return countryService.getById(id);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") int id) {
        countryService.deleteById(id);
    }

    @PostMapping()
    public void create(@RequestBody CreateCountry createCountry) {
        countryService.create(createCountry);
    }

    @PutMapping(value = "/{id}")
    public void update(@PathVariable("id") int id, @RequestBody UpdateCountry updateCountry) {
        countryService.update(id, updateCountry);
    }
}

package com.world.entertainment.worldentertainment.dto.controller;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

public class CreateCountry implements Serializable {

    @NotNull
    @Size(min = 1, max = 30)
    private String name;

    @NotNull
    @Size(min = 1, max = 3)
    private String code;

    public String getName() {
        return name;
    }

    public CreateCountry setName(String name) {
        this.name = name;
        return this;
    }

    public String getCode() {
        return code;
    }

    public CreateCountry setCode(String code) {
        this.code = code;
        return this;
    }
}

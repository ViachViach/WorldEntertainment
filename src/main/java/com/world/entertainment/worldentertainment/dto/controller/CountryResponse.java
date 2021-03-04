package com.world.entertainment.worldentertainment.dto.controller;

final public class CountryResponse {

    private final String name;
    private final String code;

    public CountryResponse(String name, String code) {
        this.name = name;
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public String getCode() {
        return code;
    }
}

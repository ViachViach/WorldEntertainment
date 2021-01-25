package com.world.entertainment.worldentertainment.dto;

final public class UserAuthDTO {

    private String email;

    private String password;

    public String getEmail() {
        return email;
    }

    public UserAuthDTO setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserAuthDTO setPassword(String password) {
        this.password = password;
        return this;
    }
}

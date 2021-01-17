package com.world.entertainment.worldentertainment.dao;

import com.world.entertainment.worldentertainment.dto.UserDTO;
import com.world.entertainment.worldentertainment.entity.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserDAO {


    public UserDTO getById(int id) {
        return new UserDTO("", "");
    }

    public List<UserDTO> getAll() {
        return new ArrayList<UserDTO>();
    }

    public void delete(int id) {

    }

    public void edit(int id) {

    }
}

package com.aaron.crudProgramacion.services;

import com.aaron.crudProgramacion.dto.UserDTO;

import java.util.List;

public interface UserService {
    UserDTO saveUser(UserDTO userDTO);
    List<UserDTO> getUsers();
}

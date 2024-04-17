package com.aaron.crudProgramacion.controllers;


import com.aaron.crudProgramacion.dto.UserDTO;
import com.aaron.crudProgramacion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/guardar")
    public ResponseEntity<UserDTO> saveUserController(UserDTO obj){
        return ResponseEntity.ok(userService.saveUser(obj));

    }

}

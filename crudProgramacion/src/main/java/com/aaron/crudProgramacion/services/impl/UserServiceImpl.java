package com.aaron.crudProgramacion.services.impl;
import com.aaron.crudProgramacion.dao.UserDAO;
import com.aaron.crudProgramacion.dto.UserDTO;
import com.aaron.crudProgramacion.entity.UserEntity;
import com.aaron.crudProgramacion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDao;

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.builder()
                .idUser(userDTO.getIdUser())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .birthdate(userDTO.getBirthdate())
                .build();

        UserEntity savedUser = userDao.save(userEntity);
        return userDTO.builder()
                .idUser(savedUser.getIdUser())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .birthdate(savedUser.getBirthdate())
                .build();
    }

    @Override
    public List<UserDTO> getUsers() {
        List<UserEntity> userEntities = userDao.findAll();
        return userEntities.stream()
                .map(userEntity -> UserDTO.builder()
                        .idUser(userEntity.getIdUser())
                        .name(userEntity.getName())
                        .email(userEntity.getEmail())
                        .birthdate(userEntity.getBirthdate())
                        .build()
                        




    }


}

package com.aaron.crudProgramacion.dao;

import com.aaron.crudProgramacion.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<UserEntity, Integer> {
}

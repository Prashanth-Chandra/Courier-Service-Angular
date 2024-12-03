package com.example.ASAP.repository;

import com.example.ASAP.model.ProductInformation;
import com.example.ASAP.model.Role;
import com.example.ASAP.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleDao extends JpaRepository<Role, String> {

//    @Query(value = "select * from user_role where role_id = :roleName ", nativeQuery = true)
//    List<Role> findbyRoleName(@Param("roleName") String roleName);


}

package com.example.ASAP.repository;

import com.example.ASAP.model.BranchModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchDao extends JpaRepository<BranchModel,Long> {

}

package com.example.ASAP.repository;

import com.example.ASAP.model.PictureModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PictureRepositiry extends JpaRepository<PictureModel,Long> {
    Optional<PictureModel> findByName(String name);
}

package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Details;

public interface Repo extends JpaRepository<Details, Integer> {
	
}
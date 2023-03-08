package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Details;
import com.example.demo.repo.Repo;


@Service
public class ResService {
	
	@Autowired
	private Repo res;
	
	 public Details saveDetails(Details s)
	 {
	 	return res.save(s);
	 }
	 public List<Details> getAllDetails()
	 {
	 	return res.findAll();	 }
	
	 public Details updateRestaurant(int id, Details resu) {
	        return res.saveAndFlush(resu);
	    }
	 public void deleteById(int id)
	    {
	        res.deleteById(id);
	    }
}
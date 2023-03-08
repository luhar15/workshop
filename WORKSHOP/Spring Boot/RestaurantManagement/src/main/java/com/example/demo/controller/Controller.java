package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Details;
import com.example.demo.service.ResService;



@RestController
@CrossOrigin("http://localhost:3000")
public class Controller {
	@Autowired
	private ResService resservice;
	
	 @PostMapping("/addRes")
	 public String postDetails(@RequestBody Details s)
	 {
	 	resservice.saveDetails(s);
	 	return "Value Added";
	 	
	 }
	
	 @GetMapping("/getRes")
	 public List<Details> getDetails()
	 {
		
	 	return resservice.getAllDetails();
	 }
	 
	 @GetMapping("/hello")
	 public String sayHello() {
		 return "Helo";
	 }
	
	@PutMapping("update/{id}")
    public Details updateres(@PathVariable int id, @RequestBody Details resu) {
        return resservice.updateRestaurant(id, resu);
    }
	
	@DeleteMapping("/Delres/{id}")
	public String DelRes(@PathVariable int id) {
		resservice.deleteById(id);
		
		return "Deleted";
	}
}
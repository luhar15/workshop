package com.example.demo.entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;

@Entity
@Table(name = "Restaurant_details")
public class Details {
	@Id
	int id;
	String resname;
	String popfood;
	String place;
	int rating;
	
	public Details() {
		
	}
	

	public Details(int id, String resname, String popfood, String place, int rating) {
		super();
		this.id = id;
		this.resname = resname;
		this.popfood = popfood;
		this.place = place;
		this.rating = rating;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getResname() {
		return resname;
	}

	public void setResname(String resname) {
		this.resname = resname;
	}

	public String getPopfood() {
		return popfood;
	}

	public void setPopfood(String popfood) {
		this.popfood = popfood;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	
}

package com.food.menu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.food.menu.model.Eat;
import com.food.menu.repository.MealRepository;

@RestController
@RequestMapping(value="/eat")
public class MealController {
	
	@Autowired
	MealRepository mealRepository;
	
	@RequestMapping(value="/allmeal", method=RequestMethod.GET)
	public List<Eat> getAllMeal(){

		return mealRepository.findAll();
	}
	
	@RequestMapping(value="/addmeal", method=RequestMethod.POST)
	public List<Eat> create(@RequestBody Eat foodDetail){

		mealRepository.save(foodDetail);
		return mealRepository.findAll();
	}
	
	@RequestMapping(value="/deletemeal/{id}", method=RequestMethod.DELETE)
	public List<Eat> remove(@PathVariable long id){

		mealRepository.delete(id);
		return mealRepository.findAll();
	}
	
	@RequestMapping(value="/all", method=RequestMethod.GET)
	public String getAll(){

		return "getall";
	}

}

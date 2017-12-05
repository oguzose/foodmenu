package com.food.menu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.menu.model.Eat;


@Repository
public interface MealRepository extends JpaRepository<Eat, Long> {
	

}

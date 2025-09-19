package com.example.cutomer.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cutomer.service.model.Reviews;
import com.example.cutomer.service.repositiry.ReviewsRepository;

@RestController
@RequestMapping("/reviews")
public class ReviewsController {

    @Autowired
    private ReviewsRepository reviewsRepository;

    @PostMapping
    public Reviews createReviews(@RequestBody Reviews reviews){
        return reviewsRepository.save(reviews);
    }

    @GetMapping
    public List<Reviews> getAllReviewses(){
        return reviewsRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteReviews(@PathVariable String id){
        reviewsRepository.deleteById(id);
    }
}
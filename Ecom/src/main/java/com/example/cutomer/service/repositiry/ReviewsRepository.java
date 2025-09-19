package com.example.cutomer.service.repositiry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.cutomer.service.model.Reviews;

public interface ReviewsRepository extends MongoRepository<Reviews, String> {
    Reviews findByEmail(String email);
}
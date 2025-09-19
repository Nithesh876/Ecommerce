package com.example.cutomer.service.repositiry;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.cutomer.service.model.Users;

public interface UserRepository extends MongoRepository<Users, String> {
    Users findByEmail(String email);
}
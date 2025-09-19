package com.example.cutomer.service.repositiry;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.cutomer.service.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    Customer findByEmail(String email);
}
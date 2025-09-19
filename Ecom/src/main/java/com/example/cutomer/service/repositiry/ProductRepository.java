package com.example.cutomer.service.repositiry;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.cutomer.service.model.Products;

public interface ProductRepository extends MongoRepository<Products, String> {
    Products findByEmail(String email);
}
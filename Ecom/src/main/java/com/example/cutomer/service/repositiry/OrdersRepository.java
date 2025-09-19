package com.example.cutomer.service.repositiry;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.cutomer.service.model.Orders;

public interface OrdersRepository extends MongoRepository<Orders, String> {
    Orders findByEmail(String email);
}
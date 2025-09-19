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

import com.example.cutomer.service.model.Orders;
import com.example.cutomer.service.repositiry.OrdersRepository;

@RestController
@RequestMapping("/orders")
public class OrdersController {

    @Autowired
    private OrdersRepository orderRepository;

    @PostMapping
    public Orders createOrders(@RequestBody Orders orders){
        return orderRepository.save(orders);
    }

    @GetMapping
    public List<Orders> getAllOrders(){
        return orderRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteOrders(@PathVariable String id){
        orderRepository.deleteById(id);
    }
}
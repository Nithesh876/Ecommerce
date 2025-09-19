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

import com.example.cutomer.service.model.Products;
import com.example.cutomer.service.repositiry.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Products createCustomer(@RequestBody Products product){
        return productRepository.save(product);
    }

    @GetMapping
    public List<Products> getAllCustomers(){
        return productRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable String id){
        productRepository.deleteById(id);
    }
}
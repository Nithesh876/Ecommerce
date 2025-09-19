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

import com.example.cutomer.service.model.Users;
import com.example.cutomer.service.repositiry.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public Users createUsers(@RequestBody Users users){
        return userRepository.save(users);
    }

    @GetMapping
    public List<Users> getAllUserses(){
        return userRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteUsers(@PathVariable String id){
        userRepository.deleteById(id);
    }
}
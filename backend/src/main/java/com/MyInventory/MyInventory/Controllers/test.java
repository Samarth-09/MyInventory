package com.MyInventory.MyInventory.Controllers;
import com.MyInventory.MyInventory.Entities.User;
import com.MyInventory.MyInventory.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class test {
    UserService us;

    @Autowired
    public void setUs(UserService u)
    {
        us = u;
    }
    @GetMapping("/home")
    public String home(){
        return "Hello World";
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Integer id)
    {
        return us.getUserById(id);
    }

    @PostMapping("user/save")
    public User saveUser(@RequestBody User u)
    {
        System.out.println(u);
        return us.saveUser(u);
    }
}

package com.MyInventory.MyInventory.Controllers;
import com.MyInventory.MyInventory.Entities.User;
import com.MyInventory.MyInventory.Service.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RequestMapping("/user")
@RestController
public class UserController {
    UserService us;
    ProductService pr;
    
    @Autowired
    public void setUs(UserService u)
    {
        us = u;
    }

    @Autowired
    public void setPr(ProductService p) { pr = p;}
    @GetMapping("/home")
    public String home(){
        return "Hello World";
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Integer id)
    {
        return us.getUserById(id);
    }


    @PostMapping("/signup")
    public User saveUser(@RequestBody User u)
    {
        u.getPrlist().forEach(p -> {
            p.setUser(u);
        });
        return us.saveUser(u);
    }
}

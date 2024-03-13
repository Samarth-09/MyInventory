package com.MyInventory.MyInventory.Controllers;
import com.MyInventory.MyInventory.Entities.User;
import com.MyInventory.MyInventory.Service.Interfaces.*;
import jakarta.websocket.server.PathParam;
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

    @GetMapping("/login")
    public User login(@RequestParam int uid, @RequestParam String pwd)
    {
        User u = us.getUserById(uid);
//        System.out.println(u.getUid());
        if(u !=null)
        {
            System.out.println(uid+pwd);
            if(u.getPwd().equals(pwd))
            {
                return u;
            }
        }
        return null;
    }
}

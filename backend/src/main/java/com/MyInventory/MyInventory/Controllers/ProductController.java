package com.MyInventory.MyInventory.Controllers;

import com.MyInventory.MyInventory.Entities.*;
import com.MyInventory.MyInventory.Service.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/product")
public class ProductController {
    UserService us;
    ProductService pr;

    @Autowired
    public void setUs(UserService u)
    {
        us = u;
    }

    @Autowired
    public void setPr(ProductService p) { pr = p;}

    @RequestMapping("/{uid}")
    public List<Product> getProducts(@PathVariable int uid)
    {
        User u = us.getUserById(uid);
        List<Integer> l = new ArrayList<>();
        u.getPrlist().forEach(p -> {
            l.add(p.getPrid());
        });
        List<Product> prl = pr.getProductByUser(l);
        return prl;
    }
    @PostMapping("/addStock")
    public Product addStock(@RequestParam int quantity, @RequestParam int pid)
    {
        return pr.addStock(pid, quantity);
    }

    @PostMapping("/addSales")
    public Product addSales(@RequestParam int sales, @RequestParam int pid)
    {
        return pr.addSales(pid, sales);
    }
}

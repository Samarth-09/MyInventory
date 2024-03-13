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
    public Product addStock(@RequestBody Product p)
    {
//        System.out.println(p.getQuantity());
        return pr.addStock(p.getPrid(), p.getQuantity(), p.getUser().getUid());
    }
//@RequestParam int sales, @RequestParam int prid, @RequestParam int quantity,@RequestParam int uid
    @PostMapping("/addSales")
    public Product addSales(@RequestBody Product p)
    {
        return pr.addSales(p.getPrid(), p.getSales_amount(), p.getQuantity(), p.getUser().getUid());
    }

    @PostMapping("/add")
    public Product add(@RequestBody Product p)
    {
        return pr.add(p);
    }
}

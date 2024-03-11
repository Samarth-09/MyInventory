package com.MyInventory.MyInventory.Controllers;
import com.MyInventory.MyInventory.Entities.Sales;
import com.MyInventory.MyInventory.Entities.Stock;
import com.MyInventory.MyInventory.Entities.Supplier;
import com.MyInventory.MyInventory.Entities.User;
import com.MyInventory.MyInventory.Service.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {
    UserService us;
    ProductService pr;
    StockService str;
    SalesService slr;
    SupplierService sr;
    @Autowired
    public void setStr(StockService str) {
        this.str = str;
    }
    @Autowired
    public void setSr(SupplierService sr) {
        this.sr = sr;
    }
    @Autowired
    public void setSlr(SalesService slr) {
        this.slr = slr;
    }

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

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Integer id)
    {
        return us.getUserById(id);
    }

    @Transactional
    @PostMapping("user/save")
    public User saveUser(@RequestBody User u)
    {
        User u1 =  us.saveUser(u);
        if(u1 == null)
            return u1;
        u1.getPrlist().forEach(p -> {
            p.setUser(u1);
            Stock stk = p.getStid();
            stk.setDate(new Date());
            stk.setProduct(p);
            stk.setSupid(p.getSupid());

            Sales sal = p.getSid();
            sal.setDate(new Date());

            slr.saveSales(sal);
            str.saveStock(stk);

            pr.saveProduct(p);
        });
        return u1;
    }
}

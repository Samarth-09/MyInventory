package com.MyInventory.MyInventory.Service;

import com.MyInventory.MyInventory.Entities.Product;
import com.MyInventory.MyInventory.Entities.Stock;
import com.MyInventory.MyInventory.Entities.User;

import java.util.List;

public interface UserService {
    public User getUserById(Integer i);

    public  User saveUser(User u);
//    public List<Product> getProduct(List<Integer> l);

//    public List<Stock> getStock(Integer i);
}

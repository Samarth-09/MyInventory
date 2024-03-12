package com.MyInventory.MyInventory.Service.Interfaces;

import com.MyInventory.MyInventory.Entities.User;

public interface UserService {
    public User getUserById(Integer i);

    public  User saveUser(User u);
//    public List<Product> getProduct(List<Integer> l);

//    public List<Stock> getStock(Integer i);
}

package com.MyInventory.MyInventory.Service;

import com.MyInventory.MyInventory.Entities.Product;
import com.MyInventory.MyInventory.Entities.User;
import com.MyInventory.MyInventory.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    UserRepo ur;

    @Autowired
    public void setUr(UserRepo u) {
        ur=u;
    }

    @Override
    public User getUserById(Integer i) {
        Optional<User> u = ur.findById(i);
        return u.orElse(null);
    }

    @Override
    public User saveUser(User u) {

        return ur.save(u);
    }


}

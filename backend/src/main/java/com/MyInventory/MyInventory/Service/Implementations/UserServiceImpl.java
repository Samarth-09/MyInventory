package com.MyInventory.MyInventory.Service.Implementations;

import com.MyInventory.MyInventory.Entities.User;
import com.MyInventory.MyInventory.Repository.UserRepo;
import com.MyInventory.MyInventory.Service.Interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

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

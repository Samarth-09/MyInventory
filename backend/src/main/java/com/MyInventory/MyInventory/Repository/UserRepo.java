package com.MyInventory.MyInventory.Repository;

import com.MyInventory.MyInventory.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}

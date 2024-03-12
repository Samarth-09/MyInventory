package com.MyInventory.MyInventory.Repository;

import com.MyInventory.MyInventory.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product, Integer> {
//    @Modifying
//    @Query("UPDATE Product p SET p.quantity = :newValue WHERE p.id = :productId")
//    public List<Product> addStock(@Param("uid") Integer uid, @Param("pid") Integer pid);
}

package com.MyInventory.MyInventory.Repository;

import com.MyInventory.MyInventory.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Integer> {
}

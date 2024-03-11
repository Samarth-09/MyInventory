package com.MyInventory.MyInventory.Repository;

import com.MyInventory.MyInventory.Entities.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepo  extends JpaRepository<Sales, Integer> {
}

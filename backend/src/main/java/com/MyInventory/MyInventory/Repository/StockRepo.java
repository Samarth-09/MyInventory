package com.MyInventory.MyInventory.Repository;

import com.MyInventory.MyInventory.Entities.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepo  extends JpaRepository<Stock, Integer> {
}

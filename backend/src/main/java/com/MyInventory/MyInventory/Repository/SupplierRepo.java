package com.MyInventory.MyInventory.Repository;

import com.MyInventory.MyInventory.Entities.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepo extends JpaRepository<Supplier, Integer> {
}

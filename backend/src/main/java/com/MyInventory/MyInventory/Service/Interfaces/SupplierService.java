package com.MyInventory.MyInventory.Service.Interfaces;

import com.MyInventory.MyInventory.Entities.Supplier;
import com.MyInventory.MyInventory.Repository.SupplierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


public interface SupplierService {
    public Supplier saveSupplier(Supplier s);
    public Supplier getSupplierById(int i);
}

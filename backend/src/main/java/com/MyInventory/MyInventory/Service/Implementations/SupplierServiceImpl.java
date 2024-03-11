package com.MyInventory.MyInventory.Service.Implementations;

import com.MyInventory.MyInventory.Entities.Supplier;
import com.MyInventory.MyInventory.Repository.SupplierRepo;
import com.MyInventory.MyInventory.Service.Interfaces.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupplierServiceImpl implements SupplierService {
    SupplierRepo sr;
    @Autowired
    public SupplierServiceImpl(SupplierRepo sr)
    {
        this.sr = sr;
    }
    @Override
    public Supplier saveSupplier(Supplier s) {
        return sr.save(s);
    }

    @Override
    public Supplier getSupplierById(int i) {
        return sr.findById(i).orElse(null);
    }
}

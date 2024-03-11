package com.MyInventory.MyInventory.Service.Implementations;

import com.MyInventory.MyInventory.Entities.Sales;
import com.MyInventory.MyInventory.Repository.SalesRepo;
import com.MyInventory.MyInventory.Service.Interfaces.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SalesServiceImpl implements SalesService {
    SalesRepo slr;
    @Autowired
    public SalesServiceImpl(SalesRepo slr)
    {
        this.slr = slr;
    }
    @Override
    public Sales saveSales(Sales s) {
        return slr.save(s);
    }

    @Override
    public Sales getSalesById(int i) {
        Optional<Sales> s = slr.findById(i);
        return s.orElse(null);
    }
}

package com.MyInventory.MyInventory.Service.Implementations;

import com.MyInventory.MyInventory.Entities.Stock;
import com.MyInventory.MyInventory.Repository.StockRepo;
import com.MyInventory.MyInventory.Repository.SupplierRepo;
import com.MyInventory.MyInventory.Service.Interfaces.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockServiceImpl implements StockService {
    StockRepo str;
    @Autowired
    public StockServiceImpl(StockRepo str)
    {
        this.str = str;
    }
    @Override
    public Stock saveStock(Stock s) {
        return str.save(s);
    }

    @Override
    public Stock getStockById(int i) {
        return str.findById(i).orElse(null);
    }
}

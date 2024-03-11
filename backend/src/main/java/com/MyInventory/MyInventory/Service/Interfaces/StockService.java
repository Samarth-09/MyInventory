package com.MyInventory.MyInventory.Service.Interfaces;

import com.MyInventory.MyInventory.Entities.Stock;

public interface StockService {
    public Stock saveStock(Stock s);
    public Stock getStockById(int i);
}

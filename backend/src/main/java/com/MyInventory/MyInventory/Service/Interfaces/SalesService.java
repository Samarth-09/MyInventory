package com.MyInventory.MyInventory.Service.Interfaces;

import com.MyInventory.MyInventory.Entities.Sales;

public interface SalesService {
    public Sales saveSales(Sales s);
    public Sales getSalesById(int i);
}

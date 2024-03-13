package com.MyInventory.MyInventory.Service.Interfaces;

import com.MyInventory.MyInventory.Entities.Product;

import java.util.List;

public interface ProductService {
    public Product saveProduct(Product p);

    public List<Product> getProductByUser(List<Integer> l) ;
    public Product getProductById(Integer i);

    public Product addStock(int pid, int quantity, int uid);

    public Product addSales(int pid, int sales);

    Product add(Product p);
}

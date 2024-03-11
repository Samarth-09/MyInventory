package com.MyInventory.MyInventory.Service;

import com.MyInventory.MyInventory.Entities.Product;

import java.util.List;

public interface ProductService {
    public Product saveProduct(Product p);

    public List<Product> getProductByUser(List<Integer> l);

    public Product getProductById(Integer i);

}

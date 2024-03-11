package com.MyInventory.MyInventory.Service.Implementations;

import com.MyInventory.MyInventory.Entities.Product;
import com.MyInventory.MyInventory.Repository.ProductRepo;
import com.MyInventory.MyInventory.Service.Interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepo productRepo;

    @Autowired
    public ProductServiceImpl(ProductRepo pr)
    {
        productRepo = pr;
    }
    @Override
    public Product saveProduct(Product p) {
        return productRepo.save(p);
    }
    @Override
    public List<Product> getProductByUser(List<Integer> l) {
        return productRepo.findAllById(l);
    }
    @Override
    public Product getProductById(Integer i) {
        Optional<Product> p = productRepo.findById(i);
        return p.orElse(null);
    }
}

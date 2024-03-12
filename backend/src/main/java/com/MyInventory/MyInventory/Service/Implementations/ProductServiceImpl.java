package com.MyInventory.MyInventory.Service.Implementations;

import com.MyInventory.MyInventory.Entities.Product;
import com.MyInventory.MyInventory.Repository.ProductRepo;
import com.MyInventory.MyInventory.Service.Interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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
    @Override
    public Product addStock(int pid, int quantity)
    {
        Optional<Product> pr = productRepo.findById(pid);
        if(pr.isPresent())
        {
            pr.get().setQuantity(pr.get().getQuantity()+quantity);
            return productRepo.save(pr.get());
        }
        return null;
    }

    @Override
    public Product addSales(int pid, int sales) {
        Optional<Product> pr = productRepo.findById(pid);
        if(pr.isPresent())
        {
            pr.get().setSales_amount(pr.get().getSales_amount()+sales);
            return productRepo.save(pr.get());
        }
        return null;
    }
}

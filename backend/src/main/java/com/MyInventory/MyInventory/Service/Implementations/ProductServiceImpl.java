package com.MyInventory.MyInventory.Service.Implementations;

import com.MyInventory.MyInventory.Entities.Product;
import com.MyInventory.MyInventory.Entities.User;
import com.MyInventory.MyInventory.Repository.ProductRepo;
import com.MyInventory.MyInventory.Repository.UserRepo;
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

    private UserRepo userRepo;
    @Autowired
    public void setUserRepo(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

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
    public Product addStock(int pid, int quantity, int uid)
    {
//        System.out.println(pid);
        Optional<Product> pr = productRepo.findById(pid);
        if(pr.isPresent())
        {
            User u = userRepo.findById(uid).orElse(null);
            Product p = pr.get();
            int idx = u.getPrlist().indexOf(p);
            p.setQuantity(pr.get().getQuantity()+quantity);
            u.getPrlist().toArray()[idx] = p;
            userRepo.save(u);
//            System.out.println(u.getPrlist());
            return productRepo.save(p);
        }
        return null;
    }

    @Override
    public Product addSales(int pid, int sales, int quantity, int uid) {
        Optional<Product> pr = productRepo.findById(pid);
        if(pr.isPresent())
        {
            User u = userRepo.findById(uid).orElse(null);
            Product p = pr.get();
            int idx = u.getPrlist().indexOf(p);
            p.setQuantity(pr.get().getQuantity()-quantity);
            p.setSales_amount(p.getSales_amount() + sales);
            u.getPrlist().toArray()[idx] = p;
            userRepo.save(u);
//            System.out.println(u.getPrlist());
            return productRepo.save(p);
        }
        return null;
    }

    @Override
    public Product add(Product p) {
        p.setUser(userRepo.findById(p.getUser().getUid()).orElse(null));
        return productRepo.save(p);
    }
}

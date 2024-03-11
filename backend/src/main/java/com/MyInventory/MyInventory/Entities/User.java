package com.MyInventory.MyInventory.Entities;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Product> prlist;

    private String name;

    private String pwd;

    private String storeName;

    public List<Product> getPrlist() {
        return prlist;
    }

    public void setPrlist(List<Product> prlist) {
        this.prlist = prlist;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }
}

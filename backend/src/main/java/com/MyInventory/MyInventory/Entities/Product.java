package com.MyInventory.MyInventory.Entities;

import jakarta.persistence.*;


@Entity
public class Product {

    @Id
    @GeneratedValue
    int prid;

    String name;

    int price;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Supplier supid;

    @OneToOne
    Stock stid;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Sales sid;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    User user;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Supplier getSupid() {
        return supid;
    }

    public void setSupid(Supplier supid) {
        this.supid = supid;
    }

    public Stock getStid() {
        return stid;
    }

    public void setStid(Stock stid) {
        this.stid = stid;
    }

    public Sales getSid() {
        return sid;
    }

    public void setSid(Sales sid) {
        this.sid = sid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

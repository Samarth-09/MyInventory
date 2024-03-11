package com.MyInventory.MyInventory.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;


@Entity
public class Product {

    @Id
    @GeneratedValue
    int prid;

    String name;

    int price;

//    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Supplier supid;

    @JsonManagedReference
    @OneToOne(mappedBy = "product")
    Stock stid;

//    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Sales sid;

    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    User user;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrid()
    {
        return prid;
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

package com.MyInventory.MyInventory.Entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int stid;

    Date date;

    int quantity;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Product product;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Supplier supid;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Supplier getSupid() {
        return supid;
    }

    public void setSupid(Supplier supid) {
        this.supid = supid;
    }
}

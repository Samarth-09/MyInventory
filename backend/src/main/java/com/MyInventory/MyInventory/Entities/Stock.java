package com.MyInventory.MyInventory.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int stid;

    Date date;

    int quantity;

    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Product product;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Supplier supid;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = new Date();
    }

    public int getStid() {
        return stid;
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

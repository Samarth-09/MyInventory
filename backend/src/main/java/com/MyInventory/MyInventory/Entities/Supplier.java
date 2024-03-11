package com.MyInventory.MyInventory.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int supid;

    String name;
    String no;
    String addr;

//    @OneToMany(mappedBy = "supid",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    List<Product> prlist;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getAddr() {
        return addr;
    }

    public int getSupid() {
        return supid;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

//    public List<Product> getPrlist() {
//        return prlist;
//    }
//
//    public void setPrlist(List<Product> prlist) {
//        this.prlist = prlist;
//    }
}

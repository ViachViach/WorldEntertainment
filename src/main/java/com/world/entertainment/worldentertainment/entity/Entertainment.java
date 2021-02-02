package com.world.entertainment.worldentertainment.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(schema = "public")
public class Entertainment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToOne(targetEntity = Customer.class)
    private Customer customer;

    private boolean isActive;
    private Date dateCreate;
    private Date dateUpdate;
    private Date dateDelete;

    public int getId() {
        return id;
    }

    public Entertainment setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Entertainment setName(String name) {
        this.name = name;
        return this;
    }

    public Date getDateCreate() {
        return dateCreate;
    }

    public Entertainment setDateCreate(Date dateCreate) {
        this.dateCreate = dateCreate;
        return this;
    }

    public Date getDateUpdate() {
        return dateUpdate;
    }

    public Entertainment setDateUpdate(Date dateUpdate) {
        this.dateUpdate = dateUpdate;
        return this;
    }

    public Date getDateDelete() {
        return dateDelete;
    }

    public Entertainment setDateDelete(Date dateDelete) {
        this.dateDelete = dateDelete;
        return this;
    }

    public Customer getCustomer() {
        return customer;
    }

    public Entertainment setCustomer(Customer customer) {
        this.customer = customer;
        return this;
    }

    public boolean isActive() {
        return isActive;
    }

    public Entertainment setActive(boolean active) {
        isActive = active;
        return this;
    }
}

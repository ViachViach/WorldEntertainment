package com.world.entertainment.worldentertainment.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(schema = "public")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "customer")
    private Set<Entertainment> entertainments;

    private String name;
    private String email;

    private boolean isActive;
    private Date dateCreate;
    private Date dateUpdate;
    private Date dateDelete;

    public int getId() {
        return id;
    }

    public Customer setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Customer setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Entertainment> getEntertainments() {
        return entertainments;
    }

    public Customer setEntertainments(Set<Entertainment> entertainments) {
        this.entertainments = entertainments;
        return this;
    }

    public boolean isActive() {
        return isActive;
    }

    public Customer setActive(boolean active) {
        isActive = active;
        return this;
    }

    public Date getDateCreate() {
        return dateCreate;
    }

    public Customer setDateCreate(Date dateCreate) {
        this.dateCreate = dateCreate;
        return this;
    }

    public Date getDateUpdate() {
        return dateUpdate;
    }

    public Customer setDateUpdate(Date dateUpdate) {
        this.dateUpdate = dateUpdate;
        return this;
    }

    public Date getDateDelete() {
        return dateDelete;
    }

    public Customer setDateDelete(Date dateDelete) {
        this.dateDelete = dateDelete;
        return this;
    }
}

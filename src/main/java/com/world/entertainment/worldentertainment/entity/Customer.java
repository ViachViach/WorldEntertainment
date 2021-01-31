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
    private Date createAt;
    private Date updateAt;
    private Date deleteAt;

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

    public Customer setEmail(String email) {
        this.email = email;
        return this;
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

    public Date getCreateAt() {
        return createAt;
    }

    public Customer setCreateAt(Date createAt) {
        this.createAt = createAt;
        return this;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public Customer setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
        return this;
    }

    public Date getDeleteAt() {
        return deleteAt;
    }

    public Customer setDeleteAt(Date deleteAt) {
        this.deleteAt = deleteAt;
        return this;
    }
}

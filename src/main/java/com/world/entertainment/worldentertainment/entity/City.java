package com.world.entertainment.worldentertainment.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(schema = "public")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "city")
    private Set<Entertainment> entertainments;

    @ManyToOne(targetEntity = Country.class)
    private Country country;

    private String name;

    private Date createAt;
    private Date updateAt;
    private Date deleteAt;

    public int getId() {
        return id;
    }

    public City setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public City setName(String name) {
        this.name = name;
        return this;
    }

    public Set<Entertainment> getEntertainments() {
        return entertainments;
    }

    public City setEntertainments(Set<Entertainment> entertainments) {
        this.entertainments = entertainments;
        return this;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public City setCreateAt(Date createAt) {
        this.createAt = createAt;
        return this;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public City setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
        return this;
    }

    public Date getDeleteAt() {
        return deleteAt;
    }

    public City setDeleteAt(Date deleteAt) {
        this.deleteAt = deleteAt;
        return this;
    }

    public Country getCountry() {
        return country;
    }

    public City setCountry(Country country) {
        this.country = country;
        return this;
    }
}

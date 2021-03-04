package com.world.entertainment.worldentertainment.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(schema = "public")
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "country")
    private Set<City> cities;

    private String name;
    private String code;

    private Date createAt;
    private Date updateAt;
    private Date deleteAt;

    public int getId() {
        return id;
    }

    public Country setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Country setName(String name) {
        this.name = name;
        return this;
    }

    public String getCode() {
        return code;
    }

    public Country setCode(String code) {
        this.code = code;
        return this;
    }

    public Set<City> getCities() {
        return cities;
    }

    public Country setCities(Set<City> cities) {
        this.cities = cities;
        return this;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public Country setCreateAt(Date createAt) {
        this.createAt = createAt;
        return this;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public Country setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
        return this;
    }

    public Date getDeleteAt() {
        return deleteAt;
    }

    public Country setDeleteAt(Date deleteAt) {
        this.deleteAt = deleteAt;
        return this;
    }
}

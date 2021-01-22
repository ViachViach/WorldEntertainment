package com.world.entertainment.worldentertainment.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "entertainment", schema = "public")
public class EntertainmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private Date dateCreate;

    private Date dateUpdate;

    private Date dateDelete;

    public int getId() {
        return id;
    }

    public EntertainmentEntity setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public EntertainmentEntity setName(String name) {
        this.name = name;
        return this;
    }

    public Date getDateCreate() {
        return dateCreate;
    }

    public EntertainmentEntity setDateCreate(Date dateCreate) {
        this.dateCreate = dateCreate;
        return this;
    }

    public Date getDateUpdate() {
        return dateUpdate;
    }

    public EntertainmentEntity setDateUpdate(Date dateUpdate) {
        this.dateUpdate = dateUpdate;
        return this;
    }

    public Date getDateDelete() {
        return dateDelete;
    }

    public EntertainmentEntity setDateDelete(Date dateDelete) {
        this.dateDelete = dateDelete;
        return this;
    }
}

package com.world.entertainment.worldentertainment.entity;

import com.world.entertainment.worldentertainment.model.Role;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(schema = "public")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Size(min = 1, max = 10)
    private String name;

    @NotNull
    @Email
    private String email;

    private String password;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    private boolean isActive;

    private Date createAt;

    private Date updateAt;

    private Date deleteAt;

    public int getId() {
        return id;
    }

    public User setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public User setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public Role getRole() {
        return role;
    }

    public User setRole(Role role) {
        this.role = role;
        return this;
    }

    public boolean isActive() {
        return isActive;
    }

    public User setActive(boolean active) {
        isActive = active;
        return this;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public User setCreateAt(Date createAt) {
        this.createAt = createAt;
        return this;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public User setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
        return this;
    }

    public Date getDeleteAt() {
        return deleteAt;
    }

    public User setDeleteAt(Date deleteAt) {
        this.deleteAt = deleteAt;
        return this;
    }
}

package com.toolaoe.domain;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A ApplicationUser.
 */
@Entity
@Table(name = "application_user")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class ApplicationUser implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Size(max = 50)
    @Column(name = "in_game", length = 50, unique = true)
    private String inGame;

    @Size(max = 50)
    @Column(name = "zalo_name", length = 50, unique = true)
    private String zaloName;

    @Size(max = 11)
    @Column(name = "phone", length = 11, unique = true)
    private String phone;

    @Min(value = 6)
    @Max(value = 90)
    @Column(name = "age")
    private Integer age;

    @Size(max = 50)
    @Column(name = "full_name", length = 50, unique = true)
    private String fullName;

    @OneToOne
    @JoinColumn(unique = true)
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public ApplicationUser id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInGame() {
        return this.inGame;
    }

    public ApplicationUser inGame(String inGame) {
        this.setInGame(inGame);
        return this;
    }

    public void setInGame(String inGame) {
        this.inGame = inGame;
    }

    public String getZaloName() {
        return this.zaloName;
    }

    public ApplicationUser zaloName(String zaloName) {
        this.setZaloName(zaloName);
        return this;
    }

    public void setZaloName(String zaloName) {
        this.zaloName = zaloName;
    }

    public String getPhone() {
        return this.phone;
    }

    public ApplicationUser phone(String phone) {
        this.setPhone(phone);
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getAge() {
        return this.age;
    }

    public ApplicationUser age(Integer age) {
        this.setAge(age);
        return this;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getFullName() {
        return this.fullName;
    }

    public ApplicationUser fullName(String fullName) {
        this.setFullName(fullName);
        return this;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ApplicationUser user(User user) {
        this.setUser(user);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ApplicationUser)) {
            return false;
        }
        return id != null && id.equals(((ApplicationUser) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ApplicationUser{" +
            "id=" + getId() +
            ", inGame='" + getInGame() + "'" +
            ", zaloName='" + getZaloName() + "'" +
            ", phone='" + getPhone() + "'" +
            ", age=" + getAge() +
            ", fullName='" + getFullName() + "'" +
            "}";
    }
}

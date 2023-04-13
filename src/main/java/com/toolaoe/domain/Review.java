package com.toolaoe.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.toolaoe.domain.enumeration.Type;
import java.io.Serializable;
import java.time.Instant;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Review.
 */
@Entity
@Table(name = "review")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Review implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Min(value = 0)
    @Max(value = 10)
    @Column(name = "point")
    private Integer point;

    @Column(name = "user_review_id")
    private Integer userReviewId;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private Type type;

    @Column(name = "start_date")
    private Instant startDate;

    @Column(name = "end_date")
    private Instant endDate;

    @ManyToOne
    @JsonIgnoreProperties(value = { "user" }, allowSetters = true)
    private ApplicationUser ppplicationUser;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Review id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPoint() {
        return this.point;
    }

    public Review point(Integer point) {
        this.setPoint(point);
        return this;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }

    public Integer getUserReviewId() {
        return this.userReviewId;
    }

    public Review userReviewId(Integer userReviewId) {
        this.setUserReviewId(userReviewId);
        return this;
    }

    public void setUserReviewId(Integer userReviewId) {
        this.userReviewId = userReviewId;
    }

    public Type getType() {
        return this.type;
    }

    public Review type(Type type) {
        this.setType(type);
        return this;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Instant getStartDate() {
        return this.startDate;
    }

    public Review startDate(Instant startDate) {
        this.setStartDate(startDate);
        return this;
    }

    public void setStartDate(Instant startDate) {
        this.startDate = startDate;
    }

    public Instant getEndDate() {
        return this.endDate;
    }

    public Review endDate(Instant endDate) {
        this.setEndDate(endDate);
        return this;
    }

    public void setEndDate(Instant endDate) {
        this.endDate = endDate;
    }

    public ApplicationUser getPpplicationUser() {
        return this.ppplicationUser;
    }

    public void setPpplicationUser(ApplicationUser applicationUser) {
        this.ppplicationUser = applicationUser;
    }

    public Review ppplicationUser(ApplicationUser applicationUser) {
        this.setPpplicationUser(applicationUser);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Review)) {
            return false;
        }
        return id != null && id.equals(((Review) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Review{" +
            "id=" + getId() +
            ", point=" + getPoint() +
            ", userReviewId=" + getUserReviewId() +
            ", type='" + getType() + "'" +
            ", startDate='" + getStartDate() + "'" +
            ", endDate='" + getEndDate() + "'" +
            "}";
    }
}

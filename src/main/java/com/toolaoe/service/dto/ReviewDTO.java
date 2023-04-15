package com.toolaoe.service.dto;

import com.toolaoe.domain.enumeration.Type;
import com.toolaoe.domain.enumeration.XacNhan;
import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link com.toolaoe.domain.Review} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class ReviewDTO implements Serializable {

    private Long id;

    @Min(value = 0)
    @Max(value = 10)
    private Integer point;

    private Integer userReviewId;

    private Type type;

    private XacNhan status;

    private ApplicationUserDTO applicationUser;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }

    public Integer getUserReviewId() {
        return userReviewId;
    }

    public void setUserReviewId(Integer userReviewId) {
        this.userReviewId = userReviewId;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public XacNhan getStatus() {
        return status;
    }

    public void setStatus(XacNhan status) {
        this.status = status;
    }

    public ApplicationUserDTO getApplicationUser() {
        return applicationUser;
    }

    public void setApplicationUser(ApplicationUserDTO applicationUser) {
        this.applicationUser = applicationUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ReviewDTO)) {
            return false;
        }

        ReviewDTO reviewDTO = (ReviewDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, reviewDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ReviewDTO{" +
            "id=" + getId() +
            ", point=" + getPoint() +
            ", userReviewId=" + getUserReviewId() +
            ", type='" + getType() + "'" +
            ", status='" + getStatus() + "'" +
            ", applicationUser=" + getApplicationUser() +
            "}";
    }
}

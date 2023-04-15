package com.toolaoe.service.mapper;

import com.toolaoe.domain.ApplicationUser;
import com.toolaoe.domain.Review;
import com.toolaoe.service.dto.ApplicationUserDTO;
import com.toolaoe.service.dto.ReviewDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Review} and its DTO {@link ReviewDTO}.
 */
@Mapper(componentModel = "spring")
public interface ReviewMapper extends EntityMapper<ReviewDTO, Review> {
    @Mapping(target = "applicationUser", source = "applicationUser", qualifiedByName = "applicationUserInGame")
    ReviewDTO toDto(Review s);

    @Named("applicationUserInGame")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "inGame", source = "inGame")
    ApplicationUserDTO toDtoApplicationUserInGame(ApplicationUser applicationUser);
}

package com.toolaoe.service.mapper;

import com.toolaoe.domain.ApplicationUser;
import com.toolaoe.domain.User;
import com.toolaoe.service.dto.ApplicationUserDTO;
import com.toolaoe.service.dto.UserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ApplicationUser} and its DTO {@link ApplicationUserDTO}.
 */
@Mapper(componentModel = "spring")
public interface ApplicationUserMapper extends EntityMapper<ApplicationUserDTO, ApplicationUser> {
    @Mapping(target = "user", source = "user", qualifiedByName = "userLogin")
    ApplicationUserDTO toDto(ApplicationUser s);

    @Named("userLogin")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "login", source = "login")
    UserDTO toDtoUserLogin(User user);
}

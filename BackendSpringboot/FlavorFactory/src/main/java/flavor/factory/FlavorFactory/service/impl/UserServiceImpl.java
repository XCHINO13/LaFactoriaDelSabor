package flavor.factory.FlavorFactory.service.impl;

import flavor.factory.FlavorFactory.dto.UserDto;
import flavor.factory.FlavorFactory.repository.UserRepository;
import flavor.factory.FlavorFactory.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Slf4j
@Repository
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean validationParamsLogin(String email, String password) {
        Optional<UserDto> objUser = userRepository.consultUser(email, password);
        log.info("[{}], Esta es la informacion de la base de datos", objUser);

        if (!objUser.isPresent()){
            log.error("[{}], No se a encontrado el usuario");
            return false;
        }
        return true;
    }
}

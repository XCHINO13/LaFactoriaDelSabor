package flavor.factory.FlavorFactory.service;

import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public boolean validationParamsLogin(String correo, String contrasena);
}

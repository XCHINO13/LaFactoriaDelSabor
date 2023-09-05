package flavor.factory.FlavorFactory.controller;


import flavor.factory.FlavorFactory.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j
@RequestMapping("/user")
public class ControllerUser {

    private final UserService userService;

    public ControllerUser(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/login")
    public ResponseEntity<Boolean> validationParamsLogin(@RequestParam("correo") String correo, @RequestParam("contrasena") String contrasena) {
        log.info("[{}], Está entrando al servicio de consultar usuarios", correo + "-" + contrasena);
        return ResponseEntity.ok().body(userService.validationParamsLogin(correo, contrasena));
    }
}

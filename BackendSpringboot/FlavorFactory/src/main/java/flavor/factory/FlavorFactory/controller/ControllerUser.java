package flavor.factory.FlavorFactory.controller;

import flavor.factory.FlavorFactory.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Slf4j
@RequestMapping("/user")
public class ControllerUser {

    private final UserService userService;

    public ControllerUser(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> validationParamsLogin(@RequestParam("email") String email, @RequestParam("password") String password) {
        log.info("[{}], Está entrando al servicio de consultar usuarios", email + "-" + password);
        return ResponseEntity.ok().body(userService.validationParamsLogin(email, password));
    }
}

package flavor.factory.FlavorFactory.repository;

import flavor.factory.FlavorFactory.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {

    @Autowired
    private JdbcTemplate template;

    public UserRepository(JdbcTemplate template) {
        this.template = template;
    }

    public List<UserDto> consultUsers() {
        String sql = "SELECT * FROM usuarios";
        return template.query(sql, new BeanPropertyRowMapper<>(UserDto.class));
    }

    public Optional<UserDto> consultUser(String correo, String contrasena) {
        try {
            NamedParameterJdbcTemplate parameterJdbcTemplate = new NamedParameterJdbcTemplate(template.getDataSource());

            String sql = "SELECT * FROM usuarios WHERE correo = :correo and contrasena = :contrasena ";

            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
            mapSqlParameterSource.addValue("correo", correo);
            mapSqlParameterSource.addValue("contrasena", contrasena);

            List<UserDto> userDto = parameterJdbcTemplate.query(sql, mapSqlParameterSource, new BeanPropertyRowMapper<>(UserDto.class));


            if (userDto.isEmpty()) {
                return Optional.empty();
            }
            return Optional.of(userDto.get(0));

        } catch (DataAccessException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}

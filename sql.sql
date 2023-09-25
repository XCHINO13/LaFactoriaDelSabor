create table public.roles
(
    id_rol     integer not null
        constraint pk_id_rol
            primary key,
    nombre_rol varchar,
    estado     varchar
);

create table usuarios
(
    id_usuario serial not null
        constraint pk_usuario
            primary key,
    id_rol     integer
        constraint fk_id_rol
            references roles,
    nombre     varchar,
    cedula     varchar,
    telefono   varchar,
    correo     varchar,
    contrasena varchar,
    estado     varchar
);

create table pedidos
(
    id_pedido    serial not null
        constraint pk_pedidos
            primary key,
    id_usuario   int    not null
        constraint fk_id_usuario
            references usuarios,
    fecha_pedido varchar,
    hora_pedido  varchar,
    tipo_pedido  varchar
);

create table reserva
(
    id_reserva      serial not null
        constraint pk_reserva
            primary key,
    id_usuario      int
        constraint fk_id_usuario
            references usuarios,
    fecha_solicitud varchar,
    hora_solicitud  varchar,
    fecha_reserva   varchar,
    hora_reserva    varchar,
    lugar_reserva   varchar,
    id_pedido       int
        constraint fk_id_pedido
            references pedidos
);


create table platos
(
    id_platos    serial not null
        constraint pk_platos
            primary key,
    nombre_plato varchar,
    imagen_plato text
);

create table platos_pedidos
(
    id_platos_pedidos serial not null
        constraint pk_platos_pedidos
            primary key,
    id_platos         int
        constraint fk_platos
            references platos,
    id_pedidos        int
        constraint fk_pedidos
            references pedidos
);

insert into usuarios (id_usuario, id_rol, nombre, cedula, telefono, correo, contrasena, estado) values (1, 1, 'jhonier', '3125624', '3121315', 'admin@asd.com', 'admin', 'A');
insert into roles (id_rol, nombre_rol, estado) values (1, 'admin', 'A');

-- secuencia id usuarios revisar si es necesaria
-- create sequence sec_usuarios
-- 	minvalue 1
-- 	increment by 1;

-- Estado en la tabla de reservas
ALTER TABLE reserva ADD estado varchar;

-- Añadir Rol
INSERT INTO roles
(id_rol, nombre_rol, estado)
VALUES(2, 'cliente', 'A');

-- Se agregan mas campos a la tabla de reservas 
ALTER TABLE reserva 
ADD nombre varchar(50);

ALTER TABLE reserva 
ADD cant_personas int;

ALTER TABLE reserva 
ADD telefono int;
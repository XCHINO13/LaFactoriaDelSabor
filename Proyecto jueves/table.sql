create table user(

    id int primary Key AUTO_INCREMENT,
    name varchar(250),
    contactnumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);


insert into user(name,contactnumber,email,password,status,role) values('admin','44444444','admin@gmail.com','admin','true','admin');
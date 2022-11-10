/*
MySQL - banco local - ambiente de desenvolvimento
*/
create database Celeste;
use Celeste;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(85),
senha varchar(30),
persoFav varchar(30),
sentimento varchar(30)
);

select * from usuario;
update usuario set idUsuario  = 5 where idUsuario = 6;
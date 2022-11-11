
/*
MySQL - banco local - ambiente de desenvolvimento
*/
create database Celeste;
use Celeste;

drop table usuario;
drop table comentario;
create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(85),
senha varchar(30),
persoFav varchar(30),
sentimento varchar(30)
);
drop table comentario;
create table comentario(
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
    img varchar(255),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from usuario;


-- Total de pessoas que gostam de cada personagem
select count(persoFav) from usuario where persoFav = 'madeleine';
select count(persoFav) from usuario where persoFav = 'badeleine';
select count(persoFav) from usuario where persoFav = 'theo';
select count(persoFav) from usuario where persoFav = 'oshiro';
select count(persoFav) from usuario where persoFav = 'vovo';

-- Total de pessoas que sentem mais tal sentimento
select count(sentimento) from usuario where sentimento = '';


update usuario set idUsuario  = 5 where idUsuario = 6;



/*
MySQL - banco local - ambiente de desenvolvimento
*/
-- Criando banco de dados
create database Celeste;
use Celeste;

-- Deletar tabelas
-- drop table usuario;
-- drop table comentario;

-- Criação da tabela usuario
create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(85),
senha varchar(30),
persoFav varchar(30),
sentimento varchar(30)
);

-- Criação da tabela comentario
create table comentario(
	idComentario INT AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
    img varchar(255),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    primary key(idComentario, fkUsuario)
);

drop table comentario;
select * from comentario;

INSERT INTO comentario (titulo, descricao, img, fkUsuario) VALUES 
('imagem', 'imagem', 'imagem', 6);


drop table ranking;
create table ranking(
idRanking int primary key auto_increment,
nome varchar(10),
pontuacao int,
fkUsuario int, foreign key(fkUsuario) references usuario(idUsuario)
);


select * from usuario;
select * from comentario;
select * from ranking;

-- Total de pessoas que gostam de cada personagem
select count(persoFav) as madeline,
	(select count(persoFav) from usuario where persoFav = 'badeleine') as badeleine,
	(select count(persoFav) from usuario where persoFav = 'theo') as theo, 
	(select count(persoFav) from usuario where persoFav = 'oshiro') as oshiro, 
	(select count(persoFav) from usuario where persoFav = 'vovo') as vovo from usuario where persoFav = 'madeleine' ;
    
    select count(persoFav) from usuario where persoFav = 'madeleine';
	select count(persoFav) from usuario where persoFav = 'badeleine';
	select count(persoFav) from usuario where persoFav = 'theo';
	select count(persoFav) from usuario where persoFav = 'oshiro';
	select count(persoFav) from usuario where persoFav = 'vovo';

-- Total de pessoas que sentem mais tal sentimento
select count(sentimento) as fracasso,
     (select count(sentimento) from usuario where sentimento = 'ansiedade') as ansiedade,
     (select count(sentimento) from usuario where sentimento = 'solidao') as solidao,
     (select count(sentimento) from usuario where sentimento = 'desesperanca') as desesperanca,
     (select count(sentimento) from usuario where sentimento = 'inseguranca') as inseguranca,
     (select count(sentimento) from usuario where sentimento = 'inadequacao') as inadequacao
    from usuario where sentimento = 'fracasso';

/*MySQL - banco local - ambiente de desenvolvimento*/
-- Criando banco de dados
create database Celeste;
use Celeste;

-- Criação da tabela ranking
create table ranking(
	idRanking int primary key auto_increment,
	nome varchar(45),
	pontuacao int
);

-- Criação da tabela usuario
create table usuario(
	idUsuario int primary key auto_increment,
	nome varchar(45) not null,
	email varchar(85) unique,
	senha varchar(80) not null,
	persoFav varchar(30) not null,
	sentimento varchar(30) not null,
    img varchar(100) not null,
    fkRanking INT,FOREIGN KEY (fkRanking) REFERENCES ranking(idRanking)
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


            SELECT 
            a.idComentario AS idComentario,
            a.titulo,
            a.descricao,
            a.img,
            a.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.img as ftPerfil,
            u.email,
            u.senha
        FROM comentario a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario order by idComentario desc;
                
                
                
                


-- Selecionar todos os dados de todas as tabelas
select * from usuario;
select * from ranking;
select * from comentario;

-- Selecionar os primeiros colocados do ranking
select u.img, u.nome, r.pontuacao from ranking r join usuario u on fkRanking = r.idRanking  order by pontuacao desc;
select u.img, u.nome, r.pontuacao from ranking r join usuario u on fkRanking = r.idRanking  order by pontuacao desc;

select pontuacao from ranking;
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
    


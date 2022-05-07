-- CODE SQL

CREATE TABLE utilizador(

user_id SERIAL primary key,
user_name varchar(30) NOT NULL,
user_password varchar(45) NOT NULL,
user_morada varchar(180),
user_email varchar(100),
user_points int DEFAULT 0,
user_admin bit,
user_pt bit,
user_nutri bit
	
);

--O IMC DARÁ VARIOS UPDATES (POR CADA PONTO CALCULADO | OS RESTANTES DADOS DEVERÃO SER INSERIDOS PELO UTILIZADOR NO SEU DASHBOARD OU PELO PT)

CREATE TABLE dados_utilizador(

user_dados_id SERIAL primary key,
user_dados_peso real DEFAULT 0.0,
user_dados_altura real DEFAULT 0.0,
user_dados_imc real DEFAULT 0.0,
user_dados_gordura_visceral real DEFAULT 0.0,
user_dados_gordura_subcutanea real DEFAULT 0.0,
user_dados_pressao_arterial_media real DEFAULT 0.0,
user_utilizador_id int

);

ALTER TABLE dados_utilizador
ADD CONSTRAINT fk_user_utilizador_id FOREIGN KEY(user_utilizador_id) REFERENCES utilizador (user_id);

CREATE TABLE comunidade(

comunidade_id SERIAL primary key,
comunidade_titulo varchar(30) NOT NULL,
comunidade_desc varchar(500)

);

CREATE TABLE comunidade_utilizador(

comunidade_user_id SERIAL primary key,
utilizador_id int,
comunidade_id int

);

ALTER TABLE comunidade_utilizador
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE comunidade_utilizador
ADD CONSTRAINT fk_comunidade_id FOREIGN KEY(comunidade_id) REFERENCES comunidade (comunidade_id);

CREATE TABLE artigo(

artigo_leitura_id SERIAL primary key,
artigo_leitura_titulo varchar(60) NOT NULL,
artigo_leitura_corpo varchar(25000) NOT NULL,
artigo_leitura_data date DEFAULT current_date,
artigo_read_type_id int,
artigo_category_id int,
comunidade_utilizador_id int

);

CREATE TABLE artigo_read_type(

artigo_reader_type_id SERIAL primary key,
artigo_reader_type varchar(20) NOT NULL

);

CREATE TABLE artigo_category(

artigo_category_id SERIAL primary key,
artigo_category varchar(20) NOT NULL

);

ALTER TABLE artigo
ADD CONSTRAINT fk_comunidade_utilizador_id FOREIGN KEY(comunidade_utilizador_id) REFERENCES comunidade_utilizador (comunidade_user_id);

ALTER TABLE artigo
ADD CONSTRAINT fk_artigo_read_type_id FOREIGN KEY(artigo_read_type_id) REFERENCES artigo_read_type (artigo_reader_type_id);

ALTER TABLE artigo
ADD CONSTRAINT fk_artigo_category_id FOREIGN KEY(artigo_category_id) REFERENCES artigo_category (artigo_category_id);

CREATE TABLE produto(

produto_id SERIAL primary key,
produto_titulo varchar(80) NOT NULL,
produto_desc varchar(300) NOT NULL,
produto_preco real NOT NULL,
produto_points int NOT NULL,
produto_categoria_id int --PODERÁ SER ALTERADO O CAMPO 'produto_categoria_id' DEVIDO Á API DA AMAZON

);

CREATE TABLE productsgetlist(

get_product_position_id SERIAL primary key,
isget bit,
product_id int,
utilizador_id int

);

ALTER TABLE productsgetlist
ADD CONSTRAINT fk_product_id FOREIGN KEY(product_id) REFERENCES produto (produto_id);

ALTER TABLE productsgetlist
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador (user_id);


CREATE TABLE place(

local_id SERIAL primary key,
local_morada varchar(120) NOT NULL,
local_longitude real NOT NULL,
local_latitude real NOT NULL,
local_codigo_postal varchar(15)
	
);


CREATE TABLE evento(

evento_id SERIAL primary key,
evento_titulo varchar(50) NOT NULL,
evento_descricao varchar(300) DEFAULT 'O evento não possui descrição',
evento_local_id int,
evento_data date DEFAULT CURRENT_DATE,
evento_criador_id int,
evento_terminado bit
	
);

ALTER TABLE evento
ADD CONSTRAINT fk_evento_local_id FOREIGN KEY(evento_local_id) REFERENCES place(local_id);

ALTER TABLE evento
ADD CONSTRAINT fk_evento_criador_id FOREIGN KEY(evento_criador_id) REFERENCES utilizador(user_id);


CREATE TABLE receita(

receita_id SERIAL primary key,
receita_titulo varchar(70) NOT NULL,
receita_desc varchar(650) NOT NULL,
receita_tipo_aprovacao_id int,
receita_base_id int,
receita_categoriaa_id int,
receita_utilizador_id int,
receita_ingrediente_id int,
aprovacao_nutricionista bit

);

CREATE TABLE ingrediente(

ingrediente_id SERIAL primary key,
ingrediente_nome varchar(100) NOT NULL,
ingrediente_cal real NOT NULL,
ingrediente_carbohidratos real,
ingrediente_proteina real,
ingrediente_fibra real,
ingrediente_acucares real

);

CREATE TABLE receita_ingrediente(

receita_ingrediente_id SERIAL primary key,
recipe_id int,
ingredient_id int,
ingrediente_qnt real NOT NULL

);


ALTER TABLE receita_ingrediente
ADD CONSTRAINT fk_recipe_id FOREIGN KEY(recipe_id) REFERENCES receita(receita_id);

ALTER TABLE receita_ingrediente
ADD CONSTRAINT fk_ingredient_id FOREIGN KEY(ingredient_id) REFERENCES ingrediente(ingrediente_id);


CREATE TABLE item_aprovacao(

aprovacao_tipo_id SERIAL primary key,
tipoaprovacao_nome varchar(35) NOT NULL

);

--ALTERAR AS RELACOES COM O item_aprovacao

CREATE TABLE item_base(

basee_id SERIAL primary key,
basee_nome varchar(35)
	
);


CREATE TABLE receita_categoria(

receita_categoria_id SERIAL primary key,
receita_categoria_nome varchar(45)

);


CREATE TABLE ementa_categoria(

ementa_categoria_id SERIAL primary key,
ementa_categoria_nome varchar(45)

);



CREATE TABLE ementa(

ementa_id SERIAL primary key,
ementa_titulo varchar(50) NOT NULL,
ementa_descricao varchar(600) NOT NULL,
--REMOVER NO MODELO ER , O CAMPO ementa_receita_id
ementa_tipo_aprovacao_id int,
ementa_base_id int,
ementa_categoriaa_id int,
ementa_utilizador_id int,
aprovacao_nutricionista bit

);


CREATE TABLE ementa_receita(

ementa_receita_id SERIAL primary key,
receita_id int,
ementa_id int

);

ALTER TABLE ementa_receita
ADD CONSTRAINT fk_receita_id FOREIGN KEY(receita_id) REFERENCES receita (receita_id);

ALTER TABLE ementa_receita
ADD CONSTRAINT fk_ementa_id FOREIGN KEY(ementa_id) REFERENCES ementa (ementa_id);



CREATE TABLE exercicio(

exercicio_id SERIAL primary key,
exercicio_titulo varchar(70) NOT NULL,
exercicio_desc varchar(500) NOT NULL,
exercicio_num_series int DEFAULT 3,
exercicio_num_repeticoes int DEFAULT 3,
exercicio_dificuldade_id int,
exercicio_tipo_id int,
exercicio_utilizador_id int,
aprovacao_pt bit DEFAULT '0'

);


CREATE TABLE exercicio_dificuldade(

exercicio_dificuldade_id SERIAL primary key,
exercicio_dificuldade varchar(45) NOT NULL
	
);

CREATE TABLE exercicio_tipo(

exercicio_tipo_id SERIAL primary key,
exercicio_tipo_titulo varchar(45) NOT NULL

);


CREATE TABLE exercicio_plano(

exercicio_plano_id SERIAL primary key,
exercise_id int,
p_treino_id int

);


CREATE TABLE plano(

plano_treino_id SERIAL primary key,
plano_titulo varchar(80) NOT NULL,
plano_treino_desc varchar(600) NOT NULL,
plano_utilizador_id int,
plano_treino_aprovacao_pt bit DEFAULT '0',
plano_treino_tipo_aprovacao_id int

);

CREATE TABLE nutricionista(

nutricionista_id SERIAL primary key

) inherits (utilizador);

CREATE TABLE personal_trainer(

personal_trainer_id SERIAL primary key

) inherits (utilizador);


CREATE TABLE pedido(

pedido_id SERIAL primary key,
pedido_titulo varchar(50) NOT NULL,
pedido_desc varchar(300) NOT NULL,
pedido_local_id int,
pedido_utilizador_id int,
pedido_terminada bit, --AS CONSULTAS TERMINADAS SÃO EXIBIDAS NA LISTA DE 'ULTIMAS CONSULTAS',
pedido_data date DEFAULT CURRENT_DATE,
pedido_tipo_id int,
pedido_encontro_data date DEFAULT CURRENT_DATE,
pedido_estado_id int
	
);

CREATE TABLE pedido_tipo(

pedido_type_id SERIAL primary key,
pedido_type varchar(30) NOT NULL

);


CREATE TABLE pedido_estado(

pedido_estado_id SERIAL primary key,
pedido_estado varchar(50) NOT NULL

);

CREATE TABLE turma(

turma_id SERIAL primary key,
turma_titulo varchar(45) NOT NULL,
turma_desc varchar(350) DEFAULT 'Esta turma não possui descrição.'

);

CREATE TABLE utilizador_turma(

aluno_id SERIAL primary key,
utilizador_id int,
turma_identifier int

);

ALTER TABLE utilizador_turma
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador(user_id);

ALTER TABLE utilizador_turma
ADD CONSTRAINT fk_turma_identifier FOREIGN KEY(turma_identifier) REFERENCES turma(turma_id);

ALTER TABLE turma ADD COLUMN criador_id int;

ALTER TABLE turma
ADD CONSTRAINT fk_criador_id FOREIGN KEY(criador_id) REFERENCES utilizador(user_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_tipo_aprovacao_id FOREIGN KEY(ementa_tipo_aprovacao_id) REFERENCES item_aprovacao (aprovacao_tipo_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_base_id FOREIGN KEY(ementa_base_id) REFERENCES item_base (basee_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_categoriaa_id FOREIGN KEY(ementa_categoriaa_id) REFERENCES ementa_categoria (ementa_categoria_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_utilizador_id FOREIGN KEY(ementa_utilizador_id) REFERENCES utilizador (user_id);


CREATE TABLE marcacao_favorito_ementa(

favorito_ementa_id SERIAL primary key,
utilizador_id int,
ementa_id int,
is_ementa_favorito bit DEFAULT '1'

);


ALTER TABLE marcacao_favorito_ementa
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE marcacao_favorito_ementa
ADD CONSTRAINT fk_ementa_id FOREIGN KEY(ementa_id) REFERENCES ementa (ementa_id);

CREATE TABLE marcacao_favorito_receita(

favorito_receita_id SERIAL primary key,
utilizador_id int,
receita_id int,
is_receita_favorito bit DEFAULT '1'

);

ALTER TABLE marcacao_favorito_receita
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE marcacao_favorito_receita
ADD CONSTRAINT fk_receita_id FOREIGN KEY(receita_id) REFERENCES receita (receita_id);


CREATE TABLE marcacao_favorito_plano(

favorito_plano_id SERIAL primary key,
utilizador_id int,
plano_treino_id int,
is_plano_favorito bit DEFAULT '1'

);

ALTER TABLE marcacao_favorito_plano
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE marcacao_favorito_plano
ADD CONSTRAINT fk_plano_treino_id FOREIGN KEY(plano_treino_id) REFERENCES plano (plano_treino_id);


CREATE TABLE marcacao_favorito_exercicio(

favorito_exercicio_id SERIAL primary key,
utilizador_id int,
exercicio_id int,
is_exercicio_favorito bit DEFAULT '1'

);

ALTER TABLE marcacao_favorito_exercicio
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE marcacao_favorito_exercicio
ADD CONSTRAINT fk_exercicio_id FOREIGN KEY(exercicio_id) REFERENCES exercicio (exercicio_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_tipo_aprovacao_id FOREIGN KEY(receita_tipo_aprovacao_id) REFERENCES item_aprovacao (aprovacao_tipo_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_base_id FOREIGN KEY(receita_base_id) REFERENCES item_base (basee_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_categoriaa_id FOREIGN KEY(receita_categoriaa_id) REFERENCES receita_categoria (receita_categoria_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_utilizador_id FOREIGN KEY(receita_utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE pedido
ADD CONSTRAINT fk_pedido_local_id FOREIGN KEY(pedido_local_id) REFERENCES place(local_id);

ALTER TABLE pedido
ADD CONSTRAINT fk_pedido_utilizador_id FOREIGN KEY(pedido_utilizador_id) REFERENCES utilizador(user_id);

ALTER TABLE pedido
ADD CONSTRAINT fk_pedido_tipo_id FOREIGN KEY(pedido_tipo_id) REFERENCES pedido_tipo(pedido_type_id);

ALTER TABLE pedido
ADD CONSTRAINT fk_pedido_estado_id FOREIGN KEY(pedido_estado_id) REFERENCES pedido_estado(pedido_estado_id);


insert into utilizador(
user_name ,
user_password,
user_morada,
user_email,
user_points) values ('Admin', 'AdminFixe', 'Rua Fixe', 'AdminFixe@gmail.com', '2000');

insert into dados_utilizador(
user_dados_peso,
user_dados_altura,
user_dados_imc,
user_dados_gordura_visceral,
user_dados_gordura_subcutanea,
user_dados_pressao_arterial_media,
user_utilizador_id) values (70,170,55,20,20,20,1);

insert into utilizador(
user_name ,
user_password,
user_morada,
user_email,
user_points,
user_admin,
user_pt,
user_nutri) values ('Admin', 'AdminTeste', 'Rua Admin', 'AdminTeste@gmail.com', '9999', '1', '0', '0');

insert into utilizador(
user_name ,
user_password,
user_morada,
user_email,
user_points,
user_admin,
user_pt,
user_nutri) values ('PT', 'PTTeste', 'Rua PT', 'PTTeste@gmail.com', '9999', '0', '1', '0');

insert into utilizador(
user_name ,
user_password,
user_morada,
user_email,
user_points,
user_admin,
user_pt,
user_nutri) values ('Nutricionista', 'NutricionistaTeste', 'Rua Nutricionista', 'NutricionistaTeste@gmail.com', '9999', '0', '0', '1');

insert into utilizador(
user_name ,
user_password,
user_morada,
user_email,
user_points,
user_admin,
user_pt,
user_nutri) values ('André Santos', 'andresantos', 'Rua de Lisboa', 'andresantos@gmail.com', '0', '0', '0', '0');

insert into utilizador(
user_name ,
user_password,
user_morada,
user_email,
user_points,
user_admin,
user_pt,
user_nutri) values ('Ana Sousa', 'anasousa', 'Rua do Porto', 'anasousa@gmail.com', '0', '0', '0', '0');

INSERT INTO item_aprovacao(tipoaprovacao_nome) VALUES ('Verificado');
INSERT INTO item_aprovacao(tipoaprovacao_nome) VALUES ('Não Verificado');
INSERT INTO item_aprovacao(tipoaprovacao_nome) VALUES ('Todos');

INSERT INTO item_base(basee_nome) VALUES ('Carne'), ('Peixe'), ('Vegan'), ('Snack'), ('Frutas'), ('Outros'), ('Todos');

INSERT INTO receita_categoria(receita_categoria_nome) 
VALUES ('Entrada'), ('Prato Principal'), ('Sobremesa'), ('Bebida'), ('Outros'), ('Todos');

INSERT INTO ementa_categoria(ementa_categoria_nome) 
VALUES ('Pequeno-Almoço'), ('Lanche'), ('Almoço'), ('Jantar'), ('Outro');

INSERT INTO exercicio_dificuldade(exercicio_dificuldade) VALUES ('Fácil'), ('Médio'), ('Díficil');

INSERT INTO exercicio_tipo(exercicio_tipo_titulo) VALUES ('Costas'), ('Cardio'), ('Peito'), ('Antebraço'), ('Braço'),
('Ombros'), ('Pescoço'), ('Cintura'), ('Coxa'), ('Perna'), ('Outros'), ('Todos');

INSERT INTO pedido_estado(pedido_estado) VALUES ('Todos'), ('Aceite'), ('Recusado'), ('Pendentes');

INSERT INTO artigo_category(artigo_category) VALUES ('Alimentação'), ('Fitness'), ('Todos'), ('Outro');

INSERT INTO artigo_read_type(artigo_reader_type) VALUES ('Artigo'), ('Noticia'), ('Todos');



--CODIGO NÃO TERMINADO DE GEOMETRIA PRA LOCAIS

SELECT * FROM spatial_ref_sys


SELECT * FROM place

ALTER TABLE place
ADD COLUMN local_nome varchar(50) NOT NULL


ALTER TABLE place
ADD COLUMN local_nome varchar(50) NOT NULL

ALTER TABLE place
ADD COLUMN geometry_info_point geometry

ALTER TABLE place
ADD COLUMN ref_system_id int NOT NULL

ALTER TABLE place
ADD CONSTRAINT fk_ref_system_id FOREIGN KEY (ref_system_id) REFERENCES spatial_ref_sys(srid)

ALTER TABLE place
ADD CONSTRAINT fk_local_category_id FOREIGN KEY (local_category_id) REFERENCES place_category(local_category_id)

INSERT INTO place_category (local_category_name) VALUES ('Cafés')
INSERT INTO place_category (local_category_name) VALUES ('Bares')
INSERT INTO place_category (local_category_name) VALUES ('Restaurantes')
INSERT INTO place_category (local_category_name) VALUES ('Ginásios')

ALTER TABLE public.spatial_ref_sys OWNER TO rds_superuser;
GRANT SELECT, INSERT ON TABLE public.spatial_ref_sys TO public;

GRANT SELECT ON public.geography_columns TO PUBLIC ; 





-------------------NOVO CODIGO ---------------------

INSERT INTO dados_utilizador (user_dados_peso, user_dados_altura, user_dados_imc, user_dados_gordura_visceral, user_dados_gordura_subcutanea, user_dados_pressao_arterial_media, user_utilizador_id)
VALUES (67, 183, 43.41, 31.2, 12.1, 20, 2)

INSERT INTO dados_utilizador (user_dados_peso, user_dados_altura, user_dados_imc, user_dados_gordura_visceral, user_dados_gordura_subcutanea, user_dados_pressao_arterial_media, user_utilizador_id)
VALUES (58, 162, 33.42, 41.2, 22.3, 20, 4)

INSERT INTO dados_utilizador (user_dados_peso, user_dados_altura, user_dados_imc, user_dados_gordura_visceral, user_dados_gordura_subcutanea, user_dados_pressao_arterial_media, user_utilizador_id)
VALUES (58, 162, 33.42, 41.2, 22.3, 20, 4)

INSERT INTO dados_utilizador (user_dados_peso, user_dados_altura, user_dados_imc, user_dados_gordura_visceral, user_dados_gordura_subcutanea, user_dados_pressao_arterial_media, user_utilizador_id)
VALUES (88, 180, 33.42, 41.2, 22.3, 20, 3)

-- OS PRODUTOS SERÃO SUBSTITUIDOS POR UMA API --

INSERT INTO produto (produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id) 
VALUES ('Pesos 3kg', 'Pesos de 3kg para braços', 10.12, 350, 1)

INSERT INTO produto (produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id) 
VALUES ('Fit Cereals', 'Cereais Fitness', 9.55, 250, 3)

INSERT INTO produto (produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id) 
VALUES ('Fit Cereals', 'Cereais Fitness', 9.55, 250, 3)

INSERT INTO produto (produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id) 
VALUES ('Jordan XXX', 'Tenis Jordan para corrida', 120.25, 65000, 5)

INSERT INTO ementa (ementa_titulo, ementa_descricao, ementa_tipo_aprovacao_id, ementa_base_id, ementa_categoriaa_id, ementa_utilizador_id, aprovacao_nutricionista)
VALUES ('Almoço com Peixe', 'Almoço com prato principal à base de peixe', 2, 2, 3, 5, '0')

INSERT INTO ementa (ementa_titulo, ementa_descricao, ementa_tipo_aprovacao_id, ementa_base_id, ementa_categoriaa_id, ementa_utilizador_id, aprovacao_nutricionista)
VALUES ('Pequeno-Almoço Fruit', 'Pequeno-Almoço com mix de frutas', 1, 5, 1, 4, '1')

INSERT INTO ementa (ementa_titulo, ementa_descricao, ementa_tipo_aprovacao_id, ementa_base_id, ementa_categoriaa_id, ementa_utilizador_id, aprovacao_nutricionista)
VALUES ('Jantar com bife', 'Jantar com bife e batatas', 2, 1, 4, 5, '0')

DELETE FROM ementa
WHERE ementa_id = 4



SELECT * FROM ementa

SELECT * FROM item_aprovacao

SELECT * FROM item_base

SELECT * FROM ementa_categoria

SELECT * FROM receita_categoria

SELECT * FROM utilizador

SELECT * FROM receita_base

SELECT * FROM receita

SELECT * FROM receita_ingrediente

INSERT INTO receita(receita_titulo, receita_desc, receita_tipo_aprovacao_id, receita_base_id, receita_categoriaa_id, receita_utilizador_id, aprovacao_nutricionista)
VALUES ('Salmão com salada grega', 'Salmão cozido com salada grega', 1, 2, 1, 6, '1')

INSERT INTO receita (receita_titulo, receita_desc, receita_tipo_aprovacao_id, receita_base_id, receita_categoriaa_id, receita_utilizador_id, aprovacao_nutricionista)
VALUES ('Salada de frutas tropicais', 'Salada de frutas tropicais e sumo de laranja', 2, 5, 3, 5, '0')

INSERT INTO receita (receita_titulo, receita_desc, receita_tipo_aprovacao_id, receita_base_id, receita_categoriaa_id, receita_utilizador_id, aprovacao_nutricionista)
VALUES ('Smoothie de frutos vermelhos', 'Smoothie de frutos vermelhos com gengibre', 2, 5, 4, 4, '1')

INSERT INTO receita_ingrediente (recipe_id, ingredient_id, ingrediente_qnt)
VALUES (1, 2, 1)

INSERT INTO receita_ingrediente (recipe_id, ingredient_id, ingrediente_qnt)
VALUES (1, 3, 4)

INSERT INTO receita_ingrediente (recipe_id, ingredient_id, ingrediente_qnt)
VALUES (3, 1, 6)

INSERT INTO ingrediente (ingrediente_nome, ingrediente_cal, ingrediente_carbohidratos, ingrediente_proteina, ingrediente_fibra, ingrediente_acucares)
VALUES ('Morango', 33, 1.3, 1.1, 21.45, 45.52)

INSERT INTO ingrediente (ingrediente_nome, ingrediente_cal, ingrediente_carbohidratos, ingrediente_proteina, ingrediente_fibra, ingrediente_acucares)
VALUES ('Salmão', 220, 3.5, 2.1, 31.45, 35.52)

INSERT INTO ingrediente (ingrediente_nome, ingrediente_cal, ingrediente_carbohidratos, ingrediente_proteina, ingrediente_fibra, ingrediente_acucares)
VALUES ('Queijo', 402, 2.6, 5.1, 72.45, 25.52)

INSERT INTO ingrediente (ingrediente_nome, ingrediente_cal, ingrediente_carbohidratos, ingrediente_proteina, ingrediente_fibra, ingrediente_acucares)
VALUES ('Bife', 271, 55.6, 121.1, 62.45, 29.52)

INSERT INTO ingrediente (ingrediente_nome, ingrediente_cal, ingrediente_carbohidratos, ingrediente_proteina, ingrediente_fibra, ingrediente_acucares)
VALUES ('Batatas Cozidas', 80, 145.6, 51.1, 67.45, 14.52)

INSERT INTO marcacao_favorito_receita (utilizador_id, receita_id, is_receita_favorito)
VALUES (6, 2, '1')

INSERT INTO marcacao_favorito_receita (utilizador_id, receita_id, is_receita_favorito)
VALUES (3, 1, '0')

INSERT INTO marcacao_favorito_receita (utilizador_id, receita_id, is_receita_favorito)
VALUES (4, 3, '1')

INSERT INTO marcacao_favorito_receita (utilizador_id, receita_id, is_receita_favorito)
VALUES (6, 1, '0')

ALTER TABLE receita
DROP COLUMN receita_ingrediente_id


INSERT INTO productsgetlist (isget, product_id, utilizador_id) VALUES ('1', 4, 3)

INSERT INTO productsgetlist (isget, product_id, utilizador_id) VALUES ('0', 5, 2)

INSERT INTO productsgetlist (isget, product_id, utilizador_id) VALUES ('1', 4, 3)

SELECT * FROM productsgetlist

SELECT * FROM produto_category

SELECT * FROM produto

ALTER TABLE produto
ADD CONSTRAINT fk_produto_categoria_id FOREIGN KEY (produto_categoria_id) REFERENCES produto_categoria (produto_categoria_id);

DROP TABLE produto

CREATE TABLE produto(

produto_id SERIAL primary key,
produto_titulo varchar(80) NOT NULL,
produto_desc varchar(300) NOT NULL,
produto_preco real NOT NULL,
produto_points int NOT NULL,
produto_categoria_id int --PODERÁ SER ALTERADO O CAMPO 'produto_categoria_id' DEVIDO Á API DA AMAZON

);

CREATE TABLE productsgetlist(

get_product_position_id SERIAL primary key,
isget bit,
product_id int,
utilizador_id int

);

ALTER TABLE productsgetlist
ADD CONSTRAINT fk_product_id FOREIGN KEY(product_id) REFERENCES produto (produto_id);

ALTER TABLE productsgetlist
ADD CONSTRAINT fk_utilizador_id FOREIGN KEY(utilizador_id) REFERENCES utilizador (user_id);

DROP TABLE productsgetlist

DROP TABLE produto_category

ALTER TABLE produto
ADD CONSTRAINT fk_produto_categoria_id FOREIGN KEY (produto_categoria_id) REFERENCES produto_category (produto_category_id);

ALTER TABLE produto
DROP CONSTRAINT fk_produto_categoria_id

CREATE TABLE produto_category(

produto_category_id SERIAL primary key,
prod_category varchar(200)

);



INSERT INTO produto_category (prod_category) VALUES ('Sports & Outdoors')
INSERT INTO produto_category (prod_category) VALUES ('Health & Personal Care')
INSERT INTO produto_category (prod_category) VALUES ('Grocery, Supplements & Food')
INSERT INTO produto_category (prod_category) VALUES ('Clothing & Shoes')

SELECT * FROM produto_category

DELETE FROM produto_category WHERE produto_category_id = 4


DELETE FROM dados_utilizador
WHERE user_dados_id = 4


SELECT * FROM dados_utilizador

SELECT * FROM utilizador

INSERT INTO utilizador (user_name, user_password, user_morada, user_email, user_points, user_admin, user_pt, user_nutri)
VALUES ()

SELECT * FROM place

INSERT INTO place (local_morada, local_category_id, local_nome, ref_system_id, geometry_info_point)
VALUES ('Rua FFFFFFF', 4, 'Ginasio Coachella', 4326, 'POINT(0 0)')

INSERT INTO place (local_morada, local_category_id, local_nome, ref_system_id, geometry_info_point)
VALUES ('Rua XXXXXXX', 3, 'JNCQuoi', 4326, 'POINT(38.71923 -9.14401)')

INSERT INTO place (local_morada, local_category_id, local_nome, ref_system_id, geometry_info_point)
VALUES ('Rua XXXXXXX', 2, 'Hard Rock Café', 4326, 'POINT(38.71661 -9.14176)')

INSERT INTO place (local_morada, local_category_id, local_nome, ref_system_id, geometry_info_point)
VALUES ('Rua YYYYYYY', 1, 'Solar do Duque', 4326, 'POINT(38.71344 -9.14171)')

INSERT INTO place (local_morada, local_category_id, local_nome, ref_system_id, geometry_info_point)
VALUES ('Rua ABCDEFG', 4, 'Kalorias', 4326, 'POINT(38.70895 -9.24568)')

INSERT INTO place (local_morada, local_category_id, local_nome, ref_system_id, geometry_info_point)
VALUES ('Rua HIJKLMNOP', 4, 'Holmes Place', 4326, 'POINT(38.73691 -9.14401)')

DELETE FROM place WHERE local_id = 3


SELECT * FROM place_category

ALTER TABLE place DROP COLUMN local_ref_item_id

SELECT * FROM place WHERE local_category_id = 3 

SELECT receita.receita_id, receita.receita_titulo, receita.receita_desc, receita.receita_utilizador_id, utilizador.user_name FROM receita INNER JOIN utilizador ON utilizador.user_id = receita.receita_utilizador_id
WHERE receita.receita_utilizador_id = 5 AND receita.receita_categoriaa_id = 3

SELECT ementa.ementa_id, ementa.ementa_titulo, ementa.ementa_descricao, ementa.ementa_utilizador_id, utilizador.user_name FROM ementa INNER JOIN utilizador ON utilizador.user_id = ementa.ementa_utilizador_id
WHERE ementa.ementa_utilizador_id = 5 AND ementa.ementa_categoriaa_id = 3

SELECT * FROM ementa

SELECT * FROM receita_ingrediente

SELECT receita_ingrediente.receita_ingrediente_id, receita_ingrediente.recipe_id, receita.receita_titulo,receita_ingrediente.ingredient_id, receita_ingrediente.ingrediente_qnt,ingrediente.ingrediente_nome FROM receita_ingrediente
INNER JOIN receita ON receita.receita_id = receita_ingrediente.recipe_id
INNER JOIN ingrediente ON ingrediente.ingrediente_id = receita_ingrediente.ingredient_id
WHERE receita.receita_id = 

--FAZER
SELECT * FROM ementa_receita

--INGREDIENTES

SELECT * FROM ingrediente



SELECT * FROM place WHERE local_category_id = 3 

SELECT receita.receita_id, receita.receita_titulo, receita.receita_desc, receita.receita_utilizador_id, utilizador.user_name FROM receita INNER JOIN utilizador ON utilizador.user_id = receita.receita_utilizador_id
WHERE receita.receita_utilizador_id = 5 AND receita.receita_categoriaa_id = 3

SELECT ementa.ementa_id, ementa.ementa_titulo, ementa.ementa_descricao, ementa.ementa_utilizador_id, utilizador.user_name FROM ementa INNER JOIN utilizador ON utilizador.user_id = ementa.ementa_utilizador_id
WHERE ementa.ementa_utilizador_id = 5 AND ementa.ementa_categoriaa_id = 3

SELECT * FROM ementa

SELECT * FROM receita_ingrediente

SELECT receita_ingrediente.receita_ingrediente_id, receita_ingrediente.recipe_id, receita.receita_titulo,receita_ingrediente.ingredient_id, receita_ingrediente.ingrediente_qnt,ingrediente.ingrediente_nome FROM receita_ingrediente
INNER JOIN receita ON receita.receita_id = receita_ingrediente.recipe_id
INNER JOIN ingrediente ON ingrediente.ingrediente_id = receita_ingrediente.ingredient_id
WHERE receita.receita_id = 

--FAZER
SELECT * FROM ementa_receita

--INGREDIENTES

SELECT * FROM ingrediente

select * from ingrediente where ingrediente.ingrediente_id = 3



-----------------------------------------------------------------------------------------------------------------------------------------------------------


INSERT INTO exercicio (exercicio_titulo, exercicio_desc, exercicio_num_series, exercicio_num_repeticoes, exercicio_dificuldade_id, exercicio_tipo_id, exercicio_utilizador_id, aprovacao_pt)
VALUES ('Push-ups', 'Pushups para treinar em casa', 10, 15, 2, 5, 3, '1')

INSERT INTO exercicio (exercicio_titulo, exercicio_desc, exercicio_num_series, exercicio_num_repeticoes, exercicio_dificuldade_id, exercicio_tipo_id, exercicio_utilizador_id, aprovacao_pt)
VALUES ('Bicicleta', 'Bicicleta treinar em casa', 5, 305, 2, 2, 6, '0')

INSERT INTO exercicio (exercicio_titulo, exercicio_desc, exercicio_num_series, exercicio_num_repeticoes, exercicio_dificuldade_id, exercicio_tipo_id, exercicio_utilizador_id, aprovacao_pt)
VALUES ('Jumps', 'Step-ups para praticar em casa', 6, 25, 1, 10, 2, '0')

INSERT INTO exercicio (exercicio_titulo, exercicio_desc, exercicio_num_series, exercicio_num_repeticoes, exercicio_dificuldade_id, exercicio_tipo_id, exercicio_utilizador_id, aprovacao_pt)
VALUES ('Alongamentos Ombros', 'Alongamentos de ombros para acordar da melhor forma possivel!', 3, 10, 1, 6, 6, '1')

INSERT INTO plano (plano_titulo, plano_treino_desc, plano_utilizador_id, plano_treino_aprovacao_pt, plano_treino_tipo_aprovacao_id)
VALUES ('Treino XL de Braços', 'Treino intensivo de braços para fazer em casa.', 3, '1', 1)


INSERT INTO plano (plano_titulo, plano_treino_desc, plano_utilizador_id, plano_treino_aprovacao_pt, plano_treino_tipo_aprovacao_id)
VALUES ('Treino simples de peito', 'Treino simples e eficaz de peito para fazer em casa.', 5, '0', 2)

INSERT INTO plano (plano_titulo, plano_treino_desc, plano_utilizador_id, plano_treino_aprovacao_pt, plano_treino_tipo_aprovacao_id)
VALUES ('Prova de resistência', 'Treino intensivo de resistência.', 2, '1', 1)

INSERT INTO plano (plano_titulo, plano_treino_desc, plano_utilizador_id, plano_treino_aprovacao_pt, plano_treino_tipo_aprovacao_id)
VALUES ('Relaxamento: Alongamentos', 'Conjunto de alongamentos para relaxamento.', 5, '1', 1)

INSERT INTO exercicio_plano (exercise_id, p_treino_id)
VALUES (1, 3)

INSERT INTO exercicio_plano (exercise_id, p_treino_id)
VALUES (3, 3)

INSERT INTO exercicio_plano (exercise_id, p_treino_id)
VALUES (4, 4)

SELECT * FROM exercicio_plano

INSERT INTO exercicio_plano ()


SELECT * FROM utilizador

SELECT * FROM exercicio_tipo

SELECT * FROM item_aprovacao


SELECT * FROM produto_category

INSERT INTO produto(produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id)
VALUES ('Ténis Nike L', 'Ténis da nike modelo L', 130, 17500, 5)

INSERT INTO produto(produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id)
VALUES ('Raquetes de Ténis Reebok', 'Raquetes da reebok para jogar ténis', 40, 9250, 1)

INSERT INTO produto(produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id)
VALUES ('Raquetes de Ténis Reebok', 'Raquetes da reebok para jogar ténis', 40, 9250, 1)

INSERT INTO produto(produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id)
VALUES ('Suplementos Vitaminas I', 'Suplementos de vitamina C', 64, 12350, 3)

INSERT INTO produto(produto_titulo, produto_desc, produto_preco, produto_points, produto_categoria_id)
VALUES ('Pack de Pesos 5kg', 'Pack de 5 pesos de 5kg', 72 ,13452, 2)

SELECT * FROM produto

SELECT * FROM productsgetlist

INSERT INTO productsgetlist (isget, product_id, utilizador_id)
VALUES ('1', 11, 6)

INSERT INTO productsgetlist (isget, product_id, utilizador_id)
VALUES ('0', 9, 4)

SELECT * FROM utilizador

INSERT INTO turma (turma_titulo, turma_desc, criador_id)
VALUES ('Kizomba Class', 'Turma de Kizomba no Kalorias', 3)


INSERT INTO turma (turma_titulo, turma_desc, criador_id)
VALUES ('Relaxing Zone', 'Turma de Alongamentos no Kalorias', 3)

INSERT INTO turma (turma_titulo, turma_desc, criador_id)
VALUES ('Crossfit Team', 'Turma de Crossfit no Holmes Place', 21)


INSERT INTO utilizador_turma (utilizador_id, turma_identifier)
VALUES (5, 1)

INSERT INTO utilizador_turma (utilizador_id, turma_identifier)
VALUES (6, 1)

INSERT INTO utilizador_turma (utilizador_id, turma_identifier)
VALUES (2, 3)

INSERT INTO utilizador_turma (utilizador_id, turma_identifier)
VALUES (5, 3)

INSERT INTO utilizador_turma (utilizador_id, turma_identifier)
VALUES (6, 2)

INSERT INTO utilizador_turma (utilizador_id, turma_identifier)
VALUES (2, 2)

SELECT * FROM utilizador

INSERT INTO utilizador (user_name, user_password, user_morada, user_email, user_points, user_admin, user_pt, user_nutri)
VALUES ('José Albergaria', 'jose765', 'Rua Armindo Rodrigues', 'albergariajose65@gmail.com', 4599, '0', '1', '0')

SELECT * FROM evento

INSERT INTO evento (evento_titulo, evento_descricao, evento_local_id, evento_data, evento_criador_id, evento_terminado)
VALUES ('Encontro de Crossfit', 'Encontro de amantes de crossfit', 4, '2022-05-29', 3, '0')


INSERT INTO evento (evento_titulo, evento_descricao, evento_local_id, evento_data, evento_criador_id, evento_terminado)
VALUES ('Gym Lovers Meeting', 'Encontro de amantes de ginásio', 4, '2022-04-01', 21, '1')

ALTER TABLE pedido 
DROP COLUMN pedido_encontro_data

ALTER TABLE pedido
ADD COLUMN pedido_profissional_id int 

ALTER TABLE pedido 
ADD CONSTRAINT fk_pedido_profissional_id FOREIGN KEY (pedido_profissional_id) REFERENCES utilizador (user_id)

INSERT INTO pedido (pedido_titulo, pedido_desc, pedido_local_id, pedido_utilizador_id, pedido_terminada, pedido_data, pedido_tipo_id, pedido_estado_id, pedido_profissional_id)
VALUES ('Consulta de Rotina', 'Consulta com Nutricionista para rotina', 4, 6, '0', '2022-04-29', 2, 4, 4)

INSERT INTO pedido (pedido_titulo, pedido_desc, pedido_local_id, pedido_utilizador_id, pedido_terminada, pedido_data, pedido_tipo_id, pedido_estado_id, pedido_profissional_id)
VALUES ('Treino com o PT', 'Sessão de yoga com o PT', 8, 5, '1', '2022-03-14', 1, 2, 21)

SELECT * FROM utilizador

SELECT * FROM pedido_estado

SELECT * FROM pedido_tipo

SELECT * FROM place

SELECT * FROM pedido_estado

SELECT * FROM comunidade

INSERT INTO comunidade (comunidade_titulo, comunidade_desc)
VALUES ('Comunidade de Crossfit', 'Comunidade de Crossfit da BodyHealth')

INSERT INTO comunidade (comunidade_titulo, comunidade_desc)
VALUES ('Comunidade de Crossfit', 'Comunidade de Crossfit da BodyHealth')

ALTER TABLE comunidade
ADD COLUMN comunidade_criador_id int

ALTER TABLE comunidade
ADD CONSTRAINT fk_comunidade_criador_id FOREIGN KEY (comunidade_criador_id) REFERENCES utilizador (user_id)


SELECT * FROM artigo

DELETE FROM comunidade WHERE comunidade_id = 1


INSERT INTO marcacao_favorito_ementa (utilizador_id, ementa_id, is_ementa_favorito)
VALUES (6, 2, '1')

INSERT INTO marcacao_favorito_exercicio (utilizador_id, exercicio_id, is_exercicio_favorito)
VALUES (21, 3, '0')

INSERT INTO marcacao_favorito_plano (utilizador_id, plano_treino_id, is_plano_favorito)
VALUES (5, 1, '0')

INSERT INTO marcacao_favorito_receita (utilizador_id, receita_id, is_receita_favorito)
VALUES (3, 3, '1')

SELECT receita.receita_id, receita.receita_titulo, receita.receita_desc, receita.receita_utilizador_id, receita_ingrediente.receita_ingrediente_id, ingrediente.ingrediente_id, ingrediente.ingrediente_nome, utilizador.user_name, receita.receita_base_id, item_base.basee_nome ,receita.receita_categoriaa_id  FROM receita
INNER JOIN receita_ingrediente ON receita_ingrediente.recipe_id = receita.receita_id
INNER JOIN ingrediente ON ingrediente.ingrediente_id = receita_ingrediente.ingredient_id
INNER JOIN utilizador ON receita.receita_utilizador_id = utilizador.user_id
INNER JOIN item_base ON  item_base.basee_id = receita.receita_base_id
WHERE receita.receita_id = 

SELECT ementa.ementa_

SELECT * FROM receita

SELECT * FROM utilizador

IN

------------- OBTER OS GRUPOS DE UM UTILIZADOR ------------------------

SELECT turma.turma_id, turma.turma_titulo, turma.turma_desc, utilizador_turma.aluno_id, utilizador.user_name, utilizador.user_id FROM turma 
INNER JOIN utilizador_turma ON utilizador_turma.turma_identifier = turma.turma_id  
INNER JOIN utilizador ON utilizador.user_id = utilizador_turma.utilizador_id
WHERE utilizador.user_id = 6

--OBTER PARTICIPANTES DE UM GRUPO (PARAMETRO -> ID DA TURMA)

SELECT turma.turma_id, turma.turma_titulo, turma.turma_desc, utilizador_turma.aluno_id, utilizador_turma.utilizador_id, utilizador.user_name FROM turma
INNER JOIN utilizador_turma ON utilizador_turma.turma_identifier = turma.turma_id
INNER JOIN utilizador ON utilizador.user_id = utilizador_turma.turma_identifier 
WHERE turma.turma_id = 



-----------------------------------------------------------------

--ADICIONAR UM PARTICIPANTE 

INSERT INTO utilizador_turma (utilizador_id, turma_identifier)
VALUES (x, x)


-------------------------------------------------------------------

DELETE FROM utilizador_turma
WHERE utilizador_id = 'input do id do utilizador' AND turma_identifier = 'input do id da turma'


-------------------------------------------------------------------

--> ADICIONAR RECEITAS A UMA TURMA 

     --CODIGO--

--> ADICIONAR EMENTAS A UMA TURMA

     --CODIGO--

--> ADICIONAR EXERCICIOS A UMA TURMA


     --CÓDIGO--

--> ADICIONAR PLANOS DE TREINO A UMA TURMA

     --CÓDIGO--


---------------------------------------------------------------------------

--MÉTODOS DE PRODUTOS DA LOJA


--> OBTER OS PRODUTOS NA LOJA (POR CATEGORIA)

SELECT produto.produto_titulo, produto.produto_desc, produto.produto_preco, produto.produto_points, produto_category.prod_category FROM produto
INNER JOIN produto_category ON produto_category.produto_category_id = produto.produto_categoria_id
WHERE produto_categoria_id = 'id da categoria'


--> POST DE UM ELEMENTO PARA A GETLIST (ITEMS ADQUIRIDOS)

INSERT INTO productsgetlist (isget, product_id, utilizador_id)
VALUES ('1', 6, 3)

SELECT * FROM productsgetlist

DELETE FROM productsgetlist WHERE get_product_position_id = 12

--> OBTER GETLIST DE UM UTILIZADOR (PRODUTOS ADQUIRIDOS)

SELECT productsgetlist.get_product_position_id, produto.produto_id ,produto.produto_titulo, produto.produto_points , produto.produto_desc, utilizador.user_id FROM productsgetlist
INNER JOIN produto ON produto.produto_id = productsgetlist.product_id
INNER JOIN utilizador ON utilizador.user_id = productsgetlist.utilizador_id
WHERE productsgetlist.utilizador_id = 'id do utilizador' AND productsgetlist.isget = '1'

--> VOLTAR A ADICIONAR UM PRODUTO Á GETLIST QUE FOI REMOVIDO

UPDATE productsgetlist
SET isget = '1'
WHERE product_id = 'id do produto' AND utilizador_id = 'id do utilizador'

---> DESMARCAR / REMOVER PRODUTO DA GETLIST

UPDATE productsgetlist
SET isget = '0'
WHERE product_id = 'id do produto' AND utilizador_id = 'id do utilizador'


---------------------------------------------------------------------------------------------------------------------------------------------------------

--- FILTRAR EXERCICIOS POR CATEGORIA ---

SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_utilizador_id, utilizador.user_name FROM exercicio 
INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id
WHERE exercicio.exercicio_utilizador_id = 'input do id do utilizador' AND exercicio.exercicio_tipo_id = 'categoria id'


---------------OBTER EXERCICIOS FAVORITOS DO UTILIZADOR -----------------------

SELECT marcacao_favorito_exercicio.favorito_exercicio_id , utilizador.user_id, exercicio.exercicio_id, exercicio.exercicio_titulo ,marcacao_favorito_exercicio.is_exercicio_favorito FROM marcacao_favorito_exercicio
INNER JOIN utilizador ON utilizador.user_id = marcacao_favorito_exercicio.utilizador_id
INNER JOIN exercicio ON exercicio.exercicio_id = marcacao_favorito_exercicio.exercicio_id
WHERE marcacao_favorito_exercicio.is_exercicio_favorito = '1' AND marcacao_favorito_exercicio.utilizador_id = 'valor do id'

--------------- OBTER PLANOS FAVORITOS DO UTILIZADOR --------------------------

SELECT marcacao_favorito_plano.favorito_plano_id , utilizador.user_id, plano.plano_treino_id, plano.plano_titulo ,marcacao_favorito_plano.is_plano_favorito FROM marcacao_favorito_plano
INNER JOIN utilizador ON utilizador.user_id = marcacao_favorito_plano.utilizador_id
INNER JOIN plano ON plano.plano_treino_id = marcacao_favorito_plano.plano_treino_id
WHERE marcacao_favorito_plano.is_plano_favorito = '0' AND marcacao_favorito_plano.utilizador_id = 'valor do id'

----------------------- CRIAR NOVO EXERCICIO ----------------------

INSERT INTO exercicio (exercicio_titulo, exercicio_desc, exercicio_num_series, exercicio_num_repeticoes, exercicio_dificuldade_id, exercicio_tipo_id, exercicio_utilizador_id, aprovacao_pt)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)



----------------------- CRIAR NOVO PLANO DE TREINO ----------------

INSERT INTO plano (plano_titulo, plano_treino_desc, plano_utilizador_id, plano_treino_aprovacao_pt, plano_treino_tipo_aprovacao_id)
VALUES ($1, $2, $3, $4, $5)

----------------------- OBTER DETALHES DE UM EXERCICIO -------------

SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, utilizador.user_id, utilizador.user_name FROM exercicio
INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id 
WHERE exercicio_id = 'id do exercicio'

   --DUVIDA NESTE MÉTODO -> COMO MOSTRAR O TITULO DA DIFICULDADE E DO TIPO

------------------- OBTER DETALHES DE UM PLANO DE TREINO ----------------

SELECT plano.plano_treino_id, plano.plano_titulo, plano.plano_treino_desc, plano.plano_treino_aprovacao_pt, plano.plano_treino_tipo_aprovacao_id, utilizador.user_id FROM plano
INNER JOIN utilizador ON utilizador.user_id = plano.plano_utilizador_id 
WHERE plano_treino_id = 'id do plano'

--DUVIDA NESTE MÉTODO -> COMO MOSTRAR DETALHES DA APROVACAO

--------------------------------------------------------------------- MÉTODOS DOS EVENTOS --------------------------------------------------------------------------------------------

--OBTER OS EVENTOS DE UM UTILIZADOR 

SELECT evento.evento_id, evento.evento_titulo, evento.evento_descricao, evento.evento_local_id, evento.evento_data, utilizador.user_id, evento.evento_terminado, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM evento
INNER JOIN utilizador ON utilizador.user_id = evento.evento_criador_id
INNER JOIN place ON place.local_id = evento.evento_local_id
WHERE utilizador.user_id = 'input do id do utilizador'

--ORDENAR OS EVENTOS DE UM UTILIZADOR

SELECT evento.evento_id, evento.evento_titulo, evento.evento_descricao, evento.evento_local_id, evento.evento_data, utilizador.user_id, evento.evento_terminado, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM evento
INNER JOIN utilizador ON utilizador.user_id = evento.evento_criador_id
INNER JOIN place ON place.local_id = evento.evento_local_id
WHERE utilizador.user_id = 'input do id do utilizador'
ORDER BY evento.evento_data DESC

--CRIAR NOVO EVENTO

INSERT INTO evento (evento_titulo, evento_descricao, evento_local_id, evento_data, evento_criador_id, evento_terminado)
VALUES ($1, $2, $3, $4, $5, $6)

--APAGAR EVENTO

DELETE FROM evento
WHERE evento.evento_id = 'input do id do evento'

--MARCAR EVENTO COMO TERMINADO

UPDATE evento
SET evento_terminado = '1'
WHERE evento.evento_id = 'id do evento'

--MARCAR EVENTO COMO NÃO-TERMINADO

UPDATE evento
SET evento_terminado = '0'
WHERE evento.evento_id = 'id do evento'

------------------------------------------------------------------- MÉTODOS DE PEDIDO --------------------------------------------------------------------------------------

---OBTER TODOS OS PEDIDOS



---OBTER TODOS OS PEDIDOS DO UTILIZADOR (AULAS E CONSULTAS)

SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido
INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id
INNER JOIN place ON place.local_id = pedido.pedido_local_id
WHERE utilizador.user_id = 'input do id do utilizador'

---OBTER PEDIDOS COM CATEGORIA 'AULA' DO UTILIZADOR

SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido
INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id
INNER JOIN place ON place.local_id = pedido.pedido_local_id
WHERE utilizador.user_id = 'id do utilizador' AND pedido.pedido_tipo_id = 1

---OBTER PEDIDOS COM CATEGORIA 'CONSULTA' DO UTILIZADOR

SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido
INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id
INNER JOIN place ON place.local_id = pedido.pedido_local_id
WHERE utilizador.user_id = 'id do utilizador' AND pedido.pedido_tipo_id = 2


---ADICIONAR NOVO PEDIDO

INSERT INTO pedido (pedido_titulo, pedido_desc, pedido_local_id, pedido_utilizador_id, pedido_terminada, pedido_data, pedido_tipo_id, pedido_estado_id, pedido_profissional_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)

---APAGAR PEDIDO

DELETE FROM pedido
WHERE pedido.pedido_id = 'input do id do pedido'

---ORDENAR OS PEDIDOS (CONSULTA)

SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido
INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id
INNER JOIN place ON place.local_id = pedido.pedido_local_id
WHERE utilizador.user_id = 'id do utilizador' AND pedido.pedido_tipo_id = 2
ORDER BY pedido.pedido_data DESC

---ORDENAR OS PEDIDOS (AULA)

SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido
INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id
INNER JOIN place ON place.local_id = pedido.pedido_local_id
WHERE utilizador.user_id = 'id do utilizador' AND pedido.pedido_tipo_id = 1
ORDER BY pedido.pedido_data DESC

---ORDENAR OS PEDIDOS (TODOS)

SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido
INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id
INNER JOIN place ON place.local_id = pedido.pedido_local_id
WHERE utilizador.user_id = 'input do id do utilizador'
ORDER BY pedido.pedido_data DESC

---OBTER AULAS MARCADAS (OBTER AULAS DO UTILIZADOR) -------------------------**************************ACABAR MÉTODO********************************-----------------------------------

SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido
INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id
INNER JOIN place ON place.local_id = pedido.pedido_local_id
WHERE utilizador.user_id = 'id do utilizador' AND pedido.pedido_tipo_id = 1 AND pedido.pedido_estado_id = 'id do estado'
ORDER BY pedido.pedido_data DESC

---ACEITAR UMA AULA (EXCLUSIVO PT)


UPDATE pedido
SET pedido_estado_id = 2
WHERE pedido_utilizador_id = 'input do utilizador' AND pedido_tipo_id = 1

---RECUSAR UMA AULA (EXCLUSIVO PT)

UPDATE pedido
SET pedido_estado_id = 3
WHERE pedido_utilizador_id = 'input do utilizador' AND pedido_tipo_id = 1

---ACEITAR UMA CONSULTA (EXCLUSIVO NUTRICIONISTA)

UPDATE pedido
SET pedido_estado_id = 2
WHERE pedido_utilizador_id = 'input do utilizador' AND pedido_tipo_id = 1

   --CÓDIGO--

---RECUSAR UMA CONSULTA (EXCLUSIVO NUTRICIONISTA)

UPDATE pedido
SET pedido_estado_id = 3
WHERE pedido_utilizador_id = 'input do utilizador' AND pedido_tipo_id = 1

---MARCACAO DE RECEITA FAVORITO

INSERT INTO marcacao_favorito_receita (utilizador_id, receita_id, is_receita_favorito)
VALUES ($1, $2, $3)

--DESMARCAR APÓS A PRIMEIRA MARCACAO

UPDATE marcacao_favorito_receita
SET is_receita_favorito = '0'
WHERE utilizador_id = 'id do utilizador' AND receita_id = 'id da receita'

--REMARCAR

UPDATE marcacao_favorito_receita
SET is_receita_favorito = '1'
WHERE utilizador_id = 'id do utilizador' AND receita_id = 'id da receita'

---MARCACAO DE EMENTA FAVORITO

INSERT INTO marcacao_favorito_ementa (utilizador_id, ementa_id, is_ementa_favorito)
VALUES ($1, $2, $3)

---DESMARCAR APOS A PRIMEIRA MARCACAO

UPDATE marcacao_favorito_ementa
SET is_ementa_favorito = '0'
WHERE utilizador_id = 'id do utilizador' AND ementa_id = 'id da ementa'

---REMARCAR

UPDATE marcacao_favorito_ementa
SET is_ementa_favorito = '1'
WHERE utilizador_id = 'id do utilizador' AND ementa_id = 'id da ementa'


---MARCACAO DE EXERCICIO FAVORITO

INSERT INTO marcacao_favorito_exercicio (utilizador_id, exercicio_id, is_exercicio_favorito)
VALUES ($1, $2, $3)

--DESMARCAR APÓS A PRIMEIRA MARCACAO

UPDATE marcacao_favorito_exercicio
SET is_exercicio_favorito = '0'
WHERE utilizador_id = 'id do utilizador' AND exercicio_id = 'id do exercicio'

--REMARCAR

UPDATE marcacao_favorito_exercicio
SET is_exercicio_favorito = '1'
WHERE utilizador_id = 'id do utilizador' AND exercicio_id = 'id do exercicio'



---MARCACAO DE PLANO FAVORITO

INSERT INTO marcacao_favorito_plano (utilizador_id, exercicio_id, is_exercicio_favorito)
VALUES ($1, $2, $3)

--DESMARCAR APÓS A PRIMEIRA MARCACAO

UPDATE marcacao_favorito_plano
SET is_plano_favorito = '0'
WHERE utilizador_id = 'id do utilizador' AND plano_id = 'id do plano'

--REMARCAR

UPDATE marcacao_favorito_plano
SET is_plano_favorito = '1'
WHERE utilizador_id = 'id do utilizador' AND plano_id = 'id do plano'



-----------------------OBTER OS DADOS FÍSICOS DE UM UTILIZADOR --------------------------

SELECT * FROM dados_utilizador
WHERE user_utilizador_id = 'id do utilizador'

------------------------------- INSERIR NOVO IMC ----------------------------------------

UPDATE dados_utilizador
SET user_dados_imc = 'novo valor do imc'
WHERE user_utilizador_id = 'id do utilizador'

---O MESMO UPDATE OCORRE COM TODOS OS OUTROS DADOS FÍSICOS (SÓ ALTERA A COLUNA DO 'SET')

-------------------------- ATUALIZAR DADOS DE UM UTILIZADOR ---------------------------



-------------------------------------------MÉTODOS DE ARTIGOS E NOTICIAS --------------------------------------------


--> OBTER ARTIGOS (CATEGORIA DE ARTIGOS)

SELECT artigo_leitura_titulo, artigo_leitura_corpo, artigo_leitura_data, artigo_read_type.artigo_reader_type, artigo_category.artigo_category, utilizador.user_name FROM artigo
INNER JOIN artigo_read_type ON artigo_read_type.artigo_reader_type_id = artigo.artigo_read_type_id
INNER JOIN artigo_category ON artigo_category.artigo_category_id = artigo.artigo_category_id
INNER JOIN utilizador ON utilizador.user_id = artigo.comunidade_utilizador_id
WHERE artigo.artigo_category_id = 'id da categoria do artigo'


--> OBTER NOTICIAS (CATEGORIA DE NOTICIAS)

SELECT artigo_leitura_titulo, artigo_leitura_corpo, artigo_leitura_data, artigo_read_type.artigo_reader_type, artigo_category.artigo_category, utilizador.user_name FROM artigo
INNER JOIN artigo_read_type ON artigo_read_type.artigo_reader_type_id = artigo.artigo_read_type_id
INNER JOIN artigo_category ON artigo_category.artigo_category_id = artigo.artigo_category_id
INNER JOIN utilizador ON utilizador.user_id = artigo.comunidade_utilizador_id
WHERE artigo.artigo_category_id = 'id da categoria do artigo'


--> CRIAR NOVO ARTIGO (NOTICIA OU ARTIGO DE LEITURA)

INSERT INTO artigo (artigo_leitura_titulo, artigo_leitura_corpo, artigo_leitura_data, artigo_read_type_id, artigo_category_id, comunidade_utilizador_id)
VALUES ($1, $2, $3, $4, $5, $6)





----------------- ORDENAR ARTIGOS POR DATA -----------------------------NÃO TERMINADO---------------------------------------

SELECT evento.evento_id, evento.evento_titulo, evento.evento_descricao, evento.evento_local_id, evento.evento_data, utilizador.user_id, evento.evento_terminado, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM evento
INNER JOIN utilizador ON utilizador.user_id = evento.evento_criador_id
INNER JOIN place ON place.local_id = evento.evento_local_id
WHERE utilizador.user_id = 'input do id do utilizador'
ORDER BY evento.evento_data DESC

---------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------- OUTRAS QUERIES DE ARTIGOS E EXERCICIOS -----------------------------------------------------------


SELECT artigo_leitura_titulo, artigo_leitura_corpo, artigo_leitura_data, artigo_read_type.artigo_reader_type, artigo_category.artigo_category, utilizador.user_name FROM artigo
INNER JOIN artigo_read_type ON artigo_read_type.artigo_reader_type_id = artigo.artigo_read_type_id
INNER JOIN artigo_category ON artigo_category.artigo_category_id = artigo.artigo_category_id
INNER JOIN utilizador ON utilizador.user_id = artigo.comunidade_utilizador_id
WHERE artigo.artigo_read_type_id = 'id da categoria do artigo'


SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_utilizador_id,exercicio_tipo.exercicio_tipo_titulo, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes,exercicio_dificuldade.exercicio_dificuldade, utilizador.user_name FROM exercicio
INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id
INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id
INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id
WHERE exercicio.exercicio_utilizador_id = 'id do utilizador' AND exercicio.exercicio_tipo_id = 'categoria id'


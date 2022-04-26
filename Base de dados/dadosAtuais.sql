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



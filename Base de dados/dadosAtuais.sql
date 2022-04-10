
-- CODE SQL

--CRIAÇÃO DA TABELA UTILIZADOR

CREATE TABLE utilizador(

user_id SERIAL primary key,
user_name varchar(30) NOT NULL,
user_password varchar(45) NOT NULL,
user_morada varchar(180),
user_email varchar(100),
user_points int DEFAULT 0,
user_user_dados_id int


);



--CRIAÇÃO DA TABELA DE DADOS DO UTILIZADOR



CREATE TABLE dados_utilizador(

user_dados_id SERIAL primary key,
user_peso real DEFAULT 0.0,
user_altura real DEFAULT 0.0,
user_imc real DEFAULT 0.0,
user_gordura_visceral real DEFAULT 0.0,
user_gordura_subcutanea real DEFAULT 0.0,
user_pressao_arterial_media real DEFAULT 0.0 

);

--CRIAÇÃO DA TABELA DE COMUNIDADE

CREATE TABLE comunidade(

comunidade_id SERIAL primary key,
comunidade_titulo varchar(30) NOT NULL,
comunidade_desc varchar(500)

);

--CRIAÇÃO DA TABELA DE PARTICIPANTE DE UMA COMUNIDADE

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
artigo_leitura_corpo varchar(10000) NOT NULL,
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

--REMOVER O receita_ingrediente_id
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

INSERT INTO item_aprovacao(tipoaprovacao_nome) VALUES ('Verificado');
INSERT INTO item_aprovacao(tipoaprovacao_nome) VALUES ('Não Verificado');

CREATE TABLE item_base(

basee_id SERIAL primary key,
basee_nome varchar(35)
	
);


INSERT INTO item_base(basee_nome) VALUES ('Carne'), ('Peixe'), ('Vegan'), ('Snack'), ('Frutas'), ('Outros');


CREATE TABLE receita_categoria(

receita_categoria_id SERIAL primary key,
receita_categoria_nome varchar(45)

);

INSERT INTO receita_categoria(receita_categoria_nome) 
VALUES ('Entrada'), ('Prato Principal'), ('Sobremesa'), ('Bebida'), ('Outros');

CREATE TABLE ementa_categoria(

ementa_categoria_id SERIAL primary key,
ementa_categoria_nome varchar(45)

);

INSERT INTO ementa_categoria(ementa_categoria_nome) 
VALUES ('Pequeno-Almoço'), ('Lanche'), ('Almoço'), ('Jantar'), ('Outro');
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



--------------------------------------------APLICAR SOMENTE APÓS ATUALIZAÇÃO DO MODELO ER (EXERCICIOS E PLANOS)---------------------------------------------------------


CREATE TABLE exercicio_plano(

exercicio_plano_id SERIAL primary key,
exercise_id int,
p_treino_id int

);


CREATE TABLE plano(

plano_treino_id SERIAL primary key,
plano_titulo varchar(80) NOT NULL,
plano_treino_desc varchar(600) NOT NULL,
plano_utilizador_id int

);

CREATE TABLE nutricionista(

nutricionista_id SERIAL primary key

) inherits (utilizador);

--ADICIONAR CAMPOS DE NUMERO DE PEDIDO E ESTADO DO PEDIDO--
CREATE TABLE consulta(

consulta_id SERIAL primary key,
consulta_titulo varchar(50) NOT NULL,
consulta_desc varchar(300) NOT NULL,
consulta_local_id int,
consulta_pedido_id int,
consulta_nutricionista_id int,
consulta_utilizador_id int,
consulta_terminada bit, --AS CONSULTAS TERMINADAS SÃO EXIBIDAS NA LISTA DE 'ULTIMAS CONSULTAS',
consulta_data date DEFAULT CURRENT_DATE
	
);

CREATE TABLE pedido(

pedido_id SERIAL primary key,
pedido_aceite bit
	
);

ALTER TABLE utilizador
ADD CONSTRAINT fk_user_user_dados_id FOREIGN KEY(user_user_dados_id) REFERENCES dados_utilizador (user_dados_id);

ALTER TABLE consulta
ADD CONSTRAINT fk_consulta_nutricionista_id FOREIGN KEY(consulta_nutricionista_id) REFERENCES nutricionista(nutricionista_id);

ALTER TABLE consulta
ADD CONSTRAINT fk_consulta_utilizador_id FOREIGN KEY(consulta_utilizador_id) REFERENCES utilizador(user_id);

ALTER TABLE consulta
ADD CONSTRAINT fk_consulta_pedido_id FOREIGN KEY(consulta_pedido_id) REFERENCES pedido(pedido_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_tipo_aprovacao_id FOREIGN KEY(ementa_tipo_aprovacao_id) REFERENCES item_aprovacao (aprovacao_tipo_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_base_id FOREIGN KEY(ementa_base_id) REFERENCES item_base (basee_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_categoriaa_id FOREIGN KEY(ementa_categoriaa_id) REFERENCES ementa_categoria (ementa_categoria_id);

ALTER TABLE ementa
ADD CONSTRAINT fk_ementa_utilizador_id FOREIGN KEY(ementa_utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE ementa_receita
ADD CONSTRAINT fk_receita_id FOREIGN KEY(receita_id) REFERENCES receita (receita_id);

ALTER TABLE ementa_receita
ADD CONSTRAINT fk_ementa_id FOREIGN KEY(ementa_id) REFERENCES ementa (ementa_id);

--CORRIGIR RELAÇÃO ENTRE exercicio e exercicio_plano NO MODELO ER

ALTER TABLE exercicio
ADD CONSTRAINT fk_exercicio_dificuldade_id FOREIGN KEY(exercicio_dificuldade_id) REFERENCES exercicio_dificuldade (exercicio_dificuldade_id);

ALTER TABLE exercicio
ADD CONSTRAINT fk_exercicio_tipo_id FOREIGN KEY(exercicio_tipo_id) REFERENCES exercicio_tipo (exercicio_tipo_id);

ALTER TABLE exercicio
ADD CONSTRAINT fk_exercicio_utilizador_id FOREIGN KEY(exercicio_utilizador_id) REFERENCES utilizador (user_id);

ALTER TABLE artigo
ADD CONSTRAINT fk_comunidade_utilizador_id FOREIGN KEY(comunidade_utilizador_id) REFERENCES comunidade_utilizador (comunidade_user_id);

ALTER TABLE artigo
ADD CONSTRAINT fk_artigo_read_type_id FOREIGN KEY(artigo_read_type_id) REFERENCES artigo_read_type (artigo_reader_type_id);

ALTER TABLE artigo
ADD CONSTRAINT fk_artigo_category_id FOREIGN KEY(artigo_category_id) REFERENCES artigo_category (artigo_category_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_tipo_aprovacao_id FOREIGN KEY(receita_tipo_aprovacao_id) REFERENCES item_aprovacao (aprovacao_tipo_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_base_id FOREIGN KEY(receita_base_id) REFERENCES item_base (basee_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_categoriaa_id FOREIGN KEY(receita_categoriaa_id) REFERENCES receita_categoria (receita_categoria_id);

ALTER TABLE receita
ADD CONSTRAINT fk_receita_utilizador_id FOREIGN KEY(receita_utilizador_id) REFERENCES utilizador (user_id);


CREATE TABLE utilizador(

user_id SERIAL primary key,
user_name varchar(30) NOT NULL,
user_password varchar(45) NOT NULL,
user_morada varchar(180),
user_email varchar(100),
user_points int DEFAULT 0,
user_user_dados_id int


);


ALTER TABLE utilizador
ADD CONSTRAINT fk_user_user_dados_id FOREIGN KEY(user_user_dados_id) REFERENCES dados_utilizador (user_dados_id);

CREATE TABLE dados_utilizador(

user_dados_id SERIAL primary key,
user_peso real DEFAULT 0.0,
user_altura real DEFAULT 0.0,
user_imc real DEFAULT 0.0,
user_gordura_visceral real DEFAULT 0.0,
user_gordura_subcutanea real DEFAULT 0.0,
user_pressao_arterial_media real DEFAULT 0.0 

);

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
artigo_leitura_corpo varchar(10000) NOT NULL,
artigo_leitura_data date DEFAULT current_date,
artigo_read_type_id int,
artigo_category_id int,
comunidade_utilizador_id int

);


ALTER TABLE artigo
ADD CONSTRAINT fk_comunidade_utilizador_id FOREIGN KEY(comunidade_utilizador_id) REFERENCES comunidade_utilizador (comunidade_user_id);

ALTER TABLE artigo
ADD CONSTRAINT fk_artigo_read_type_id FOREIGN KEY(artigo_read_type_id) REFERENCES artigo_read_type (artigo_reader_type_id);

ALTER TABLE artigo
ADD CONSTRAINT fk_artigo_category_id FOREIGN KEY(artigo_category_id) REFERENCES artigo_category (artigo_category_id);

CREATE TABLE artigo_read_type(

artigo_reader_type_id SERIAL primary key,
artigo_reader_type varchar(20) NOT NULL

);

CREATE TABLE artigo_category(

artigo_category_id SERIAL primary key,
artigo_category varchar(20) NOT NULL

)

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


CREATE TABLE nutricionista(

nutricionista_id SERIAL primary key

) inherits (utilizador);

--ADICIONAR CAMPOS DE NUMERO DE PEDIDO E ESTADO DO PEDID
CREATE TABLE consulta(

consulta_id SERIAL primary key,
consulta_titulo varchar(50) NOT NULL,
consulta_desc varchar(300) NOT NULL,
consulta_local_id int,
consulta_pedido_id int,


)

SELECT * from nutricionista
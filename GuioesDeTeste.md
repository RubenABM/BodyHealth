# BodyHealth: Guiões de Teste

Para compreender o progresso do utilizador na plataforma, foram desenvolvidos 3 guiões de teste. O primeiro guião inclui o 'Core' da aplicação web (Consulta e Criação de receitas, exercicios, planos de treino, challenges e ementas). O segundo guião de teste, pretende abordar a utilização do Mapa Interativo e os Dashboard's existentes na 'BodyHealth', e, por fim, o terceiro guião de teste tem como objetivo demonstrar algumas funcionalidades secundárias. 

*NOTA: Todas as interfaces exibidas nos guiões são interfaces-demo, sendo utilizadas somente para fins ilustrativos. Os guiões ainda não se encontram funcionais, pois por enquanto, somente existe o conceito do projeto.

## Guião de Teste - Core

### Página Introdutória

|Nº Passo| Passo | Resultado | Estado
|---|---|---|---|
|1| Na página introdutória, o utilizador deverá selecionar o botão de 'Começar'| Redirecionamento para a página de Sign Up / Login para PT's, Nutricionistas ou 'Fitter'| Não Funcional|
|1.1| Alternativamente, na barra de navegação, o utilizador deverá selecionar a aba 'Sobre' | Redirecionamento para a página de 'Sobre' do website. | Não Funcional
|1.3| Alternativamente, na barra de navegação, o utilizador deverá selecionar a aba 'Jornal FIT' | Redirecionamento para o 'Jornal' da plataforma, onde serão exibidos artigos e noticias | Não Funcional
|1.4| Alternativamente, o utilizador deverá fazer 'scroll' na página | Visualização de algumas funcionalidades e principais objetivos do website. | Não Funcional

### Registo e Login

|Nº Passo| Passo | Resultado | Estado
|---|---|---|---|
|1| Na página de login, caso se quiser tornar num 'Fitter' (registo como utilizador normal), preencher os campos requisitados | Preenchimento dos dados para registo do utilizador | Não Funcional
|1.1|Na pagina de login/registo, para se registar como PT, deverá selecionar o icone de PT que se encontra debaixo do formulário ! Redirecionamento para preenchimento dos dados para registo de um PT | Não Funcional
|1.2|Na pagina de login/registo, para se registar como Nutricionista, deverá selecionar o icone de Nutricionista que se encontra debaixo do formulário ! Redirecionamento para preenchimento dos dados para registo de um Nutricionista | Não Funcional
|2| Após preencher os dados corretamente, clicar no botão 'Registar' ou 'Login' | Redirecionamento para a página principal da plataforma | Não Funcional

### Página Principal (HomePage)

|Nº Passo| Passo | Resultado | Estado
|---|---|---|---|
|1| Para um acesso rápido , na aba 'O que queres descobrir hoje?', o utilizador deverá selecionar um dos 'items'. | O utilizador deverá ser redirecionado para a página principal (consulta) respetiva do item selecionado | Não Funcional

*Nota: As restantes funcionalidades da página principal serão abordadas noutro guião.

### Páginas de Consulta 

#### 1 - Consultar e Criar (Receitas e Ementas)

|Nº Passo| Passo | Resultado | Estado
|---|---|---|---|
|1| Na página principal da plataforma, selecionar a opção 'Receitas e Ementas' | Redirecionamento do utilizador para a página de consulta de receitas e ementas | Não Funcional
|2| Para filtrar as receitas, o utilizador deverá selecionar uma das opções relativas á 'base da receita'. | Filtragem das receitas pela base da receita ('Carne', 'Peixe', 'Vegatariano', etc.) | Não Funcional
|3| Para filtrar as receitas por tipo, o utilizador deverá selecionar uma das opções relativas ao 'tipo de receita' | Filtragem das receitas pelo tipo da receita ('Não-Aprovada ou 'Aprovada) | Não Funcional
|4| Para pesquisar uma receita especifica, o utilizador deverá digitar e inserir na barra de pesquisa o nome da receita | Exibição de todas as receitas que contêem uma das palavras inseridas na caixa de pesquisa | Não Funcional
|5| Para ver mais informações sobre uma receita, o utilizador deverá selecionar um dos items da grelha de receitas | Exibição de informações especificas sobre uma receita selecionada. | Não Funcional
|5.1| Clicar no icone de um 'coração' que se encontra na tela de informações | Marcar uma receita como favorita | Não Funcional
|6| No canto superior esquerdo da tela, o utilizador deve clicar no botão 'Criar Receita' | Redirecionamento do utilizador para a página de criação de uma receita. | Não Funcional
|6.1| Na página de criação, o utilizador deverá inserir e selecionar os dados requisitados e submetê-los clicando no botão 'Criar Receita' (descritos na Nota 2)| Criação de uma receita | Não Funcional
|7| Na tela de consultas de receitas/ementas, o utilizador pode clicar no botão 'Criar Ementa' que se encontra no canto superior esquerdo da tela. | Redirecionamento do utilizador para a página de criação de uma Ementa | Não Funcional
|9| Na página de criação de uma ementa, o utilizador deverá inserir e selecionar os dados requisitados e submetê-los clicando no botão 'Criar Ementa' (descritos na Nota 3) | Criação de uma ementa | Não Funcional

 
 *Nota: O tipo de receita ('Não-Aprovada' ou 'Aprovada'), identifica que receitas foram aprovadas (ou não), pelos nutricionistas. 
 
 *Nota 2: Os dados a serem inseridos para criar uma nova receita são: título da receita, descrição, categoria (pequeno-almoço, almoço ou jantar), base da receita ('Carne', 'Peixe', 'Vegetariano', etc.) e a seleção de ingredientes que irão compor a receita. 
 
 *Noto 3: Por default, a ementa/receita é não-aprovada.
 
*Nota 4: Os dados a serem inseridos para criar uma nova ementa são: titulo, descrição, categoria (pequeno-almoço, almoço ou jantar), base da ementa ('Carne', 'Peixe', 'Vegetariana', etc.). Adicionalmente, devem ser selecionados para a ementa: Entrada, Prato Principal, Sobremesa e Bebida (receitas criadas na plataforma).

#### 2 - Consultar e Criar (Exercícios e Planos de Treino)

|Nº Passo| Passo | Resultado | Estado
|---|---|---|---|
|1| Na página principal da plataforma, selecionar a opção 'Planos de Treino' | Redirecionamento do utilizador para a página de consulta de exercicios e Planos de Treino| Não Funcional
|2| Para filtrar os exercicios, o utilizador deverá selecionar uma das opções relativas á 'base do exercicio'. | Filtragem dos exercicios pela sua 'base' ('Cardio', 'Braços', 'Perna', etc.) | Não Funcional
|3| Para filtrar os exercicios por tipo, o utilizador deverá selecionar uma das opções relativas ao 'tipo de exercicio' | Filtragem de exercicios pelo tipo de exercicio ('Não-Aprovado ou 'Aprovado) | Não Funcional
|4| Para pesquisar um exercicio especifico, o utilizador deverá digitar e inserir na barra de pesquisa o nome do exercicio que pretende encontrar | Exibição de todas as receitas que contêem uma das palavras inseridas na caixa de pesquisa | Não Funcional
|5| Para ver mais informações sobre um exercicio, o utilizador deverá selecionar um dos items da grelha de exercicios | Exibição de informações especificas sobre um exercicio selecionado. | Não Funcional
|5.1| Clicar no icone de um 'coração' que se encontra na tela de informações | Marcar um exercicio como favorito | Não Funcional
|6| No canto superior esquerdo da tela, o utilizador deve clicar no botão 'Criar Exercicio' | Redirecionamento do utilizador para a página de criação de um exercicio. | Não Funcional
|6.1| Na página de criação, o utilizador deverá inserir e selecionar os dados requisitados e submetê-los clicando no botão 'Criar Exercício' (descritos na Nota 5)| Criação de um novo exercicio do utilizador | Não Funcional
|7| Na tela de consultas de exercicios/planos de treino , o utilizador pode clicar no botão 'Criar Plano de Treino' que se encontra no canto superior esquerdo da tela. | Redirecionamento do utilizador para a página de criação de um Plano de Treino. | Não Funcional
|9| Na página de criação de uma Plano de Treino, o utilizador deverá inserir e selecionar os dados requisitados e submetê-los clicando no botão 'Criar Plano' (descritos na Nota 6) | Criação de uma ementa | Não Funcional

 *Nota 5: Os dados a serem inseridos para criar um novo exercicio são: título do exercicio, descrição (numero de repetições do exercicio, etc.), dificuldade (Fácil, Médio, Dificil) e base do exercicio (Cardio, Braços, Perna, etc.). Adicionalmente poderá se adicionar uma imagem do exercicio.
 
 *Nota 6: Os dados a serem inseridos para criar um novo plano de treino são: título do plano de treino, descrição, dificuldade (Fácil, Médio, Dificil). Adicionalmente, devem ser selecionados para o plano de treino, vários exercicios criados na plataforma (de vários tipos e 'bases').
 
 
 
 

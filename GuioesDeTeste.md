# BodyHealth: Guiões de Teste

Para compreender o progresso do utilizador na plataforma, foram desenvolvidos 3 guiões de teste. O primeiro guião inclui o 'Core' da aplicação web (Consulta e Criação de receitas, exercicios, planos de treino, challenges e ementas). O segundo guião de teste, pretende abordar a utilização do Mapa Interativo e os Dashboard's existentes na 'BodyHealth', e, por fim, o terceiro guião de teste tem como objetivo demonstrar algumas funcionalidades secundárias. 

*NOTA: Todas as interfaces exibidas nos guiões são interfaces-demo, sendo utilizadas somente para fins ilustrativos. Os guiões ainda não se encontram funcionais, pois por enquanto, somente existe o conceito do projeto.

## Guião de Teste - Core

### Resumo dos passos:

  Ao entrar no site irá ter uma aba com várias opções no canto superior direito. Irá clicar na opção "Mais” e entrar na aba “Criar ementa”. Nesta página poderá criar a ementa que desejar, escolhendo o título, descrição, categoria, e base da ementa. Depois disto poderá escolher a entrada, o prato principal, a sobremesa e a bebida que desejar.  

   Para criar o treino irá dirigir-se de novo ao canto superior direito, aba “Mais” e escolher a opção “Criar treino”. Nesta página irá escolher o título, descrição e dificuldade do treino. Depois disto poderá selecionar os exercícios que deseja e criar o plano. 

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
|10| Na página de consulta de exercicios, o utilizador poderá aceder aos últimos challenges, que, trocados por pontos, este pode ganhar produtos na loja da plataforma | Não Funcional

 *Nota 5: Os dados a serem inseridos para criar um novo exercicio são: título do exercicio, descrição (numero de repetições do exercicio, etc.), dificuldade (Fácil, Médio, Dificil) e base do exercicio (Cardio, Braços, Perna, etc.). Adicionalmente poderá se adicionar uma imagem do exercicio.
 
 *Nota 6: Os dados a serem inseridos para criar um novo plano de treino são: título do plano de treino, descrição, dificuldade (Fácil, Médio, Dificil). Adicionalmente, devem ser selecionados para o plano de treino, vários exercicios criados na plataforma (de vários tipos e 'bases').
 
 ## Guião de Teste - Mapa Interativo e Dashboard's
 
 ### Mapa Interativo
 
 *Nota: Esta parte do guião foi desenvolvida no 'point-of-view' do utilizador.
 
 |Nº Passo| Passo | Resultado | Estado
 |---|---|---|---|
 |1| Após o utilizador se encontrar 'loggado' na plataforma, este deverá aceder á página do seu perfil (e dashboard), e, na aba 'Aulas Marcadas', clicar no botão 'Mapa', que se encontra em cada item dessa aba. | Redirecionamento do utilizador para o mapa interativo, onde a rota para essa aula previamente selecionada será automaticamente marcada no mapa. | Não Funcional
 |1.1|Alternativamente, poderá aceder ao mapa interativo pela barra lateral de navegação do website, selecionando o item correspondente ao mesmo (identificado com um icone de um mapa). | Redirecionamento do utilizador para o mapa interativo. | Não Funcional
 |2| No mapa interativo, o utilizador poderá selecionar um dos 4 botões acima do mesmo ('Cafés', 'Bares', 'Restaurantes', 'Ginásios') | Filtragem e exibição de locais próximos do utilizador (cafés, bares, restaurantes e ginásios). | Não Funcional
 |3| Na aba 'Encontrar Eventos', o utilizador poderá selecionar um evento da lista, clicando no botão 'ROTA'. | A rota entre a localização atual do utilizador e o local do evento será marcada no mapa. Adicionalmente, este poderá aceder a mais informações sobre um determinado evento da lista (clicando no icone de 'I'). | Não Funcional
 |4| Na aba 'Aulas Marcadas' (caso o utilizador tenha), este poderá selecionar uma aula | A rota entre a localização atual do utilizador e o local da aula será marcada no mapa. Adicionalmente, poderá aceder a mais detalhes sobre uma aula especifica (clicando no icone de 'I'). | Não Funcional
 
 ### Dashboard do Utilizador (Perfil)
 
 |Nº Passo| Passo | Resultado | Estado 
 |---|---|---|---|
 |1| Após o utilizador se encontrar 'loggado' na plataforma, este deverá selecionar o item 'Perfil' da barra lateral de navegação do website | Redirecionamento do utilizador para o seu perfil | Não Funcional
 |1.1| No perfil, o utilizador poderá aceder a uma aba de aulas marcadas e selecionar uma aula | Redirecionamento do utilizador para o mapa interativo, onde uma rota entre a localização do utilizador e o local da aula selecionada é marcada automaticamente. | Não Funcional
 |1.2| O utilizador terá acesso á sua aba de turmas e comunidades onde se encontra inserido. Poderá então, selecionar uma turma ou uma comunidade. | Redirecionamento do utilizador para a página da turma ou da comunidade de utilizadores. | Não Funcional
 |1.3| O 'user' poderá também adicionar pontos ao seu  gráfico de evolução, através do seu IMC | Construção automática do gráfico de evolução do utilizador | Não Funcional
 |1.4| Abaixo da página de perfil, estão exibidas as suas ementas criadas, receitas, exercicios e planos de treino (bem como os seus(as) favorito(a)s)||Não Funcional
 |1.4.1| Através de uma caixa de pesquisa, o utilizador poderá inserir um nome nessa mesma caixa | Pesquisa de ementas, receitas, exercicios e planos de treino criados pelo utilizador e favoritos.
 
 ### Dashboard do PT (BH Learn - Gestão de Turmas e clientes)
 
 |Nº Passo| Passo | Resultado | Estado
 |---|---|---|---|
 |1| Na página introdutória do website, o utilizador deverá clicar no botão 'Começar' | Redirecionamento do utilizador para a página de SignUp e Login. | Funcional
 |2| Na página 'default' de SignUp/Login, o utilizador deverá selecionar o icone de um PT | Exibição do 'form' de SignUp para um Personal Trainer | Não Funcional
 |3| Após se registar ou 'loggar' como PT (deverá ser enviado inclusive um certificado), na barra de navegação lateral, deverá ser selecionado o item 'O meu dashboard - PT' | Redirecionamento do utilizador para o seu dashboard de PT  | Não Funcional
 |4| No dashboard, o PT poderá selecionar, o botão 'Aprovar Treinos' | Exibição de uma grelha com planos de treino criados pela comunidade, onde o PT poderá aprovar ou não planos de treino | Não Funcional
 |4.1| Ainda na parte superior do dashboard, poderá ser selecionado o botão 'Criar Turma' | Exibição de uma nova página para a criação de uma nova turma | Não Funcional
 |4.2| Na zona central da página, estará exibida uma grelha com as turmas que o PT possui. Poderá então, selecionar a opção 'Entrar' | Redirecionamento do PT para a página de gestão da turma previamente selecionada. | Não Funcional
 |4.2.1| Na página de gestão da turma, o PT poderá adicionar novos alunos, criar ementas e planos de treino para a turma, marcar novas aulas e ver o TOP 10 alunos dessa mesma turma, de acordo com os pontos de cada um | Não Funcional
 |4.3| No lado lateral esquerdo, estão exibidas várias abas 'Aulas Marcadas', 'Turmas', 'Comunidades' e 'Pedidos Pendentes de Aulas' | 1 - Na aba 'Aulas Marcadas' estão exibidas as aulas marcadas pelo próprio PT para uma turma, bem como aulas aceites pelo mesmo por parte de utilizadores. 2 - Na aba 'Turmas', são exibidas as turmas que o PT gere. 3 - Na aba 'Comunidades' estão exibidas todas as comunidades de partilha de artigos, etc. onde o PT se encontra inserido. 4 - Na aba 'Pedidos Pendentes de Aulas', são exibidos os ultimos pedidos de aulas particulares por parte dos utilizadores. O PT poderá aceitar ou recusar pedidos de aulas.
 |4.4| Na parte inferior da página estão exibidos os seus planos de treino e ementas criados pelo PT, bem como os seus favoritos. |Exibição de planos de treino e ementas criados pelo PT e os seus favoritos| Não Funcional
 
 ### Dashboard do Nutricionista (BH Learn - Gestão de Clientes)
 
  |Nº Passo| Passo | Resultado | Estado
 |---|---|---|---|
 |1| Na página introdutória do website, o utilizador deverá clicar no botão 'Começar' | Redirecionamento do utilizador para a página de SignUp e Login. | Funcional
 |2| Na página 'default' de SignUp/Login, o utilizador deverá selecionar o icone de um Nutricionista | Exibição do 'form' de SignUp para um Nutricionista| Não Funcional
 |3| Após se registar ou 'loggar' como Nutricionista (deverá ser enviado inclusive um certificado), na barra de navegação lateral, deverá ser selecionado o item 'O meu dashboard - Nutrição' | Redirecionamento do utilizador para o seu dashboard de Nutricionista  | Não Funcional
 |4| No dashboard, o Nutricionista poderá selecionar o botão 'Aprovar Ementas' | Exibição de uma grelha com ementas e receitas criadas pela comunidade, onde o Nutricionista poderá aprovar ou não ementas e receitas | Não Funcional
 |4.1| Ainda na parte superior do dashboard, poderá ser selecionado o botão 'Adicionar cliente' | Exibição de uma nova página para a adição de um novo cliente, sendo exibida uma grelha de utilizadores e uma barra de pesquisa. | Não Funcional
 |4.2| Na zona central da página, estará exibida uma grelha com os clientes que um Nutricionista possui. Poderá então, selecionar a opção 'Ver mais' | Redirecionamento do Nutricionista para a página de gestão do cliente previamente selecionado. | Não Funcional
 |4.2.1| Na página de gestão do cliente, o Nutricionista poderá aceder ás ementas que o aluno possui (criadas pelo Nutricionista), assim como a alguns dados físicos do mesmo (Peso, Altura, Último IMC calculado, Gordura visceral, Gordura subcutânea e Pressão arterial média). Adicionalmente, na zona inferior da página, é possivel visualizar uma lista do histórico de consultas. | | Não Funcional
 |4.2.2| Do lado da lista de ementas, o utilizador deverá selecionar o botão 'Criar Ementa', caso queira criar uma nova ementa para o cliente selecionado. Do lado do histórico de consultas recentes, é possivel clicar no botão 'Criar Consulta', caso pretenda marcar uma nova consulta com o cliente selecionado. Após a marcação, será enviado um pedido de consulta para o cliente, e este poderá (ou não), aceitar a consulta.
 |4.3| No lado lateral esquerdo, estão exibidas várias abas 'Consultas Marcadas', 'Pedidos de consultas' e 'Comunidades' | 1 - Na aba 'Consultas Marcadas' estão exibidas as consultas marcadas pelo próprio Nutricionista para um cliente, bem como consultas aceites pelo mesmo por parte de utilizadores.  2 - Na aba 'Comunidades' estão exibidas todas as comunidades de partilha de artigos, etc. onde o Nutricionista se encontra inserido. 3 - Na aba 'Pedidos de Consultas', são exibidos os ultimos pedidos de consultar particulares por parte dos utilizadores. O Nutricionista poderá aceitar ou recusar pedidos de consultas.
 |4.4| Na parte inferior da página estão exibidos os seus planos de treino e ementas criados pelo PT, bem como os seus favoritos. |Exibição de planos de treino e ementas criados pelo PT e os seus favoritos| Não Funcional
 
 ### Encontrar PT's e Nutricionistas
 
 |Nº Passo| Passo | Resultado | Estado
 |---|---|---|---|
 |1| Após o utilizador estar 'loggado' na sua conta, este deverá, na página principal, selecionar o item 'Personal Trainers' ou 'Nutricionistas'. |Redirecionamento do utilizador para a página de 'Encontrar PT' ou 'Encontrar Nutricionista'| Não Funcional
 |2| Numa dessas páginas, é exibida uma grelha com 20 PT's ou Nutricionistas. Para pesquisar um PT especifico, o utilizador poderá introduzir e inserir um nome nessa caixa de pesquisa | Exibição dos PT's com nome incluido no seu nome de utilizador | Não Funcional
 |3| Na página da grelha, o utilizador poderá filtrar os PT's ou Nutricionistas através da especialidade. (Opcional) | Não Funcional
 
 
 
 

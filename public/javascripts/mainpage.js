window.onload = async function(){

    let recipeName = document.getElementById("nome1")
    let someprodutosElem = document.getElementById("organize");
    var user_id = sessionStorage.getItem("user_id");
    var user_points = sessionStorage.getItem("user_points");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let someprodutos = await $.ajax({
 
         url: "/produtos/store/someprodutos/",
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(someprodutos));
 
       let html = "";
 
       for(let someproduto of someprodutos){
         console.log("Recipe: " + someproduto);
         html += createprodutoHTML(someproduto);
       }
 
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
 
       someprodutosElem.innerHTML = html;
 
 
    } catch(err){
      console.log(err);
    }

    document.getElementById("pointsquantity").innerHTML = "PONTOS: " + user_points;
 
    getExercicios();

    getLeaderboard();

    getEventosRecentes();

    getNewArtigos();
    
 
 }

 //OBTER ARTIGOS | ERRO DO ITERABLE
 async function getNewArtigos(){

  let recipeName = document.getElementById("nome1")
  let someusersElem = document.getElementById("organize77");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let someartigos = await $.ajax({

       url: "https://newsapi.org/v2/top-headlines?country=us&pageSize=4&category=health&apiKey=40ac25562432450ea0b7cc806fdcb6dd",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(someartigos));

     let html = "";

     for(let someuser of someartigos){
       console.log("Recipe: " + someuser);
       html += createartigoHTML(someuser);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     someusersElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

function createartigoHTML(artigo){
  
  return "<div class='selectbox66' id='selectbox66'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + artigo.name + "</p>" + "</div>"//+ "Data: " + evento.evento_data + "</p>" + "</div>"
 // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}



 async function getLeaderboard(){

    let recipeName = document.getElementById("nome1")
    let someusersElem = document.getElementById("organize4");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let someusers = await $.ajax({
 
         url: "/users/leaderboard",
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(someusers));
 
       let html = "";
 
       for(let someuser of someusers){
         console.log("Recipe: " + someuser);
         html += createuserHTML(someuser);
       }
 
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
 
       someusersElem.innerHTML = html;
 
 
    } catch(err){
      console.log(err);
    }


 }

 async function getEventosRecentes(){

  let recipeName = document.getElementById("nome1")
  let eventosrecentesElem = document.getElementById("organize5");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let someeventos = await $.ajax({

       url: "/eventos/eventosrecentes/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(someeventos));

     let html = "";

     for(let someuser of someeventos){
       console.log("Recipe: " + someuser);
       html += createeventoHTML(someuser);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     eventosrecentesElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

function createeventoHTML(evento){
  
  return "<div class='selectbox66' id='selectbox66'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + evento.evento_titulo + "Data: " + evento.evento_data + "</p>" + "</div>"
 // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}

 function createuserHTML(utilizador){
  
    return "<div class='selectbox6' id='selectbox66'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + utilizador.user_name + ": " + utilizador.user_points + "</p>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }




async function getExercicios(){

    let recipeName = document.getElementById("nome1")
    let someexerciciosElem = document.getElementById("organize2");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let someexercicios = await $.ajax({
 
         url: "/exercicios/someexercises/",
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(someexercicios));
 
       let html = "";
 
       for(let someexercicio of someexercicios){
         console.log("Recipe: " + someexercicio);
         html += createexercicioHTML(someexercicio);
       }
 
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
 
       someexerciciosElem.innerHTML = html;
 
 
    } catch(err){
      console.log(err);
    }
 
 
 }



 function createexercicioHTML(exercicio){
  
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + exercicio.exercicio_titulo +"</p>" +  "<h2 style='color: white; font-size: 90%;'> " + exercicio.user_name + "</h2>" + "<h2 style='color: white; font-size: 90%;'> Tipo: " + exercicio.exercicio_tipo_titulo + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  //ADICIONAR BOTÃO DE ADICIONAR Á LISTA DE PRODUTOS 'COMPRADOS'

 function createprodutoHTML(produto){
  
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top:10%;'>" + produto.produto_titulo +"</p>" +  "<h2 style='color: white; font-size: 90%;'> Pontos: " + produto.produto_points + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + produto.prod_category + "</h2>" + "<button class='adquirir' id='adquirirproduto' onclick='addprodutolist(" + JSON.stringify(produto) + ")'>ADQUIRIR" + "</button>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }


async function addprodutolist(produto){

  var user_id = sessionStorage.getItem("user_id");
  var user_points = sessionStorage.getItem("user_points");
  console.log("Funcao Chamada");

  try {

    let data = {
    
      utilizador_id: user_id,
      product_id: produto.produto_id,
      isget: 1,
   
    }

    //PREPARAR A VERIFICAÇÃO

    let verifyProduto = await $.ajax({
  
      url: "/produtos/store/produtoslistcheck/" + user_id + "/" + produto.produto_id,
      method: "get",
      dataType: "json",

    });

    console.log(JSON.stringify(verifyProduto));

    let comprimento = verifyProduto.length;

    console.log("" + comprimento);

    let numeroProdutosRetirar = user_points - produto.produto_points;

    console.log("" + numeroProdutosRetirar);

    if(verifyProduto.length == 0) {

      let newExercise = await $.ajax({
        url: "produtos/insertnewproducttolist/",
        method: "post",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
        });

        window.alert("Created favorite with id: " + newExercise.get_product_position_id);

        window.alert("A chamar o updatePontos");

      let updatePontos = await $.ajax({

        url: "produtos/updateuserpontos/" + user_id + "/" + numeroProdutosRetirar,
        method: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"

      });

      window.alert("Pontos updated");
      

      //REMOVER PONTOS APOS COMPRA (UPDATE AOS PONTOS)

    } else {

      let deleteProductOfList = await $.ajax({

         url: "produtos/deleteprodutooflist/" + user_id + "/" + produto.produto_id,
         method: "delete",
         data: JSON.stringify(data),
         contentType: "application/json",
         dataType: "json"

      });

      window.alert("Produto has been deleted!");


      
    }

  } catch(err){
     window.alert("failed to create the produto");
  }
 
 
 }




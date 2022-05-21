window.onload = async function(){

    let recipeName = document.getElementById("nome1")
    let someprodutosElem = document.getElementById("organize");
    var user_id = sessionStorage.getItem("user_id");
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
 
    getExercicios();

    getLeaderboard();
    
 
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

 function createuserHTML(utilizador){
  
    return "<div class='selectbox6' id='selectbox66'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + utilizador.user_name +"</p>" +  "<h2 style='color: white; font-size: 90%;'> " + utilizador.user_points + "</h2>" + "</div>"
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
 
         url: "/exercicios/allexercicios/someexercicios/",
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

 function createprodutoHTML(produto){
  
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + produto.produto_titulo +"</p>" +  "<h2 style='color: white; font-size: 90%;'> Pontos: " + produto.produto_points + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + produto.prod_category + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }
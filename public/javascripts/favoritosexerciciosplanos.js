async function getPlanosFavorito(){

    var user_admin = sessionStorage.getItem("user_admin");
    var user_pt = sessionStorage.getItem("user_pt");
    var user_nutri = sessionStorage.getItem("user_nutri");
   var user_id = sessionStorage.getItem("user_id");
   console.log("setItem->prodId = " + user_id);
   let ementaElem = document.getElementById("organize2");
  
   try {
  
       let favoritosEmentas = await $.ajax({
  
          url: "/planostreino/myfavorites/" + user_id,
          method: "get",
          dataType: "json",      
  
       });
  
       let html = "";
  
     for(let favoriteEmenta of favoritosEmentas){
       console.log("Ementa: " + favoriteEmenta);
       html += createfavoriteplanoHTML(favoriteEmenta);
     }
  
     ementaElem.innerHTML = html;
  
  
   }  catch(err){
     console.log(err);
   }
  
  
  }

  function createfavoriteplanoHTML(favoriteexercicio){
    
    return "<div class='selectbox'><p name='criador22' id='criador22' style='text-align: center;font-size: 90%; margin-top: 2%;'>"+ favoriteexercicio.user_name + "</p><br><br><br><p name='nome22' id='nome22' style='margin-left: 2%; font-size: small;'>" + favoriteexercicio.plano_titulo + "</p><hr id='divisorBoxes'> <p name='base22' id='base22' style='margin-left: 2%;font-size:small'>" + favoriteexercicio.tipoaprovacao_nome + "</p></div>";                    
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  function createfavoriteHTML(favoriteexercicio){
    
    return "<div class='selectbox'><p name='criador1' id='criador1' style='text-align: center;font-size: 90%; margin-top: 2%;'>"+ favoriteexercicio.user_name + "</p><br><br><br><p name='nome1' id='nome1' style='margin-left: 2%; font-size: small;'>" + favoriteexercicio.exercicio_titulo + "</p><hr id='divisorBoxes'> <p name='base1' id='base1' style='margin-left: 2%;font-size:small'>" + favoriteexercicio.exercicio_tipo_titulo + "</p> <p name='tipo1' id='tipo1'  style='margin-left: 2%; font-size: small; margin-top: 2%'>" + favoriteexercicio.exercicio_dificuldade + "</p></div>";                    
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

window.onload = async function(){

    var user_admin = sessionStorage.getItem("user_admin");
     var user_pt = sessionStorage.getItem("user_pt");
     var user_nutri = sessionStorage.getItem("user_nutri");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->prodId = " + user_id);
    let ementaElem = document.getElementById("organize");

    try {

        let favoritosRecipes = await $.ajax({
 
           url: "/exercicios/myfavorites/" + user_id,
           method: "get",
           dataType: "json",      

        });

        let html = "";
  
      for(let favoriteRecipe of favoritosRecipes){
        console.log("Ementa: " + favoriteRecipe);
        html += createfavoriteHTML(favoriteRecipe);
      }
  
      ementaElem.innerHTML = html;


    }  catch(err){
      console.log(err);
    }

    getPlanosFavorito();

    

 /*
    try{
 
       let utilizador = await $.ajax({
 
         url: "/users/" + user_id,
 //        url: "/users/" + user_id,
        // url: "/users/" + user_id,
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(utilizador));
 
       document.getElementById("nuser").innerHTML = "Bem-vindo " + utilizador.user_name;
       document.getElementById("npontos").innerHTML = utilizador.user_points;
       */
 
       if(user_pt == 1 && user_admin == 0 && user_nutri == 0) {
 
          //CASO SEJA PT
 
          document.getElementById("nutribarra").style.visibility = "hidden";
 
          document.getElementById("ptbarra").style.visibility = "hidden";
 
      //    document.getElementById("criacoesalimentacao").style.visibility = "hidden";
 
          document.getElementById("criacoesalim").style.visibility = "hidden";

          
 
      
        } else if (user_pt == 0 && user_admin == 0 && user_nutri == 0) {
 
         document.getElementById("nutribarra").style.visibility = "hidden";
         document.getElementById("ptbarra").style.visibility = "hidden";
 
        } else if (user_pt == 0 && user_admin == 0 && user_nutri == 1) {
 
         document.getElementById("ptbarra").style.visibility = "hidden";
         document.getElementById("nutribarra").style.visibility = "hidden";
         document.getElementById("turmaseconsultas").innerHTML = "Clientes";
         document.getElementById("criacoesexe").style.visibility = "hidden";
 
        }



 
 
 
    /*} catch(err){
 
        console.log(err);
 
    }*/
    
 
 
 }
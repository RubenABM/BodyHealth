window.onload = async function(){

   let recipeName = document.getElementById("nome1")
   let recipeElem = document.getElementById("organize");
   var user_id = sessionStorage.getItem("user_id");
   console.log("setItem->userId = " + user_id);

   try{

      let receitas = await $.ajax({

        url: "/recipes/allrecipes",
        method: "get",
        dataType: "json",

      });

      console.log("[utilizador] utilizador = " + JSON.stringify(receitas));

      let html = "";

      for(let receita of receitas){
        console.log("Recipe: " + receita);
        html += createrecipeHTML(receita);
      }

      console.log("OBTEVE");
    //  recipeName.innerHTML = html;

      recipeElem.innerHTML = html;


   } catch(err){
     console.log(err);
   }


}


function createrecipeHTML(recipe){

  return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 2%;'>" + recipe.receita_titulo +"</p>" + "</div>"
 // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}




















/*
window.onload = async function(){
 
    let recipeElem = document.getElementById("selectbox5");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->prodId = " + user_id);
 
    try{
 
       let receita = await $.ajax({
 
         url: "/recipes/recipeuser/" + user_id,
 //        url: "/users/" + user_id,
        // url: "/users/" + user_id,
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(receita));
 
       /*
       document.getElementById("criador1").innerHTML = receita.user_name;
       document.getElementById("nome1").innerHTML = "n";/////////////////////////////////PORQUE NÃO ESCREVE?
       document.getElementById("base1").innerHTML = receita.basee_nome;
       document.getElementById("tipo1").innerHTML = receita.receita_categoria_nome;
       */
      /*

       let html = "";

       for(let recipe of receita){
         console.log("Recipe: " + recipe);
         html += createrecipeHTML(recipe);
       }
    
       recipeElem.innerHTML = html;
 
      
    } catch(err){
 
        console.log(err);

        recipeElem.innerHTML = "<h1>Not available at this moment</h1>";
 
    }
    

}*/

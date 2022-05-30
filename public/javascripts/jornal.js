window.onload = async function(){

    let recipeName = document.getElementById("nome1")
    let noticiasElem = document.getElementById("organize");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let receitas = await $.ajax({
 
         url: "https://newsapi.org/v2/top-headlines?country=us&pageSize=4&category=health&apiKey=40ac25562432450ea0b7cc806fdcb6dd",
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(receitas));
 
       let html = "";
 
       for(let receita of receitas){
         console.log("Recipe: " + receita);
         html += createnoticiaHTML(receita);
       }
 
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
 
       noticiasElem.innerHTML = html;
 
 
    } catch(err){
      console.log(err);
    }
 
 }

 function createnoticiaHTML(noticia){
  
    return "<div class='selectbox5'>" + "<p name='titulo1' id='titulo1' style='text-align: center;font-size: 100%; margin-top: 5%;'>" + noticia.title + "</p>" + "<br><br><br><br><br><br>" + "<p name='fonte' id='fonte1' style='text-align: center;font-size: 100%; margin-top: 5%;'>FONTE:" + noticia.name + "</p>" + "</div>";
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }
  
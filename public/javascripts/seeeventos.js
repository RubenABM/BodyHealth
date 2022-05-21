window.onload = async function(){

    let recipeName = document.getElementById("nome1")
    let eventoElem = document.getElementById("organize");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let eventos = await $.ajax({
 
         url: "/eventos/alleventos/",
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(eventos));
 
       let html = "";
 
       for(let evento of eventos){
         console.log("Recipe: " + evento);
         html += createeventoHTML(evento);
       }
 
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
 
       eventoElem.innerHTML = html;
 
 
    } catch(err){
      console.log(err);
    }
 
   // getEmentas();
 
 }

 function createeventoHTML(evento){
  
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" +  evento.evento_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + evento.user_name + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + evento.local_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + evento.local_morada + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }
window.onload = async function(){

    let recipeName = document.getElementById("nome1")
    let recipeElem = document.getElementById("organize3");
    var user_id = sessionStorage.getItem("user_id");
    var user_admin = sessionStorage.getItem("user_admin");
    var user_pt = sessionStorage.getItem("user_pt");
    var user_nutri = sessionStorage.getItem("user_nutri");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let receitas = await $.ajax({
 
         url: "/pedidos/alleventosmarcados/" + user_id,
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(receitas));
 
       let html = "";
 
       for(let receita of receitas){
         console.log("Recipe: " + receita);
         html += createpedidoHTML(receita);
       }
 
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
 
       recipeElem.innerHTML = html;
 
 
    } catch(err){
      console.log(err);
    }

   /* if(user_admin == 0 && user_nutri == 0 && user_pt == 0){

        document.getElementById("tb").style.visibility = "hidden";
    }*/

    if(user_pt == 1 && user_admin == 0 && user_nutri == 0) {

      //CASO SEJA PT

      document.getElementById("nutribarra").style.visibility = "hidden";

      document.getElementById("ptbarra").style.visibility = "hidden";

  //    document.getElementById("criacoesalimentacao").style.visibility = "hidden";

      document.getElementById("criacoesalim").style.visibility = "hidden";
      

  
    } else if (user_pt == 0 && user_admin == 0 && user_nutri == 0) {

      document.getElementById("nutribarra").style.display = "none";
      document.getElementById("ptbarra").style.display = "none";
      document.getElementById("nbarra").style.display = "none";
     

    } else if (user_pt == 0 && user_admin == 0 && user_nutri == 1) {

     document.getElementById("ptbarra").style.display = "none";
     document.getElementById("criacoesexe").style.display = "none";
     document.getElementById("nutribarra").style.visibility = "hidden";
     document.getElementById("criacoesexerciciofisico").style.visibility = "hidden";
     document.getElementById("turmaseconsultas").innerHTML = "Clientes";
     document.getElementById("criacoesexe").style.visibility = "hidden";

    }
    

 }

//FILTRAR POR ESTADO

async function filterEventosEstado(type){

    let recipeName = document.getElementById("nome1")
    let eventoElem = document.getElementById("organize3");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
  
    try{
  
       let ementas = await $.ajax({
  
         url: "/pedidos/alleventosmarcados/filtragemestado/" + user_id + "/" + type,
         method: "get",
         dataType: "json",
  
       });
  
       console.log("[utilizador] utilizador = " + JSON.stringify(ementas));
  
       let html = "";
  
       for(let ementa of ementas){
         console.log("Recipe: " + ementa);
         html += createpedidoHTML(ementa);
       }
  
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
  
       eventoElem.innerHTML = html;
  
  
    } catch(err){
      console.log(err);
    }


 }

 function createpedidoHTML(pedido){
  
    // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
   
    return "<div class='selectbox3' id='selectbox3' style='display: inline-block;'>" + "<h2 style='margin-top: 2%; margin-left: 2%;'>" + pedido.pedido_titulo + "</h2>" + "<br>" + "<p name='nome1' id='nome1' style='margin-left: 2%;'>" + pedido.user_name + "</p>" + "<p name='data1' id='data1' style='margin-left: 2%; font-size: 90%; margin-top: 2%'>" + pedido.pedido_data + "</p>" + "<p name='data1' id='data1' style='margin-left: 2%; font-size: 90%; margin-top: 2%; float: left;'>" + pedido.pedido_hora + "</p>" + "<a href='map.html'>" + "<button style='float: right; margin-right: 2%;' class='buttoncalcularimc'>IR PARA O MAPA" + "</button>" + "</a>" + "</div>"
     /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
     RECEITA
   </p>*/
   
   }
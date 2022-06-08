window.onload = async function(){

    var user_admin = sessionStorage.getItem("user_admin");
    var user_pt = sessionStorage.getItem("user_pt");
    var user_nutri = sessionStorage.getItem("user_nutri");
      let recipeName = document.getElementById("nome1")
      let recipeElem = document.getElementById("organize");
      var user_id = sessionStorage.getItem("user_id");
      console.log("setItem->userId = " + user_id);
   
      try{
   
         let receitas = await $.ajax({
   
           url: "/produtos/store/meusprodutos/" + user_id,
           method: "get",
           dataType: "json",
   
         });
   
         console.log("[utilizador] utilizador = " + JSON.stringify(receitas));
   
         let html = "";
   
         for(let receita of receitas){
           console.log("Recipe: " + receita);
           html += createprodutoHTML(receita);
         }
   
         console.log("OBTEVE");
       //  recipeName.innerHTML = html;
   
         recipeElem.innerHTML = html;
   
   
      } catch(err){
        console.log(err);
      }
  
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
  
      }
   
   
   }

   function createprodutoHTML(produto){
  
    // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
   
    return "<div class='selectbox'>" + "<p name='criador1' id='criador1' style='text-align: center;font-size: 90%; margin-top: 2%;'>" + produto.produto_titulo + "</p><br><br><br>" + "<p name='nome1' id='nome1' style='margin-left: 2%;'>Pontos:" + produto.produto_points + "</p>" + "<hr id='divisorBoxes'>" + "<p name='base1' id='base1' style='margin-left: 2%;font-size: 90%'>" + produto.prod_category + "</p>" + "</div>";
     /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
     RECEITA
   </p>*/
   
   }
//LOAD DE EMENTAS

async function getEmentas(){

    let recipeName = document.getElementById("nome1")
    let mealElem = document.getElementById("organize2");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
  
    try{
  
       let ementas = await $.ajax({
  
         url: "/ementas/ementauser/" + user_id,
         method: "get",
         dataType: "json",
  
       });
  
       console.log("[utilizador] utilizador = " + JSON.stringify(ementas));
  
       let html = "";
  
       for(let ementa of ementas){
         console.log("Recipe: " + ementa);
         html += createementaHTML(ementa);
       }
  
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
  
       mealElem.innerHTML = html;
  
  
    } catch(err){
      console.log(err);
    }
  
  
  }
  
  function createementaHTML(meal){
    
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }
  
  
  //LOAD DE RECEITAS
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
  
          url: "/recipes/allrecipes/",
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
  
     getEmentas();
  
     if(user_pt == 1 && user_admin == 0 && user_nutri == 0) {
  
       //CASO SEJA PT...
  
       document.getElementById("createementa").style.visibility = "hidden";
       document.getElementById("createreceita").style.visibility = "hidden";
  
       document.getElementById("categoriadareceita").style.marginLeft = "-300px";
       document.getElementById("categoriadareceita").style.marginTop = "31px";
  
       document.getElementById("dropdownmenu").style.marginLeft = "-300px";
       document.getElementById("dropdownmenu").style.marginTop = "-20px";
  
       document.getElementById("tipodareceita").style.marginLeft = "1px";
       document.getElementById("tipodareceita").style.textAlign = "center";
  
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
            document.getElementById("criacoesexerciciofisico").style.visibility = "hidden";
            document.getElementById("turmaseconsultas").innerHTML = "Clientes";
            document.getElementById("criacoesexe").style.visibility = "hidden";
    
           }
    
  
  }
  
  
  // MOVER BOTÕES DE TIPO DE RECEITA E CATEGORIA -> margin-top: 7%;float: left;" style="margin-left: 35px;
  
  async function filterEmentasCategory(type){
  
  
    var user_id = sessionStorage.getItem("user_id");
    let ementaElem = document.getElementById("organize2");
    let categoria_base = 4;
  
    try{
   
      let exercisecategory = await $.ajax({
  
        url: "/ementas/categoryementauser/" + user_id + "/" + type,
        method: "get",
        dataType: "json",
  
      });
  
      let html = "";
  
      for(let exercise of exercisecategory){
        console.log("Ementa: " + exercise);
        html += createexerciseHTML(exercise);
      }
  
      exerciseElem.innerHTML = html;
  
    } catch(err){
      console.log(err);
    }
  
  
  }
  
  
  function createrecipeHTML(recipe){
    
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + recipe.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + recipe.receita_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + recipe.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + recipe.receita_categoria_nome + "</h2>" + "<button style='background-color: #e8bf5c; color: white; font-size: small; margin-left: 140px; margin-top: -7px;' id='marcarrecipefav' onclick='addfavorito(" + JSON.stringify(recipe) + ")'><b>LIKE</b></button>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  ///////////////77777TERMINAR

  async function addfavorito(receita) {

    var user_id = sessionStorage.getItem("user_id");
    console.log("Funcao Chamada");
    
     try {
    
       let data = {
    
         utilizador_id: user_id,
         receita_id: receita.receita_id,
         is_receita_favorito: 1,
      
       }

       //PREPARAR A VERIFICAÇÃO

       let verifyRecipes = await $.ajax({
  
        url: "/recipes/verifyfavoritos/" + user_id + "/" + receita.receita_id,
        method: "get",
        dataType: "json",
  
      });

      console.log(JSON.stringify(verifyRecipes));

      let comprimento = verifyRecipes.length;

      console.log("" + comprimento);

      if(verifyRecipes.length == 0) {

        let newExercise = await $.ajax({
          url: "recipes/marcarfavorito/",
          method: "post",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json"
          });

          window.alert("Created favorite with id: " + newExercise.favorito_receita_id);

      } else {

        let deleteRecipe = await $.ajax({

           url: "recipes/deleterecipe/" + user_id + "/" + receita.receita_id,
           method: "delete",
           data: JSON.stringify(data),
           contentType: "application/json",
           dataType: "json"

        });

        window.alert("Recipe has been deleted!");


      }
     // if(verifyRecipes.length == 0)
  
     /* for(let exercise of verifyRecipes){
        console.log("Ementa: " + exercise);
        html += createexerciseHTML(exercise);
      }*/
    
       /*ENVIAR METODO
       let newExercise = await $.ajax({
        url: "recipes/marcarfavorito/",
        method: "post",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
        });
    
        window.alert("Created favorite with id: " + newExercise.favorito_receita_id);
    
       // document.getElementById("marcarrecipefav").style.backgroundColor = "red";*/
      
    
     } catch (err){
    
      window.alert("failed to create the recipe");
    
     }
    
    
    }
  



  
  
  async function filterEmentasBase(type){
  
    let ementaElem = document.getElementById("organize2");
    let categoria_base = 4;
  
    try{
   
      let ementasbase = await $.ajax({
  
        url: "/ementas/allementas/base/" + type,
        method: "get",
        dataType: "json",
  
      });
  
      let html = "";
  
      for(let ementa of ementasbase){
        console.log("Recipe: " + ementa);
        html += createementaHTML(ementa);
      }
  
      ementaElem.innerHTML = html;
  
    } catch(err){
      console.log(err);
    }
  
  }
  
  
  //FUNCAO DE FILTRAGEM POR CATEGORIA DE EMENTA
  
  async function filterEmentasCategory(type){
  
    let ementaElem = document.getElementById("organize2");
    let categoria_base = 4;
  
    try{
   
      let ementascategory = await $.ajax({
  
        url: "/ementas/allementas/category/" + type,
        method: "get",
        dataType: "json",
  
      });
  
      let html = "";
  
      for(let ementa of ementascategory){
        console.log("Ementa: " + ementa);
        html += createementaHTML(ementa);
      }
  
      ementaElem.innerHTML = html;
  
    } catch(err){
      console.log(err);
    }
  
  }
  
  //FUNCAO DE FILTRAGEM POR CATEGORIA DE RECEITA
  
  async function filterCategory(type){
  
    let recipeElem = document.getElementById("organize");
    let categoria_base = 4;
  
    try{
   
      let receitascategory = await $.ajax({
  
        url: "/recipes/allrecipes/category/" + type,
        method: "get",
        dataType: "json",
  
      });
  
      let html = "";
  
      for(let receita of receitascategory){
        console.log("Recipe: " + receita);
        html += createrecipeHTML(receita);
      }
  
      recipeElem.innerHTML = html;
  
    } catch(err){
      console.log(err);
    }
  
  }
  
  //FUNCAO DE FILTRAGEM POR BASE DE RECEITA
  
  async function filterRecipes(type){
  
    let recipeElem = document.getElementById("organize");
    let categoria_base = 4;
  
    try{
   
      let receitassnacks = await $.ajax({
  
        url: "/recipes/allrecipes/" + type,
        method: "get",
        dataType: "json",
  
      });
  
      let html = "";
  
      for(let receita of receitassnacks){
        console.log("Recipe: " + receita);
        html += createrecipeHTML(receita);
      }
  
      recipeElem.innerHTML = html;
  
    } catch(err){
      console.log(err);
    }
  
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
  
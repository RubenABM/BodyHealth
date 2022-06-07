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
  
  return "<div class='selectbox' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 5%; color:black'>" + meal.user_name +"</p>" + "<h2 style='font-size: 90%; margin-top: 5%;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 15%;'>" + "</hr>" + "<h2 style='font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "<button style='background-color: #e8bf5c;' onclick='editarmeal(" + JSON.stringify(meal) + ")'>EDITAR</button>" + "</div>"

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}

async function editarmeal(meal){

  sessionStorage.setItem("meal_id", meal.ementa_id);

  document.getElementById("popup-5").classList.toggle("active");

  generateRandomRecipesForMeal();





}

async function generateRandomRecipesForMeal(){

  var ementa_id = sessionStorage.getItem("meal_id");

  console.log("" + ementa_id);

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize22");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/recipes/allrecipes/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createrecipesuggestionHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }




}

function createrecipesuggestionHTML(receita){
  
  return "<div id='selectbox88' style='background-color: white; width:500px; height: 150px; font-size: 15px; border: 1px solid black; border-radius: 5px; margin-left: -5px'>" + "<h2 style='margin-left: -120px; margin-top: 10px'>" + receita.receita_titulo + "</h2>" + "<h3 style='margin-left: -360px; margin-top: 15px;'>Base: " + receita.basee_nome + "</h3>" + "<h3 style='margin-left: -310px; margin-top: 15px;'>Categoria: " + receita.receita_categoria_nome + "</h3>" + "<h3 style='margin-left: -242px; margin-top: 15px;'>Criado por: " + receita.user_name + "</h3>" + "<button style='background-color: lime; margin-left: 320px; margin-top: -20px; color: white;' onclick='adicionarreceita(" + JSON.stringify(receita) + ")' >ADICIONAR</button>" + "</div>"

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}

async function adicionarreceita(recipe){

  var ementaa_id = sessionStorage.getItem("meal_id");
  var receitaa_id = recipe.receita_id;

 try {

   let data = {

    receita_id: receitaa_id,
    ementa_id: ementaa_id,

   }

   //ENVIAR METODO
   let newExercise = await $.ajax({
    url: "/recipes/insertnewrecipeforementa",
    method: "post",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json"
    });

    window.alert("Created recipe with id: " + newExercise.ementa_receita_id);


 } catch (err){

  window.alert("failed to create the recipe");

 }



}

async function criarrrementa(){

  var uti_id = sessionStorage.getItem("user_id");

  
  var radioButtonSelected = document.querySelector('input[name="radio3"]:checked');

  var radioButton2Selected = document.querySelector('input[name="radio4"]:checked');

  var ementa_basee_id = 0;
  var ementa_categoria_id = 0;

 
  

 try {

   let data = {

    receita_titulo: document.getElementById("tituloementa").value,
    ementa_descricao: document.getElementById("descricaoementa").value,
    ementa_tipo_aprovacao_id: 2,
    ementa_base_id: radioButtonSelected.value, 
    ementa_categoriaa_id: radioButton2Selected.value,
    ementa_utilizador_id: uti_id,
    aprovacao_nutricionista: 0,

   }

   //ENVIAR METODO
   let newExercise = await $.ajax({
    url: "/ementas/insertnewementa",
    method: "post",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json"
    });

    window.alert("Created recipe with id: " + newExercise.ementa_id);


 } catch (err){

  window.alert("failed to create the recipe");

 }



}

async function criarrrreceita(){

  console.log("Funcao chamada");

  var user_admin = sessionStorage.getItem("user_admin");

  var user_pt = sessionStorage.getItem("user_pt");

  var user_nutri = sessionStorage.getItem("user_nutri");

  var user_id = sessionStorage.getItem("user_id");

  var receita_utilizador_id = sessionStorage.getItem("user_id");
  var receita_base_id = 0;
  var receita_categoria_id = 0;
  var aprovacao_nutricionista = 0;

 

  var radioButtonSelected = document.querySelector('input[name="radio"]:checked');

  var radioButton2Selected = document.querySelector('input[name="radio2"]:checked')

  if(radioButtonSelected != null){

    receita_categoria_id = radioButtonSelected.value;


  } else {

    console.log("no radio button selected");

  }

  if(radioButton2Selected != null){

    receita_base_id = radioButton2Selected.value;

  } else {

     console.log("no radio button selected");

  }



 try {

  if(user_admin == 0 && user_pt == 0 && user_nutri == 1){

    let data = {

      receita_titulo: document.getElementById("tituloreceita").value,
      receita_desc: document.getElementById("descricaoreceita").value,
      receita_tipo_aprovacao_id: 1,
      receita_base_id: receita_base_id,
      receita_categoriaa_id: receita_categoria_id,
      receita_utilizador_id: user_id,
      aprovacao_nutricionista: 1,
  
    }

    let newExercise = await $.ajax({

      url: "/recipes/insertnewrecipe",
      method: "post",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json"

    });

    window.alert("Created recipe with id: " + newExercise.receita_id);

  } else {

    let data = {

      receita_titulo: document.getElementById("tituloreceita").value,
      receita_desc: document.getElementById("descricaoreceita").value,
      receita_tipo_aprovacao_id: 2,
      receita_base_id: receita_base_id,
      receita_categoriaa_id: receita_categoria_id,
      receita_utilizador_id: user_id,
      aprovacao_nutricionista: 0,
  
    }

    let newExercise = await $.ajax({

      url: "/recipes/insertnewrecipe",
      method: "post",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json"

    });

    window.alert("Created recipe with id: " + newExercise.receita_id);


  }


 } catch (err){

  window.alert("failed to create the recipe");

 }
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

        url: "/recipes/user/" + user_id,
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

          document.getElementById("nutribarra").style.display = "none";
        document.getElementById("ptbarra").style.display = "none";
        document.getElementById("nbarra").style.display = "none";
       
  
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
  
  return "<div class='selectbox' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 5%; color:black;'>" + recipe.user_name +"</p>" + "<h2 style='font-size: 90%; margin-top: 5%; margin-left: 2%;'>" + recipe.receita_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 25%;'>" + "</hr>" + "<h2 style='font-size: 90%; margin-left: 2%;'>" + recipe.basee_nome + "</h2>" + "<h2 style='font-size: 90%; margin-left: 2%;'>" + recipe.receita_categoria_nome + "</h2>" + "</div>"
 // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

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

//LOAD DE EXERCICIOS DE UM UTILIZADOR

//LOAD DE PLANOS DE EXERCICIO

async function getPlanos(){

  let recipeName = document.getElementById("nome1")
  let planosElem = document.getElementById("organize9");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let planos = await $.ajax({

       url: "/planostreino/all/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(planos));

     let html = "";

     for(let plano of planos){
       console.log("Recipe: " + plano);
       html += createplanoHTML(plano);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     planosElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }

  getExerciciosForPlano();


}

async function getExerciciosForPlano(){

  let recipeName = document.getElementById("nome1")
  let exerciciostoselectElem = document.getElementById("organize6");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let exercicios = await $.ajax({

       url: "/exercicios/allexercicios2",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(exercicios));

     let html = "";

     for(let exercicio of exercicios){
       console.log("Recipe: " + exercicio);
       html += createexerciciooHTML(exercicio); //FALTA CONSTRUIR A FUNCAO PARA MONTAR O HTML
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     exerciciostoselectElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

function createexerciciooHTML(exercicio){
  
  return "<div class='selectbox57' id='selectbox55' >" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + exercicio.exercicio_titulo +"</p>" + "</div>"
 // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}

function createplanoHTML(plano){
  
  return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + plano.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + plano.plano_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + plano.tipoaprovacao_nome + "</h2>" + "</div>"
 // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}

//LOAD DE EXERCICIO
window.onload = async function(){

  var user_admin = sessionStorage.getItem("user_admin");
  var user_pt = sessionStorage.getItem("user_pt");
  var user_nutri = sessionStorage.getItem("user_nutri");
    let recipeName = document.getElementById("nome1")
    let exerciseElem = document.getElementById("organize");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let exercicios = await $.ajax({
 
         url: "/exercicios/allexercicios/" + user_id,
         method: "get",
         dataType: "json",
 
       });
 
       console.log("[utilizador] utilizador = " + JSON.stringify(exercicios));
 
       let html = "";
 
       for(let exercicio of exercicios){
         console.log("Recipe: " + exercicio);
         html += createexerciseHTML(exercicio);
       }
 
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
 
       exerciseElem.innerHTML = html;
 
 
    } catch(err){
      console.log(err);
    }
 
   getPlanos();

   getAllexercicios();

   if(user_pt == 0 && user_admin == 0 && user_nutri == 1) {

    //CASO SEJA NUTRICIONISTA...

    document.getElementById("createexercise").style.visibility = "hidden";
    document.getElementById("createplano").style.visibility = "hidden";

    document.getElementById("categoriadoexercicio").style.marginLeft = "-300px";
    document.getElementById("categoriadoexercicio").style.marginTop = "31px";

    document.getElementById("categoriadoplano").style.marginLeft = "-300px";
    document.getElementById("categoriadoplano").style.marginTop = "31px";

    document.getElementById("dropdownmenu2").style.marginLeft = "-300px";
    document.getElementById("dropdownmenu2").style.marginTop = "-20px";

    document.getElementById("dropdownmenu").style.marginLeft = "-300px";
    document.getElementById("dropdownmenu").style.marginTop = "-20px";

    document.getElementById("tipodoexercicio").style.marginLeft = "1px";
    document.getElementById("tipodoexercicio").style.textAlign = "center";

  } else {
    console.log("error");
  }

   //getAllPlanos();

   
 }



 async function getAllexercicios(){

  let recipeName = document.getElementById("nome1")
  let exerciseElem = document.getElementById("organize8");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let exercicios = await $.ajax({

       url: "/exercicios/allexercicios/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(exercicios));

     let html = "";

     for(let exercicio of exercicios){
       console.log("Recipe: " + exercicio);
       html += createexerciseHTML(exercicio);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     exerciseElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }

 }
 
 function createexerciseHTML(exercicio){
  
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + exercicio.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + exercicio.exercicio_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + exercicio.exercicio_tipo_titulo + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + exercicio.exercicio_dificuldade + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  async function filterExerciciosCategory(type){


    var user_id = sessionStorage.getItem("user_id");
    let exerciseElem = document.getElementById("organize");
    let categoria_base = 4;
  
    try{
   
      let exercisecategory = await $.ajax({
  
        url: "/exercicios/categoryexerciseuser/" + user_id + "/" + type,
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


//CATEGORIA -> A FAZER
  async function filterExerciseCategoryy(type){

    let exerciseElem = document.getElementById("organize");
    let categoria_base = 4;
  
    try{
   
      let exercisecategory = await $.ajax({
  
        url: "/exercicios/allexercicios/categoryy/" + type,
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

  //DIFICULDADE
async function filterExerciseCategory(type){

    let exerciseElem = document.getElementById("organize");
    let categoria_base = 4;
  
    try{
   
      let exercisecategory = await $.ajax({
  
        url: "/exercicios/allexercicios/category/" + type,
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


//CRIAR EXERCICIO

async function addexercise(){

  var exercicio_utilizador_id = sessionStorage.getItem("user_id");
  var exercicio_dificuldade_id = 0;
  var exercicio_tipo_id = 0;


  var radioButtonSelected = document.querySelector('input[name="radio"]:checked');

  var radioButton2Selected = document.querySelector('input[name="radio2"]:checked')

  if(radioButtonSelected != null){

    exercicio_dificuldade_id = radioButtonSelected.value;


  } else {

    console.log("no radio button selected");

  }

  if(radioButton2Selected != null){

    exercicio_tipo_id = radioButton2Selected.value;

  } else {

     console.log("no radio button selected");

  }



 try {

   let data = {

     exercicio_titulo: document.getElementById("tituloex").value,
     exercicio_desc: document.getElementById("descricaoex").value,
     exercicio_num_series: document.getElementById("series").value,
     exercicio_num_repeticoes: document.getElementById("reps").value,
     exercicio_dificuldade_id: exercicio_dificuldade_id,
     exercicio_tipo_id: exercicio_tipo_id,
     exercicio_utilizador_id: exercicio_utilizador_id,
     aprovacao_pt: 0,

   }

   //ENVIAR METODO
   let newExercise = await $.ajax({
    url: "/exercicios/insertnewexercise",
    method: "post",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json"
    });

    window.alert("Created recipe with id: " + newExercise.exercicio_id);


 } catch (err){

  window.alert("failed to create the recipe");

 }


}

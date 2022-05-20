//LOAD DE PLANOS DE EXERCICIO

async function getPlanos(){

  let recipeName = document.getElementById("nome1")
  let planosElem = document.getElementById("organize2");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let planos= await $.ajax({

       url: "/planostreino/allplanos/",
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


}

function createplanoHTML(plano){
  
  return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + plano.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + exercicio.exercicio_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + exercicio.exercicio_tipo_titulo + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + exercicio.exercicio_dificuldade + "</h2>" + "</div>"
 // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}

//LOAD DE EXERCICIO
window.onload = async function(){

    let recipeName = document.getElementById("nome1")
    let exerciseElem = document.getElementById("organize");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
 
    try{
 
       let exercicios = await $.ajax({
 
         url: "/exercicios/allexercicios",
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
 
 }
 
 function createexerciseHTML(exercicio){
  
    return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + exercicio.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + exercicio.exercicio_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + exercicio.exercicio_tipo_titulo + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + exercicio.exercicio_dificuldade + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
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
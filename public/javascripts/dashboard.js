window.onload = async function(){

   var user_id = sessionStorage.getItem("user_id");
   console.log("setItem->prodId = " + user_id);

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

      //VERIFICAR (ESCONDER E MOSTRAR) ELEMENTOS DE ACORDO COM O UTILIZADOR
      if(utilizador.user_pt == 0 && utilizador.user_nutri == 0){

        console.log("Utilizador Admin");



      } else if (utilizador.user_admin == 0 && utilizador.user_pt == 0){

        //É NUTRICIONISTA (UTILIZADOR E PT)

        console.log("Utilizador Nutricionista");


      } else if(utilizador.user_admin == 0 && utilizador.user_nutri == 0){

        //É PT (UTILIZADOR E PT)

        console.log("Utilizador Personal-Trainer");

     //TESTE DE ESCONDER (FUNCIONAL)   document.getElementById("nuser").style.visibility="hidden"; *********************************************

     

      } else {
          console.log("Keep");
      }

   } catch(err){

       console.log(err);

   }


}


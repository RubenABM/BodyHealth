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
      if(utilizador.user_pt == 0 && utilizador.user_nutri == 0 && utilizador.user_admin == 1){

        console.log("Utilizador Admin");


        document.getElementById("eventoseaulasbarra").style.visibility = "hidden";

        document.getElementById("perfiltext").innerHTML = "Gestão";
        

      } else if (utilizador.user_admin == 0 && utilizador.user_pt == 0){

        //É NUTRICIONISTA (UTILIZADOR E PT)

        console.log("Utilizador Nutricionista");


        document.getElementById("eventoseaulasbarra").innerHTML = "Eventos e Pedidos";


        document.getElementById("turmaseconsultas").innerHTML = "Clientes";



      } else if(utilizador.user_admin == 0 && utilizador.user_nutri == 0){

        //É PT (UTILIZADOR E PT)

        console.log("Utilizador Personal-Trainer");

        document.getElementById("eventoseaulasbarra").innerHTML = "Eventos e Pedidos";

        document.getElementById("turmaseconsultas").innerHTML = "Turmas";
        

     //TESTE DE ESCONDER (FUNCIONAL)   document.getElementById("nuser").style.visibility="hidden"; *********************************************

     

      } else if(utilizador.user_pt == 0 && utilizador.user_nutri == 0 && utilizador.user_admin == 0){

         
          console.log("Keep");
      }

   } catch(err){

       console.log(err);

   }


}


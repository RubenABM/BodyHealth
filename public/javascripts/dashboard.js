window.onload = async function(){

   var user_admin = sessionStorage.getItem("user_admin");
    var user_pt = sessionStorage.getItem("user_pt");
    var user_nutri = sessionStorage.getItem("user_nutri");
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

      if(user_pt == 1 && user_admin == 0 && user_nutri == 0) {

         //CASO SEJA PT

         document.getElementById("nutribarra").style.visibility = "hidden";

         document.getElementById("ptbarra").style.visibility = "hidden";

     //    document.getElementById("criacoesalimentacao").style.visibility = "hidden";

         document.getElementById("criacoesalim").style.visibility = "hidden"
         

     
       } else if (user_pt == 0 && user_admin == 0 && user_nutri == 0) {

        document.getElementById("nutribarra").style.display = "none";
        document.getElementById("ptbarra").style.display = "none";
        document.getElementById("nbarra").style.display = "none";
       
       } else if (user_pt == 0 && user_admin == 0 && user_nutri == 1) {

        document.getElementById("ptbarra").style.display = "none";
        document.getElementById("nutribarra").style.visibility = "hidden";
        document.getElementById("criacoesexerciciofisico").style.visibility = "hidden";
        document.getElementById("turmaseconsultas").innerHTML = "Clientes";
        document.getElementById("criacoesexe").style.display = "none";

      }



   } catch(err){

       console.log(err);

   }
   


}


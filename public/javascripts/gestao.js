
async function getAllClientes(){

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize3");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/eventos/allclientes/" + user_id,
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createclienteHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

async function getAllPedidosPendentes(){

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize5");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/pedidos/allpedidospendentess/" + user_id,
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createpedidopendenteHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}


//

function createpedidopendenteHTML(pedido){
  
  // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
 
  return "<div style='height: 220px; width: 200px;' class='selectbox'> " + "<p name='titulopp1' id='titulopp1' style='text-align: center;font-size: 90%; margin-top: 2%;'> " + pedido.pedido_titulo + "</p>" + "<br><br>" + "<p name='nomepp1' id='nomepp1'  style='margin-top: 3%; text-align: center; font-size: small;'>" + pedido.user_name + "</p>" + "<p name='descpp1' id='descpp11'  style='margin-top: 3%; text-align: center; font-size: small;'>" + pedido.pedido_desc + "</p>" + "<p name='horapp1' id='horapp1' style='margin-top: 3%;text-align: center;font-size:small'>" + pedido.pedido_hora + "</p>" + "<p name='datapp1' id='datapp1' style='text-align: center; font-size: small; margin-top: 2%'>" + pedido.pedido_data + "</p>" + "<a href='map.html'>" + "<button style='margin-top: 3%; margin-left:32%; height: 35px;width: 70px;font-size: small;' class='buttoncalcularimc'><b>MAPA</b>" + "</button>" + "</a>" + "<button style='background-color: green ;margin-top: 3%;float: left ;margin-left:12%; height: 35px;width: 70px;font-size: small;' class='buttoncalcularimc' onclick='updateEstado(" + JSON.stringify(pedido) + ")'><b>Aceitar</b>" + "</button>" + "<button style='background-color:red;margin-top: 3%;margin-right:12%;float: right; height: 35px;width: 70px;font-size: small;' class='buttoncalcularimc' onclick='updateEstado2(" + JSON.stringify(pedido) + ")'><b>Rejeitar</b>" + "</button>" + "</div>"                   
   /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
   RECEITA
 </p>*/
 
 }

 async function updateEstado(pedido){

  try{

    let ementas = await $.ajax({

      url: "/pedidos/aceitar/" + pedido.pedido_id,
      method: "put",
      dataType: "json",

    });

    console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

    


 } catch(err){
   console.log(err);
 }


 }

 async function updateEstado2(pedido){

  try{

    let ementas = await $.ajax({

      url: "/pedidos/recusar/" + pedido.pedido_id,
      method: "put",
      dataType: "json",

    });

    console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

    


 } catch(err){
   console.log(err);
 }


 }

 async function getAulasMarcadas(){

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/pedidos/allaulas/" + user_id,
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createaulamarcadaHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

async function getAllPedidosPendentes2(){

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize5");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/pedidos/allpedidospendentess/" + user_id,
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createpedidopendenteHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

async function getConsultasMarcadas(){

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/pedidos/allconsultas/" + user_id,
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createaulamarcadaHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

async function getTurmas(){

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize3");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/turmas/allturmas/" + user_id,
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createturmaHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

function createturmaHTML(cliente){
  
  // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
 
  return "<div class='selectbox3' id='selectbox3' style='display: inline-block;'><br>" + "<h2 id='nomet1' style='margin-top: 2%; margin-left: 2%'>" + cliente.turma_titulo + "</h2>" + "</p>" + "<a  href='#'>" + "<button style='background-color: red;float: right;margin-top: 4%; margin-right: 2%;' class='buttoncalcularimc'><b>ENTRAR</b>" + "</button>" + "</a>" + "</div>"                                
   /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
   RECEITA
 </p>*/
 
 }

function createaulamarcadaHTML(consulta){
  
  // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
 
  return "<div class='selectbox'>" + "<p name='titulo1' id='titulo1' style='text-align: center;font-size: 90%; margin-top: 2%;'>" + consulta.pedido_titulo + "</p>" + "<br><br>" + "<p name='nome1' id='nome1'  style='margin-top: 3%; text-align: center; font-size: small;'> " + consulta.user_name + "</p>" + "<p name='hora1' id='hora1' style='margin-top: 3%;text-align: center;font-size:small'>" + consulta.pedido_hora + "</p>" + "<p name='data1' id='data1'  style='margin-top: 2%;text-align: center; font-size: small; margin-top: 2%'>" + consulta.pedido_data + "</p>" + "<a href='map.html'>" + "<button  style='margin-top: 10%; margin-left:20%; height: 20%;width: 60%;font-size: small;' class='buttoncalcularimc'><b>MAPA</b>" + "</button>" + "</a>" + "</div>"                                
   /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
   RECEITA
 </p>*/
 
 }

window.onload = async function(){

  let consultasElem = document.getElementById("organize");
    var user_admin = sessionStorage.getItem("user_admin");
     var user_pt = sessionStorage.getItem("user_pt");
     var user_nutri = sessionStorage.getItem("user_nutri");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->prodId = " + user_id);


  /*
    try{
 
       let eventos = await $.ajax({
 
         url: "/eventos/alleventos/consultas/nutricionista/" + user_id,
 //        url: "/users/" + user_id,
        // url: "/users/" + user_id,
         method: "get",
         dataType: "json",
 
       });

       let html = "";
 
       for(let consulta of eventos){
         console.log("Recipe: " + consulta);
         html += createpedidoHTML(consulta);
       }
 
       console.log("[utilizador] utilizador = " + JSON.stringify(eventos));

       consultasElem.innerHTML = html;
       */
 
     /*  document.getElementById("nuser").innerHTML = "Bem-vindo " + utilizador.user_name;
       document.getElementById("npontos").innerHTML = utilizador.user_points;*/
       
 
       if(user_pt == 1 && user_admin == 0 && user_nutri == 0) {
 
          //CASO SEJA PT
 
          document.getElementById("nutribarra").style.visibility = "hidden";
 
          document.getElementById("ptbarra").style.visibility = "hidden";
 
      //    document.getElementById("criacoesalimentacao").style.visibility = "hidden";
 
          document.getElementById("criacoesalim").style.visibility = "hidden";

          //ALTERAÇÕES NA PAGINA

          document.getElementById("npt").innerHTML = "Gestão Personal-Trainer";
          
          document.getElementById("textconsultasmarcadas").innerHTML = "Aulas marcadas";
 
          document.getElementById("textbuttoncriarconsulta").innerHTML = "Criar Aula";

          document.getElementById("textclientes").innerHTML = "Turmas";

          document.getElementById("textbuttonadicionarcliente").innerHTML = "Criar Turma";

          getTurmas();

          getAllPedidosPendentes2();

          getAulasMarcadas();
      
        } else if (user_pt == 0 && user_admin == 0 && user_nutri == 0) {
 
         document.getElementById("nutribarra").style.visibility = "hidden";
         document.getElementById("ptbarra").style.visibility = "hidden";
 
        } else if (user_pt == 0 && user_admin == 0 && user_nutri == 1) {
 
         document.getElementById("ptbarra").style.display = "none";
         document.getElementById("criacoesexe").style.display = "none";
         document.getElementById("nutribarra").style.visibility = "hidden";
         document.getElementById("turmaseconsultas").innerHTML = "Clientes";

         getConsultasMarcadas();

         getAllClientes();

         getAllPedidosPendentes();
         
         getSomePossibleClientes();

        } else if (user_admin == 1) {
        
          document.getElementById("ptbarra").style.display = "none";
          document.getElementById("nutribarra").style.visibility = "hidden";
          document.getElementById("turmaseconsultas").innerHTML = "Clientes";

        }

        //PREPARAR BARRA PARA A CRIACAO

        const autocomplete2 = new google.maps.places.Autocomplete(document.getElementById("ruaaula"));

        autocomplete2.addListener("place_changed", () => {

        
          const local = autocomplete2.getPlace();

          var local_address = local.formatted_address;
          var local_name = local.name;
          sessionStorage.setItem("local_name", local_name);
          sessionStorage.setItem("local_address", local_address);

          const geometryinfopoint = "POINT(" + local.geometry.location.lat() + " " + local.geometry.location.lng() + ")";

          console.log("Geomtry info:" + geometryinfopoint);
          console.log("" + ('POINT(-27.75 ,114.75)', 3857));
          sessionStorage.setItem("geometryinfopoint", geometryinfopoint);

          insertplace();
      
          
        })
 

        
 /*
    } catch(err){
 
        console.log(err);
 
    }*/
 }

 async function getSomePossibleClientes(){

  let recipeName = document.getElementById("nome1")
  let mealElem = document.getElementById("organize2");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let ementas = await $.ajax({

       url: "/users/possibleclientes/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(ementas));

     let html = "";

     for(let ementa of ementas){
       console.log("Recipe: " + ementa);
       html += createpossibleclienteHTML(ementa);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     mealElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }



 }

 function createpossibleclienteHTML(cliente){
  
  return "<div style='display:inline-block' class='selectbox4'><br><h2 id='nomet1' style='margin-top: 2%; margin-left: 2%'>" + cliente.user_name + "</h2><a href='#'><button style='background-color: green;float: right;margin-top: 4%; margin-right: 2%;' class='buttoncalcularimc' onclick='adicionarcliente(" + JSON.stringify(cliente) + ")'><b>ADICIONAR</b></button>" + "</a></div>";

  /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
  RECEITA
</p>*/

}

async function adicionarcliente(utilizador){

  var myid = sessionStorage.getItem("user_id");
  try {
          
    let data = {

      utilizador_id: utilizador.user_id,
      nutricionista_id: myid,
      
    }

    let newExercise = await $.ajax({

      url: "/users/addcliente",
      method: "post",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json"

    });

    window.alert("Created cliente");

  


 } catch (err){

  window.alert("failed to create the recipe");

 }

}


 async function insertplace(){

  var nome = sessionStorage.getItem("local_name");
  const geometryinfo_point = sessionStorage.getItem("geometryinfopoint");

  var address = sessionStorage.getItem("local_address");

  try {
          
    let data = {

      local_morada: address,
      local_category_id: 1,
      local_nome: nome,
      ref_system_id: 4326,
      geometry_info_point: geometryinfo_point,
      
    }

    let newExercise = await $.ajax({

      url: "/places/addplace",
      method: "post",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json"

    });

    window.alert("Created place");

  


 } catch (err){

  window.alert("failed to create the recipe");

 }


 }

 function createpedidoHTML(consulta){
  
  // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
 
  return "<div class='selectbox' id='selectbox' style='display: inline-block; width:14%; height:180px;'>" + "<p name='titulo1' id='titulo1' style='text-align: center;font-size: 90%; margin-top: 2%;'>" + consulta.pedido_titulo + "</p>" + "<br><br>" + "<p name='nome1' id='nome1'  style='margin-top: 3%; text-align: center; font-size: small;'> " + consulta.user_name + "</p>" + "<p name='hora1' id='hora1' style='margin-top: 3%;text-align: center;font-size:small'>" + consulta.pedido_hora + "</p>" + "<p name='data1' id='data1'  style='margin-top: 2%;text-align: center; font-size: small; margin-top: 2%'>" + consulta.pedido_data + "</p>" + "<a href='map.html'>" + "<button  style='margin-top: 10%; margin-left:20%; height: 20%;width: 60%;font-size: small;' class='buttoncalcularimc'><b>MAPA</b>" + "</button>" + "</a>" + "</div>"                                
   /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
   RECEITA
 </p>*/
 
 }

 function createclienteHTML(cliente){
  
  // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
 
  return "<div class='selectbox3' id='selectbox3' style='display: inline-block;'><br>" + "<h2 id='nomet1' style='margin-top: 2%; margin-left: 2%'>" + cliente.user_name + "</h2>" + "</p>" + "<a  href='#'>" + "<button style='background-color: red;float: right;margin-top: 4%; margin-right: 2%;' class='buttoncalcularimc'><b>ELIMINAR</b>" + "</button>" + "</a>" + "</div>"                                
   /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
   RECEITA
 </p>*/
 
 }



 function createuseroptionHTML(utilizador){
  
  // return "<div class='selectbox5' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + meal.user_name +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + meal.ementa_titulo + "</h2>" + "<hr id ='divisorBoxes' style = 'margin-top: 50%;'>" + "</hr>" + "<h2 style='color: white; font-size: 90%;'>" + meal.basee_nome + "</h2>" + "<h2 style='color: white; font-size: 90%;'>" + meal.ementa_categoria_nome + "</h2>" + "</div>"
 
  return "<";                                
   /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
   RECEITA
 </p>*/
 
 }


 async function criarrrrconsulta(){

  console.log("Funcao chamada");

  var user_admin = sessionStorage.getItem("user_admin");

  var user_pt = sessionStorage.getItem("user_pt");

  var user_nutri = sessionStorage.getItem("user_nutri");

  var user_id = sessionStorage.getItem("user_id");

  var pedido_utilizador_id = sessionStorage.getItem("user_id");
  var pedido_tipo_id = 0;
  var pedido_estado_id = 0;
  var aprovacao_nutricionista = 0;
  var pedido_morada = sessionStorage.getItem("local_address");

  let uti_idd = document.getElementById("nomealuno").value;
  //OBTER ID DO UTILIZADOR

  let getUserIdFromUsername = await $.ajax({

    url: "/users/" + uti_idd,
    method: "get",
    dataType: "json",

  });

  console.log("[utilizador] utilizador = " + JSON.stringify(getUserIdFromUsername));

  

  console.log("funcionou ate aqui")

  let getIdPlace = await $.ajax({

    url: "/places/getplace/" + pedido_morada,
    method: "get",
    dataType: "json",

  });

  console.log("" + getIdPlace.local_id);

  let place_id = getIdPlace.local_id;

  
      let data = {
  
        pedido_titulo: document.getElementById("tituloaula").value,
        pedido_desc: document.getElementById("descricaoaula").value,
        pedido_local_id: place_id,
        pedido_utilizador_id: getUserIdFromUsername.user_id,
        pedido_terminada: 0,
        pedido_data: document.getElementById("dataaula").value,
        pedido_tipo_id: 2,
        pedido_estado_id: 4,
        pedido_profissional_id: pedido_utilizador_id,
        pedido_hora: document.getElementById("horaaula").value,
    
      }
  
      let newExercise = await $.ajax({
  
        url: "/pedidos/insertnewpedido",
        method: "post",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
  
      });
  
      window.alert("Consulta Criada.");
  
}

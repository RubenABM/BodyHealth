window.onload = async function(){

   // window.location.assign("http://localhost:3000/shop.html");

    console.log("obter");

    let recipeName = document.getElementById("nome1")
    let calcadoElem = document.getElementById("organize");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
  
    try{
  
       let calcados = await $.ajax({
  
         url: "/produtos/store/calcado/",
         method: "get",
         dataType: "json",
  
       });
  
       console.log("[utilizador] utilizador = " + JSON.stringify(calcados));
  
       let html = "";
  
       for(let calcado of calcados){
         console.log("Recipe: " + calcado);
         html += createcalcadoHTML(calcado);
       }
  
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
  
       calcadoElem.innerHTML = html;
  
  
    } catch(err){
      console.log(err);
    }

    getSportswear();
  
  
  }

  async function getSportswear(){

    console.log("obter");

    let recipeName = document.getElementById("nome1")
    let sportswearElem = document.getElementById("organize2");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
  
    try{
  
       let sportswears = await $.ajax({
  
         url: "/produtos/store/sportswear/",
         method: "get",
         dataType: "json",
  
       });
  
       console.log("[utilizador] utilizador = " + JSON.stringify(sportswears));
  
       let html = "";
  
       for(let sportswear of sportswears){
         console.log("Recipe: " + sportswear);
         html += createsportswearHTML(sportswear);
       }
  
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
  
       sportswearElem.innerHTML = html;
  
  
    } catch(err){
      console.log(err);
    }

    getEquipamento();

  }
  
  async function getEquipamento(){

    console.log("obter");

    let recipeName = document.getElementById("nome1")
    let equipamentoElem = document.getElementById("organize3");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
  
    try{
  
       let equipamentos = await $.ajax({
  
         url: "/produtos/store/equipamento/",
         method: "get",
         dataType: "json",
  
       });
  
       console.log("[utilizador] utilizador = " + JSON.stringify(equipamentos));
  
       let html = "";
  
       for(let equipamento of equipamentos){
         console.log("Recipe: " + equipamento);
         html += createequipamentoHTML(equipamento);
       }
  
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
  
       equipamentoElem.innerHTML = html;
  
  
    } catch(err){
      console.log(err);
    }

   getSuplemento();

  }

  async function getSuplemento(){

    console.log("obter");

    let recipeName = document.getElementById("nome1")
    let suplementoElem = document.getElementById("organize4");
    var user_id = sessionStorage.getItem("user_id");
    console.log("setItem->userId = " + user_id);
  
    try{
  
       let suplementos = await $.ajax({
  
         url: "/produtos/store/suplemento/",
         method: "get",
         dataType: "json",
  
       });
  
       console.log("[utilizador] utilizador = " + JSON.stringify(suplementos));
  
       let html = "";
  
       for(let suplemento of suplementos){
         console.log("Recipe: " + suplemento);
         html += createsuplementoHTML(suplemento);
       }
  
       console.log("OBTEVE");
     //  recipeName.innerHTML = html;
  
       suplementoElem.innerHTML = html;
  
  
    } catch(err){
      console.log(err);
    }


  }

  function createsuplementoHTML(suplemento){
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + suplemento.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + suplemento.produto_points + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  function createequipamentoHTML(equipamento){
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + equipamento.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + equipamento.produto_points + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  function createsportswearHTML(sportswear){
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + sportswear.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + sportswear.produto_points + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  function createcalcadoHTML(calcado){
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + calcado.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + calcado.produto_points + "</h2>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }
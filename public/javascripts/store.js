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
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + suplemento.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 5%; position: absolute;'>Pontos: " + suplemento.produto_points + "</h2>" + "<button style='background-color: yellow; margin-top: 50%; margin-left: 25%' onclick='addprodutolist(" + JSON.stringify(suplemento) + ")'>ADQUIRIR</button>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

async function addprodutolist(produto){

  var user_id = sessionStorage.getItem("user_id");
  var user_points = sessionStorage.getItem("user_points");
  console.log("Funcao Chamada");

  try {

    let data = {
    
      utilizador_id: user_id,
      product_id: produto.produto_id,
      isget: 1,
   
    }

    //PREPARAR A VERIFICAÇÃO

    let verifyProduto = await $.ajax({
  
      url: "/produtos/store/produtoslistcheck/" + user_id + "/" + produto.produto_id,
      method: "get",
      dataType: "json",

    });

    console.log(JSON.stringify(verifyProduto));

    let comprimento = verifyProduto.length;

    console.log("" + comprimento);

    let numeroProdutosRetirar = user_points - produto.produto_points;

    console.log("" + numeroProdutosRetirar);

    if(verifyProduto.length == 0) {

      let newExercise = await $.ajax({
        url: "produtos/insertnewproducttolist/",
        method: "post",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
        });

        window.alert("Created favorite with id: " + newExercise.get_product_position_id);

        window.alert("A chamar o updatePontos");

      let updatePontos = await $.ajax({

        url: "produtos/updateuserpontos/" + user_id + "/" + numeroProdutosRetirar,
        method: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"

      });

      window.alert("Pontos updated");
      

      //REMOVER PONTOS APOS COMPRA (UPDATE AOS PONTOS)

    } else {

      let deleteProductOfList = await $.ajax({

         url: "produtos/deleteprodutooflist/" + user_id + "/" + produto.produto_id,
         method: "delete",
         data: JSON.stringify(data),
         contentType: "application/json",
         dataType: "json"

      });

      window.alert("Produto has been deleted!");


      
    }

  } catch(err){
     window.alert("failed to create the produto");
  }


}


  function createequipamentoHTML(equipamento){
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + equipamento.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + equipamento.produto_points + "</h2>" + "<button style='background-color: yellow; margin-top: 50%; margin-left: 25%' onclick='addprodutotolist22(" + JSON.stringify(equipamento) + ")'>ADQUIRIR</button>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  async function addprodutotolist22(produto){

    var user_id = sessionStorage.getItem("user_id");
    var user_points = sessionStorage.getItem("user_points");
    console.log("Funcao Chamada");
  
    try {
  
      let data = {
      
        utilizador_id: user_id,
        product_id: produto.produto_id,
        isget: 1,
     
      }
  
      //PREPARAR A VERIFICAÇÃO
  
      let verifyProduto = await $.ajax({
    
        url: "/produtos/store/produtoslistcheck/" + user_id + "/" + produto.produto_id,
        method: "get",
        dataType: "json",
  
      });
  
      console.log(JSON.stringify(verifyProduto));
  
      let comprimento = verifyProduto.length;
  
      console.log("" + comprimento);
  
      let numeroProdutosRetirar = user_points - produto.produto_points;
  
      console.log("" + numeroProdutosRetirar);
  
      if(verifyProduto.length == 0) {
  
        let newExercise = await $.ajax({
          url: "produtos/insertnewproducttolist/",
          method: "post",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json"
          });
  
          window.alert("Created favorite with id: " + newExercise.get_product_position_id);
  
          window.alert("A chamar o updatePontos");
  
        let updatePontos = await $.ajax({
  
          url: "produtos/updateuserpontos/" + user_id + "/" + numeroProdutosRetirar,
          method: "put",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json"
  
        });
  
        window.alert("Pontos updated");
        
  
        //REMOVER PONTOS APOS COMPRA (UPDATE AOS PONTOS)
  
      } else {
  
        let deleteProductOfList = await $.ajax({
  
           url: "produtos/deleteprodutooflist/" + user_id + "/" + produto.produto_id,
           method: "delete",
           data: JSON.stringify(data),
           contentType: "application/json",
           dataType: "json"
  
        });
  
        window.alert("Produto has been deleted!");
  
  
        
      }
  
    } catch(err){
       window.alert("failed to create the produto");
    }
  
  
  }

  function createsportswearHTML(sportswear){
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + sportswear.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + sportswear.produto_points + "</h2>" + "<button style='background-color: yellow; margin-top: 50%; margin-left: 25%' onclick='addprodutototolist42(" + JSON.stringify(sportswear) + ")'>ADQUIRIR</button>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  async function addprodutototolist42(produto){

    var user_id = sessionStorage.getItem("user_id");
    var user_points = sessionStorage.getItem("user_points");
    console.log("Funcao Chamada");
  
    try {
  
      let data = {
      
        utilizador_id: user_id,
        product_id: produto.produto_id,
        isget: 1,
     
      }
  
      //PREPARAR A VERIFICAÇÃO
  
      let verifyProduto = await $.ajax({
    
        url: "/produtos/store/produtoslistcheck/" + user_id + "/" + produto.produto_id,
        method: "get",
        dataType: "json",
  
      });
  
      console.log(JSON.stringify(verifyProduto));
  
      let comprimento = verifyProduto.length;
  
      console.log("" + comprimento);
  
      let numeroProdutosRetirar = user_points - produto.produto_points;
  
      console.log("" + numeroProdutosRetirar);
  
      if(verifyProduto.length == 0) {
  
        let newExercise = await $.ajax({
          url: "produtos/insertnewproducttolist/",
          method: "post",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json"
          });
  
          window.alert("Created favorite with id: " + newExercise.get_product_position_id);
  
          window.alert("A chamar o updatePontos");
  
        let updatePontos = await $.ajax({
  
          url: "produtos/updateuserpontos/" + user_id + "/" + numeroProdutosRetirar,
          method: "put",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json"
  
        });
  
        window.alert("Pontos updated");
        
  
        //REMOVER PONTOS APOS COMPRA (UPDATE AOS PONTOS)
  
      } else {
  
        let deleteProductOfList = await $.ajax({
  
           url: "produtos/deleteprodutooflist/" + user_id + "/" + produto.produto_id,
           method: "delete",
           data: JSON.stringify(data),
           contentType: "application/json",
           dataType: "json"
  
        });
  
        window.alert("Produto has been deleted!");
  
  
        
      }
  
    } catch(err){
       window.alert("failed to create the produto");
    }
  
  
  }

  function createcalcadoHTML(calcado){
  
    return "<div class='selectbox555' id='selectbox55'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + calcado.produto_titulo +"</p>" + "<h2 style='color: white; font-size: 90%; margin-top: 1%; position: absolute;'>" + calcado.produto_points + "</h2>" + "<button style='background-color: yellow; margin-top: 50%; margin-left: 25%' onclick='addprodutototottlist42(" + JSON.stringify(calcado) + ")'>ADQUIRIR</button>" + "</div>"
   // return "<div class='selectbox5' id='selectbox55'>" + recipe.receita_titulo + "</div>";
  
    /*<p name="criador1" id="criador1" style="text-align: center;font-size: 90%; margin-top: 2%;">CRIADOR DA
    RECEITA
  </p>*/
  
  }

  async function addprodutototottlist42(produto){

    var user_id = sessionStorage.getItem("user_id");
    var user_points = sessionStorage.getItem("user_points");
    console.log("Funcao Chamada");
  
    try {
  
      let data = {
      
        utilizador_id: user_id,
        product_id: produto.produto_id,
        isget: 1,
     
      }
  
      //PREPARAR A VERIFICAÇÃO
  
      let verifyProduto = await $.ajax({
    
        url: "/produtos/store/produtoslistcheck/" + user_id + "/" + produto.produto_id,
        method: "get",
        dataType: "json",
  
      });
  
      console.log(JSON.stringify(verifyProduto));
  
      let comprimento = verifyProduto.length;
  
      console.log("" + comprimento);
  
      let numeroProdutosRetirar = user_points - produto.produto_points;
  
      console.log("" + numeroProdutosRetirar);
  
      if(verifyProduto.length == 0) {
  
        let newExercise = await $.ajax({
          url: "produtos/insertnewproducttolist/",
          method: "post",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json"
          });
  
          window.alert("Created favorite with id: " + newExercise.get_product_position_id);
  
          window.alert("A chamar o updatePontos");
  
        let updatePontos = await $.ajax({
  
          url: "produtos/updateuserpontos/" + user_id + "/" + numeroProdutosRetirar,
          method: "put",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json"
  
        });
  
        window.alert("Pontos updated");
        
  
        //REMOVER PONTOS APOS COMPRA (UPDATE AOS PONTOS)
  
      } else {
  
        let deleteProductOfList = await $.ajax({
  
           url: "produtos/deleteprodutooflist/" + user_id + "/" + produto.produto_id,
           method: "delete",
           data: JSON.stringify(data),
           contentType: "application/json",
           dataType: "json"
  
        });
  
        window.alert("Produto has been deleted!");
  
  
        
      }
  
    } catch(err){
       window.alert("failed to create the produto");
    }
  
  
  }
window.onload = async function(){
 
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
 
       document.getElementById("criador1").innerHTML = receita.user_name;
       document.getElementById("nome1").innerHTML = "n";/////////////////////////////////PORQUE NÃO ESCREVE?
       document.getElementById("base1").innerHTML = receita.basee_nome;
       document.getElementById("tipo1").innerHTML = receita.receita_categoria_nome;

 
      
    } catch(err){
 
        console.log(err);
 
    }





}
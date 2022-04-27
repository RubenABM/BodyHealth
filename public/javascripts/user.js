/*window.onload = async function() {
    userId = sessionStorage.getItem("userId");
    console.log("setItem->prodId = " + userId);
    try {

        let user = await $.ajax({
            url: "/users/" + userId,
            method: "get",
            dataType: "json"
        });
        console.log("[user] user = " + JSON.stringify(user));
        document.getElementById("nameofuserdashboard").innerHTML = user.user_name;
    } catch (err) {
        console.log(err);
        let mainElem = document.getElementById("main");
        if (err.status == 404)
            mainElem.innerHTML =
            "<h1>" + err.responseJSON.msg + "</h1>" + "<h2>Please select an existing user</h2>";
        else mainElem.innerHTML =
            "<h1>Server problems, please try later</h1>";
    }
}
*/

//DUVIDAS

window.onload = async function(){

  loadValues();

}

async function loadValues(){

  try{

    let values = await $ajax({

       url: '/users/${1}',
       method: 'GET',
       datatype: 'json',

    });
    console.log(values);
    document.getElementById('nameofuserdashboard').innerHTML = values;

  } catch(err){
      console.log('error');
  }

}
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

/*DUVIDAS

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

}*/


async function add() {
   
   
    //console.log("[signupandlogin] data = " + JSON.stringify(data));
    try {
        var defaultpoints = 0;
        var defaultadmin = 0;
        var defaultpt = 0;
        var defaultnutri = 0;

        let data = {
            user_name: document.getElementById("fusername").value,
            user_password: document.getElementById("fpassword").value,
            user_morada: document.getElementById("fmorada").value,
            user_email: document.getElementById("femail").value,
            user_points: parseInt(defaultpoints), //PROBLEMA: ALTERAR TIPO DE DADOS
            user_admin: defaultadmin,
            user_pt: defaultpt,
            user_nutri: defaultnutri
        }

        let newUser = await $.ajax({
            url: "/users/insertnewuser",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });

        console.log("Inserted new user with id: " + newUser.user_id)
        window.alert('registration sucessful');

    } catch (err) {
        console.log(err);
        window.alert('just something wrong');
        
    }
}

async function login(){

   try{

    let object = {

         user_name: document.getElementById("fusernamelogin").value,
         user_password: document.getElementById("fpasswordlogin").value,
    };
    let authUser = await $.ajax({

        url: "/users/loginuser",
        method: "post",
        data: JSON.stringify(object),
        contentType: "application/json",
        dataType: "json",
    });
    //console.log("Verifying user with username: " + authUser.user_name + " and password: " + authUser.user_password);

    sessionStorage.setItem('user_id', authUser.user_id);
    window.alert('login sucessfull');
    
    console.log(authUser.user_id);
   }  catch (err) {
    console.log(err);
    window.alert('something wron;g')
    }

}

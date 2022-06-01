

async function addnutricionist() {
   
   
    //console.log("[signupandlogin] data = " + JSON.stringify(data));
    try {
        var defaultpoints = 0;
        var defaultadmin = 0;
        var defaultpt = 0;
        var defaultnutri = 1;

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

async function addpt() {
   
   
    //console.log("[signupandlogin] data = " + JSON.stringify(data));
    try {
        var defaultpoints = 0;
        var defaultadmin = 0;
        var defaultpt = 1;
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

    console.log("Função login chamada...")

   try{

    let object = {

         user_name: document.getElementById("fusernamelogin").value,
         user_password: document.getElementById("fpasswordlogin").value,
    };

    console.log("Sending the object with values: " + object);

    let authUser = await $.ajax({
        url: "/users/loginuser",
        method: "post",
        data: JSON.stringify(object),
        contentType: "application/json",
        dataType: "json",


    });
    alert("Authenticate user: " + JSON.stringify(authUser));
    console.log("Verifying user with username: " + authUser.user_name + " and password: " + authUser.user_password);

    sessionStorage.setItem('user_id', authUser.user_id);
    sessionStorage.setItem('user_admin', authUser.user_admin);
    sessionStorage.setItem('user_pt', authUser.user_pt);
    sessionStorage.setItem('user_nutri', authUser.user_nutri);
    sessionStorage.setItem('user_name', authUser.user_name);
    sessionStorage.setItem('user_points', authUser.user_points);
    window.alert('login sucessfull');
    
    window.location.assign("http://localhost:3000/dashboardTemplate.html");

    
    console.log(authUser.user_id);
   }  catch (err) {
    console.log(err);
    window.alert('something wron;g')
    window.location.assign("http://localhost:3000/login.html");

    }

}



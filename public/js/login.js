 $(document).ready(function () {
     $("#btnSubmit").click(function (event) {
         //stop submit the form, we will post it manually.
         event.preventDefault();
 
         var fusername = jQuery('[name=fusername]').val()
         var fpassword = jQuery('[name=fpassword]').val()

         let dataToSend = {
             "fusername":fusername,
             "fpassword":fpassword
           }
         dataToSend = JSON.stringify(dataToSend);
 
         // disabled the submit button
         $("#btnSubmit").prop("disabled", true);
 
         $.ajax({
             url: "http://localhost:8080/loginn",
             type: 'POST',
             contentType: "application/json",
             data: dataToSend,
             success: function (data) {
                 console.log("SUCCESS : ", data);
                 $("#output").text(data);
                 $("#btnSubmit").prop("disabled", false);
                 alert("Hello! I am an alert box 1");
                 
             },
             error: function (e) {
                 console.log("ERROR : ", e);
                 $("#btnSubmit").prop("disabled", false);
                 alert("Login falhou!!");
             }
         });

     });
 });

$(document).ready(function() {

    function getUsersList() {
        
        $.ajax({
            url: "http://localhost:8080/users",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });
    }

    getUsersList();

    $('#btnSubmit').on('click', function(event) {
        
        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        $.ajax({
            url: "http://localhost:8080/login",
            type: "POST",
            data: {
                username: jQuery('[name=fusername]').val(),
                password: jQuery('[name=fpassword]').val()
            },
            dataType: 'json',
            success: function(result) {
                console.log("SUCCESS : ", result);
                $("#output").text(JSON.stringify(result.user[0]));
                $("#btnSubmit").prop("disabled", false);
                //alert("Hello! I am an alert box 2");
            }
        });

    });

}); 
$(document).ready(function () {
    $("#btnSubmit").click(function (event) {
        //stop submit the form, we will post it manually.
        event.preventDefault();

        var uemail = jQuery('[name=uemail]').val()
        var upsw = jQuery('[name=upsw]').val()

        let dataToSend = {
            "uemail":uemail,
            "upsw":upsw
          }
        dataToSend = JSON.stringify(dataToSend);

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        $.ajax({
            url: "http://localhost:3000/api/login",
            type: 'POST',
            contentType: "application/json",
            data: dataToSend,
            success: function (data) {
                console.log("SUCCESS : ", data);
                $("#output").text(data);
                $("#btnSubmit").prop("disabled", false);
            },
            error: function (e) {
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);
            }
        });

    });
});

$(document).ready(function() {

   function getUsersList() {
       
       $.ajax({
           url: "http://localhost:3000/users",
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
           url: "http://localhost:8080/user-details",
           type: "POST",
           data: {
               email: jQuery('[name=uemail]').val(),
               password: jQuery('[name=upsw]').val()
           },
           dataType: 'json',
           success: function(result) {
               console.log("SUCCESS : ", result);
               $("#output").text(JSON.stringify(result.user[0]));
               $("#btnSubmit").prop("disabled", false);
           }
       });

   });

});
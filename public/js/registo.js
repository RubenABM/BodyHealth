/*$(document).ready(function() {

    $('#btnSubmit').on('click', function(event) {
        
        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        $.ajax({
            url: "http://localhost//BodyHealth/public/register",
            type: "POST",
            data: {
                name: jQuery('[name=fusername').val(),
                email: jQuery('[name=femail').val(),
                password: jQuery('[name=fpassword]').val(),
                morada: jQuery('[name=fmorada').val()
            },
            dataType: 'json',
            success: function(result) {
                console.log("SUCCESS : ", result);
                $("#output").text(JSON.stringify(result.user[0]));
                $("#btnSubmit").prop("disabled", false);
            }
        });

    });

}); */
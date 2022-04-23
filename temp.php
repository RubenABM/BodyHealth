<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/styles.css">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
        <script type="text/javascript" src="js/login.js">
    </script>
    </head>
    <body>
        <div class="flex-container">
            <div class="flex-child">
                <h2>Login Form</h2>

                <form id="loginForm">
                    <div class="imgcontainer">
                        <img src="images/img_avatar2.png" alt="Avatar" class="avatar">
                    </div>

                    <div class="container">
                        <label for="uemail"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" id="uemail" name="uemail" required>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="upsw" name="upsw" required>
                            
                        <input type="submit" value="Submit" id="btnSubmit"/>
                    </div>
                </form>
            </div>
        </div>
        <span id="output"></span>
    </body>
</html>
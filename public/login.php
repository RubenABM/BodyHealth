<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="stylesheets/login.css">
    <link rel="icon" type="img/x-icon" href="https://seeklogo.com/images/S/spring-logo-9A2BC78AAF-seeklogo.com.png">
    <script src="js/login.js"></script> <!--Ligar o codigo JavaScript a um ficheiro JavaScript-->
</head>

<nav>
  <div class="topnav">
    <img src="./images/logobranconobg.png" class="img-fluid" style="cursor: pointer; position: absolute; margin-left: 0%; width: 10%; margin-top: -0.1%;"> 
    <a href="about.html">Sobre Nós</a>
    <a href="jornalfit.html">Jornal FIT</a>
    <a href="index.html">Introdução</a>
  </div>

</nav>
<body>

    <hr></hr>


    <section class="form">

    <h1 class="registertitle">LOGIN</h1>

    <form class="formsignupuser">

      <label for="fusername" class="titleinput">Username</label><br>
      <input type="text" id="fusername" name="fusername" class="field" placeholder="Username"><br>
      <br>
      <br>
      <label for="fpassword" class="titleinput">Password</label><br>
      <input type="text" id="fpassword" name="fpassword" class="field" placeholder="Password"><br>
      <input type="submit" value="Submit" id="btnSubmit"/>
      <br>
      <br>
      

    </form> 

    <div class="wrapper">

       <div class="btn">


        <a href="mainpage.html">

          <button type="submit" onclick="gotoMain()"><b>ENTRAR</b></button>

        </a>

       </div>

    </div>

    </section>

    <img src="images/logoBranconoBG.png" class="logowhite">


    <!--FUNÇÃO PARA REDIRECIONAR O UTILIZADOR PARA A MAINPAGE-->

    <script>

        function gotoMain(){

          

      }


    </script>
  <span id="output"></span>
</body>
</html>
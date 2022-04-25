<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registo de Utilizador</title>
    <link rel="stylesheet" href="stylesheets/sign.css">
    <link rel="icon" type="img/x-icon" href="https://seeklogo.com/images/S/spring-logo-9A2BC78AAF-seeklogo.com.png">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
    <script type="text/javascript" src="js/registo.js"></script>
</head>

<nav>
  <div class="topnav">
    <img src="images/logobranconobg.png" class="img-fluid" style="cursor: pointer; position: absolute; margin-left: 0%; width: 10%; margin-top: -0.1%"> 
    <a href="about.html">Sobre Nós</a>
    <a href="jornalfit.html">Jornal FIT</a>
    <a href="index.html">Introdução</a>
  </div>

</nav>
<body class="bodysignup">

   

      <hr></hr>

      

      <h1 class="registertitle">REGISTO</h1>

      <form class="formsignupuser">

        <label for="fusername" class="titleinput">Username</label><br>
        <input type="text" id="fusername" name="fusername" class="field" placeholder="Username" required><br>
        <br>
        <br>
        <label for="fpassword" class="titleinput">Password</label><br>
        <input type="password" id="fpassword" name="fpassword" class="field" placeholder="Password" required><br>
        <br>
        <br>
        <label for="femail" class="titleinput">Email</label><br>
        <input type="email" id="femail" name="femail" class="field" placeholder="Email" required><br>
        <br>
        <br>
        <label for="fmorada" class="titleinput">Morada (Rua, Cidade)</label><br>
        <input type="text" id="fmorada" name="fmorada" class="field" placeholder="Morada" required><br>

        <input type="submit" value="Submit" id="btnSubmit"/>
        
      </form> 

      <div class="wrapper">

         <div class="btn">

            <button type="submit" value="Submit" id="btnSubmit"><b>REGISTAR</b></button>

         </div>

      </div>

      <h1 class="ortitle">OU</h1>

      <section>

        <a href="registerNutritionist.html" class="registernutritionist"></a>
        <a href="registerPT.html" class="registerpt"></a>
  

      <span class="circleforicons"></span> 
      <span class="circleforicons2"></span>

      <img src="images/3968526-200 (1).png" width="70px" height="70px" class="iconnutritionist">
      <img src="images/1926483-200.png" width="70px" height="70px" class="iconpersonaltrainer">

      </section>

      <section class="alreadyhaveaccount">

        <h3 id="trylogin">Já possui uma conta? <a href="login.php" class="loginlinkword">Login</a></h3>

      </section>

      <h1 id="beingauser">SENDO UM UTILIZADOR PODES:</h1>
      
      <section class="whatcanyoudo">

        <img src="images/icon1.png" width="60px" height="60px" id="icon1">
        <h3 id="discovernewrecipestext">DESCOBRIR NOVAS RECEITAS</h3>

        <img src="images/icon1.png" width="60px" height="60px" id="icon2">
        <h3 id="practicenewexercisestext">PRATICAR NOVOS EXERCÍCIOS</h3>

        <img src="images/icon1.png" width="60px" height="60px" id="icon3">
        <h3 id="findpersonaltrainertext">ENCONTRAR PERSONAL TRAINER'S</h3>

        <img src="images/icon1.png" width="60px" height="60px" id="icon4">
        <h3 id="descobrirnovoslocaistext">DESCOBRIR NOVOS LOCAIS E PERCURSOS</h3>

        <img src="images/icon1.png" width="60px" height="60px" id="icon5">
        <h3 id="andmoretext">E MAIS!</h3>


      </section>
     

</body>
</html>
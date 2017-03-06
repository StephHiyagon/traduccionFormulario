window.onload=function saludo(){
  var titulo = document.getElementById('form-signin-heading');
  var email= document.getElementById('inputEmail');
  var senha = document.getElementById('inputPassword');
  var saudade = document.getElementsByTagName('span')[0];
  var enviar = document.getElementsByClassName('btn')[0];

  titulo.innerHTML = "Por favor inicia sesión";
  email.placeholder= "correo electrónico";
  senha.placeholder= "contraseña";
  saudade.innerHTML= "Recordar datos";
  enviar.innerHTML = "Iniciar sesión";
}

function valida(){
  var email= document.getElementById('inputEmail').value;
  var senha = document.getElementById('inputPassword').value;
  console.log(senha.length);
  if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(email))){
        alert("El correo no tiene un formato valido");
        return false;
      }
  else if (!(/^[A-Za-z\d$@$!%*?&]{8,15}$/.test(senha))) {
        alert("La contraseña debe tener de 8 - 15 caracteres");
        return false;
  }
        return mostrar();
}

function mostrar(){
  var email= document.getElementById('inputEmail').value;
  var senha = document.getElementById('inputPassword').value;

  document.getElementById('correo').innerHTML=  "Este es el correo ingresado: </br>" + email;
  document.getElementById('contrasena').innerHTML= "Esta es su contraseña: </br>" + senha;
}

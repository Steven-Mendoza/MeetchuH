// function validarcorreo(){
//   let inputcorreo = document.getElementById("correo");
//   let email = inputcorreo;
//   let dominio = "@"
  
//   email.match()

// }
function mostrarmodal(){

  document.getElementById("mensajes").style.display = "block";
}
function ocultarmodal(){
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let inputpass = document.getElementById("pass");
  document.getElementById("mensajes").style.display = "none";
  let password = inputpass.value;
  console.log(password);

   if (password.match(lowerCaseLetters) && password.length >= "8" && password.match(upperCaseLetters) && password.match(numbers)) {
    alert('Valido')
       }
       else{
         alert('No Valido')
       }

}

function conf_pass(){
let inputconfpass = document.getElementById('confpass');
let inputpass = document.getElementById("pass");

  let cpass = inputconfpass.value;
  let password = inputpass.value;

  if (cpass === password){
    alert('ContraSeñas Coinciden')
  
 }
 else {
  alert('Contraseñas No Coinciden')
 }
w
}

 
// let btnRegistrarse = document.getElementById('regis');
//   btnRegistrarse.addEventListener('click',function(){
//    alert('Hola Mundo hice click')
//      })
/////////////////////////////////////////

// var letramay = document.getElementById("letramay");
// var numero = document.getElementById("numero");
// var longitud = document.getElementById("longitud");



//  {/* When the user starts to type something inside the password field */}
  //    entrada.onkeyup = function() {
  //  //  validate lowercase letters
  //    var lowerCaseLetters = /[a-z]/g;
  //   if(entrada.value.match(lowerCaseLetters)) {
  //     letramin.classList.remove("invalid");
  //     letramin.classList.add("valid");
  //    } else {
  //     letramin.classList.remove("valid");
  //     letramin.classList.add("invalid");
  //    }
  //   }
//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(entrada.value.match(upperCaseLetters)) {
//     letramay.classList.remove("invalid");
//     letramay.classList.add("valid");
//   } else {
//     letramay.classList.remove("valid");
//     letramay.classList.add("invalid");
//   }

//   // Validate numbers
//   var numeros = /[0-9]/g;
//   if(entrada.value.match(numeros)) {
//     numero.classList.remove("invalid");
//     numero.classList.add("valid");
//   } else {
//     numero.classList.remove("valid");
//     numero.classList.add("invalid");
//   }

//   // Validate length
//   if(entrada.value.length >= 8) {
//     longitud.classList.remove("invalid");
//     longitud.classList.add("valid");
//   } else {
//     longitud.classList.remove("valid");
//     longitud.classList.add("invalid");
//   }
// }

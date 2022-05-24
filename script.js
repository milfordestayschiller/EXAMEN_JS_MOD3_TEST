//Se identifican los ids y la clase square

var message = document.getElementById("message")
var titulo = document.getElementById("titulo")
var square = document.querySelectorAll(".square");
var valorTexto = document.getElementById("colorDisplay")

var playAgain = document.getElementById("playAgain")
//Se asigna a la variable randomColor
var reset = document.querySelector(".reset")
var easy = document.getElementById("easy")
var ultimosTres = document.getElementById("ultimosTres")
valorTexto.innerHTML = randomColor()


//Funcion que sirve para recorrer los cuadrados de la posicion 0 a 5 , ademas utiliza la funcion randomColor para hacer las comparaciones correspondientes y que el color aleatorio RGB del h1 sea coincidente con uno de los cuadrados, para posteriormente convierta a todos los demas cuadrados en el color que se selecciono como ganador.


function randomGlobal(valor) {

   let x = Math.floor(Math.random() * square.length)
   //esta arojando el mismo color ganador en otra posicion se repite
   console.log(x)
   for (let i = 0; i < square.length; i++) {

      if (square[i].style.background = randomColor()) {

         square[x].style.background = valorTexto.innerHTML;

      }

   }

}


randomGlobal()



// Funcion para dar el color random en el rgb  en h1
function randomColor() {
   var color1 = Math.floor(Math.random() * 256)
   var color2 = Math.floor(Math.random() * 256)
   var color3 = Math.floor(Math.random() * 256)
   return "rgb(" + color1 + ", " + color2 + ", " + color3 + ")"
}

randomColor()


function comparaciones1(params) {


   for (let i = 0; i < square.length; i++) {

      square[i].addEventListener("click", function () {
         //console.log(square[i].style.backgroundColor)

         if (square[i].style.background == valorTexto.innerHTML) {

            message.textContent = "Ganaste"
            playAgain.style = "display:block"

            reset.style = "visibility: hidden"




            for (i = 0; i < square.length; i++) {
               square[i].style.background = valorTexto.innerHTML
            }

         }

         else {
            message.textContent = "perdiste"
            square[i].style = "background-color:#232323;"
         }

      })

   }

}

comparaciones1()

reset.addEventListener("click", function (params) {

  location.reload()

})



playAgain.addEventListener("click", function (params) {
   randomGlobal()
   comparaciones1()

})



easy.addEventListener("click", function (params) {
   easy.onreset
   randomGlobal()



})


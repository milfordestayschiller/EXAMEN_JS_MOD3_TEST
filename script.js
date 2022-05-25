// Declaracion de variables
let colors = generateRandomColors()
let cuadrados = document.querySelectorAll(".square")
let message = document.querySelector("#message")
let reset = document.querySelector("#reset")
let easy = document.querySelector("#easy")
let resetNew = document.querySelector("#reset2")
//Funcion de reciclaje (recomendacion de la pauta)
function requestFunction(params) {
   for (let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].style.background = colors[i]
      console.log(cuadrados[i])
   }

}
requestFunction()
let rgb = document.querySelector("#rgb")
//Asignacion a PickedColor
let pickedColor = pickColor()
//Asignacion al titulo de PickedColor
rgb.textContent = pickedColor
//Comparacion modo Hard
function comparative(params) {

   for (let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].addEventListener('click', function (event) {
         let valorClick = cuadrados[i]
         if (valorClick.style.backgroundColor == pickedColor) {
            console.log("gano")
            message.textContent = "Correcto"
            rgb.style = `background: ${valorClick.style.backgroundColor} `
            changeColors(valorClick.style.backgroundColor)
            reset.textContent = "Play Again?"
            
         }
         else {
            console.log("perdio")
            valorClick.style = "background-color:#232323; transition: 0.5s;"
            message.textContent = "Intentelo Nuevamente"
         }
      }

      )
   }
}
//Comparacion modo Easy
function comparative2(params) {

   for (let i = 0; i < 3; i++) {
      cuadrados[i].addEventListener('click', function (event) {
         let valorClick = cuadrados[i]
         if (valorClick.style.backgroundColor == pickedColor) {
            message.textContent = "Correcto"
            rgb.style = `background: ${valorClick.style.backgroundColor} `
            changeColors(valorClick.style.backgroundColor)
            resetNew.textContent = "Play Again"
         }
         else {
            valorClick.style = "background-color:#232323; transition: 0.5s;"
            message.textContent = "Intentelo Nuevamente"
         }
      }

      )
   }
}

//Cambio de colores
function changeColors(color) {
   for (let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].style.backgroundColor = color
   }
}

changeColors()
//Funcion random para PickedcOLOR
function pickColor(params) {
   let rand = Math.floor(Math.random() * colors.length)
   let arreglo = colors[rand]
   return arreglo
}
pickColor()

//Asigna el color rgb en el arrego y es utilizada en generateRandomcOLORS
function randomColor() {
   var color1 = Math.floor(Math.random() * 256)
   var color2 = Math.floor(Math.random() * 256)
   var color3 = Math.floor(Math.random() * 256)
   return "rgb(" + color1 + ", " + color2 + ", " + color3 + ")"

}

randomColor()
//Genera los rgv y los agrega a cada indice del arreglo en 6 elementos, luego se asiga a la variable colors solicitado en la pauta, esto genera los colores para hard
function generateRandomColors() {
   let nuevosColores = []

   for (var i = 0; i < 6; i++) {
      nuevosColores[i] = randomColor()
   }
   return nuevosColores
}
//Genera los colores para Easy
function generateRandomColors2() {
   let nuevosColores = []

   for (var i = 0; i < 3; i++) {
      nuevosColores[i] = randomColor()
   }
   return nuevosColores
}
//Funcion refactorizada para su utilizacion en el resetear
function reset2(params) {
   for (var i = 0; i < cuadrados.length; i++) {
      if (cuadrados[i]) {
         cuadrados[i].style.background = colors[i]
         cuadrados[i].style.display = "block"
      } else {
         cuadrados[i].style.display = "none"
      }
   }
   rgb.style.background = "steelblue"
 
}
//Resetea los colores, el titulo, se cambian los colores
function resetear() {
   comparative()
   reset.addEventListener("click", function (params) {
       colors = generateRandomColors()
      pickedColor = pickColor()
      rgb.textContent = pickedColor
      reset2()
   })
}

resetear()

function resetear2() {
   comparative()
   resetNew.addEventListener("click", function (params) {
       colors = generateRandomColors2()
      pickedColor = pickColor()
      rgb.textContent = pickedColor
      reset2()
   })
}

resetear2()
//Se ocultan los cuadrados al hacer click en easy
let ocultar = document.getElementById("ocultar")
//Se invoca a la funcion generateRandomColors2 para que haga un random en las primeras 3 posiciones del arreglo
easy.addEventListener("click", function (params) {
   comparative2()
   colors = generateRandomColors2()
   pickedColor = pickColor()
   rgb.textContent = pickedColor
   reset.style = "visibility: hidden"
   resetNew.style = "visbility: visible"
   reset2()
   for (let i = 0; i < cuadrados.length - 3; i++) {
      if (cuadrados[i]) {
         ocultar.style = "visibility: hidden"
         cuadrados[i].style.background = colors[i]

      }
     }
})

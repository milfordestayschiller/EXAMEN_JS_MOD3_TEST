


let colors = generateRandomColors()
let cuadrados = document.querySelectorAll(".square")
let message = document.querySelector("#message")
let reset = document.querySelector("#reset")
let easy = document.querySelector("#easy")

function requestFunction(params) {
   for (let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].style.background = colors[i]
      console.log(cuadrados[i])
   }

}

requestFunction()

let rgb = document.querySelector("#rgb")
let pickedColor = pickColor()
//console.log(colors[3])
rgb.textContent = pickedColor

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
            valorClick.style.backgroundColor = "#232323"
            message.textContent = "Intentelo Nuevamente"
         }
      }

      )
   }
}
comparative()

function changeColors(color) {
   for (let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].style.backgroundColor = color
   }
}

changeColors()

function pickColor(params) {
   let rand = Math.floor(Math.random() * colors.length)
   let arreglo = colors[rand]
   return arreglo
}
pickColor()

function randomColor() {
   var color1 = Math.floor(Math.random() * 256)
   var color2 = Math.floor(Math.random() * 256)
   var color3 = Math.floor(Math.random() * 256)
   return "rgb(" + color1 + ", " + color2 + ", " + color3 + ")"

}

randomColor()

function generateRandomColors() {
   let nuevosColores = []

   for (var i = 0; i < 6; i++) {
      nuevosColores[i] = randomColor()
   }
   return nuevosColores
}

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
   reset.textContent = "Nuevos Colores"
   message.textContent = ""
}

function resetear() {
   reset.addEventListener("click", function (params) {
      colors = generateRandomColors()
      pickedColor = pickColor()
    rgb.textContent = pickedColor
      reset2()
   })
}

resetear()
easy.addEventListener("click", function (params) {
   colors = generateRandomColors(3)
   pickedColor = pickColor()
   rgb.textContent = pickedColor
   reset2()
   for (let i = 0; i < cuadrados.length - 3; i++) {
      if (cuadrados[i]) {
         cuadrados[i].style.display = "none"
         cuadrados[i].style.background = colors[i]

      }
      else {
         console.log("fuera de rango")
      }
   }
})


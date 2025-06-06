const container = document.querySelector(".container");
const button = document.querySelector("button");


//Total original square grid calculation
let originalTotal = 0; 
const getOriginalTotalSquares= function (){
  originalTotal =16 *16 
  return originalTotal;
 }

 getOriginalTotalSquares();

 for (i=1 ; i <= originalTotal ; i++){
    const div = document.createElement("div")
      div.classList.add("square")
      container.appendChild(div)
 }

let darkenedColor = 1;

 //Original Mouse hover effect
const squares = document.querySelectorAll(".square")
squares.forEach((square) =>{
  square.addEventListener('mouseenter', () =>{
    getRandomColor(square)
  })
})


//Button to resize container
button.addEventListener("click", () =>{
   let squareSide =prompt("Please enter the number of squares per side (maximum amt: 100)");
   let total=0;
   if(squareSide >100){
    alert("Error: Please enter a valid number")
   } else{
     total = squareSide * squareSide;
   }
   
   container.replaceChildren();

   for (i=1 ; i <= total ; i++){
    const div = document.createElement("div")
      div.classList.add("square")
      div.setAttribute("style", `width:calc(100% / ${squareSide} ); height: calc(100% /${squareSide})`)
      container.appendChild(div)
   }

   const squares = document.querySelectorAll(".square")
   squares.forEach((square) =>{
  square.addEventListener('mouseenter', function(e) {
      getRandomColor(square)
  })
})
})

  
//Randomize squares RGB values with each interaction
const getRandomColor = function (square){
  let r= Math.floor(Math.random() * 256)
  let g= Math.floor(Math.random() * 256)
  let b= Math.floor(Math.random() * 256)
  darkenedColor -= 0.1 
  square.style.background = `rgb(${r}, ${g}, ${b})`;
  container.style.filter= `grayscale('${darkenedColor}')`;
}
  


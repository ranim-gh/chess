const gameBoard = document.querySelector("#gameBoard")
const playerDisplay = document.querySelector('#player')
const infoDisplay = document.querySelector("#info-display")
const width = 8
 
//centering the pieaces 
const startPieaces =[

    rook ,knight , bishop , queen , king , bishop , knight, rook,
    pawn , pawn , pawn , pawn ,pawn , pawn ,pawn, pawn,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pawn , pawn , pawn , pawn ,pawn , pawn ,pawn, pawn,
    rook ,knight , bishop , queen , king , bishop , knight, rook,

]
    

function createBoard() {



startPieaces.forEach((element,i )=> {
    // creating a div element 
    const square = document.createElement("div")
    square.innerHTML=element

    // giving it a class of square 
    square.classList.add("square")
    //square.classList.add("beige")
    square.setAttribute('square-id',i)
    const row = Math.floor( (63 - i) / 8) + 1
    if (row %2===0){

        square.classList.add( i % 2 === 0 ? "beige": "brown")
    }
    else{
        square.classList.add( i % 2 === 0 ? "brown" : "beige")

    }

   
    if (i<=15){
        square.firstChild.querySelector("g >  Path").classList.add("white")
    }
    if (i>47){

        square.firstChild.querySelector("g > Path").classList.add("black")

    }

    



    gameBoard.append(square)

    
   
    
});



}


createBoard()
const allSquares = document.querySelectorAll('#gameBoard .square')
console.log(allSquares)




let startPositionId
let draggedElement





allSquares.forEach(square => {
    



     // Make the element draggable
    //square.firstChild.querySelector("g > Path").addEventListener('dragstart',dragStart);
    //square.firstChild.querySelector("g > Path").addEventListener('dragover',dragOver);
    //square.firstChild.querySelector("g > Path").addEventListener('drop',dragDrop);

    square.addEventListener('dragstart',dragStart);

    square.addEventListener('dragover',dragOver);
    square.addEventListener('drop',dragDrop);
    const audio = document.createElement('audio');
    audio.setAttribute('class', 'dragSound')
    const source = document.createElement('source');
    source.setAttribute('src', 'move-self.mp3'); // Replace with your audio file path
    source.setAttribute('type', 'audio/mpeg');
    audio.appendChild(source);
    square.appendChild(audio);







});




function dragStart(e){
    //console.log(e.target.parentNode.getAttribute('square-id'))
    startPositionId= e.target.parentNode.getAttribute("square-id")
    draggedElement= e.target
    console.log(startPositionId)
    //a=e.target.getAttribute("draggable")
   //console.log(a)
  




}



function dragDrop(e){

    e.stopPropagation()
    const parent = e.target.parentNode;
if (( e.target.getAttribute("draggable") )  ) {
       console.log("here")
       if  ( e.target != draggedElement){
        e.target.parentNode.append(draggedElement);


        e.target.remove();
        }


    }
    else {
        console.log("nigga")

       // console.log(draggedElement)
        e.target.append(draggedElement);
        dropped = true




    }
        
    const dragSound = document.querySelector('.dragSound')
    dragSound.play()





    }
    console.log(e)


    


function dragOver(e){

    e.preventDefault()


}


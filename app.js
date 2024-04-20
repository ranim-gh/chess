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




    gameBoard.append(square)
    
});



}


createBoard()

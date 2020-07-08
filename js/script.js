let player = 1
winner=null


let status=document.querySelector(".playerturn")
console.log(status)
status.innerText = `Player ${player} turn`

const statusgrid =[]

for (let i=0; i<3; i++){
    statusgrid[i] = []
    for (let j=0; j<3; j++) {
        let box = document.createElement("box")
        let board = document.querySelector("board")
        box.classList.add(`row${i}`)
        box.classList.add(`column${j}`)
        box.id = (`row${i}column${j}`)
        statusgrid[i][j] = 0
        // let boxname = `${i}${j}`
        // console.log(boxname)
        // let `row${i}column${j}` = new XO(`row${i},column${j}`)
        //box.addEventListener("click", boxClick)
        board.appendChild(box)
    }
}

console.log(statusgrid)
function boxClick () {
    console.log("click")
}

class XO {
    constructor (id,row,column){
        this.row = row;
        this.column = column;
        this.id = id;
        this.square = document.querySelector(`#${this.id}`)
        this.squareClick = document.querySelector(`#${this.id}`)
        .addEventListener('click', this.click)
        this.clicked = false;
        this.color = null;
        
    }
    click = () => {
    //    console.log(this.square)
    //    console.log(this.clicked)
    if(this.clicked == false){
       this.square.classList.add(`player${player}`)
       statusgrid[this.row][this.column]=player
       this.clicked = true
       this.evaluate(player)
            if (player ===1) player =2
            else player =1
        status.innerText = `Player ${player} turn`;
        }
    }
    evaluate = (player) =>{
        // check current row
        console.log(statusgrid)
        if ((statusgrid[this.row][0]==player) && (statusgrid[this.row][1]==player) && (statusgrid[this.row][2]==player)){
            console.log(`player ${player} wins`)
        }
        if ((statusgrid[0][this.column]==player) && (statusgrid[1][this.column]==player) && (statusgrid[2][this.column]==player)){
            console.log(`player ${player} wins`)
        }
        // check current column
        // check diagnol
        if((statusgrid[0][2]==player) && (statusgrid[1][1]==player) && (statusgrid[2][0]==player)){
            console.log(`player ${player} wins`)
        }
        if((statusgrid[0][0]==player) && (statusgrid[1][1]==player) && (statusgrid[2][2]==player)){
            console.log(`player ${player} wins`)
        }
        console.log("determine if winner")
    }
}

const row0column0 = new XO("row0column0",0,0);
const row0column1 = new XO("row0column1",0,1);
const row0column2 = new XO("row0column2",0,2);
const row1column0 = new XO("row1column0",1,0);
const row1column1 = new XO("row1column1",1,1);
const row1column2 = new XO("row1column2",1,2);
const row2column0 = new XO("row2column0",2,0);
const row2column1 = new XO("row2column1",2,1);
const row2column2 = new XO("row2column2",2,2);


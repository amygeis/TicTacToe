let player = 1

for (let i=0; i<3; i++){
    for (let j=0; j<3; j++) {
        let box = document.createElement("box")
        let board = document.querySelector("board")
        box.classList.add(`row${i}`)
        box.classList.add(`column${j}`)
        box.id = (`row${i}column${j}`)
        // let boxname = `${i}${j}`
        // console.log(boxname)
        // let `row${i}column${j}` = new XO(`row${i},column${j}`)
        //box.addEventListener("click", boxClick)
        board.appendChild(box)
    }
}


function boxClick () {
    console.log("click")
}

class XO {
    constructor (id){
        // this.row = row;
        // this.column = column;
        this.id = id;
        this.square = document.querySelector(`#${this.id}`)
        this.squareClick = document.querySelector(`#${this.id}`)
        .addEventListener('click', this.click)
        this.clicked = false;
        this.color = null;
        
    }
    click = () => {
       console.log(this.square)
       console.log(this.clicked)
       if(this.clicked == false){
       this.square.classList.add(`player${player}`)
       this.clicked = true
       if (player ===1)player =2
       else player =1
       }
    
    }
}

const row0column0 = new XO("row0column0");
const row0column1 = new XO("row0column1");
const row0column2 = new XO("row0column2");
const row1column0 = new XO("row1column0");
const row1column1 = new XO("row1column1");
const row1column2 = new XO("row1column2");
const row2column0 = new XO("row2column0");
const row2column1 = new XO("row2column1");
const row2column2 = new XO("row2column2");

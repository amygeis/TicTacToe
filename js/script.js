for (let i=0; i<3; i++){
    for (let j=0; j<3; j++) {
        let box = document.createElement("box")
        let board = document.querySelector("board")
        box.classList.add(`"row${i}"`)
        box.classList.add(`"column${j}"`)
        box.addEventListener("click", boxClick)
        board.appendChild(box)
    }
}


function boxClick () {
    console.log("click")
}
let squares = document.querySelectorAll('td');
let check = "x";
let hasWinner = false;
let body = document.body;
let counter = 0;

let button = document.createElement('button');
button.textContent =`Play Again`;
button.setAttribute ('onClick', 'window.location.reload()');


console.log(squares);

for (let i = 0 ; i < squares.length ; i++) {

    squares[i].addEventListener('click', function(e) {
        if ( !e.target.textContent && !hasWinner){

            e.target.textContent = check;
            check = check == "x" ? "o" :"x";
            counter++;
            console.log(counter);
        }
        checkWinner();
    });
}

function checkWinner() {
    let win = document.querySelector("h2");
    let winPossibilities = [
      ["cell1", "cell2", "cell3"],
      ["cell4", "cell5", "cell6"],
      ["cell7", "cell8", "cell9"],
      ["cell1", "cell4", "cell7"],
      ["cell2", "cell5", "cell8"],
      ["cell3", "cell6", "cell9"],
      ["cell1", "cell5", "cell9"],
      ["cell3", "cell5", "cell7"],
    ];
    for (let i = 0; i < winPossibilities.length; i++) {
      let square1 = document.getElementById(winPossibilities[i][0]);
      let square2 = document.getElementById(winPossibilities[i][1]);
      let square3 = document.getElementById(winPossibilities[i][2]);
      if (
        square1.textContent.toLowerCase() === "x" &&
        square2.textContent.toLowerCase() === "x" &&
        square3.textContent.toLowerCase() === "x"
      ) {
        console.log("X wins!");
        hasWinner = true;
        square1.classList.add("highlight");
        square2.classList.add("highlight");
        square3.classList.add("highlight");
        win.textContent = "X wins!";
        body.appendChild(button);
        
      } else if (
        square1.textContent.toLowerCase() === "o" &&
        square2.textContent.toLowerCase() === "o" &&
        square3.textContent.toLowerCase() === "o"
      ) {
        console.log("O wins!");
        hasWinner = true;
        square1.classList.add("highlight");
        square2.classList.add("highlight");
        square3.classList.add("highlight");

        win.textContent = "O wins!";
        body.appendChild(button);
        
      } else if (!hasWinner && counter == 9){
        win.textContent = "Draw!";
        body.appendChild(button);
      }
    }

  }
let turntext = document.getElementById('turntext');
let btns = document.querySelectorAll('.btn');
let resetbtn = document.getElementById('resetbtn');

let turn = true;

btns.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.innerHTML === "") {
            if (turn === true) {
                button.innerHTML = "0";
                turntext.innerText = "Turn for X";
                turn = false;
            } else {
                button.innerHTML = "X";
                turntext.innerText = "Turn for 0";
                turn = true;
            }
            checkwinner();
        }
    });
});

resetbtn.addEventListener('click', () => {
    btns.forEach((button) => {
        button.innerHTML = "";
    });
    turn = true;
    turntext.innerText = "Turn for 0";
});

let wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

function checkwinner() {
    for (let win of wincondition) {
        let pos1val = btns[win[0]].innerText;
        let pos2val = btns[win[1]].innerText;
        let pos3val = btns[win[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos1val === pos3val) {
                alert(pos1val + " wins the game");
                btns.forEach((button) => {
                    button.innerHTML = "";
                });
                turn = true;
                turntext.innerText = "Turn for 0";
                break;
            }
        }
    }
}


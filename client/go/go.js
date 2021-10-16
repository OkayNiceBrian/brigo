const stone = {
    none: 0,
    black: 1,
    white: 2
};
let blackTurn = true;
let board = [
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none],
    [stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none, stone.none]
];

function stoneClick(id) {
    const pointId = id.split(",");
    const point = {
        x: pointId[0],
        y: pointId[1]
    };

    if (board[point.x][point.y] == stone.none) {
        if (blackTurn) {
            setBlackStone(id, point.x, point.y);
        } else {
            setWhiteStone(id, point.x, point.y);
        }

        switchTurns();
    }
}

function setBlackStone(id, x, y) {
    board[x][y] = stone.black;
    document.getElementById(id).className = "black-piece";
}

function setWhiteStone(id, x, y) {
    board[x][y] = stone.white;
    document.getElementById(id).className = "white-piece";
}
function switchTurns() {
    if (blackTurn) {
        let elements = document.querySelectorAll('p.empty-black');
        for (let e of elements) {
            e.className = 'empty-white';
        }
    } else {
        let elements = document.querySelectorAll('p.empty-white');
        for (let e of elements) {
            e.className = 'empty-black';
        }
    }
    blackTurn = !blackTurn;
}
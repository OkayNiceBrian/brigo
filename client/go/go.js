import { Stone } from "./Stone";

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.addEventListener("click", onClick, false);

const dimensions = 9;
const tileSize = 70;
const halfTile = tileSize / 2;
let boardState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let blacksTurn = true;

draw();

function update() {
    blacksTurn = !blacksTurn;
    draw();
}

function draw() {
    drawBoard();
    drawStones();
}

function drawBoard() {
    ctx.strokeStyle = 'black';
    ctx.strokeRect(halfTile, halfTile, tileSize * (dimensions - 1), tileSize * (dimensions - 1));
    for (let y = 0; y < dimensions - 1; y++) {
        for (let x = 0; x < dimensions - 1; x++) {
            ctx.strokeRect(halfTile + tileSize * x, halfTile + tileSize * y, tileSize, tileSize);
        }
    }
}

function drawStones() {
    for (let y = 0; y < dimensions; y++) {
        for (let x = 0; x < dimensions; x++) {
            if (boardState[y][x] != 0) {
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(x * tileSize + halfTile + 1, y * tileSize + halfTile + 1, halfTile - 1, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
}

function onClick(event) {
    const mousePixels = getMousePos(event);
    const mouse = {
        x: Math.floor(mousePixels.x / tileSize),
        y: Math.floor(mousePixels.y / tileSize)
    };
    if (boardState[mouse.y][mouse.x] == 0) {
        boardState[mouse.y][mouse.x] = 1;
        update();
    }
}

function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

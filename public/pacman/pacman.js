
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const gridSize = 20;
const numRows = canvas.height / gridSize;
const numCols = canvas.width / gridSize;
let gameInterval;
let gameRunning = false;

let pacman = {
    x: 1,
    y: 1,
    dx: 1,
    dy: 0,
    size: gridSize,
    score: 0,
    angle: 0
};

let ghosts = [
    { x: 18, y: 18, dx: -1, dy: 0, color: 'red' },
    { x: 18, y: 1, dx: 0, dy: 1, color: 'cyan' },
    { x: 1, y: 18, dx: 0, dy: -1, color: 'pink' },
    { x: 10, y: 10, dx: 1, dy: 0, color: 'orange' }
];

let pellets = [];

function initializeGame() {
    pacman = { x: 1, y: 1, dx: 1, dy: 0, size: gridSize, score: 0, angle: 0 };
    ghosts = [
        { x: 18, y: 18, dx: -1, dy: 0, color: 'red' },
        { x: 18, y: 1, dx: 0, dy: 1, color: 'cyan' },
        { x: 1, y: 18, dx: 0, dy: -1, color: 'pink' },
        { x: 10, y: 10, dx: 1, dy: 0, color: 'orange' }
    ];
    pellets = [];
    for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
            if ((i !== 1 || j !== 1) && (i !== 18 || j !== 18)) {
                pellets.push({ x: i, y: j });
            }
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPellets();
    drawPacman();
    drawGhosts();
    document.getElementById('restartButton').disabled = true;
}

function drawPacman() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(
        pacman.x * gridSize + gridSize / 2,
        pacman.y * gridSize + gridSize / 2,
        gridSize / 2,
        (0.2 + pacman.angle) * Math.PI,
        (1.8 + pacman.angle) * Math.PI
    );
    ctx.lineTo(pacman.x * gridSize + gridSize / 2, pacman.y * gridSize + gridSize / 2);
    ctx.fill();
}

function drawGhosts() {
    ghosts.forEach(ghost => {
        ctx.fillStyle = ghost.color;
        ctx.beginPath();
        ctx.arc(ghost.x * gridSize + gridSize / 2, ghost.y * gridSize + gridSize / 2, gridSize / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ghost.x * gridSize + gridSize / 2 - 4, ghost.y * gridSize + gridSize / 2 - 6, gridSize / 8, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ghost.x * gridSize + gridSize / 2 + 4, ghost.y * gridSize + gridSize / 2 - 6, gridSize / 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ghost.x * gridSize + gridSize / 2 - 4, ghost.y * gridSize + gridSize / 2 - 6, gridSize / 16, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ghost.x * gridSize + gridSize / 2 + 4, ghost.y * gridSize + gridSize / 2 - 6, gridSize / 16, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function drawPellets() {
    ctx.fillStyle = 'white';
    pellets.forEach(pellet => {
        ctx.beginPath();
        ctx.arc(pellet.x * gridSize + gridSize / 2, pellet.y * gridSize + gridSize / 2, gridSize / 6, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function movePacman() {
    pacman.x += pacman.dx;
    pacman.y += pacman.dy;

    if (pacman.x < 0) pacman.x = numCols - 1;
    if (pacman.x >= numCols) pacman.x = 0;
    if (pacman.y < 0) pacman.y = numRows - 1;
    if (pacman.y >= numRows) pacman.y = 0;

    pellets = pellets.filter(pellet => {
        if (pellet.x === pacman.x && pellet.y === pacman.y) {
            pacman.score += 10;
            return false;
        }
        return true;
    });
}

function moveGhosts() {
    ghosts.forEach(ghost => {
        if (Math.random() < 0.3) {  // Change direction randomly
            const directions = [
                { dx: 1, dy: 0 },  // Right
                { dx: -1, dy: 0 }, // Left
                { dx: 0, dy: 1 },  // Down
                { dx: 0, dy: -1 }  // Up
            ];
            const randomDir = directions[Math.floor(Math.random() * directions.length)];
            ghost.dx = randomDir.dx;
            ghost.dy = randomDir.dy;
        }

        ghost.x += ghost.dx;
        ghost.y += ghost.dy;

        if (ghost.x < 0) ghost.x = numCols - 1;
        if (ghost.x >= numCols) ghost.x = 0;
        if (ghost.y < 0) ghost.y = numRows - 1;
        if (ghost.y >= numRows) ghost.y = 0;
    });
}

function checkCollisions() {
    for (let ghost of ghosts) {
        if (ghost.x === pacman.x && ghost.y === pacman.y) {
            return true;
        }
    }
    return false;
}

// function gameOver() {
//     clearInterval(gameInterval);
//     gameRunning = false;
//     window.parent.postMessage({ type: 'submit-score', score: pacman.score }, '*');

//     document.getElementById('restartButton').disabled = false;
// }
function gameOver() {
    clearInterval(gameInterval);
    gameRunning = false;
    
    // Display the final score
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.innerText = `Game Over! Your score: ${pacman.score}`;
    
    window.parent.postMessage({ type: 'submit-score', score: pacman.score }, '*');
    document.getElementById('restartButton').disabled = false;
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPellets();
    drawPacman();
    drawGhosts();
    movePacman();
    moveGhosts();

    if (checkCollisions()) {
        gameOver();
    }

    if (pellets.length === 0) {
        gameOver();
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    if (!gameRunning) {
        gameRunning = true;
        initializeGame();
        gameInterval = setInterval(update, 200); // Slightly increased speed
        document.getElementById('restartButton').disabled = false;
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    if (gameRunning) {
        clearInterval(gameInterval);
    }
    initializeGame();
    gameInterval = setInterval(update, 200); // Slightly increased speed
    gameRunning = true;
});

window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            pacman.dx = 0;
            pacman.dy = -1;
            pacman.angle = 1.5;
            break;
        case 'ArrowDown':
            pacman.dx = 0;
            pacman.dy = 1;
            pacman.angle = 0.5;
            break;
        case 'ArrowLeft':
            pacman.dx = -1;
            pacman.dy = 0;
            pacman.angle = 1;
            break;
        case 'ArrowRight':
            pacman.dx = 1;
            pacman.dy = 0;
            pacman.angle = 0;
            break;
    }
});

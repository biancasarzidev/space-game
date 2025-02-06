import Player from "../classes/Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player(canvas.width, canvas.height);

const keys = {
    left: false,
    right: false,
}


const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (keys.left) {
        player.position.x -= 6;
    }

    if (keys.right) {
        player.position.x += 6;
    }


    player.draw(ctx);

    requestAnimationFrame(gameLoop)
}

gameLoop();


addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "a") {
        keys.left = true;
    }

    if (key == "d") {
        keys.right = true;
    }
})

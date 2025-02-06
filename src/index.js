import Player from "../classes/Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player(canvas.width, canvas.height);


const gameLoop = () => {
    player.draw(ctx);

    requestAnimationFrame(gameLoop)
}

gameLoop();


addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "a") {
        player.position.x -= 20;
    }

    if (key == "d") {
        player.positision.x += 20;
    }
})

import Grid from "../classes/Grid.js";
import Invader from "../classes/Invader.js";
import Player from "../classes/Player.js";
import Projectile from "../classes/projectile.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.imageSmoothingEnabled = false;

const player = new Player(canvas.width, canvas.height);

const grid = new Grid(3, 6);

const playerProjectile = [];
const invaderProjectile = [];

const keys = {
    left: false,
    right: false,
    shoot: {
        pressed: false,
        released: true,
    }
}

const drawProjectiles = () => {

    const projectiles = [...playerProjectile, ...invaderProjectile];

    projectiles.forEach((projectile) => {
        projectile.draw(ctx);
        projectile.update();
    })
}

const clearProjectiles = () => {
    playerProjectile.forEach((projectile, index) => {
        if (projectile.position.y <= 0) {
            playerProjectile.splice(index, 1);
        }
    })
}


const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawProjectiles();
    clearProjectiles();

    grid.draw(ctx);
    grid.update();

    grid.invaders.forEach(invader => invader.draw(ctx));
    
    ctx.save();

    ctx.translate(
        player.position.x + player.width / 2, 
        player.position.y + player.height / 2
    );

    if (keys.shoot.pressed && keys.shoot.released) {
        player.shoot(playerProjectile);
        keys.shoot.pressed = false;
    }

    if (keys.left && player.position.x >= 0) {
        player.moveLeft();
        ctx.rotate(-0.15);
    }

    if (keys.right && player.position.x <= canvas.width - player.width) {
        player.moveRight();
        ctx.rotate(0.15);
    }

    ctx.translate(
        - player.position.x - player.width / 2, 
        - player.position.y - player.height / 2
    );

    player.draw(ctx);

    ctx.restore();

    requestAnimationFrame(gameLoop);
}

addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "a") keys.left = true;

    if (key === "d") keys.right = true;

    if (key === "enter") keys.shoot.pressed = true;
})

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();

    if (key === "a") keys.left = false;

    if (key === "d") keys.right = false;

    if (key === "enter") {
        keys.shoot.pressed = false;
        keys.shoot.released = true;
    }
})

setInterval(() => {
    const invader = grid.getRandomInvader()

    if (invader) {
        invader.shoot(invaderProjectile);
    }
}, 1000);

gameLoop();

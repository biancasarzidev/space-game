import { PATH_SPACESHIP_IMAGE } from "../utils/constant.js";

class Player {
    constructor(canvaswidth, canvasheight) {
        this.width = 100;
        this.height = 100;
        this.velocity = 7;

        this.position = {
            x: canvaswidth / 2 - this.width / 2,
            y: canvasheight - this.height - 30,
        }

        this.image = this.getImage(PATH_SPACESHIP_IMAGE);
    }

    getImage(path) {
        const image = new Image();
        image.src = path;
        return image;
    }

    moveLeft() {
        this.position.x -= this.velocity;
    }

    moveRight() {
        this.position.x += this.velocity;
    }
    
    draw(ctx) {
        ctx.getImage()
    }
}

export default Player;
import { INITIAL_FRAMES, PATH_ENGINE_IMAGE, PATH_ENGINE_SPRITES, PATH_SPACESHIP_IMAGE } from "../utils/constant.js";
import Projectile from "./projectile.js";

class Player {
    constructor(canvaswidth, canvasheight) {
        this.width = 48 * 2;
        this.height = 48 * 2;
        this.velocity = 8;

        this.position = {
            x: canvaswidth / 2 - this.width / 2,
            y: canvasheight - this.height - 30,
        }

        this.image = this.getImage(PATH_SPACESHIP_IMAGE);
        this.engineImage = this.getImage(PATH_ENGINE_IMAGE);
        this.engineSprites = this.getImage(PATH_ENGINE_SPRITES);

        this.sx = 0
        this.framesCounter = INITIAL_FRAMES;
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

        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );

        ctx.drawImage(
            this.engineSprites, 
            this.sx, 
            0, 
            48, 
            48,
            this.position.x,
            this.position.y + 10,
            this.width,
            this.height
        );

        ctx.drawImage(
            this.engineImage, 
            this.position.x, 
            this.position.y + 7, 
            this.width, 
            this.height
        );

        this.update();
    }
    
    update() {

        if(this.framesCounter === 0) {

            this.sx = this.sx === 96 ? 0 : this.sx + 48
            this.framesCounter = INITIAL_FRAMES;
        }

        this.framesCounter --;
    }

    shoot(projectile) {
        const p  = new Projectile({
            x: this.position.x + this.width / 2 - 1,
            y: this.position.y,
            }, -5 
        );

        projectile.push(p);
    }
}

export default Player;
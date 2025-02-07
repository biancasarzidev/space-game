import { PATH_INVADER_IMAGE } from "../utils/constant.js";
import Projectile from "./projectile.js";

class Invader {
    constructor(position, velocity) {

        this.position = position;
        this.width = 50 * 2;
        this.height = 37 * 2;
        this.velocity = velocity;

        this.image = this.getImage(PATH_INVADER_IMAGE);
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
    }
    

    shoot(projectile) {
        const p  = new Projectile({
            x: this.position.x + this.width / 2 - 1,
            y: this.position.y,
            }, 10
        );

        projectile.push(p);
    }
}

export default Invader;
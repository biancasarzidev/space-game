import Invader from "./Invader.js";

class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.invaderVelocity = 1;
        this.invader = this.init();
    }

    init() {
        const array = []

        for (let row = 0; row < this.rows; row += 1) {

            for (let col = 0; col < this.cols; col += 1) {
                const invader = new Invader({
                    x: col * 45 + 20,
                    y: row * 36 + 20,
                }, 
                
                this.invaderVelocity);
                
                array.push(invader);
            }   
        }

        return array;
    }
}

export default Grid;
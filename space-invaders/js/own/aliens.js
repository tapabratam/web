
class Alien{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dir = 1;
        this.width = 20;
    }

    move(dir, speed) {
        this.x += speed * dir;
    }

    display() {
        noStroke();
        fill(255,69,0);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.width);
    }

    decreamentY() {
        this.y += 20;
    }
}


class GrabAliens {
    constructor(num) {
        this.numberOfAliens = num;
        this.initialNumberOfAliens = this.numberOfAliens + 1;
        this.aliens = [];
        this.movingDirection = 1;
        this.speedMultiplyer = 0.5;

        for(var i=0; i<this.numberOfAliens; i++) {
            this.aliens[i] = new Alien(i*37 + 40, 50);
        }
    }

    display() {
        for(var i=0; i<this.numberOfAliens; i++) {
            this.aliens[i].display();
        }
    }

    move() {
        if (this.aliens[this.numberOfAliens - 1].x >= width - this.aliens[0].width / 2) {
            this.movingDirection *= -1;
            this.decreamentY();
        }
        else if(this.aliens[0].x <= this.aliens[0].width / 2) {
            this.movingDirection *= -1;
            this.decreamentY();
        }
        
        for(var i=0; i < this.numberOfAliens; i++)
            this.aliens[i].move(this.movingDirection, this.speedMultiplyer * (this.initialNumberOfAliens - this.numberOfAliens));
    }

    decrementAlien(temp) {
        if (this.numberOfAliens > 1) {
            this.aliens.splice(temp, 1);
            this.numberOfAliens -= 1;     
            return;
        }
        fill(0, 102, 153);
        textSize(32);
        textStyle(BOLD);
        textAlign(CENTER);
        text("YOU WON!", width/2, height/2);
        noLoop();
    }

    getNumber() {
        return this.numberOfAliens;
    }

    getContainer() {
        return this.aliens;
    }

    decreamentY() {
        for (var i=0; i<this.numberOfAliens; i++)
            this.aliens[i].decreamentY();
    }

    checkForGameOver() {
        if(this.aliens[0].y > gameOverLineY) {
            textSize(32);
            textStyle(BOLD);
            textAlign(CENTER);
            text("GAME OVER!", width/2, height/2);
            noLoop();
        }
    }
    
}
  
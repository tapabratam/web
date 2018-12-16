class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 2;
        this.width = 60;
        this.health = 2;
    }

    display() {
        noStroke();
        fill(240);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height * this.health);
    }
}

class Obstacles {
    constructor(n) {
        this.numberOfObstacles = n;
        this.obstacles = [];
        this.gap = 90;
        for (let i = 0; i < this.numberOfObstacles; i++) {
            this.obstacles[i] = new Obstacle(70 + i * this.gap, height - 70);
        }
    }

    display() {
        for (let i = 0; i < this.numberOfObstacles; i++) {
            this.obstacles[i].display();
        }
    }

    decrementObstacle(temp) {
        if (this.obstacles[temp].health == 0) {
            this.obstacles.splice(temp, 1);
            this.numberOfObstacles -= 1;
        } else {
            this.obstacles[temp].health -= 1;
        }
    }

    getNumber() {
        return this.numberOfObstacles;
    }

    getContainer() {
        return this.obstacles;
    }
}

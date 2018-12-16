var aliens = [];
var ship;
var alienCount = 10;
var bullet;
var collision;
var obstacle;
var gameOverLineY = 300;

// Function Setup
function setup() {
    createCanvas(420, 500);
    frameRate(25);
    ship = new Ship(); // Only one ship
    bullet = new Bullet(); // Only one bullet
    collision = new Collision(); // Used for collision detections
    aliens = new GrabAliens(alienCount); // Object representing all aliens   
    obstacle = new Obstacles(4);
}

// Function Draw
function draw() {
    background(12);

    // Draw gameover line
    stroke(255);
    line(0, gameOverLineY, width, gameOverLineY);
    ship.display();

    // Move the ship
    if (keyIsDown(LEFT_ARROW)) {
        ship.move(-1);
    } else if (keyIsDown(RIGHT_ARROW)) {
        ship.move(1);
    }

    // Move the aliens
    aliens.move();
    aliens.display();

    // Move the bullet
    bullet.move();
    bullet.display();

    // Show the obstacles
    obstacle.display();

    var temp = collision.collide(aliens);
    if (temp != -1) {   
        aliens.decrementAlien(temp);
    }

    var temp = collision.collide(obstacle);
    if (temp != -1) {   
        obstacle.decrementObstacle(temp);
    }

    aliens.checkForGameOver();
}

// Function KeyPressed
function keyPressed() {
    if (key === ' ') {
        if(bullet.y < 0) {
            bullet.x = ship.x;
            bullet.y = ship.y;
        }
    }
}
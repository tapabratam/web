
class Ship {
	constructor() {
		this.x = width/2;
		this.y = height - 30;
		this.speed = 8;
		this.width = 20;
	}

	move(dir) {
		this.x += this.speed * dir;
		if(this.x > width-10)
		  this.x = width-10;
		else if (this.x < 10)
		  this.x = 10;
	}

	display() {
		noStroke();
		fill(189,183,107);
		rectMode(CENTER);
		rect(this.x, this.y, this.width, this.width);
	}
}
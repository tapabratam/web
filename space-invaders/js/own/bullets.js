
function Bullet() {
    this.x = -20;
    this.y = -20;
    this.speed = 20;
    this.width = 6;
  
    this.move = function() {
      this.y -= this.speed;

      if (this.y < 0) {
        this.x = -20
        this.y = -20;
      }
    };
  
    this.display = function() {
      noStroke();
      fill(255,245,238);
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.width);
    };
  }
  
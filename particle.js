class Particle {
    constructor(x,y) {
      this.body = Bodies.circle(x,y,10);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, 10);
      pop();
    }
  }
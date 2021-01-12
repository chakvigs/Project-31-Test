class Particle {
    constructor(x,y) {
      this.body = Bodies.circle(x,y,radius,options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      circle(pos.x, pos.y, this.radius);
    }
  }
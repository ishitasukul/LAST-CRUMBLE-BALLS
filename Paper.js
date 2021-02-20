class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius= 100;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();

      // stroke("black");
      // strokeWeight(4);
      // fill("lightpink");
    
     // ellipse(pos.x, pos.y, this.radius);
    }
  };
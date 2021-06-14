class Ball {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.radius=10;
      this.image=loadImage("paper.png")
      this.body = Bodies.circle(x, y, 10, options);
      World.add(world, this.body);

    }
    display(){
      var Ballpos=this.body.position;
 push()
 translate(Ballpos.x, Ballpos.y);
 rectMode(CENTER)
 //strokeWeight(4);
 fill(255,0,255)
 imageMode(CENTER);
 image(this.image, 0,0,70, 70)
 pop()
      
    }
  }
  
class Polygon{
    constructor(x, y) {
        var options = {
            restitution:0.8
        }
        this.body = Bodies.circle(x, y,20,options);
        this.r=40;
        this.image = loadImage("polygon/polygon.png");
        World.add(world,this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}
class Block {
  constructor(x, y, width, height,angle){
    var options = {
        'restitution':0.4,
        }
    this.visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){ 
    if(this.body.speed<3){
    var angle= this.body.angle;
    push();
    var pos = this.body.position;
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
   else{
    push();
    this.visibility=this.visibility-1;
   tint(255,this.visibility);
    pop();
    World.remove(world,this.body);
  }
}
score(){

  if(this.visibilty<0 && this.visibilty>-105){
    score++;
  }
 }
}
class BlueFish{
    constructor(x,y,width,height,pos){
    this.body=Bodies.rectangle(x,y,width,height);

    this.width=width;
    this.height=height;

    this.image=loadImage("./assets/bluefish.png");
    
    this.blueFishPostion=pos;

    World.add(world,this.body);
  }

  display(){
    var p = this.body.position;

    push();
    translate(p.x,p.y);
    imageMode(CENTER);
    image(this.image,0,this.blueFishPostion,this.width,this.height);
    pop();
  }
}
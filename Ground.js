class Ground{
    constructor(x,y,width,height){
      var options={
          isStatic:true,
          'density':15.0,
          'friction':0.5
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;

      World.add(world,this.body);
    }
    display(){
    var pos =this.body.position;  
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("white");
    fill("white");
    rect(0,0,this.width,this.height);
    pop();   
        }

};
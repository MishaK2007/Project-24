class ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
       
    this.body = Bodies.rectangle(this.x,this.y,200,20,options);
    World.add(world,this.body);
    }

    display(){
     
     rectMode(CENTER);
     fill("yellow");
     rect(this.x,this.y,200,20);   
    }
}
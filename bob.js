class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.8
        }
    // this.radius= 25;
    this.body = Bodies.circle(x,y,25,options)
    World.add(world,this.body);
    
    }
    display(){
        fill("red")
       ellipse(this.body.position.x,this.body.position.y,50,50)
    }
    
    };
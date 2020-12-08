class Rope{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB
    }
this.body=Constraint.create(options);
World.add(world,this.body);
}
display(){
    stroke("white")
    var pointA=this.body.bodyA.position
    var pointB=this.body.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
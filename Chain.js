class Chain
{
    constructor(body1,point1)
    {
        var option_constraint = 
        {
            bodyA : body1,
            pointB : point1
            
        }
        this.Chain = Matter.Constraint.create(option_constraint);
        World.add(world,this.Chain);
    }
    display()
    {
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.pointB;

        stroke("white");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
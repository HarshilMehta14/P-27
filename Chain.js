class Chain
{
    constructor(body1,body2)
    {
        var option_constraint = 
        {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.4,
            length : 20,
        }
        this.Chain = Matter.Constraint.create(option_constraint);
        World.add(world,this.Chain);
    }
    display()
    {
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.x);
    }
}
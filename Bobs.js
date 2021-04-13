class Bob
{
    constructor(x,y,r)
    {
        var options = 
        {
            restitution:1,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }

    display()
    {

        var pos = this.body.position;
        
        this.body.velocityY = 12;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        strokeWeight(0.1);
        stroke("white");
        fill("#f77f00");
        ellipse(0,0,this.r, this.r);
        pop();
    }
}
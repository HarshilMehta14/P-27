class Base
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);

        this.width = width;
        this.height = height;

    
    }
    display()
    {
        rectMode(CENTER);
        rect(width/2,100,this.width,this.height);
    }
}
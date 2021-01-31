class Slingshot
{
    constructor(body1,point2)
    {
        var options=
        {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.slingbody= Constraint.create(options);
        World.add(world,this.slingbody);
    }
fly()
{
    this.slingbody.bodyA=null
}

    display()
    { 
        if(this.slingbody.bodyA)
        {
           var A=this.slingbody.bodyA.position
           var B=this.slingbody.pointB
           line(A.x,A.y,B.x,B.y)
        }
    }
}
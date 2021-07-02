class Bop{
   constructor(x,y,r)
   {
       var options = {
           
           restitution :1,
           friction : 0.3,
           density : 0.8
       }
       this.body = Bodies.circle(x,y,r/2,options);
       World.add(world,this.body);
       this.x = x;
       this.y = y;
       this.r = r;


   }

display()
{
  var pos = this.body.position;
  //var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  rectMode(CENTER);
  fill("pink");
  ellipse(0,0,this.r,this.r);
  pop();
}
}
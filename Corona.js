class Corona{
     constructor(){

      this.body = Bodies.circle(780,100,40)        
      this.radius = 40

    this.image = loadImage("corona.png")

      World.add(world,this.body)
     } 
     
 display(){

var pos = this.body.position

push()
 //ellipseMode(CENTER)
 ellipse(pos.x,pos.y,100,100)
 imageMode(CENTER)
 image(this.image,pos.x,pos.y,100,100)
pop()
 }



}
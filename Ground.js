class Ground{

  constructor(x,y){

 var options = {

 isStatic : true

 }


 this.body = Bodies.rectangle(x,y,1080,20,options)
 
 this.width = 1080
 this.height = 13

 World.add(world, this.body)

  }

display(){

push()

rectMode(CENTER)  
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop()

}

}
class Box{

    constructor(x,y){
    
    var toptions={
    
    restitution : 0.8,
    density : 0.4,
    friction : 1
    
    }
    
    this.body = Bodies.rectangle(x,y,50,50,toptions)
    this.height = 50
    this.width = 50
    
    World.add(world, this.body)
    
    }
    
    display(){
    
    var pos = this.body.position
    var angle  = this.body.angle
    
    push()
    
    translate(pos.x,pos.y)
    rotate(angle)
    strokeWeight(4)
    stroke(98,97,99)
    fill("pink")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    
    pop()
    
    }
    } 
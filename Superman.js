class Superman{
    
 constructor(){

var tanmay = {

//isStatic : true,
density : 2

}

this.body = Bodies.rectangle(200,200,30,30,tanmay)

this.width = 70
this.height = 40

supermanImg = loadImage("superman.png")

World.add(world , this.body)
 }

display(){

var pos = this.body.position
push()
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)
imageMode(CENTER)
image(supermanImg,pos.x,pos.y,180,100)
pop()
}

}
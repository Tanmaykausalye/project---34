class Rope{

constructor(bodyA, pointB){

var options={

  bodyA : bodyA,
  pointB : pointB,
  length : 100,
  stiffness : 0.01 

}

this.rope = Constraint.create(options)

World.add(world, this.rope)
}

//display(){

  //point1 = this.rope.bodyA.position
 // point2 = this.rope.pointB

//}

}
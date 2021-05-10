class Particles{
    constructor(x,y,r){
        var options = {
            restitution:0,
            friction:1,
            density:1.2
        }

        this.x = x
        this.y = y
        this.r = r

        this.body = Bodies.circle(x,y,this.r,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)

    }

    display(){
var pos = this.body.position

push();
fill("pink")
translate(pos.x,pos.y)
rectMode(CENTER)
ellipse(0,0,this.r,this.r)
pop();
    
/*for(var a = 0; a<100;a= a+30){
    particles.push(new Particles(a,100))
}*/


    }
}




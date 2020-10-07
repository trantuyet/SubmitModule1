
class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    render(){
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.stroke();
    }

}


let Hinhtron1 = Circle(95,50,40)
    Hinhtron1.render();

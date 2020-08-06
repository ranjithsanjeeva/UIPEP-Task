var canvas = document.getElementById("img1");
canvas.width=window.innerWidth-15;
canvas.height=window.innerHeight-140;
canvas.addEventListener('click',drawCircle,false);
let running = false;
let c=canvas.getContext("2d");
circle = [];
function drawCircle(event){


     function Circle(x,y,dx,dy,radius,randomColor){
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
        this.radius=radius;
        this.randomColor=randomColor
        this.draw=function(){
            c.fillStyle=this.randomColor;
            c.beginPath();
            c.arc(this.x,(this.y-130),this.radius,0,2*Math.PI)
            c.stroke();
            c.fill();
            this.update();
        }

        this.update= function(){
            if(this.x+this.radius > innerWidth-15|| this.x-this.radius<0)
            {
                this.dx=-this.dx
            }
            if(this.y+this.radius > innerHeight-10||this.y-this.radius<140)
            {
                this.dy=-this.dy
            }

            this.x += this.dx;
            this.y += this.dy;
            // console.log(this.x)
            // console.log(this.x)
            
       }
     }



    console.log("outside1")
    let randomColor = "#" + Math.floor(Math.random() * 25542195).toString(16);
    let x=event.clientX;
    let y=event.clientY;
    let dx=2*Math.random();
    let dy=1;
    let radius=20
    circle.push(new Circle(x,y,dx,dy,radius,randomColor))

    function animate(){
        //console.log("outside2")
        requestAnimationFrame(animate);
    
       c.clearRect(0,0,innerWidth,innerHeight);
        //console.log("outside3")
        for(let i=0;i<circle.length;i++) {
            // circle[i].draw();
            window.setTimeout(circle[i].draw(), 1000);
           // console.log(circle);
        }
        console.log("outside4")
      //  animate();
    }
    
    animate();

}


console.log("outside")
// function draw(e) {
//     console.log("inside")
//     var pos = getMousePos(canvas, e);
//     posx = pos.x;
//     posy = pos.y;
//     context.fillStyle = "#000000";
//     context.beginPath();
//     context.arc(posx, posy, 5, 0, 2*Math.PI);
//     context.fill();
//     console.log("outse")

// }

// function getMousePos(canvas, evt) {
//     console.log("outse")
//     var rect = canvas.getBoundingClientRect();
//     return {
//       x: evt.clientX - rect.left,
//       y: evt.clientY - rect.top
//     };
// }
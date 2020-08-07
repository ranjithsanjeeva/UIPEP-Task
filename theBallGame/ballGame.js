var canvas = document.getElementById("img1");
canvas.width=window.innerWidth-200;
canvas.height=window.innerHeight-140;
canvas.addEventListener('click',drawCircle,false);
let running = false;
let c=canvas.getContext("2d");
circle = [];
let animationFrame;
let intervalID;
let intervalID1;

let range=document.getElementById("myRange");
let value=range.value;
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
            c.arc((this.x-100),(this.y-90),this.radius,0,2*Math.PI)
            c.stroke();
            c.fill();
            this.update();
        }

        this.update= function(){
            if(this.x+this.radius > innerWidth-100|| (this.x-100)-this.radius<0)
            {
                this.dx=-this.dx
            }
            if(this.y+this.radius > innerHeight-50||this.y-this.radius<90)
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
    console.log(randomColor)
    let x=event.clientX;
    let y=event.clientY;
    var num1 = Math.floor(Math.random()*3) + 1; 
    num1 *= Math.floor(Math.random()*2) == 1 ? Math.random() : -Math.random();
    var num2 = Math.floor(Math.random()*3) + 1; // this will get a number between 1 and 99;
    num2 *= Math.floor(Math.random()*2) == 1 ? Math.random() : -Math.random();
    let dx= num1*3;
    let dy= num2*3;
    let radius=20;
    circle.push(new Circle(x,y,dx,dy,radius,randomColor))

    
    if(!intervalID) {
        intervalID =  setInterval(animate,(20-(value/5)));
    }
    animate();

}
function animate(){
        //console.log("outside2")
        // if(animationFrame){
        //     cancelAnimationFrame(animationFrame);
        // }
        // animationFrame = requestAnimationFrame(animate);
    
       c.clearRect(0,0,innerWidth,innerHeight);
        //console.log("outside3")
        for(let i=0;i<circle.length;i++) {
            // circle[i].draw();
            circle[i].draw();
           // console.log(circle);
        }
        console.log("outside4")
        
      //  animate();
    }

function changeSpeed(k){
  clearInterval(intervalID);
  intervalID = setInterval(animate,(20-(k/5)));
  console.log(k)
}

function pause(){
    clearInterval(intervalID);
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
var canvas = document.getElementById("img1");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
canvas.addEventListener('click',drawCircle,false);

function drawCircle(event){
    console.log("outside1")
    var canvas = document.getElementById("img1");
   
    let c=canvas.getContext("2d");
    let randomColor = "#" + Math.floor(Math.random() * 25542195).toString(16);
    c.fillStyle=randomColor;
    c.beginPath();
    
   
    c.arc(event.clientX,(event.clientY-130),20,0,2*Math.PI)
    console.log(event.clientX)
    console.log(event.clientY)
    c.stroke();
    c.fill();
    console.log("outside3")
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
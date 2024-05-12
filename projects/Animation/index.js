const cartoonCanvas = document.getElementById("cartoonCanvas");
const canvas = cartoonCanvas.getContext("2d");

//background blue color
canvas.fillStyle = "blue";
canvas.fillRect(0,0,750,500);
canvas.beginPath();
canvas.moveTo(0,490);
canvas.lineTo(750, 490);
canvas.stroke();

//grass
canvas.fillStyle = "green";
canvas.fillRect(0,490,750,10);       

//sun
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.arc(95,100,90,0,2*Math.PI);
canvas.stroke();
canvas.fill();

//clouds
const Cloud = (x,y) => {
    canvas.beginPath();
    canvas.arc(x, y, 50, Math.PI*0.5, Math.PI*1.5);
    canvas.arc(x+50, y-50, 50, Math.PI, Math.PI*2.5);
    canvas.arc(x+150, y-50 , 50, Math.PI, Math.PI*2);
    canvas.arc(x+200, y, 50, Math.PI*1.5, Math.PI*0.5);
    canvas.arc(x+200, y, 50, Math.PI*1.5, Math.PI*0.5);
    canvas.fillStyle = "rgba(00,255,255,50%)"
    canvas.fill();
}
Cloud(150,150);
Cloud(400,200);
Cloud(500,150);

//house drawing
canvas.fillStyle = "grey";
canvas.fillRect(290,300,200,190)
//roof
canvas.fillStyle = "#663300";
canvas.beginPath();
canvas.moveTo(290,300);
canvas.lineTo(390,200);
canvas.lineTo(490,300);
canvas.lineTo(290,300);
canvas.fill();
canvas.stroke();
//door
canvas.fillStyle = "#FFFFFF";
canvas.fillRect(365,415,50,75);

canvas.fillStyle = "#999900";
canvas.beginPath();
canvas.arc(380,460,3,0,2*Math.PI);
canvas.stroke();
canvas.fill();

//windows
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.fillRect(330,330,40,40)
canvas.fillRect(410,330,40,40)

for (let index = 0; index <= 40; index+=20) {
    canvas.beginPath();
    canvas.moveTo(330+index,330);
    canvas.lineTo(330+index,370);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(410+index,330);
    canvas.lineTo(410+index,370);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(330,330+index);
    canvas.lineTo(370,330+index);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(410,330+index);
    canvas.lineTo(450,330+index);
    canvas.stroke();

}

//chimney
canvas.fillStyle = "#333300";
canvas.beginPath();
canvas.moveTo(310,280);
canvas.lineTo(310,230);
canvas.lineTo(330,230);
canvas.lineTo(330,261);
canvas.lineTo(310,280);
canvas.fill();
canvas.stroke();


//fences
canvas.fillStyle = "#663300";
for (let i = 0; i < 290; i+=10) {
    canvas.beginPath();
    canvas.moveTo(0+i,490);
    canvas.lineTo(10+i,490);
    canvas.lineTo(10+i,440);
    canvas.lineTo(5+i,415);
    canvas.lineTo(0+i,440);
    canvas.lineTo(0+i,490);
    canvas.fill();
    canvas.stroke();    
}

for (let i = 490; i < 750; i+=10) {
    canvas.beginPath();
    canvas.moveTo(0+i,490);
    canvas.lineTo(10+i,490);
    canvas.lineTo(10+i,440);
    canvas.lineTo(5+i,415);
    canvas.lineTo(0+i,440);
    canvas.lineTo(0+i,490);
    canvas.fill();
    canvas.stroke();    
    }

//trees
for (let i = 0; i <= 180; i+=60) {
    canvas.fillStyle = "#654321";
    canvas.fillRect(50+i,400,20,90);

    canvas.fillStyle = "green";
    canvas.beginPath();
    canvas.moveTo(50+i,400);
    canvas.lineTo(70+i,400);
    canvas.lineTo(90+i,380);
    canvas.lineTo(80+i,340);
    canvas.lineTo(40+i,340);
    canvas.lineTo(30+i,380);
    canvas.lineTo(50+i,400);
    canvas.fill();
    canvas.stroke();   
    }

for (let i = 480; i <= 660; i +=60) {
    canvas.fillStyle = "#654321";
    canvas.fillRect(50+i,400,20,90);
    
    canvas.fillStyle = "green";
    canvas.beginPath();
    canvas.moveTo(50+i,400);
    canvas.lineTo(70+i,400);
    canvas.lineTo(90+i,380);
    canvas.lineTo(80+i,340);
    canvas.lineTo(40+i,340);
    canvas.lineTo(30+i,380);
    canvas.lineTo(50+i,400);
    canvas.fill();
    canvas.stroke();
    }

//text
canvas.fillStyle = "black";
canvas.font = "20px Arial";
canvas.strokeText("My Picture", 340, 50);
var id = null;

function draw(){
const img = document.getElementById("bird");
canvas.fillStyle = "black";
canvas.font = "30px Arial";
canvas.strokeText("Look at the bird fly!",230,150);
var pos = 0;
clearInterval(id);
id = setInterval(animation,.5);
function animation(){
    if(pos == 710){
        clearInterval(id);
    }
    else {
        pos++;
        img.style.left = pos +'px'
    }
}
}


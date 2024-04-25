const json = [
    {
        name:"Apple",
        quantity:20,
        color:"red",
    },
    {
        name:"Banana",
        quantity:15,
        color:"yellow",
    },
    {
        name:"Orange",
        quantity:5,
        color:"orange",
    },
    {
        name:"Blueberry",
        quantity:10,
        color:"blue",
    },
    {
        name:"Grape",
        quantity:10,
        color:"purple",
    },
];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let height = 0;
for (let i = 0; i < json.length; i++) {
    ctx.fillStyle = json[i].color;
    ctx.fillRect(0, height, 10*(json[i].quantity), 15);
    ctx.fillStyle = "black";
    ctx.font = "10px";
    ctx.fillText(`${json[i].name} ${json[i].quantity}`, 1, (height + 10));
    height += 20;    
};
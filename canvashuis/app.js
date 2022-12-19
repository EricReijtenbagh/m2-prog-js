class App
{
    runAaplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");

        g.beginPath();
        g.fillStyle = "pink";
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas)
    }
}
console.log()
let app = new App()
app.runAaplication()
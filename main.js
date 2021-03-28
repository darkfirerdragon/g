function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,130,80,300,300);
fill(4,239,255)
stroke(4,239,255)
circle(80,40,70);
circle(80,430,70);
circle(500,40,70);
circle(500,430,70);
fill(0,255,251)
stroke(4,239,255)
rect(115,30,350,20)
rect(115,420,350,20)
rect(70,75,20,330)
rect(490,75,20,320)
}
function take_snapshot(){
save("tint_image.png");
}
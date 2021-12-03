

let img;
let tabImg = ['assets/dancing1.png', 'assets/dancing2.png', 'assets/dancing3.png']
let imgtxt
let i = 0;
function setup() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    createCanvas(w, h, WEBGL);

    img = createImg(tabImg[i], '');
    img.position(width / 2, 0);
    img.mousePressed(changeIMG);

    imgtxt = createImg('text.png', 'text');
    imgtxt.position(0, 0);
}
function draw() {
    background(0);
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;

    pointLight(200, 200, 255, locX, locY, 20);
    noStroke();
    rect(-width / 2, -height / 2, width, height);
}

function changeIMG() {
    i++;
    i = i % 3;
    img.elt.src = tabImg[i];
    
    let Xmin = width/8;
    let Xmax = width/2;
    
    let x= Math.floor(Math.random() * (Xmax - Xmin)) + Xmin;
    
    let Ymin = height/8;
    let Ymax = height/2;
    
    let y= Math.floor(Math.random() * (Ymax - Ymin)) + Ymin;
    
    img.position(x, y);
}
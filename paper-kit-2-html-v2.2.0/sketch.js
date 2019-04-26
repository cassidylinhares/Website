const flock = [];
function setup(){
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0,0);
    cnv.style('z-index', '-1');

    for(var i = 0; i < 100; i++){
        flock.push(new Boid());
    }
}

function draw(){
    background(44, 52, 61);
    var i = 0;
    for(let boid of flock){
        boid.edge();
        boid.update();
        boid.show(i);
        i++;
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    console.log("hi");
}

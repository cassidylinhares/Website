class Boid{
    constructor(){
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-1, 2), random(-1, 2));
        this.r = 3.0;
        this.maxSpeed = 4;
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.limit(this.maxSpeed);
    }

    show(i){
        let theta = this.velocity.heading() + radians(90);
        stroke(255);
        if(i%2 == 0){
            fill(247, 200, 109); //orange
        }else{
            fill(250, 114, 204); //pink
        }

        let x1 = this.position.x;
        let y1 = this.position.y;

        push();
        translate(x1,y1);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
    }

    edge(){
        if(this.position.x > width + this.r){
            this.position.x = -this.r;
        }else if(this.position.x < -this.r){
            this.position.x = width+this.r;
        }
        if(this.position.y > height + this.r){
            this.position.y = -this.r;
        }else if(this.position.y < -this.r){
            this.position.y = height + this.r;
        }
    }
}

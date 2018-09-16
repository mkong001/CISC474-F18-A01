var phoneGame=function(){
    var self=this;
    this.options={
        height:450,
        width:800,
        projetileRadius:5,
        projectileSpeed:150,
        bowX:50,
        bowY:0
    }
    this.shotsFired=0
    this.shotsHit=0
    this.car1=new car(3*this.options.height/4, this.options.width + 200);
}

var car=function(xPos, yPos){
    var self=this;
    this.options={
        height:100,
        width:175,

        // Defining the bounds of how long the car waits at the stop sign
        minDelay:1000,
        maxDelay:5000,

        // Defining the bounds of the initial speed, and acceleration which will be set randomly
        minSpeed:70,
        maxSpeed:150,
        minAccel:0.1,
        maxAccel:0.4,

        // Defining the top right left corner of the window
        windowX:40,
        windowY:10,

        // Defining length and width from that point -->
        windowHeight:40,
        windowLength:60
    }
    this.xPos=xPos;
    this.yPos=yPos;
    this.speed=0;
    this.acceleration=0;
    this.hasPhone=false;

    this.initialize=function(){
        self.speed = (minSpeed + (Math.random()*1000)%(this.options.minSpeed-this.options.maxSpeed));
        self.acceleration = (minAccel + (Math.random()*1000)%(this.options.maxAccel-this.options.maxAccel));
        self.hasPhone = (Math.random()>0.5); // Math.random() produces value 0-1, so this is a 50% chance of having a phone
    }
    this.update=function(time){
        
    }
    // This function finds the next position the car will have with the current speed and 
    this.updatePosition=function(time){
        self.xPos=(self.xPos)+(self.speed*time)+((1/2)*self.acceleration*(Math.pow(time, 2)));
        self.speed=self.speed+acceleration*time
    };

    this.initialize();
}
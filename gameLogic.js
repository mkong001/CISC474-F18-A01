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

this.update=function(time){
    // TODO: If arrow hits car window and car has phone then add to score, change car to not have phone, arrow stops moving
    // TODO: If arrow hits car window and car does not have phone then detract score, arrow stops moving
    // TODO: If arrow does not hit car window detract score, arrow stops moving
    // TODO: If arrow has stopped moving yank it back to the bow (or delete it and fire a new one)
    // TODO: If car with phone has left game bounds, remove life
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

        // Defining length and width from the positional point
        windowHeight:40,
        windowLength:60,
    }
    this.xPos=xPos;
    this.xWaitPos=100
    this.yPos=yPos;
    this.speed=0;
    this.acceleration=0;
    this.timeSpentWaiting=0;
    this.waitTime=0;
    this.hasPhone=false;

    this.initialize=function(){
        self.speed = (minSpeed + (Math.random()*1000)%(self.options.maxSpeed-self.options.minSpeed));
        self.acceleration = (minAccel + (Math.random()*1000)%(self.options.maxAccel-self.options.minAccel));
        self.hasPhone = (Math.random()>0.5); // Math.random() produces value 0-1, so this is a 50% chance of having a phone
        self.waitTime = (minDelay + (Math.random()*10000)%(self.options.maxDelay-self.options.minDelay));
    }

    this.updatePosition=function(time){

        self.xPos=(self.xPos)+(self.speed*time)+((1/2)*self.acceleration*(Math.pow(time, 2)));
        self.speed=self.speed+acceleration*time
    };

    this.initialize();
}

var arrow=function(xPos, yPos){
    this.height=5;
    this.width=5;
    this.speed=5;
    this.xPos=xPos;
    this.yPos=yPos;
    
    this.updatePosition=function(time){
        //speed*time gives distance.
        var distance=self.speed*time;
        //calculate new x,y from distance and angle y is sin*dist, x is cos*dist
        self.yPos=self.yPos+Math.sin(self.angle)*distance;
        self.xPos=self.xPos+Math.cos(self.angle)*distance;
    }
}
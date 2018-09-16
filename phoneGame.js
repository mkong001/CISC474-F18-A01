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
    this.car1=new car(3*this.options.height/4, this.options.width+);
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
    this.velocity=0;
    this.acceleration=0;
    this.hasPhone=false;

    this.initialize=function(){
        self.velocity = (minSpeed + (Math.random()*1000)%(this.options.minSpeed-this.options.maxSpeed));
        self.acceleration = (minAccel + (Math.random()*1000)%(this.options.maxAccel-this.options.maxAccel));
        self.hasPhone = (Math.random()>0.5); // Math.random() produces value 0-1, so this is a 50% chance of having a phone
    }

    // This function finds the next position the car will have with the current velocity and 
    this.move=function(slowingDown){
    // slowingDown is a boolean that is true if the movement is slowing down or false if it is speeding up 
        if (slowingDown)
        {
            // If the car is slowing down, but not yet stopped, reduce speed by the rate of the deceleration
            if (self.velocity > 1) // Uses > 1 because its being multiplied by a decimal, so eventuall will reach a fraction number, and that speed is so slow we want the car to stop
            {
                self.velocity = (self.velocity * (1-self.acceleration));
            }
            // If the car has completed its movement, slowing down to a stop,
            else
            {
                self.velocity = 0;
            }
        }
        else
        {
            // If the car is stopped, and is speeding up, then it will start at velocity of 1 which will then be multiplied by acceleration
            if (self.velocity <= 0)
            {
                self.velocity = 1;
            }
            // If the car is speeding up, and is already moving, the speed will increase by the rate of its acceleration
            else if (self.velocity < self.options.maxSpeed)
            {
                self.velocity = (self.velocity / self.acceleration);
            }
            // Makes sure the max speed is not broken
            if (self.velocity > self.options.maxSpeed)
            {
                self.velocity = self.options.maxSpeed
            }
        }

    };

    this.initialize();
}


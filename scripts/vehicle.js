//NOT FINISHED YET

var vehicleGame = function(){

    var self=this;
    this.width=144;
    this.length=96;
    this.curr_Image;
    this.shotsEffective=0;
    this.shotsWrong=0;
    this.life=3;
    this.score=0;
    this.vehicle=new vehicle();

    this.reset=function(){
        this.shotsEffective=0;
        this.shotsWrong=0;
        this.life=3;
        this.score=0;
    }
    
    this.initialize=function(){
        self.reset();    
    };

    this.scoreCalculator = function(){
        this.score += 50*this.shotsEffective - 100*this.shotsWrong;
    }

    this.update = function(time){
        self.vehicle.updatePostion(time);
        if(self.vehicle.xPos){
            
        }

    }

    this.initialize();
}




//For vehicle object.
var vehicle =function(){
    var self=this;
    this.xPos=0;
    this.yPos=530;
    this.speed=10;
    this.stop=980;

    this.initialize = function(){
        self.xPos=0;
        self.yPos=530;
        self.speed=10;
    }
    this.positionVehicle= function(x,y){
        self.xPos=x;
        sefl.yPos=y;
    }
    this.updatePostion=function(time){
        var distance= self.speed*time;
        if(self.xPos<self.stop){
            self.xPos += distance;
        }
    }
    this.initialize();

    // var self=this;
    // this.height:100,
    // this.width:175,

    // // Defining the bounds of how long the car waits at the stop sign
    // this.minDelay:1000,
    // this.maxDelay:5000,

    // // Defining the bounds of the initial speed, and acceleration which will be set randomly
    // this.minSpeed:70,
    // this.maxSpeed:150,
    // this.minAccel:0.1,
    // this.maxAccel:0.4,

    // // Defining the top right left corner of the window
    // this.windowX:40,
    // this.windowY:10,

    // // Defining length and width from the positional point
    // this.hitBox:40,
    // this.hitBox:60,
    
    // this.xPos=xPos;
    // this.stopPos=980
    // this.yPos=yPos;
    // this.speed=0;
    // this.acceleration=0;
    // this.timeSpentWaiting=0;
    // this.waitTime=0;
    // this.hasPhone=false;

    // this.initialize=function(){
    //     self.speed = (minSpeed + (Math.random()*1000)%(self.options.maxSpeed-self.options.minSpeed));
    //     self.acceleration = (minAccel + (Math.random()*1000)%(self.options.maxAccel-self.options.minAccel));
    //     self.hasPhone = (Math.random()>0.5); // Math.random() produces value 0-1, so this is a 50% chance of having a phone
    //     self.waitTime = (minDelay + (Math.random()*10000)%(self.options.maxDelay-self.options.minDelay));
    // }

    // this.updatePosition=function(time){

    //     self.xPos=(self.xPos)+(self.speed*time)+((1/2)*self.acceleration*(Math.pow(time, 2)));
    //     self.speed=self.speed+acceleration*time
    // };

    // this.initialize();
}
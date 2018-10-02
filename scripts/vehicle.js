//NOT FINISHED YET

var vehicleGame = function(){

    var self=this;
    this.option={
        stop_sign:960,
        length:1200,
        width:600,
        minX:0
    }
    this.length=144;
    this.width=96;
    this.curr_Image;
    this.shotsEffective=0;
    this.shotsWrong=0;
    this.life=1;
    this.score=0;
    this.vehicle=new vehicle();

    this.reset=function(){
        this.shotsEffective=0;
        this.shotsWrong=0;
        this.life=3;
        this.score=0;
    }

    this.getshotsE= function(){
        retrun .shotsEffective;
    }

    this.initialize=function(){
        self.reset();    
    };

    this.scoreCalculator = function(){
        this.score += 50*this.shotsEffective - 100*this.shotsWrong;
    }

    this.update = function(time){
        self.vehicle.updatePostion(time);
        // if(self.vehicle.xPos)
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
        self.xPos += distance;
    }

    this.initialize();
}
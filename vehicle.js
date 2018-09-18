//NOT FINISHED YET

var vechicle = function(){
    //The width and length of vehicles
    this.self=this;
    this.width = 0;
    this.length = 0;
    //We also need the position of the effective shooting 
    //Xpos,Ypos are the current location of this vehicle.
    this.Xpos =0;
    this.Ypos =0;
    this.windowX =0;
    this.Xspeed =0;
    this.Yspeed =0;
    //Need to be edited
    this.curr_Image;
    this.image;
    this.image2;
    this.image3;
    this.imageArry=[this.image,this.image2];

    //Need to be deleted later
    this.stop_Sign_X

    //If we have 3 pics for vehicles, call this method to change the pics.
    this.imageUpdate =function(){
        //Randomly set vihicles
        if(this.Xpos<=this.stop_Sign_X){
            return this.imageArry[Math.floor(Math.random()*0 + 1)];
        }
    }
    //We need to use the position of stop sign somewhere

    //Reset the Image to the initial one.
    this.reset()=function(){
        this.Xpos =0;
        this.Ypos =0;
        this.image;

    }

    //If the Xposition + vehicle.length == stop_sign.Xpos,
    // stop update Xpos for a few seconds
    this.update = function(){
        if(this.Xpos<this.stop_Sign_X){
            this.Xpos += this.Xspeed;
            this.Ypos += this.Yspeed;
            this.curr_Image = this.imageUpdate();
        }
        //After 3000 milliseconds, continue on updating.
        if(this.Xpos==this.stop_Sign_X){
            setTimeout(this.update(),3000);
        }
    }


}
var gameUI=function(){
    var self=this;
    this.game=undefined;
    this.running=false;

    this.initialize=function(){
        self.game= new vehicleGame()
            $('#GameStopped').show();
            $('#GameRunning').hide();

        $('#StartBtn').on('click',function(){
            $('#GameStopped').hide();
            $('#GameRunning').show();
            self.running=true;
        });   

        $('#StopBtn').on('click',function(){
            $('#GameStopped').show();
            $('#GameRunning').hide();
            self.running=false;
            self.game.reset();
            self.refreshView();
        });
    }
    this.refreshView=function(){
        self.game.lifeSystem();
        $('#vehicle').css("left",self.game.vehicle.xPos+10);
        $('#EffectiveCount').text(self.game.shotsEffective);
        $('#MistakeCount').text(self.game.shotsWrong);
    };


    // Need to be done!
    this.lifeSystem = function(){
        var lifePic= document.getElementById("threeHeart");
        if(life==3){
            $('#threeHeart').css('background-image', 'url(../Image/twohearts.png)');
            // lifePic.style.backgroundImage='url(../Image/threehearts.png)';
        }
        if(life==2){
            $('#threeHeart').css('background-image', 'url(../Image/twohearts.png)');
            // lifePic.style.backgroundImage='url(../Image/twohearts.png)';
        }
        if(life==1){
            $('#threeHeart').css('background-image', 'url(../Image/heart.png)');
            // lifePic.style.backgroundImage='url(../Image/heart.png)';
        }
    }

    this.updateUI=function()
    {
        if (self.running==false)
        {
            return;
        }
            var result=self.game.update(.1);
            self.refreshView();

            if (result==0){
                setTimeout(function(){self.updateUI();},10);
                return;
            }
            else if (result==1)
            {
                $('#Status').text('Good Job!')
            }
            else if (result==2)
            {   
                $('#Status').text('Wrong Target!');
            }
            else
            {
                $('#Status').text('Miss')        ;
            }
            if (self.running==true)
            {
                self.takeShot();
            }

    }

    this.initialize();
}


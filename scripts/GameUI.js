function gameUI(){
    var self=this;
    this.game=undefined;
    this.running=false;
    var window_Height=800;
    var window_Length=800;
    var total_Score=0;
    var speed=0;
    var life=3;
    var time=0;
    var on_Target=50;
    var lose_Target= -100;

    this.initialize=function(){
        self.game= new vehicleGame()
            $('#GameStopped').show();
            $('#GameRunning').hide();

        $('#StartBtn').on('click',function(){
            $('#GameStopped').hide();
            $('#GameRunning').show();
            $('#Status').text('Get Ready...');
            self.running=true;
            self.takeShot();
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
        $('#vehicle').css("left",self.game.vehicle.xPos+10);
        $('#EffectiveCount').text(self.game.shotsEffective);
        $('#MistakeCount').text(self.game.shotsWrong);
    };

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


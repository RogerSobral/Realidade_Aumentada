AFRAME.registerComponent('controlador',{
    //..
    
    init: function () {
        this.toggle=false;
        this.vid = document.querySelector("#apresentacao");
        this.vid.pause();

    },
    tich:function(){
        if (this.el.object3D.visible==true){
            if(this.toggle){
                    this.toggle=true;
                    this.vid.play();
            }
        }else{
            this.toggle=false;
            this.vid.pause();
        }
    }
}

);

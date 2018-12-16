
function Collision() {  

    this.collide = function(obj) {

        for(var i=0; i < obj.getNumber(); i++){ 
            if(obj.getContainer()[i].x + obj.getContainer()[i].width / 2 > bullet.x && obj.getContainer()[i].x - obj.getContainer()[i].width / 2 < bullet.x) {
                if(bullet.y < obj.getContainer()[i].y + obj.getContainer()[i].width){
                    console.log("hit on"+i);
                    bullet.y = -20;
                    return i;
                }               
            }
        }
        return -1;
    }


    this.takeMeasure = function() {
        
    }
}


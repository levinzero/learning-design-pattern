// simple example 
var BicycleShop = function() {};

BicycleShop.prototype = {
    sellBicycle: function(model){
        var bicycle;
        switch(model){
            case 'The Speedster':
            bicycle = new SpeedSter();
        }
    }
}
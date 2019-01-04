// 3:singleton
// simple singleton
var singleton = {
    attribute1: true,
    attribute2: 10,
    method1: function() {

    },
    method2: function() {

    }
}

// singleton with private
var MyNamespace = {};
MyNamespace.page = function(){
    var privateAttribute1 = true;
    var privateAttribute2 = 10;
    function privateMethod1() {
        // lllll
    }
    function privateMethod2() {

    }
    return {
        publicMethod1: function(){

        },
        publicMethod2: function(){

        }
    }
}();


// lazyLoad singleton
var MyNamespace = {};
MyNamespace.page = function(){
    function constructor(){
        var privateAttribute1 = true;
        var privateAttribute2 = 10;
        function privateMethod1() {
            // lllll
        }
        function privateMethod2() {
    
        }
        return {
            publicMethod1: function(){
    
            },
            publicMethod2: function(){
    
            }
        }
    }
    var uniqueInstance;
    return {
        getInstance: function(){
            if(!uniqueInstance){
                uniqueInstance = constructor();
            }
            return uniqueInstance;
        }
    }
}();

// use example
MyNamespace.page.getInstance();
// 1:interface
var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['savce']);

var CompositeForm = function(id, method, action){
    //implements Composite, Formitem interface
}

function addForm(formInstance){
    Interface.ensureImplements(formInstance, Composite, FormItem);
}


var Interface = function(name, methods){
    if(arguments.length != 2) {
        throw new Error("Interface constructor called with" + arguments.length + "arguments, but expected exactly 2.")
    }
    this.name = name;
    this.methods = [];
    for (var i = 0; i < methods.length; i++) {
        if(typeof methods[i] !== 'string') {
            throw new Error("Interface constructor expects method names to be passed in as a string");
        }
        this.methods.push(methods[i]);
    }
}

Interface.ensureImplements = function(object) {
    if(arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with" + arguments.length + "two and above to be instance of Interface.")
    }

    for (var i = 1; i < arguments.length; i++) {
        var interface = arguments[i];
        if(interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments two and above to be instances of Interface");
        }
        for (let j = 0; j < interface.methods.length; j++) {
            var method = interface[j];
            if(!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object does not implement the" + interface.name + "interface.Method" + method + " was not found");
            }
            
        }
        
    }
}


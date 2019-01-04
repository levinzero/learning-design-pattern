// 2: inheritance(improved: with subClass can orride the superclass function but also can call superClass fun)
var Person = function(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

// the key fun
function extend(subClass, superClass){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    // here is the key step-1, set the attribute[superclass] which can beused to decoupling for subClass
    subClass.superclass = superClass.prototype; 
    // here is the key step-2, set the superClass's constructor even it is the original Object
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}



var Author = function(name, book){
    Author.superclass.constructor.call(this, name); //here is the applycation for decoupling Person and Author
    this.book = book;
}
extend(Author, Person);

Author.prototype.getBook = function() {
    return this.book;
}

// most importantly, can orride the fun in the meanwhile call superclass's func

Author.prototype.getName = function(){
    var name = Author.superclass.getName.call(this);
    return name + ', Author of ' + this.getBook();
}


// 2.1 prototype way inheritance

var Animal = {
    sound: 'animal sound',
    shout: function(){
        return this.sound;
    },
}

function clone(obj){
    var F = function(){};
    F.prototype = obj;
    return new F();
}

var dog = clone(Animal);
dog.shout();

// 链式调用的实现(以类似实现Jquery为例)

// 基础的jquery函数
function $() {
    var elements = [];
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == 'string') {
            element = document.getElementById(element); //这里简化
        }
        if (arguments.length === 1) {
            return element
        }
        elements.push(element);
    }
    return elements;
}

// 改造上述函数，使其可以链式调用方式

// 利用构造函数的方式创建一个_$类，并且不让它暴露出去
(function(){
    function _$(els) {
        this.elements = [];
        for (var i = 0; i < els.length; i++) {
            var element = els[i];
            if (typeof element == 'string') {
                element = document.getElementById(element); //这里简化
            }
            this.elements.push(element);
        }
        return elements;
    }
    // 链式调用关键点
    _$.prototype = {
        each: function(){
            //...
            // important here, 将当前的调用实例返回
            return this;
        },
        method1: function() {
            //...some code here
            return this;
        }
    }
    window.$ = function(){
        return new _$(arguments);
    }
})();


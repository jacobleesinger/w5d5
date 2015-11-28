// cat = gizmo
// bound = Cat.meow.bbind(cat)
// bound = function meow with cat as self
// bound();

var Cat = function(name){
  this.name = name;
}

function jump(){
  console.log(this);
  console.log("Jump");
}

Cat.prototype.meow = function (){
  console.log("Meow");
}

Function.prototype.myBind = function (context) {
  var fn = this;

  return function () {
      fn.apply(context);
    }
}

var gizmo = new Cat("Gizmo");
var bound = jump.myBind(gizmo);
bound();

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};


var stackMethods = {
  push : function(value){
    this.storage[_.size(this.storage)]=value;
  },
  pop : function(){
    var lastInd = _.size(this.storage)-1;
    var hold = this.storage[lastInd];
    delete this.storage[lastInd];
    return hold;
  },
  size : function(){
    return _.size(this.storage);
  }
};



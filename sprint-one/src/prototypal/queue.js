var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue : function(value){
    var nextIndex = _.size(this.storage);
    this.storage[nextIndex] = value;
  },

  dequeue : function(){
    var removed = this.storage[0];
    for (var key in this.storage){
      this.storage[key]=this.storage[Number(key)+1];
    }
    delete this.storage[_.size(this.storage)-1];
    return removed;
  },

  size : function(){
    return _.size(this.storage);
  }
};



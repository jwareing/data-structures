var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Queue.prototype.enqueue = function(value){
  var nextIndex = _.size(this.storage);
  this.storage[nextIndex] = value;
};

Queue.prototype.dequeue = function(){
  var removed = this.storage[0];
  for (var key in this.storage){
    this.storage[key]=this.storage[Number(key)+1];
  }
  delete this.storage[_.size(this.storage)-1];
  return removed;
};

Queue.prototype.size = function(){
  return _.size(this.storage);
};
var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var nextIndex = _.size(storage);
    storage[nextIndex] = value;
  };

  someInstance.dequeue = function(){
    var removed = storage[0];
    for (var key in storage){
      storage[key]=storage[Number(key)+1];
    }
    delete storage[_.size(storage)-1];
    return removed;
  };

  someInstance.size = function(){
    return _.size(storage);
  };

  return someInstance;
};

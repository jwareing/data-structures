var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[_.size(storage)]=value;
  };

  someInstance.pop = function(){
    var lastInd = _.size(storage)-1;
    var hold = storage[lastInd];
    delete storage[lastInd];
    return hold;
  };

  someInstance.size = function(){
    return _.size(storage);
  };

  return someInstance;
};

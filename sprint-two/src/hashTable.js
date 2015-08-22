var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._insertCount = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._insertCount++;
  if (this._insertCount >= (this._limit * (3/4))) {
    var temp = [];
    this._insertCount = 0;
    this._limit = this._limit * 2;
    this._storage.each(function(bucket){
      if (bucket) {
        _.each(bucket, function (keyValPair) {
          if (keyValPair[1] !== null) {
            temp.push(keyValPair);
          }
        });
      }
    });
    this._storage = LimitedArray(this._limit);
    var context = this;
    _.each(temp, function(keyValPair) {
      debugger
      context.insert.call(context, keyValPair[0], keyValPair[1]);
    });
  }    
  if (this._storage.get(i) === undefined){
    this._storage.set(i, []);
  }
  var bucket = this._storage.get(i);
  bucket.push([k,v]);
  this._storage.set(i,bucket);
  this._insertCount++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var res;
  _.each(bucket, function(tuple,index){
    if (tuple[0] === k){
      res = tuple[1];
    }
  });
  return res;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(tuple,index){
    if (tuple[0] === k){
      tuple[1] = null;
      this._insertCount--;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

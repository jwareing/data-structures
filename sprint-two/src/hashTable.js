var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    this._storage.set(i, []);
  }
  var bucket = this._storage.get(i);
  bucket.push([k,v]);
  this._storage.set(i,bucket);
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
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

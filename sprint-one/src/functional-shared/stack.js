var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.methods = {};
  _.extend(someInstance,Stack.stackMethods);
  return someInstance;
};

Stack.stackMethods = {
	push : function(value){
	  this[_.size(this)]=value;
	},
	pop : function(){
	  var lastInd = _.size(this)-1;
	  var hold = this[lastInd];
	  delete this[lastInd];
	  return hold;
	},
	size : function(){
	  return _.size(this);
	}
};
var Tree = function(value,parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;
  _.extend(newTree,treeMethods);
  return newTree;
};


  // your code here
  //newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value,this));
};

treeMethods.contains = function(target){
  if (this.value === target){
    return true;
  }
  var nodeSearcher = function(nodes){
    return _.reduce(nodes, function(prev,node){
      if (prev){
        return true;
      }
      if (node.value === target){
        return true;
      }
      if (node.children.length){
        return nodeSearcher(node.children);
      }
      return false;
    },false);
  };
  return nodeSearcher(this.children);
};

treeMethods.removeFromParent = function(){
  var oldParent = this.parent;
  var node = this;
  this.parent.children.splice(_.indexOf(oldParent.children,this),1);
  //
  this.parent = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};


  // your code here
  //newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
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


/*
 * Complexity: What is the time complexity of the above functions?
 */

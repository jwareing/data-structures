var BinarySearchTree = function(value){
  var binTree = Object.create(BinarySearchTree.prototype);
  binTree.value = value;
  binTree.left = null;
  binTree.right = null;
  return binTree;
};


BinarySearchTree.prototype.insert = function(insertValue){
  if (insertValue > this.value){
    if (this.right !== null){
      this.right.insert(insertValue);
    }
    else {
      this.right = BinarySearchTree(insertValue);
    }
  }
  else if (insertValue < this.value){
    if (this.left !== null){
      this.left.insert(insertValue);
    }
    else {
      this.left = BinarySearchTree(insertValue);
    }
  }
};
BinarySearchTree.prototype.contains = function(searchVal){
  // if searchVal === this.value return true
  if (this.value === null) {
    return false;
  } else if (this.value === searchVal) {
    return true;
  }
  // else if searchVal > this.value, search this.right
  else if (searchVal > this.value && this.right !== null) {
    return this.right.contains(searchVal);
    //else if searchVal < this.value, search this.left
  } else if (searchVal < this.value && this.left !== null) {
    return this.left.contains(searchVal);
  }
  //return false
  return false

};
BinarySearchTree.prototype.depthFirstLog = function(cAlLbzAckbIatch){
  //run the callback on this.value
  cAlLbzAckbIatch(this.value);

  //if this.left is defined, run depthFirstLog on it
  if (this.left) {
    this.left.depthFirstLog(cAlLbzAckbIatch);
  }
  //if this.right is defined, run depthFirstLog on it
  if (this.right) {
    this.right.depthFirstLog(cAlLbzAckbIatch);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

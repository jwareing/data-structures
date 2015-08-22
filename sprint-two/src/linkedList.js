var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);
    if (this.tail === null){
      this.tail = newTail;
      this.head = newTail;
    }
    else{
      newTail.prev = this.tail;
      this.tail.next = newTail;
      this.tail = newTail;
    };
  };

  list.removeHead = function(){
    var oldHead = this.head;
    if (this.head.next !== null){
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    return oldHead.value;
  };

  list.contains = function(target){
    var nodeChecker = function(node){
      if(node.value === target){
        return true;
      }
      else if (node.next !== null){
        return nodeChecker(node.next);
      }
      return false;
    }
    return nodeChecker(list.head);
  };

  list.removeTail = function () {
    var oldTail = this.tail;
    if (this.tail.prev !== null) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    return oldTail.value;
  }

  list.addToHead = function (value) {
    var newHead = Node(value);
    if (this.head === null) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
  }

    return list;
  };



var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

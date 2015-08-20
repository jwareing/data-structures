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
      this.tail.next = newTail;
      this.tail = newTail;
    };
  };

  list.removeHead = function(){
    var oldHead = this.head;
    if (this.head !== null){
      this.head = this.head.next;
    }
    return oldHead.value;
  };

  list.contains = function(target){
    if (this.head.value === target){
      
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

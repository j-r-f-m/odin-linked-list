/**
 * represents the full list
 */
// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null,
//         },
//       },
//     },
//   },
// };

//console.log(list.head.next);

// const head = list.head.next;
// console.log(head);

// constructor function
function Node(value = null, nextNode = null) {
  // create new node
  this.value = value;
  this.nextNode = nextNode;
  return { value, nextNode };
}

// constructor function
function LinkedList() {
  // create an empty list object
}
// declaring a function on the prototype of the object
LinkedList.prototype.prepend = function (value) {
  // adds a new node containing value to the start of the list
  this.head = new Node(value, this.head);
};

LinkedList.prototype.append = function (value) {
  // adds a new node containing value to the end of the list

  if (this.head == null) {
    console.log(this.head);
    //acces the "prepend" function linked to the prototype
    this.prepend(value);
  } else {
    let temp = this.head;

    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = new Node(value, null);
  }
};

LinkedList.prototype.size = function () {
  //returns the total number of nodes in the list
  let temp = this.head;
  let counter = 0;
  while (temp !== null) {
    temp = temp.nextNode;
    counter += 1;
  }
  return counter;
};

LinkedList.prototype.headOfList = function () {
  // returns the first node in the list
  return this.head;
};

LinkedList.prototype.tails = function () {
  //returns the last node in the list
  let temp = this.head;
  while (temp !== null) {
    tempSafety = temp;
    temp = temp.nextNode;
    if (temp === null) {
      //console.log(tempSafety);
      return tempSafety;
    }
    //console.log(temp);
  }
};

LinkedList.prototype.tails = function () {
  //returns the last node in the list
  let temp = this.head;
  while (temp !== null) {
    tempSafety = temp;
    temp = temp.nextNode;
    if (temp === null) {
      //console.log(tempSafety);
      return tempSafety;
    }
    //console.log(temp);
  }
};

LinkedList.prototype.at = function (index) {
  // returning node at given index

  // getting size of list
  let tempSize = this.head;
  let counterSize = 0;
  while (tempSize !== null) {
    tempSize = tempSize.nextNode;
    counterSize += 1;
  }

  // return node at given index
  // starting point
  let temp = this.head;
  let counter = 0;
  while (temp !== null) {
    if (counter === index) {
      return temp;
    }
    counter += 1;
    if (counter >= counterSize) {
      console.log("index does not exist");
      return null;
    }
    temp = temp.nextNode;
  }
};

LinkedList.prototype.pop = function () {
  // returning node at given index

  // getting size of list
  let tempSize = this.head;
  let counterSize = 0;
  while (tempSize !== null) {
    tempSize = tempSize.nextNode;
    counterSize += 1;
  }
  console.log(counterSize);

  // return node at given index
  let temp = this.head;
  let counter = 0;
  while (temp !== null) {
    if (counter === counterSize - 2) {
      temp.nextNode = null;
    }
    counter += 1;
    if (counter >= counterSize) {
      console.log("index does not exist");
      return null;
    }
    temp = temp.nextNode;
  }
};

LinkedList.prototype.contains = function (value) {
  // check for passed in value
  let temp = this.head;
  let counter = 0;
  while (temp !== null) {
    if (temp.value === value) {
      return true;
    } else {
      temp = temp.nextNode;
      counter += 1;
    }
  }
  return false;
};

LinkedList.prototype.find = function (find) {
  // find passed value
  let temp = this.head;
  let counter = 0;
  while (temp !== null) {
    if (temp.value === find) {
      return counter;
    } else {
      temp = temp.nextNode;
      counter += 1;
    }
  }
  return null;
};

LinkedList.prototype.toString = function () {
  // print out list as string
  let string = "";
  let temp = this.head;
  let counter = 0;
  while (temp !== null) {
    string += ` (${temp.value}) ->`;
    temp = temp.nextNode;
    counter += 1;
  }
  string += " null";
  console.log(string);
};

/////+++++++++++++++++++++++++/////////////////

// LinkedList.prototype.insertAt = function (value, index) {
//   // insert value at given index

//   // getting size of list
//   let tempSize = this.head;
//   let counterSize = 0;
//   while (tempSize !== null) {
//     tempSize = tempSize.nextNode;
//     counterSize += 1;
//   }

//   // return node at given index
//   // starting point
//   let temp = this.head;
//   let tempNextNode = this.
//   let counter = 0;
//   while (temp !== null) {
//     if (counter === index && counter === 0) {
//       temp.value = value;
//     }
//     if (counter === index) {
//       return temp;
//     }
//     counter += 1;
//     if (counter >= counterSize) {
//       console.log("index does not exist");
//       return null;
//     }
//     temp = temp.nextNode;
//   }
//  };

const newList = new LinkedList();

console.log("create linked list:");
console.log(newList);
console.log(newList.head);
newList.append("1st - head");
newList.append(2);
newList.append("3nd");
newList.append("4th - tails");

// newList.prepend("one");
console.log("list after change");
console.log(newList);
console.log("head after change");
console.log(`head: `);
console.log(newList.headOfList());
console.log(`Size of list: ${newList.size()}`);
console.log("tails: ");
console.log(newList.tails());
console.log("at index:");
console.log(newList.at(0));
console.log("pop");
console.log(newList.pop());
console.log(newList);
console.log("contains: ");
console.log(newList.contains(2));
console.log("find:");
console.log(newList.find("1st - head"));
console.log("prepend");
newList.prepend(1);
newList.toString();
console.log(newList.head);

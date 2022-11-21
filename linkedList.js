/**
 * represents the full list
 */
const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

//console.log(list.head.next);

// const head = list.head.next;
// console.log(head);

// constructor function
function Node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
  return { value, nextNode };
}

// constructor function
function LinkedList() {}
// declaring a function on the prototype of the object
LinkedList.prototype.prepend = function (value) {
  // adds a new node containing value to the start of the list
  this.head = new Node(value);
};

LinkedList.prototype.append = function (value) {
  this.node = new Node(value);
};

// // inherit from "Node"
// LinkedList.prototype = Object.create(Node.prototype);

// test
// const node1 = new Node();
// console.log(node1);

const newList = new LinkedList();
newList.prepend("one");
console.log(newList);
console.log(newList.head);

// const LinkedList = () => {
//   const append = () => {
//     // add last
//   };
//   const prepend = (value) => {
//     // add first

//     // if list is empty and head ist inserted as first
//     if (list.head.value === null && list.head.next === null) {
//       list.head.value = value;
//     } else {
//       let currHead = list.head;
//       console.log(list.head);
//       list.head.next = currHead;
//     }
//   };
//   const list = { head: { value: null, next: null } };
//   return { append, prepend, list };
// };

// /**
//  * represents a node that holds a value and a link to the next node
//  *
//  */

// const Node = (data) => {
//   return { value: data, next: null };
// };

// // const testNode = Node().value("hello");
// // console.log(testNode);

// // create list
// const testList = LinkedList();
// console.log(testList.list);
// testList.prepend("first object");

// console.log(testList.list);
// testList.prepend("second object");
// console.log(testList.list);

// const TestHead = {
//   head: {
//     value: null,
//     next: null,
//   },
// };

// console.log(TestHead);

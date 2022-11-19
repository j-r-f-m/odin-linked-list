/**
 * represents the full list
 */

const LinkedList = () => {
  const create = () => {
    // create empty list
    let head = null;
    return { head };
  };
  const append = () => {
    // add last
    return;
  };
  const prepend = (value) => {
    // add first
    obj[head] = node;
    return;
  };
  return { append, prepend, create };
};

/**
 * represents a node that holds a value and a link to the next node
 *
 */

const Node = () => {
  let nextNode = null;
  const value = (data) => {
    return { data, nextNode };
  };
  return { value };
};

// const testNode = Node().value("hello");
// console.log(testNode);

// create list
const testList = LinkedList().create();

console.log(testList);

testList;

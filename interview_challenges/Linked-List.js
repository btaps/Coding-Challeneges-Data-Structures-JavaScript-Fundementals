// Create a Linked List using a class and constructor. Each instance is a Node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  myObj = {
    sayHello: () => console.log("hello")
  };
}

const head = new Node(4);
const nodeB = new Node(2);
const nodeC = new Node(3);
const nodeD = new Node(12);
const nodeE = new Node(19);
const nodeF = new Node(21);
const nodeG = new Node(49);

head.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;
nodeF.next = nodeG;

function countNodes(headNode) {
  // count the number of nodes inside the linked list
  let num = 1;
  let nodeToCheck = headNode;
  while (nodeToCheck.next) {
    num += 1;
    nodeToCheck = nodeToCheck.next;
  }
  return num;
}

console.log(countNodes(nodeB));
head.myObj.sayHello();

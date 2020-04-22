/*
Complete the insert function in your editor so that it creates a new Node (pass 'data' as the Node constructor argument) and inserts it at the tail of the linked list referenced by the 'head' parameter.
Once the new node is added, return the reference to the 'head' node.

Note: If the 'head' argument passed to the insert function is null, then the initial list is empty.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {

  this.insert = function (head, data) {
    //complete this method
    if (head == null) {
      return new Node(data)
    }

    let currentNode = head
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = new Node(data);
    return head;
  };

  this.display = function (head) {
    let output = "" // added to work as expected on hackerrank.com

    var start = head;
    while (start) {
      // process.stdout.write(start.data + " ");
      output += start.data + " "
      start = start.next;
    }

    console.log(output) // added to work as expected on hackerrank.com
  };
}

function main() {
  let t = 4 // added make solution work outside hackerrank.com's editor...
  let testCasesArr = [2, 3, 4, 1] // added make solution work outside hackerrank.com's editor...

  // var T=parseInt(readLine());
  var T = t;
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T; i++) {
    // var data = parseInt(readLine());
    var data = testCasesArr[i]
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}
main()
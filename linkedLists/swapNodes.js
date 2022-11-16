'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}


/*
 * Complete the 'swapNodes' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST head
 *  2. INTEGER a
 *  3. INTEGER b
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 * 
 * 
 *                                                  c: (15)-->null
 *                                                  p: (12)-->(15)-->null
 * 
 *                                                 cA: (5)-->(7)-->(10)-->(12)-->(15)-->null
 *                                                 pA: (1)-->(5)-->(7)-->(10)-->(12)-->(15)-->null
 * 
 *                                                 cB: (12)-->(15)-->null
 *                                                 pB: (10)-->(12)-->(15)-->null
 * 
 *                                                  r: (7)-->(10)-->(12)-->(15)-->null
 * 
 *                                                 pb.n: (5)-->(7)-->(10)-->(12)-->(15)-->null
 *                                                 pa.n: (1)-->(12)-->(15)-->null
 * 
 *                                                 ca.n: (15)-->null
 *                                                 cb.n: (10)-->(5)-->(7)-->(10)-->(12)-->(15)-->null
 * 
 *                                        ph    head                             tail                    
 *                                       null-->(1)-->(5)-->(7)-->(10)-->(12)-->(15)-->null
 *                                               pA   cA
 *                                                                 pB     cB                                                                      
        *                                                      ph    head                             tail                    
        *                                                     null-->(1)-->(12)-->(7)-->(10)-->(5)-->(15)-->null
                                                                                         pb                                                                                                         
 *                                                                                       
 * 
 * 
 */

function swapNodes(head, a, b) {
    // Write your code here
    let ph = new SinglyLinkedList(null);
    ph.next = head;
    let [curr, par, ref] = [head, ph, null];
    let [currA, parA] = [null, null];
    let [currB, parB] = [null, null];
    
    while(curr){
        if(curr.data === a && currA === null){
            currA = curr;
            parA = par;
        }
        if(curr.data === b && currB === null){
            currB = curr;
            parB = par;
        }
        
        curr = curr.next;
        par = par.next;
    }
    if(currA === null || currB === null){
        return ph.next;
    }
    parB.next = currA;
    parA.next = currB;
    
    ref = currA.next;
    currA.next = currB.next;
    currB.next = ref;
    
    return ph.next;
}
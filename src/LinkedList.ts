class Node {
  next: Node | null = null;

  constructor(public data: any) {}
}

export class LinkedList {
  head: Node | null;

  constructor(head: Node | null) {
    this.head = head
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) return; 

    let tail = this.head;

    while (tail.next) {
      tail = tail.next
    }

    tail.next = node;
  }

  get length(): number {
    let counter = 0;

    if (!this.head) return 0;

    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next
    }

    return counter;
  }

  at(index: number): Node {
    if (!this.head) throw new Error('Index out of bounds')

    let counter = 0
    let node: Node | null = this.head;

    while (node) {
      if (index === counter) {
        return node
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error('List is empty')

    return this.at(leftIndex) === this.at(rightIndex);
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) return;
    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next
    }
  }
}
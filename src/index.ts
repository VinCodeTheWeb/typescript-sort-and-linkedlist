import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from './LinkedList';

const numberCollections = new NumbersCollection([10, -5, 3, 0])
const charCollection = new CharacterCollection('XaaZbP')
const linkedlist = new LinkedList();

linkedlist.add(500);
linkedlist.add(699);
linkedlist.add(-19);
linkedlist.add(0);

console.log('Number Sorter: ', numberCollections.sort());
console.log('String Sorter: ', charCollection.sort());
console.log('Number Sorter: ',  linkedlist.sort());

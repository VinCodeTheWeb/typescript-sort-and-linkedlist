import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from './LinkedList';

const numberCollections = new NumbersCollection([10, -5, 3, 0])
const charCollection = new CharacterCollection('XaaZbP')

const sorter = new Sorter(charCollection);

console.log(sorter.sort());

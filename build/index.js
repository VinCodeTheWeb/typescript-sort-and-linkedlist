"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var numberCollections = new NumbersCollection_1.NumbersCollection([10, -5, 3, 0]);
var charCollection = new CharacterCollection_1.CharacterCollection('XaaZbP');
var sorter = new Sorter_1.Sorter(charCollection);
console.log(sorter.sort());

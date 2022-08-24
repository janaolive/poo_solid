"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this.energyType = 'stamina';
        Warrior._warriorCounter += 1;
    }
    get name() {
        return this.name;
    }
    static get energyType() {
        return this.energyType;
    }
    static createdArchetypeInstances() {
        return this._warriorCounter;
    }
}
Warrior._warriorCounter = 0;
exports.default = Warrior;

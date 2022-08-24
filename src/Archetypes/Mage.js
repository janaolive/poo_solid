"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this.energyType = 'mana';
        Mage._mageCounter += 1;
    }
    get name() {
        return this.name;
    }
    static get energyType() {
        return this.energyType;
    }
    static createdArchetypeInstances() {
        return this._mageCounter;
    }
}
Mage._mageCounter = 0;
exports.default = Mage;

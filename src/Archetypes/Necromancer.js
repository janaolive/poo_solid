"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this.energyType = 'mana';
        Necromancer._necromancerCounter += 1;
    }
    get name() {
        return this.name;
    }
    static get energyType() {
        return this.energyType;
    }
    static createdArchetypeInstances() {
        return this._necromancerCounter;
    }
}
Necromancer._necromancerCounter = 0;
exports.default = Necromancer;

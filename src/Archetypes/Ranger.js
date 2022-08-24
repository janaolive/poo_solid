"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this.energyType = 'stamina';
        Ranger._rangerCounter += 1;
    }
    get name() {
        return this.name;
    }
    static get energyType() {
        return this.energyType;
    }
    static createdArchetypeInstances() {
        return this._rangerCounter;
    }
}
Ranger._rangerCounter = 0;
exports.default = Ranger;

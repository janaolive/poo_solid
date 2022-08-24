"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
const generateRandomNumber = (0, utils_1.default)(1, 10);
class Character {
    constructor(name) {
        this._dexterity = generateRandomNumber;
        this._race = new Races_1.Elf(name, this._dexterity);
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = generateRandomNumber;
        this._defense = generateRandomNumber;
        this._energy = {
            type_: this._archetype.energyType,
            amount: generateRandomNumber,
        };
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        return {
            type_: this._energy.type_,
            amount: this._energy.amount,
        };
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0)
            this._lifePoints -= damage;
        if (this._lifePoints < 1)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += generateRandomNumber;
        this._strength += generateRandomNumber;
        this._dexterity += generateRandomNumber;
        this._defense += generateRandomNumber;
        this._energy.amount = 10;
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._lifePoints = this._maxLifePoints;
    }
}
exports.default = Character;
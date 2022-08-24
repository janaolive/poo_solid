"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(_player, enemy) {
        super(_player);
        this.enemy = enemy;
        this.fight();
    }
    fight() {
        for (let index = this.enemy.length - 1; index > 0; index -= 1) {
            while (this.enemy[index].lifePoints > -1 && this.player.lifePoints > -1) {
                this.player.attack(this.enemy[index]);
                this.enemy[index].attack(this.player);
            }
        }
        return this.player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVE;
// simplefighter extend de fighter, trazer o parametro para que possa ser utilizado por qq inimigo
// loop while typescript : https://www.tutorialsteacher.com/typescript/while-loop
// rescrevi o PVE e PVP

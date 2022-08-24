"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player, playerX) {
        super(player);
        this._playerX = playerX;
    }
    fight() {
        while (this.player.lifePoints > 0 && this._playerX.lifePoints > 0) {
            this.player.attack(this._playerX);
            this._playerX.attack(this.player);
        }
        return this.player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVP;

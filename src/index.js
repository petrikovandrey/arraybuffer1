import { match } from "core-js/fn/symbol";

export class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя должно быть от 2 до 10 символов");
        }
        let typeCharacter = [
            "Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
        ]
        if (!typeCharacter.includes(type)) {
            throw new Error("Тип персонажа не найден");
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
        this.type = type;
    }
    levelUp() {
        if (this.health <= 0) {
            throw new Error("нельзя повысить левел умершего");
        }
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
    }
    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

class Damage extends Character {
    constructor() {
        this.stoned = false;
        this.distance = 0;
    }
    get stoned() {
        return this.stoned;
    }
    set stoned(value) {
        this.stoned = value;
    }
    get attack() {
        if (this.stoned) {
            this.attack = this.attack - Math.log2(this.distance) * 5;
        } else {
            this.attack = this.attack - this.attack * (this.distance + 1) * 10 / 100;
        }
    }
    set attack(value) {
        this.attack = value;
    }
}

class Magician extends Damage {
    constructor(name) {
        super(name, "Magician");
        this.attack = 10;
        this.defence = 40;
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon");
        this.attack = 10;
        this.defence = 40;
    }
}



export { Character, Damage, Magician, Daemon };
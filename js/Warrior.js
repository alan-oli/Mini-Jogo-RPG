import {Character} from './Character.js'

export class Warrior extends Character {

    constructor(nome, hp, atk, def, shield) {
        super(nome, hp, atk, def)

        this.shield = shield,
        this.attacker = true,
        alert(`Warrior ${this.nome} set as atk character \nTo change please use 'changePosition()' method\n`)

    }


    attack(character){

        if (character.hp <= 0) {
            alert(`error! Target is already down!\n`)
            return
        }

        if (this.hp <= 0) {
            alert(`error! ${this.nome} cannot attack, his down!\n`)
            return
        }

        if (this.attacker) {

            let atkDamage = this.atk - character.def

            if (atkDamage <= 0) {

                alert(`attack missed\n`)

            } else {
                character.hp -= atkDamage

                if(character.hp <= 0) {

                    alert(`${character.nome} is defeated!\n`)

                    character.hp = 0
                }
            }

        } else {

            alert(`error! ${this.nome} is set as Shield Wall (defense)\n`)

        }        

    }

    changePosition() {

        if (this.attacker) {

            this.attacker = false

            this.def += this.shield

            alert(`Warrior ${this.nome} is now a Shield Wall\n`)            

        } else {

            this.attacker = true

            this.def -= this.shield

            alert(`Warrior ${this.nome} is now a Attacker\n`)

        }

    }

}

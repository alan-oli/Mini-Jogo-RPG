import {Character} from './Character.js'

export class Mage extends Character {

    constructor(nome, hp, atk, def, mp) {
        super(nome,hp, atk, def)

        this.mp = mp
    }

    attack(character) {

        if (character.hp <= 0) {
            alert(`error! Target is already down!\n`)
            return
        }

        if (this.hp <= 0) {
            alert(`error! ${this.nome} cannot attack, his down!\n`)
            return
        }

        let atkDamage = (this.atk + this.mp) - character.def

        if (atkDamage <= 0) {

            alert(`attack missed\n`)
            
        } else {
            character.hp -= atkDamage

            if(character.hp <= 0) {

                alert(`${character.nome} is defeated!\n`)

                character.hp = 0
            }

        }

    }

    heal(character){

        if (this.hp <= 0) {
            alert(`error! ${this.nome} cannot heal, his down!\n`)
            return
        }

        character.hp += 2 * this.mp

    }

}

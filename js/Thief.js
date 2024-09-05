import {Character} from './Character.js'

export class Thief extends Character {

    attack(character){

        if (character.hp <= 0) {
            alert(`error! Target is already down!\n`)
            return
        }

        if (this.hp <= 0) {
            alert(`error! ${this.nome} cannot attack, his down!\n`)
            return
        }

        let atkDamage = (2 * this.atk) - character.def

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

}

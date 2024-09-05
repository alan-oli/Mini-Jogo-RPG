import {Character} from './Character.js'
import {Thief} from './Thief.js'
import {Mage} from './Mage.js'
import {Warrior} from './Warrior.js'

let personagens = []

let persSelect = document.querySelector('#personagem').value

document.querySelector('#mostrar-personagens').addEventListener('click', mostrar)

document.querySelector('#adicionar-personagem').addEventListener('submit', function(ev) {
    ev.preventDefault();
    
    persSelect = this.querySelector('#personagem').value

    addPers(persSelect)

})

function addPers(classe) {

    switch(classe) {
        case "padrao":
            addCharacter(classe)
            break
        case "thief":
            addCharacter(classe)
            break
        case "mage":
            addMage()
            break
        case "warrior":
            addWarrior()
            break
    }

}

function addCharacter(classe) {
    
    const form = document.createElement('form')
    form.innerHTML = `
    
        <form action="" id="confirmar-personagem">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" autocomplete="off">
            </div>

            <div>
                <label for="hp">Pontos de vida:</label>
                <input type="number" id="hp" min="0" name="hp" autocomplete="off">
            </div>

            <div>
                <label for="atk">Ataque:</label>
                <input type="number" id="atk" min="0" name="atk" autocomplete="off">
            </div>

            <div>
                <label for="def">Defesa:</label>
                <input type="number" id="def" min="0" name="def" autocomplete="off">
            </div>

            <button type="submit" id="confirmar">Confirmar</button>

        </form>
    `
    form.id = 'confirmar-personagem'

    document.querySelector('main').append(form)

    document.querySelector('#confirmar-personagem').addEventListener('submit', function(ev){

        ev.preventDefault()

        const formData = new FormData(this)

        let nome = formData.get('nome')
        let hp = parseInt(formData.get('hp'))
        let atk = parseInt(formData.get('atk'))
        let def = parseInt(formData.get('def'))

        if (classe == 'padrao') {
            personagens.push(new Character(nome, hp, atk, def))

            alert(`Personagem adicionado:\n
                \nClasse: Padrão
                \nNome: ${nome}
                \nPontos de vida: ${hp}
                \nAtaque: ${atk}
                \nDefesa: ${def}
            `)

        } else {
            personagens.push(new Thief(nome, hp, atk, def))

            alert(`Personagem adicionado:\n
                \nClasse: Patife
                \nNome: ${nome}
                \nPontos de vida: ${hp}
                \nAtaque: ${atk}
                \nDefesa: ${def}
            `)
        }
                

        this.remove()

    })

}

function addMage() {

    const form = document.createElement('form')
    form.innerHTML = `
    
        <form action="" id="confirmar-personagem">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" autocomplete="off">
            </div>

            <div>
                <label for="hp">Pontos de vida:</label>
                <input type="number" id="hp" min="0" name="hp" autocomplete="off">
            </div>

            <div>
                <label for="atk">Ataque:</label>
                <input type="number" id="atk" min="0" name="atk" autocomplete="off">
            </div>

            <div>
                <label for="def">Defesa:</label>
                <input type="number" id="def" min="0" name="def" autocomplete="off">
            </div>

            <div>
                <label for="mp">Magia:</label>
                <input type="number" id="mp" min="0" name="mp" autocomplete="off">
            </div>

            <button type="submit" id="confirmar">Confirmar</button>

        </form>
    `
    form.id = 'confirmar-personagem'

    document.querySelector('main').append(form)

    document.querySelector('#confirmar-personagem').addEventListener('submit', function(ev){

        ev.preventDefault()

        const formData = new FormData(this)

        let nome = formData.get('nome') 
        let hp = parseInt(formData.get('hp'))
        let atk = parseInt(formData.get('atk'))
        let def = parseInt(formData.get('def'))
        let mp = parseInt(formData.get('mp'))

        personagens.push(new Mage(nome, hp, atk, def, mp))

        alert(`Personagem adicionado:\n
            \nClasse: Mago
            \nNome: ${nome}
            \nPontos de vida: ${hp}
            \nAtaque: ${atk}
            \nDefesa: ${def}
            \nMagia: ${mp}
        `)

        this.remove()

    })

}

function addWarrior() {

    const form = document.createElement('form')
    form.innerHTML = `
    
        <form action="" id="confirmar-personagem">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" autocomplete="off">
            </div>

            <div>
                <label for="hp">Pontos de vida:</label>
                <input type="number" id="hp" min="0" name="hp" autocomplete="off">
            </div>

            <div>
                <label for="atk">Ataque:</label>
                <input type="number" id="atk" min="0" name="atk" autocomplete="off">
            </div>

            <div>
                <label for="def">Defesa:</label>
                <input type="number" id="def" min="0" name="def" autocomplete="off">
            </div>

            <div>
                <label for="shield">Escudo:</label>
                <input type="number" id="shield" min="0" name="shield" autocomplete="off">
            </div>

            <button type="submit" id="confirmar">Confirmar</button>

        </form>
    `
    form.id = 'confirmar-personagem'

    document.querySelector('main').append(form)

    document.querySelector('#confirmar-personagem').addEventListener('submit', function(ev){

        ev.preventDefault()

        const formData = new FormData(this)

        let nome = formData.get('nome')
        let hp = parseInt(formData.get('hp'))
        let atk = parseInt(formData.get('atk'))
        let def = parseInt(formData.get('def'))
        let shield = parseInt(formData.get('shield'))

        personagens.push(new Warrior(nome, hp, atk, def, shield))

        alert(`Personagem adicionado:\n
            \nClasse: Guerreiro
            \nNome: ${nome}
            \nPontos de vida: ${hp}
            \nAtaque: ${atk}
            \nDefesa: ${def}
            \nEscudo: ${shield}
        `)

        this.remove()

    })

}

function limpar() {

    const remover = document.querySelectorAll('.lista-personagens')

    remover.forEach(element => element.remove())
    document.querySelector('#container').remove()
    document.querySelector('#limpar').remove()

}

function mostrar() {
    const divContainer = document.createElement('div')
    divContainer.id = 'container'

    const btn = document.createElement('button')
    btn.type = 'button'
    btn.id = 'limpar'
    btn.innerText = 'Limpar'

    personagens.forEach((personagem) => {

        const div = document.createElement('div')
        const divBtn = document.createElement('div')

        divBtn.classList.add('button-container')
        div.classList.add('lista-personagens')

        if (personagem.constructor.name == 'Character' || personagem.constructor.name == 'Thief') {

            div.innerHTML = `
                <div>
                    <p>Classe: ${personagem.constructor.name} </p>
                    <p>Nome: ${personagem.nome}</p>
                    <p>Pontos de vida: ${personagem.hp}</p>
                    <p>Ataque: ${personagem.atk}</p>
                    <p>Defesa: ${personagem.def}</p>
                </div>
            `           

        } else if (personagem.constructor.name == 'Mage') {
            
            div.innerHTML = `
                <div>
                    <p>Classe: ${personagem.constructor.name} </p>
                    <p>Nome: ${personagem.nome}</p>
                    <p>Pontos de vida: ${personagem.hp}</p>
                    <p>Ataque: ${personagem.atk}</p>
                    <p>Defesa: ${personagem.def}</p>
                    <p>Magia: ${personagem.mp} </p>
                </div>
            `
        } else {
            div.innerHTML = `
                <div>
                    <p>Classe: ${personagem.constructor.name} </p>
                    <p>Nome: ${personagem.nome}</p>
                    <p>Pontos de vida: ${personagem.hp}</p>
                    <p>Ataque: ${personagem.atk}</p>
                    <p>Defesa: ${personagem.def}</p>
                    <p>Escudo: ${personagem.shield} </p>
                </div>
            `
        }

        const botaoAtacar = document.createElement('button')
        botaoAtacar.type = 'button'
        botaoAtacar.textContent = 'Atacar'
        
        const btnHeal = document.createElement('button')
        btnHeal.type = 'button'
        btnHeal.textContent = 'Curar'

        const btnChangePos = document.createElement('button')
        btnChangePos.type = 'button'
        btnChangePos.textContent = 'Posição'

        botaoAtacar.addEventListener('click', () => {
            let ataque = prompt('Qual personagem sofrerá o ataque?')

            personagem.attack(personagens.find(element => element.nome == ataque))

            limpar()
            mostrar()

        })

        divBtn.append(botaoAtacar)

        if (personagem.constructor.name == 'Mage') {

            btnHeal.addEventListener('click', () => {
                let alvo = prompt('Qual personagem deseja curar?')
    
                personagem.heal(personagens.find(element => element.nome == alvo))
    
                limpar()
                mostrar()
    
            })

            divBtn.append(btnHeal)
        }

        if (personagem.constructor.name == 'Warrior') {

            btnChangePos.addEventListener('click', () => {
    
                personagem.changePosition()

                limpar()
                mostrar()
    
            })

            divBtn.append(btnChangePos)
        }


        div.append(divBtn)
        divContainer.append(div)     
        

    })

    document.querySelector('main').append(divContainer)

    if (personagens.length > 0) {

        document.querySelector('main').append(btn)

        document.querySelector('#limpar').addEventListener('click', limpar)
    }
}

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atack() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
                break;
        }

        console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque}.`);
    }
}

const lordOfTheRingsHero = new Hero('Gandalf', 300, 'mago');
lordOfTheRingsHero.atack();

const harryPotterHero = new Hero('Harry Potter', 300, 'mago');
harryPotterHero.atack();

const wariorHero = new Hero('Conan', 30, 'guerreiro');
wariorHero.atack();

const mongHero = new Hero('Lao', 45, 'monge');
mongHero.atack();

const narutoHero = new Hero('Naruto', 16, 'ninja');
narutoHero.atack();

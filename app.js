//Start ref. framework

// Model
    //Game Class
    class Game{
        constructor(name, characterArray){
            this.name = name;
            this.characterArray = characterArray;
        }
    }

    //Character Class
    class Character{
        constructor(name, weapon, game, hp, atk, portrait, fullImage){
            this.name = name;
            this.weapon = weapon;
            this.game = game;
            this.hp = hp;
            this.atk = atk;
            this.portrait = portrait;
            this.fullImage = fullImage;
        }
    }

// View


function displayCharacterChoices(e){
    let playerInput = document.querySelector('player')
    
}

class UI{
    constructor(playerOneCharacter, playerTwoCharacter){
        this.playerOneCharacter = playerOneCharacter;
        this.playerTwoCharacter = playerTwoCharacter;
    }
}



// Controller
    // Event Handler

    // Instanciate Characters
    const lucina = new Character('Lucina', 'Sword', 'Awakening', 27, 9, 'img/portrait/lucina.png', 'img/fullImage/lucina.png');
    const frederick = new Character('Frederick', 'Spear', 'Awakening', 28, 13, 'img/portrait/frederick.png', 'img/fullImage/frederick.png');
    const basilio = new Character('Basilio', 'Axe', 'Awakening', 56, 30, 'img/portrait/basilio.png', 'img/fullImage/basilio.png')
    const awakeningCharacters = [lucina, frederick, basilio];

    // Take user inputs
        //Names
        //1p 2p
        //Game
        //Character

    // Instanciate players

    // Calculate winner

    // Instanciate ui

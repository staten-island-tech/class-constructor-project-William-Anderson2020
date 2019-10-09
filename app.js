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

    const corrin = new Character('Corrin', 'Sword', 'Fates', 19, 7, 'img/portrait/corrin.png', 'img/fullImage/corrin.png');
    const hinoka = new Character('Hinoka', 'Spear', 'Fates', 23, 9, 'img/portrait/hinoka.png', 'img/fullImage/hinoka.png');
    const camilla = new Character('Camilla', 'Axe', 'Fates', 25, 12, 'img/portrait/camilla.png', 'img/fullImage/camilla.png');
    const fatesCharacters = [corrin, hinoka, camilla];

    const byleth = new Character('Byleth', 'Sword', 'Three Houses', 27, 13, 'img/portrait/byleth.png', 'img/fullImage/byleth.png');
    const dimitri = new Character('Dimitri', 'Spear', 'Three Houses', 28, 12, 'img/portrait/dimitri.png', 'img/fullImage/dimitri.png');
    const edelgard = new Character('Edelgard', 'Axe', 'Three Houses', 29, 13, 'img/portrait/edelgard.png', 'img/fullImage/edelgard.png');
    const threeHousesCharacters = [byleth, dimitri, edelgard];

    // Take user inputs
        //Names
        //1p 2p
        //Game
        function gameSelect(e){
            let characterArray = document.querySelector('.player_game').textContent;
            
            let html = '<div class="inputs_character_portrait"><img class="character_portrait" id="swordPortrait" src="%sword%"></div> <div class="inputs_character_portrait"><img class="character_portrait" id="spearPortrait" src="%spear%"></div> <div class="inputs_character_portrait"><img class="character_portrait" id="axePortrait" src="%axe%"></div>';
            let newhtml = html.replace('%sword%', characterArray[0].portrait);
            newhtml = newhtml.replace('%spear%', characterArray[1].portrait);
            newhtml = newhtml.replace('%axe%', characterArray[2].portrait);

            document.querySelector('.player_inputs_characters').innerHTML = newhtml;
        }    

        //Character

    // Instanciate players

    // Calculate winner

    // Instanciate ui

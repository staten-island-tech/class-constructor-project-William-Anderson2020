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


/* function displayCharacterChoices(e){
    let playerInput = document.querySelector('.player');
    
} */

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

    const gamesList = ['Awakening', 'Fates', 'Three Houses'];
    const fullRoster = [...awakeningCharacters, ...fatesCharacters, ...threeHousesCharacters];

    // Take user inputs
        //Names
        //1p 2p
        //Game
        function gameSelect(input){

            switch(input.value) {
                case 'Awakening':
                    characterArray = awakeningCharacters;
                    break;
                case 'Fates':
                    characterArray = fatesCharacters;
                    break;
                case 'Three Houses':
                    characterArray = threeHousesCharacters;
                    break;
                default:
                    characterArray = null;
            }

            let html = '<div class="inputs_character_portrait"><img class="character_portrait swordPortrait" name="%swordName%" src="%sword%" onclick="characterSelect(this)"></div> <div class="inputs_character_portrait"><img class="character_portrait spearPortrait" name="%spearName%" src="%spear%" onclick="characterSelect(this)"></div> <div class="inputs_character_portrait"><img class="character_portrait axePortrait" name="%axeName%" src="%axe%" onclick="characterSelect(this)"></div>';
            let newhtml = html.replace('%sword%', characterArray[0].portrait);
            newhtml = newhtml.replace('%swordName%', characterArray[0].name);
            newhtml = newhtml.replace('%spear%', characterArray[1].portrait);
            newhtml = newhtml.replace('%spearName%', characterArray[1].name);
            newhtml = newhtml.replace('%axe%', characterArray[2].portrait);
            newhtml = newhtml.replace('%axeName%', characterArray[2].name);

            switch(input.id) {
                case 'player_game_one':
                    document.getElementById('player_one_portraits').innerHTML = newhtml;
                    break;
                default:
                    document.getElementById('player_two_portraits').innerHTML = newhtml;
                    break;
            }

        }    

        function determineCharacter(el){
            //fullRoster.forEach(char => char.name == el.name);
            for(i=0; i<fullRoster.length; i++){
                if (el.name == fullRoster[i].name){
                    return fullRoster[i];
                }
            }
        }

        function characterSelect(el){
            //console.log(el.name);
            let selection = determineCharacter(el);
            //console.log(selection.name);

            let sideParent = el.closest('.player_inputs_characters');
            switch(sideParent.id) {
                case 'player_one_portraits':
                    playerSide = 'Player 1';
                    break;
                default:
                    playerSide = 'Player 2';
                    break;
            }

            switch(playerSide){
                case 'Player 1':
                    display = document.getElementById('game_results_one');
                    //userName = document.getElementById('player_one_username').innerText;
                    break;
                default:
                    display = document.getElementById('game_results_two');
                    //userName = document.getElementById('player_two_username').innerText;
            }

            
            //console.log(playerSide); //Player side detection functions

            const html = '<img class="player_fullImage" src="%fullImage%"> <div class="player_stats"> <div class="player_name">%userName%</div> <div class="player_character">%characterName%</div> <div class="player_hp">HP: %hp%</div> <div class="player_atk">ATK: %atk%</div>';

            let newhtml = html.replace('%fullImage%', selection.fullImage);
            newhtml = newhtml.replace('%characterName%', selection.name);
            newhtml = newhtml.replace('%hp%', selection.hp);
            newhtml = newhtml.replace('%atk%', selection.atk);
            //newhtml = newhtml.replace('%userName%', userName);

            display.innerHTML = newhtml;

            switch(playerSide){
                case 'Player 1':
                    return (playerOneCharacter = selection);
                default:
                    return (playerTwoCharacter = selection);
            }
        }

        function combatResolution(playerOneCharacter, playerTwoCharacter){
            switch (playerOneCharacter.weapon, playerTwoCharacter.weapon){
                case sword, axe:

                default:
                    //run stats function
            }
        }


        

        //Character

        /* function characterSelect(e){
            console.log('test');
        } */


    // Instanciate players

    // Calculate winner

    // Instanciate ui

    // Event listeners
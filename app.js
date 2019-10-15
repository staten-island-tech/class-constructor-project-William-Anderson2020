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
        constructor(name, weapon, game, hp, atk, portrait, fullImage, pronouns){
            this.name = name;
            this.weapon = weapon;
            this.game = game;
            this.hp = hp;
            this.atk = atk;
            this.portrait = portrait;
            this.fullImage = fullImage;
            this.pronouns = pronouns;
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

    const pronounsM = ['He', 'his', 'His'];
    const pronounsF = ['She', 'her', 'Her'];

    const lucina = new Character('Lucina', 'Sword', 'Awakening', 27, 9, 'img/portrait/lucina.png', 'img/fullImage/lucina.png', pronounsF);
    const frederick = new Character('Frederick', 'Spear', 'Awakening', 28, 13, 'img/portrait/frederick.png', 'img/fullImage/frederick.png', pronounsM);
    const basilio = new Character('Basilio', 'Axe', 'Awakening', 23, 11, 'img/portrait/basilio.png', 'img/fullImage/basilio.png', pronounsM);
    const awakeningCharacters = [lucina, frederick, basilio];

    const corrin = new Character('Corrin', 'Sword', 'Fates', 19, 7, 'img/portrait/corrin.png', 'img/fullImage/corrin.png', pronounsM);
    const hinoka = new Character('Hinoka', 'Spear', 'Fates', 23, 9, 'img/portrait/hinoka.png', 'img/fullImage/hinoka.png', pronounsF);
    const camilla = new Character('Camilla', 'Axe', 'Fates', 25, 12, 'img/portrait/camilla.png', 'img/fullImage/camilla.png', pronounsF);
    const fatesCharacters = [corrin, hinoka, camilla];

    const byleth = new Character('Byleth', 'Sword', 'Three Houses', 27, 13, 'img/portrait/byleth.png', 'img/fullImage/byleth.png', pronounsM);
    const dimitri = new Character('Dimitri', 'Spear', 'Three Houses', 28, 12, 'img/portrait/dimitri.png', 'img/fullImage/dimitri.png', pronounsM);
    const edelgard = new Character('Edelgard', 'Axe', 'Three Houses', 29, 13, 'img/portrait/edelgard.png', 'img/fullImage/edelgard.png', pronounsF);
    const threeHousesCharacters = [byleth, dimitri, edelgard];

    const gamesList = ['Awakening', 'Fates', 'Three Houses'];
    const fullRoster = [...awakeningCharacters, ...fatesCharacters, ...threeHousesCharacters];

    let playerOneCharacter = '';
    let playerTwoCharacter = '';


    let roster = import Roster from 'characters.js';
    let roster = new Roster;
    console.log(roster.lucina);
    
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
            let selection = determineCharacter(el);

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
                    break;
                default:
                    display = document.getElementById('game_results_two');
            }

            const html = '<div class="game_results_section"> <div class="fullImage_Container"> <img class="player_fullImage %class%" src="%fullImage%"> </div> <div class="player_stats"> <div class="player_character">%characterName%</div> <div class="player_hp">HP:<span class="hp_highlight"> %hp% </span></div> <div class="player_atk">ATK: <span class="atk_highlight">%atk%</span</div></div>';

            let newhtml = html.replace('%fullImage%', selection.fullImage);
            newhtml = newhtml.replace('%characterName%', selection.name);
            newhtml = newhtml.replace('%hp%', selection.hp);
            newhtml = newhtml.replace('%atk%', selection.atk);
            newhtml = newhtml.replace('%class%', selection.name)

            display.innerHTML = newhtml;

            switch(playerSide){
                case 'Player 1':
                    return (playerOneCharacter = selection);
                default:
                    return (playerTwoCharacter = selection);
            }
        }

        function playerCheck(){
            //Math.floor(Math.random() * Math.floor(9));

            if(document.getElementById('count_one_player').checked == true){
                //console.log('one player');
                if(playerOneCharacter == ''){
                    alert('Player 1, choose a fighter.');
                }
                playerTwoCharacter = fullRoster[Math.floor(Math.random() * Math.floor(9))];
                const html = '<div class="game_results_section"> <div class="fullImage_Container"> <img class="player_fullImage %class%" src="%fullImage%"> </div> <div class="player_stats"> <div class="player_character">%characterName%</div> <div class="player_hp">HP:<span class="hp_highlight"> %hp% </span></div> <div class="player_atk">ATK: <span class="atk_highlight">%atk%</span</div></div>';

                let newhtml = html.replace('%fullImage%', playerTwoCharacter.fullImage);
                newhtml = newhtml.replace('%characterName%', playerTwoCharacter.name);
                newhtml = newhtml.replace('%hp%', playerTwoCharacter.hp);
                newhtml = newhtml.replace('%atk%', playerTwoCharacter.atk);
                newhtml = newhtml.replace('%class%', playerTwoCharacter.name)

                document.getElementById('game_results_two').innerHTML = newhtml;
                //console.log(playerTwoCharacter);
            } else if(document.getElementById('count_two_player').checked == true){
                //console.log('two players');
                if(playerOneCharacter == ''){
                    alert('Player 1, select a fighter.');
                } else if(playerTwoCharacter == ''){
                    alert('Player 2, select a fighter.');
                }
            } else{
                alert('Would you like a one or two player game?');
            }
        }

        function combatResolution(){
            playerCheck();

            let one = playerOneCharacter;
            let two = playerTwoCharacter;
            let entry = '';

            function tieRes(one, two) {
                let oneRes = (one.hp - two.atk);
                let twoRes = (two.hp - one.atk);

                if (oneRes > twoRes) {
                    entry = (`<span class="name_highlight">${one.name}</span> won against <span class="name_highlight">${two.name}</span>! ${one.pronouns[0]} dealt <span class="atk_highlight">${one.atk}</span> to ${one.pronouns[1]} opponent and has <span class="hp_highlight">${oneRes}</span> hp remaining.`);
                } else if (oneRes < twoRes) {
                    entry = (`<span class="name_highlight">${two.name}</span> won against <span class="name_highlight">${one.name}</span>! ${two.pronouns[0]} dealt <span class="atk_highlight">${two.atk}</span> to ${two.pronouns[1]} opponent and has <span class="hp_highlight">${twoRes}</span> hp remaining.`);
                } else {
                    entry = (`It would seem we have a tie between <span class="name_highlight">${one.name}</span> and <span class="name_highlight">${two.name}</span>`);
                }
            }

            function hpCalc(adv, dis) {
                let advRes = (adv.hp - dis.atk);
                let disRes = (dis.hp - (adv.atk * 2));

                if (advRes > disRes) {
                    entry = (`<span class="name_highlight">${adv.name}</span> won against <span class="name_highlight">${dis.name}</span>! ${adv.pronouns[2]} ${adv.weapon} attack was super effective! ${adv.pronouns[0]} dealt <span class="atk_highlight">${(2 * adv.atk)}</span> damage to <span class="name_highlight">${dis.name}</span> and has <span class="hp_highlight">${advRes}</span> hp remaining.`);
                } else if (advRes < disRes) {
                    entry = (`<span class="name_highlight">${dis.name}</span> won against <span class="name_highlight">${adv.name}</span>! ${dis.pronouns[0]} was weak to <span class="name_highlight">${adv.name}'s</span> ${adv.weapon} attack. ${dis.pronouns[0]} has <span class="hp_highlight">${disRes}</span> hp remaining after taking <span class="atk_highlight">${(2 * adv.atk)}</span> damage from ${dis.pronouns[1]} opponent.`);
                } else {
                    entry = (`It would seem we have a tie between <span class="name_highlight">${adv.name}</span> and <span class="name_highlight">${dis.name}</span>`);
                }
            }

            if (one.weapon == 'Sword') {
                switch (two.weapon) {
                    case 'Sword':
                        tieRes(one, two);
                        break;
                    case 'Spear':
                        hpCalc(one, two);
                        break;
                    case 'Axe':
                        hpCalc(two, one);
                        break;
                    default:
                        alert('Defaulting. Check logs');
                }
            } else if (one.weapon == 'Spear') {
                switch (two.weapon) {
                    case 'Spear':
                        tieRes(one, two);
                        break;
                    case 'Axe':
                        hpCalc(one, two);
                        break;
                    case 'Sword':
                        hpCalc(two, one);
                        break;
                    default:
                        alert('Defaulting. Check logs');
                }
            } else if (one.weapon == 'Axe') {
                switch (two.weapon) {
                    case 'Axe':
                        tieRes(one, two);
                        break;
                    case 'Sword':
                        hpCalc(one, two);
                        break;
                    case 'Spear':
                        hpCalc(two, one);
                        break;
                    default:
                        alert('Defaulting. Check logs');
                }
            }

            let html = '<div class="log_entry">%entry%</div>';
            let newhtml = html.replace('%entry%', (`${entry} <span class="log_remove" onclick="clearEntry(this)">X</span>`));
            document.querySelector('#combat_log').insertAdjacentHTML("afterbegin", newhtml);
        }  

        function clearEntry(e){
            e.parentElement.remove();
        }
        
        function clearLog(){
            document.querySelector('#combat_log').innerHTML='';
        }

class Controller{
    UI(){
        console.log('Controller UI');
    }
}
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

export class Roster{
    pronounsM = ['He', 'his', 'His'];
    pronounsF = ['She', 'her', 'Her'];

    lucina = new Character('Lucina', 'Sword', 'Awakening', 27, 9, 'img/portrait/lucina.png', 'img/fullImage/lucina.png', pronounsF);
    frederick = new Character('Frederick', 'Spear', 'Awakening', 28, 13, 'img/portrait/frederick.png', 'img/fullImage/frederick.png', pronounsM);
    basilio = new Character('Basilio', 'Axe', 'Awakening', 23, 11, 'img/portrait/basilio.png', 'img/fullImage/basilio.png', pronounsM);
    awakeningCharacters = [lucina, frederick, basilio];

    corrin = new Character('Corrin', 'Sword', 'Fates', 19, 7, 'img/portrait/corrin.png', 'img/fullImage/corrin.png', pronounsM);
    hinoka = new Character('Hinoka', 'Spear', 'Fates', 23, 9, 'img/portrait/hinoka.png', 'img/fullImage/hinoka.png', pronounsF);
    camilla = new Character('Camilla', 'Axe', 'Fates', 25, 12, 'img/portrait/camilla.png', 'img/fullImage/camilla.png', pronounsF);
    fatesCharacters = [corrin, hinoka, camilla];

    byleth = new Character('Byleth', 'Sword', 'Three Houses', 27, 13, 'img/portrait/byleth.png', 'img/fullImage/byleth.png', pronounsM);
    dimitri = new Character('Dimitri', 'Spear', 'Three Houses', 28, 12, 'img/portrait/dimitri.png', 'img/fullImage/dimitri.png', pronounsM);
    edelgard = new Character('Edelgard', 'Axe', 'Three Houses', 29, 13, 'img/portrait/edelgard.png', 'img/fullImage/edelgard.png', pronounsF);
    threeHousesCharacters = [byleth, dimitri, edelgard];

    gamesList = ['Awakening', 'Fates', 'Three Houses'];
    fullRoster = [...awakeningCharacters, ...fatesCharacters, ...threeHousesCharacters];

    playerOneCharacter = '';
    playerTwoCharacter = '';
}
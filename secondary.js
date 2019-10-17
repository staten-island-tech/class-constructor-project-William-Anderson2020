class Model{
    constructor(alias, firstName, lastName, weapon, image){
        this.alias = alias;
        this.firstName = firstName;
        this.lastName = lastName;
        this.weapon = weapon;
        this.image = image;
    }
}

const UI = new class UI{
    displayCharacter(e) {
        let userInput = new Model(document.getElementById('alias').value, document.getElementById('first_name').value, document.getElementById('last_name').value, document.getElementById('weapon').value, document.getElementById('image').value);

        let html = '<div data-aos="flip-up"><div class="display_character"><div class="display_alias display_block">%alias%</div><div class="display_first_name display_block">%firstName%</div><div class="display_last_name display_block">%lastName%</div><div class="display_weapon display_block">%weapon%</div><div class="display_image display_block"><img src="%url%" alt=""></div><div class="display_remove display_block"><p class="display_remove">Remove &#10006;</p></div></div></div>'
        
        if (userInput.length == 0){
            alert('Please input an alias.');
            e.preventDefault();
            return false;
        } else if (userInput.firstName.length == 0){
            alert('Please input a first name.');
            e.preventDefault();
            return false;
        } else if (userInput.lastName.length == 0){
            alert('Please input a last name.');
            e.preventDefault();
            return false;
        }else if (userInput.weapon.length == 0){
            alert('Please input a weapon of choice.');
            e.preventDefault();
            return false;
        }else if (userInput.image.length == 0){
            alert('Please input an image adress. (Link in console)');
            e.preventDefault();
            return false;
        } else{
        
            let newHtml = html.replace('%alias%', userInput.alias);
            newHtml = newHtml.replace('%firstName%', userInput.firstName);
            newHtml = newHtml.replace('%lastName%', userInput.lastName);
            newHtml = newHtml.replace('%weapon%', userInput.weapon);
            newHtml = newHtml.replace('%url%', userInput.image);
    
            document.querySelector('.display').insertAdjacentHTML('afterbegin', newHtml);
    
            e.preventDefault();
            document.querySelector('#character_form').reset();
        }
    }
    removeCharacter(e){
        if(e.target.parentElement.classList.contains('display_remove')){
            e.target.parentElement.parentElement.remove();
        }
    }
}



//Controller
function init(){
    document.querySelector('#character_form').addEventListener('submit', UI.displayCharacter);
     document.querySelector('.display').addEventListener('click', UI.removeCharacter);
}
init();

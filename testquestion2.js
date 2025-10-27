let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    textAlign(CENTER)
    textSize(20)
    yPos = 30;
}
function draw(){
    for (let i = 0; i < pokemons.length; i++) {
        text(pokemons[i-1],width/2,yPos * i)
    }
}

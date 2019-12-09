const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

let bgImage = new Image();
bgImage.src = "images/bg.png";

let hero;
let enemy;
let isCreated = 0;

function init(){

    console.log("init start");

    // Create canvas and append
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    // Create instances
    hero = new Hero();

    // TODO: perhaps can refactoring and make this as an array
    enemy = new Enemy(); 
    enemy2 = new Enemy();

    isCreated = true;
    console.log("init end");
}

//Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var mainloop = function() {
    var now = Date.now();
    var delta = now - prev;

    ctx.drawImage(bgImage, 0, 0);

    // ctx.drawImage(hero.getHeroImage(), 0, 0, 35, 54, 380, 545, 35,54 ); 
    // in this way, hero image didn't show up, so add isCreadted and check it below

    console.log("hero x");
    if(isCreated){
        console.log(hero.getX());
        // ctx.drawImage(hero.getHeroImage(), 0, 0, 35, 54, 380, 545, 35,54 );ß
        hero.updatePosition(delta/1000, keysDown);
        hero.drawImage(ctx);

        enemy.isHit(hero.getX());
        enemy2.isHit(hero.getX());
        enemy.drawImage(ctx);
        enemy2.drawImage(ctx);
    }

    prev = now;
    requestAnimationFrame(mainloop);
    console.log("main end");
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var prev = Date.now();
mainloop();

function moveMonster(){
    console.log("move monster start");
    if(isCreated){
        enemy.setEnemyPositionToY(54);
        enemy2.setEnemyPositionToY(54);
    }
}

setInterval( moveMonster, 1000);
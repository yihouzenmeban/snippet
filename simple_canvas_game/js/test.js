//创建一个canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);


//背景图片
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "images/background.png";


//英雄图片
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = "images/hero.png";


//背景图片
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";


//游戏对象
var hero = {
    speed: 256,//每秒移动的像素
    x: 0,
    y: 0
};
var monster = {
    x: 0,
    y: 0
};
var monstersCaught = 0;


//键盘控制
var keysDown = {};
addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
}, false);
addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode];
}, false);


//当用户抓住一只怪物后开始一轮新游戏
var reset = function() {
    //英雄的起始位置
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
    //怪物的初始位置
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};


//更新游戏对象的属性
var update = function(modifier) {
    if(38 in keysDown) {
        //up
        var heroy = hero.y - hero.speed * modifier;
        if(heroy >= 0){
            hero.y = heroy;
        }
    }

    if(40 in keysDown){
        //down
        var heroy = hero.y + hero.speed * modifier;
        if(heroy <= 448){
            hero.y = heroy;
        }
    }

    if(37 in keysDown){
        //left
        var herox = hero.x - hero.speed * modifier;
        if(herox >= 0){
            hero.x = herox;
        }
    }

    if(39 in keysDown){
        //right
        var herox = hero.x + hero.speed * modifier;
        if(herox <= 482){
            hero.x = herox;
        }
    }
    //英雄碰到怪物
    if( hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)){
        ++monstersCaught;
        reset();
    }
};


//画出整个界面
var render = function() {
    if(bgReady){
        ctx.drawImage(bgImage, 0, 0);
    }

    if(heroReady){
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if(monsterReady){
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }

    //计算分数
    ctx.fillStyle = 'rgb(250, 250, 250)';
    ctx.font = '24px Helvetica';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('Monsterrs caught: ' + monstersCaught, 32, 32);
}


//main函数
var main = function() {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();
    then = now;
    //调用主函数
    requestAnimationFrame(main);
};


//兼容性处理
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame
                        || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//开始游戏
var then = Date.now();
reset();
main();
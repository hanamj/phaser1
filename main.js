// We create our only state
var mainState = {
    preload: function() {
        game.load.image('square', 'assets/square.png');
        game.load.image('bg', 'assets/bg.png');
        game.load.spritesheet('squares', 'assets/squares.png', 48, 48);
    },
    create: function() {
        game.stage.backgroundColor = '#000000';
        
        this.background = game.add.tileSprite(0, 0, 720, 720, "bg");

        this.squares = game.add.group();
        this.squares.createMultiple(169, 'squares', 4);
        for (var i = 0; i<13; i++) {
            for (var j = 0; j<13; j++) {
                var s = this.squares.getFirstDead();
                s.anchor.setTo(0.5, 0.5);
                if ((i==6) && (j==6)) {
                    s.frame = 3;
                } else {
                    s.frame = game.rnd.integerInRange(0, 2);
                }
                s.inputEnabled = true;
                s.events.onInputDown.add(this.click, s);
                s.reset((48*j)+72, (48*i)+72);
            }
        }
    },
    update: function() {
        
    },
    click: function () {
        if (this.frame == 2) { //elbow
            this.angle += 90;
            console.log(this.angle);
        } else if (this.frame == 1) { //straight
            this.angle += 90;
        }
    }
};


// We initialising Phaser
var game = new Phaser.Game(720, 720, Phaser.AUTO, 'gameDiv');
// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');

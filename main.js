var game = new Phaser.Game(600, 600);
game.state.add('state1', demo.state1);

game.state.start('state1')

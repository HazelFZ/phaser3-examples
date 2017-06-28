var Background = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function Background ()
    {
        Phaser.State.call(this, { key: 'background', active: true });
    },

    preload: function ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
        this.face = this.add.image(400, 300, 'face');
    }

});

var Demo = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function Demo ()
    {
        Phaser.State.call(this, { key: 'demo', active: true });
    },

    preload: function ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    },

    create: function ()
    {
        this.arrow = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);
    },

    update: function (time, delta)
    {
        this.arrow.rotation += 0.01;
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    state: [ Background, Demo ]
};

var game = new Phaser.Game(config);

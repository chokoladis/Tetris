class Tetris {

    char_shape = '';
    current_shape = null;

    container = $('#work_container');
    game_place = this.container.find('#game_place');

    objects = {
        'J': {
            'pos': [1,1, [0,1]],
        },
        'L': {
            'pos': [0,0, [0,1]],
        },
        'I': {
            'pos': [0,0,0,0],
        },
        'O' : {
            'pos': [ [0,1], [0,1] ],
        },
        'T': {
            'pos': [ 1, [0,1,2] ],
        },
        'Z' : {
            'pos': [ [0,1], [1,2] ],
        },
        'S': {
            'pos': [ [1,2], [0,1] ],
        }
    };
    constructor(){
        this.setGamePlace();
        this.drawShape();
    }
    getShape(){
        let keys = Object.keys(this.objects);
        let key = Math.floor(keys.length * Math.random());
        this.char_shape = keys[key];
        this.current_shape = this.objects[keys[key]];
        return this.current_shape;
    };
    drawShape(){
        let shape = (this.current_shape) ? this.current_shape : this.getShape() ;
        console.log(shape);
    };
    setGamePlace(){
        if (!this.game_place.length){
            this.container.append('<div id="game_place"></div>');
        }
    }
    move(){
        this.current_shape
    }
}

export {Tetris};
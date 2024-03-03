class Tetris {
    current_shape = null;
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
    getShape(){
        let keys = Object.keys(this.objects);
        let key = Math.floor(keys.length * Math.random());
        this.current_shape = [ keys[key] = this.objects[keys[key]] ];
        return this.current_shape;
    };
    drawShape(){
        let shape = (this.current_shape) ? this.current_shape : this.getShape() ;
        console.log(shape);
    };
}

export {Tetris};
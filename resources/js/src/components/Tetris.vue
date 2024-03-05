<template>
    <div id="work_container">
        <div id="frame_game">
            show tetris game
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({

    data() {
        return {
            char_shape: '',
            current_shape: null,

            container: $('#work_container'),
            frame_game: $('#work_container #frame_game'),

            objects: {
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
            },
        }
    },

    methods: {
        getShape(){
            let keys = Object.keys(this.objects);
            let key = Math.floor(keys.length * Math.random());
            this.char_shape = keys[key];
            this.current_shape = this.objects[keys[key]];
            return this.current_shape;
        },
        drawShape(){
            let shape = (this.current_shape) ? this.current_shape : this.getShape() ;
            console.log(shape);
        },
        setFramePlace(){
            if (!this.frame_game.length){
                this.container.append('<div id="frame_game"></div>');
            }
        },
        move(){
            this.current_shape
        }
    },
    setup() {
        return {

        }
    },
    // mounted:{
    //     setFramePlace();
    //     drawShape();
    // }
})
</script>
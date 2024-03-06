<template>
    <div class="container">
        <div id="work_container" class="game">
            <div id="new_shape"></div>
            <div id="frame_game">
                show tetris game
            </div>
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
            current_shape_link: null,

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
            let level = 0;
            let shape = (this.current_shape) ? this.current_shape : this.getShape();
            for (let i in shape.pos) {
                
                let pos = shape.pos[i];
                if (typeof pos === 'object'){
                    
                    for (let j in pos) {
                        this.drawShapePixel(level, pos[j]);
                    }
                } else {
                    this.drawShapePixel(level, pos);
                }

                level++;
            }
        },
        drawShapePixel(level, posX){
            if (!$('#new_shape .level-'+level).length){
                $('#new_shape').append('<div class="level level-'+level+'"></div>');
            }
            $('#new_shape .level-'+level).append('<div class="pos-'+posX+'"></div>');
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
    mounted() {
        this.setFramePlace();
        this.drawShape();
    }
    // mounted:{
    //     setFramePlace();
    //     drawShape();
    // }
})
</script>
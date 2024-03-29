import './bootstrap';
import '../../node_modules/jquery';

import { createApp } from 'vue';

import Tetris from './src/components/Tetris.vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

app.component('Tetris', Tetris );
app.mount('#app');

var menu_item_hover_sound = new Audio('/storage/sounds/звук_1.mp3');
var menu_item_click_sound = new Audio('/storage/sounds/click.mp3');

$('main.menu a').on('mouseover', () => {
    menu_item_hover_sound.pause();
    menu_item_hover_sound.currentTime = 0;
    menu_item_hover_sound.play();
});

$('main.menu a').on('click', function(e) {

    e.preventDefault();

    $('#work_container').addClass('hide');

    let href = $(this).attr('href');

    menu_item_click_sound.pause();
    menu_item_click_sound.currentTime = 0;
    menu_item_click_sound.play();
    
    
    setTimeout(function () {
        window.location.href = href; 
    }, 500);
});
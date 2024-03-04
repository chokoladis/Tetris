<template>
    <MainMenu/>
    <footer>
        <div class="container">
            copyright 2024
        </div>
    </footer>
</template>

<script>
import {defineComponent} from 'vue';
import MainMenu from './components/MainMenu.vue';

export default defineComponent({
    components: {
        MainMenu
    },
    setup() {
        return {
            // username: 'misha'
        }
    }
});
</script>
<template>
    <main class="menu">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div id="work_container" class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 list-group">
                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">Start</a>
                    <a href="#" class="list-group-item list-group-item-action">Statistics</a>
                    <a href="#" class="list-group-item list-group-item-action">Settings</a>
                    <a class="list-group-item list-group-item-action" onclick="window.close()">Exit</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    setup() {
        return {};
    },
})
</script>
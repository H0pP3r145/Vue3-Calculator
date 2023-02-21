<template>
    <div class="app">
        <label class="switch">
            <input type="checkbox" class="theme-switch" v-model="darkMode">
            <span class="slider round"></span>
        </label>
        <my-screen :result_calc="result_calc" :expression="getExpression"></my-screen>
        <my-keyboard/>
    </div>
</template>

<script>
import MyScreen from "@/components/Screen"
import MyKeyboard from "@/components/Keyboard";
import {mapState, mapGetters} from "vuex";

export default {
    name: "MyModule",
    components: {
        MyKeyboard,
        MyScreen
    },
    data: () => ({
        darkMode: false
    }),
    computed: {
        ...mapState({
            result_calc: state => state.store.result_calc
        }),
        ...mapGetters({
            getExpression: "store/getExpression"
        })
    },
    mounted() {
        // set page title
        document.title = 'Multiple Themes in Vue.js';

        // set 'app-background' class to body tag
        let bodyElement = document.body;
        bodyElement.classList.add("app-background");

        // check for active theme
        let htmlElement = document.documentElement;
        let theme = localStorage.getItem("theme");

        if (theme === 'dark') {
            htmlElement.setAttribute('theme', 'dark')
            this.darkMode = true
        } else {
            htmlElement.setAttribute('theme', 'light');
            this.darkMode = false
        }
    },
    watch: {
        darkMode: function () {
            let htmlElement = document.documentElement;
            if (this.darkMode) {
                localStorage.setItem("theme", 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else {
                localStorage.setItem("theme", 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        }
    }
}
</script>

<style scoped>
.app {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}
</style>
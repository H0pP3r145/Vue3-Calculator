<template>
    <div class="app">
        <div class="change-theme">
            <div class="night-theme">
                <img class="img-night" src="@/assets/night-theme.png" alt="night-theme">
            </div>
            <div class="light-theme">
                <img src="@/assets/light-theme.png" alt="light-theme">
            </div>
        </div>
        <my-screen :result_calc="result_calc" :expression="getExpression"></my-screen>
        <my-keyboard/>
    </div>
</template>

<script>
import MyScreen from "@/components/Screen"
import MyKeyboard from "@/components/Keyboard";
import {mapState, mapGetters} from "vuex";

export default {
    components: {
        MyKeyboard,
        MyScreen
    },
    name: "MyModule",
    computed: {
        ...mapState({
            result_calc: state => state.store.result_calc
        }),
        ...mapGetters({
            getExpression: "store/getExpression"
        })
    }
}
</script>

<style scoped>
.app {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-end;
    width: 423px;
    height: 800px;
    border-radius: 40px;
    background: linear-gradient(to bottom right, #373737, #252628, #000309);
}

.change-theme {
    display: flex;
    flex-direction: row-reverse;
    width: 122px;
    height: 44px;
    background-color: #1B6A9C;
    border-radius: 40px;
    margin-bottom: 141px;
}

.night-theme {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 60%;
    height: 100%;
    border-radius: 40px;
    background-color: #003661;
    box-shadow: -2px 0 6px rgba(0, 0, 0, 15%);
}

.light-theme img {
    margin-top: 7px;
    margin-right: 3px;
}

.img-night {
    width: 29px;
    height: 29px;
}
</style>
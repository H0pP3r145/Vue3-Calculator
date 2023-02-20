<template>
    <div class="keyboard">
        <div class="buttons">
            <div class="numbers">
                <button class="btn" @click="change_value('1')">1</button>
                <button class="btn" @click="change_value('2')">2</button>
                <button class="btn" @click="change_value('3')">3</button>
                <button class="btn" @click="change_value('4')">4</button>
                <button class="btn" @click="change_value('5')">5</button>
                <button class="btn" @click="change_value('6')">6</button>
                <button class="btn" @click="change_value('7')">7</button>
                <button class="btn" @click="change_value('8')">8</button>
                <button class="btn" @click="change_value('9')">9</button>
                <button class="btn" @click="change_value('.')">.</button>
                <button class="btn" @click="change_value('0')">0</button>
                <button class="btn" @click="change_value('00')">00</button>
            </div>
            <div class="upper-symbols">
                <button class="btn active" @click="clear">AC</button>
                <button class="btn active" @click="reverse">+/-</button>
                <button class="btn active" @click="interest">%</button>
            </div>
            <div class="right-symbols">
                <button class="btn active" @click="change_value('/')">÷</button>
                <button class="btn active" @click="change_value('*')">×</button>
                <button class="btn active" @click="change_value('-')">-</button>
                <button class="btn active" @click="change_value('+')">+</button>
                <button class="btn" style="box-shadow: 1px 3px 15px rgba(0,0,0,5%);" @click="result_btn">=</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';

export default {
    name: "my-keyboard",
    methods: {
        ...mapActions({
            change_value: "store/change_value",
            interest: "store/interest",
            reverse: "store/reverse"
        }),
        ...mapMutations({
            clear: "store/clear",
            result_btn: "store/result_btn"
        })
    }
}
</script>

<style scoped>
.keyboard {
    display: flex;
    width: 100%;
    height: 60%;
    border-radius: 40px;
    background-image: url("@/assets/Frame 8.png");
    background-position: center;
    background-size: 600px;
    box-shadow: 0 -20px 15px rgba(0, 0, 0, 20%);
}

.buttons {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 355px;
    height: 430px;
    margin: auto;
}

.numbers {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    position: absolute;
    width: 260px;
    height: 340px;
    bottom: 0;
}

.upper-symbols {
    display: flex;
    justify-content: space-between;
    width: 260px;
    height: 70px;
    border-radius: 40px;
    background-color: rgba(0, 0, 0, 30%);
    box-shadow: 1px 3px 15px rgba(0, 0, 0, 5%);
}

.right-symbols {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70px;
    height: 430px;
    border-radius: 40px;
    background-color: rgba(0, 0, 0, 30%);
    box-shadow: 1px 3px 15px rgba(0, 0, 0, 5%);
}

.btn {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    color: #fff;
    font-size: 150%;
    background-color: rgba(0, 0, 0, 30%);
    border: 0;
    cursor: pointer;
}

.active {
    background-color: rgba(0, 0, 0, 0%);
}

.active:active {
    background-color: rgba(0, 0, 0, 70%);
    box-shadow: 1px 3px 15px rgba(0, 0, 0, 5%);
}

.btn:hover {
    background-color: rgba(0, 0, 0, 40%);
}

.btn:active {
    background-color: rgba(0, 0, 0, 70%);
    box-shadow: 1px 3px 15px rgba(0, 0, 0, 5%);
}
</style>
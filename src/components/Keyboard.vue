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
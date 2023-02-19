<template>
    <div class="gb">
        <div class="change-theme">
            <div class="night-theme">
                <img class="img-night" src="@/assets/night-theme.png" alt="night-theme">
            </div>
            <div class="light-theme">
                <img src="@/assets/light-theme.png" alt="light-theme">
            </div>
        </div>
        <div class="screen">
            <div class="response" style="width: 285px; height: 70px; font-size: 40px; text-align: end">
                {{ result_calc }}
            </div>
            <div class="equals-icon"
                 style="
                     width: 70px;
                     height: 50px;
                     position: absolute;
                     left: 0;
                     bottom: 0;
                     font-size:  26px;
                     text-align: center;
                ">
                =
            </div>
            <div class="actions"
                 style="width: 355px ; height: 35px; font-size:  22px;text-align: end ">{{ expression.join(' ') }}
            </div>
        </div>
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
                    <button class="btn active" @click="interest('%'); change_multi_and_division">%</button>
                </div>
                <div class="right-symbols">
                    <button class="btn active" @click="change_value('/'); change_multi_and_division">÷</button>
                    <button class="btn active" @click="change_value('*'); change_multi_and_division">×</button>
                    <button class="btn active" @click="change_value('-')">-</button>
                    <button class="btn active" @click="change_value('+')">+</button>
                    <button class="btn" style="box-shadow: 1px 3px 15px rgba(0,0,0,5%);" @click="result_btn">=</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyModule",
    data() {
        return {
            expression: [],
            math_sings: ['+', '*', '/', '%', '-'],
            result_calc: 0,
            there_division_or_multiply: false
        }
    },
    methods: {
        change_value(el) {
            if (this.expression.length === 0 && !this.math_sings.includes(el) && el !== '.' || el === '-') {
                this.expression.push(el)
            } else {
                if (!this.math_sings.includes(el) && !this.math_sings.includes(this.expression[this.expression.length - 1])) {
                    this.expression[this.expression.length - 1] += el
                } else if (this.expression.length > 0) {
                    this.expression.push(el)
                }
            }
            this.result();
        },
        interest() {
            this.expression[this.expression.length - 1] = eval(`${this.expression[this.expression.length - 1]} / 100`)
            this.result();
        },
        result() {
            this.result_calc = eval(this.expression.join(''))
        },
        result_btn() {
            this.expression = [];
        },
        clear() {
            this.expression = [];
            this.result_calc = 0;
        },
        reverse() {
            if (this.expression[this.expression.length - 2] === '+') {
                this.expression[this.expression.length - 1] = `(-${this.expression[this.expression.length - 1]})`
            } else if (this.expression[this.expression.length - 2] === '-') {
                this.expression[this.expression.length - 1] = `(+${this.expression[this.expression.length - 1]})`
            } else {
                this.expression[this.expression.length - 1] = `(-${this.expression[this.expression.length - 1]})`
            }
            this.result();
        },
        change_multi_and_division() {
            if (!this.there_division_or_multiply) {
                this.there_division_or_multiply = true;
            }
        }
    }
}
</script>

<style scoped>
.gb {
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

.screen {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: flex-end;
    position: relative;
    width: 355px;
    height: 105px;
    /*background-color: black;*/
    color: #fff;
}

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
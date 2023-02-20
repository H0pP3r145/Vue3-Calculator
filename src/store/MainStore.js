export default {
    namespaced: true, state: () => ({
        expression: [], math_sings: ['+', '*', '/', '%', '-', '.'], result_calc: ''
    }), getters: {
        getExpression(state) {
            return state.expression.join(' ')
        },
    }, mutations: {
        result(state) {
            state.result_calc = eval(state.expression.join(''));
        }, expression_push(state, el) {
            state.expression.push(el)
        }, expression_change(state, el) {
            state.expression[state.expression.length - 1] = el;
        }, expression_add(state, el) {
            state.expression[state.expression.length - 1] += el
        }, result_btn(state) {
            state.expression = [];
        }, clear(state) {
            state.expression = [];
            state.result_calc = '';
        }
    }, actions: {
        change_value({state, commit}, el) {
            if (state.expression.length === 0 && !state.math_sings.includes(el) && el !== '.' || el === '-' && !state.math_sings.includes(state.expression[state.expression.length - 1])) {
                commit("expression_push", el)
            } else if (!state.math_sings.includes(el) && !isNaN(Number(state.expression[state.expression.length - 1]))) {
                commit("expression_add", el)
            } else if (!state.math_sings.includes(el)) {
                commit("expression_push", el)
            } else if (!state.math_sings.includes(state.expression[state.expression.length - 1]) && state.expression.length > 0) {
                commit("expression_push", el)
            } else if (state.expression[state.expression.length - 1] !== el) {
                commit("expression_change", el)
            }
            commit('result')
        }, interest({state, commit}) {
            commit("expression_change", eval(`${state.expression[state.expression.length - 1]} / 100`))
            commit("result")
        }, reverse({state, commit}) {
            if (state.expression[state.expression.length - 2] === '+') {
                commit("expression_change", `(-${state.expression[state.expression.length - 1]})`)
            } else if (state.expression[state.expression.length - 2] === '-') {
                commit("expression_change", `(+${state.expression[state.expression.length - 1]})`)
            } else {
                commit("expression_change", `(-${state.expression[state.expression.length - 1]})`)
            }
            commit("result")
        }
    }
}
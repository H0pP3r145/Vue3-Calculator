<template>
    <div class="screen">
        <div class="response" style="width: 285px; height: 70px; font-size: 40px; text-align: end">{{
                result_calc
            }}
        </div>
        <div class="equals">=</div>
        <div class="actions">{{ expression }}
        </div>
    </div>
</template>

<script>
export default {
    name: "my-screen",
   props: {
        result_calc: String,
       expression: String
   }
}
</script>

<style scoped>
.screen {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: flex-end;
    position: relative;
    width: 355px;
    height: 105px;
    color: #fff;
}

.equals {
    width: 70px;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 26px;
    text-align: center;
}

.actions {
    width: 355px;
    height: 35px;
    font-size: 22px;
    text-align: end;
}
</style>
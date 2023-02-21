<template>
    <div class="screen">
        <div class="response" style="width: 285px; height: 70px; font-size: 40px; text-align: end">{{
                result_calc
            }}
        </div>

        <div v-if="expression.length > 0" class="equals">=</div>
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
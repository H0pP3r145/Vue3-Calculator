<template>
    <div id="app">
        <MyModule/>
    </div>
</template>

<script>
import MyModule from "@/components/MyModule";

export default {
    components: {MyModule},
    mounted() {
        document.title = 'Calculator on Vue 3';
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

html, body {
    font-family: 'Poppins', sans-serif;
}

#app {
    font-family: 'Poppins', sans-serif;
}

.btn {
    font-family: 'Poppins', sans-serif;
}
</style>

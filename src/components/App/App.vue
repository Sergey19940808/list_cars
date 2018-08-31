<template>
    <section id="app">
        <ListCars/>
    </section>
</template>

<script>
    import ListCars from '../Car/ListCars.vue';
    export default {
        name: 'App',
        components: {ListCars}
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0.8em;
    }
</style>
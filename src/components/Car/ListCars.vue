<template>
    <main class="app-container">
        <header class="header">
            <h1 class="title">
                Каталог автомобилей
            </h1>
        </header>
        <header class="filters">
            <h1 class="title">
                Фильтры
            </h1>
        </header>
        <div class="widgets">
            <Search />
            <PriceRangeFilter />
            <ModelFilter />
            <ColorFilter />
        </div>
        <ul class="cars">
            <Car
                    v-for='car in cars'
                    :key='car.id'
                    :car='car'
            />
        </ul>
    </main>
</template>

<script>
    import Car from './Car.vue';
    import PriceRangeFilter from '../FilterWidget/PriceRangeFilter.vue';
    import Search from '../FilterWidget/Search.vue';
    import ModelFilter from '../FilterWidget/ModelFilter.vue';
    import ColorFilter from '../FilterWidget/ColorFilter.vue';
    import {createPath} from "../../utils/utils";

    export default {
        name: 'ListCars',
        components: { Car, PriceRangeFilter, ModelFilter, Search, ColorFilter  },
        computed: {
            cars() {
                return this.$store.getters.cars;
            }
        },
        mounted: function()  {
            history.replaceState(null, null, createPath(this.$store.state.path));
        },
    }
</script>

<style scoped lang="scss">
    $color-design: #5f9ea0;

    @mixin flex-poz($is-wrap, $align, $direction) {
        display: flex;
        justify-content: $align;
        flex-direction: $direction;
        @if($is-wrap == true) {
            flex-wrap: wrap;
        }
    }

    .app-container {
        box-shadow: 0 0 9px $color-design;
        max-width: 130em;
        max-height: 38em;
        overflow: auto;
    }
    .header {
        @include flex-poz(true, center, row);
    }
    .title {
        color: $color-design;
    }
    .cars {
        @include flex-poz(true, left, row);
        padding: 0 0 0 100px;
    }
    .filters {
        padding: 0 0 0 40px;
        @include flex-poz(true, left, row);
    }
    .filters > .title {
        padding: 0 270px 0 0;
    }
    .widgets {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>
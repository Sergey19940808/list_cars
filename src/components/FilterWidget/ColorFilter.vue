<template>
    <div class="colors">
        <span class="title">
            Цвет:
        </span>
        <div
                class="colors-item"
                v-for="color in colors"
                :style="{backgroundColor: color.colorHex, width: '30px', height: '30px'}"
                @click="filterColorAction(color.colorName)"
        >
        </div>
        <span class="check-filter" :class="{checked: isCheck}">
            Отмечен
        </span>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import cars from '../../source/data.js';
    import {uniqueColors} from '../../utils/utils.js';

    export default {
        name: 'ColorFilter',
        data: function() {
            return {
                colors: uniqueColors(cars)
            }
        },
        computed: {
            isCheck() {
                return this.$store.state.filters.filter_color;
            }
        },
        methods: mapActions([
            'filterColorAction'
        ])
    }
</script>

<style scoped lang="scss">
    .colors {
        margin: -130px 0 0 384px;
        display: flex;
    }
    .colors-item {
        cursor: pointer;
    }
    .title {
        padding: 0 15px 0 0;
    }
    .check-filter {
        padding: 0 0 0 15px;
    }
    .checked {
        color: #a52a2a;
        font-weight: bold;
        font-size: 18px;
    }
</style>
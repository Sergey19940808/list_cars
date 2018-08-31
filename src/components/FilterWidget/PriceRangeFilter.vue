<template>
    <div class="price-range">
        <span class="title">
            Цена:
        </span>
        <span class="min">
            {{value_min}}
        </span>
        <label class="filters">
            <input
                    class="price-range-one"
                    type="range"
                    min="0"
                    max="100000000"
                    value="value_min"
                    v-model="value_min"
                    @change="filterPriceAction([value_min, value_max])"
            />
            <input
                    class="price-range-two"
                    type="range"
                    min="100000001"
                    max="200000000"
                    value="value_max"
                    v-model="value_max"
                    @change="filterPriceAction([value_min, value_max])"
            />
        </label>
        <span class="max">
            {{value_max}}
        </span>
        <span class="check-filter" :class="{checked: isCheck}">
            Отмечен
        </span>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'PriceRangeFilter',
        data: function() {
            return {
                value_min: this.$store.state.path.price_start === '' ? 0 : this.$store.state.path.price_start,
                value_max: this.$store.state.path.price_end === '' ? 200000000 : this.$store.state.path.price_end,
            }
        },
        computed: {
            isCheck() {
                return this.$store.state.filters.filter_price;
            }
        },
        methods: mapActions([
            'filterPriceAction'
        ])
    }
</script>

<style scoped lang="scss">
    .title {
        padding-left: 42px;
    }
    .price-range {
        display: flex;
        justify-content: left;
        width: 550px;
        height: 30px;
    }
    .min {
        margin: 0 0 0 40px;
        width: 70px;
    }
    .max {

    }
    .price-range-one,
    .price-range-two {
        outline: none;
        -webkit-appearance: none
    }
    .price-range-one,
    .price-range-two {
        -webkit-appearance: none;
        width: 70px;
        height: 7px;
        border: 1px solid #bdc3c7;
        background-color: #bdc3c7;
    }
    .price-range-one::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: #ecf0f1;
        border: none;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        margin-top: 1px;
    }
    .price-range-two::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: #ecf0f1;
        border: none;
        width: 20px;
        height: 20px;
        border-radius: 10px;
    }
    .price-range-one {
        margin-left: 20px;
    }
    .price-range-two {
        margin: 0 10px  0 -6px;
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
<template>
    <div class="search">
        <label class="search_label">
            <p>
                Цена:
                <input type="text" value="price" v-model="price" name="price" />
            </p>
        </label>
        <label class="search_label">
            <p>
                Марка:
                <input type="text" value="make" v-model="make" name="make" />
            </p>
        </label>
        <label class="search_label">
            <p>
                Модель:
                <input type="text" value="model" v-model="model" name="model" />
            </p>
        </label>
        <label class="search_label">
            <p>
                Цвет:
                <input type="text" value="color" v-model="color" name="color" />
            </p>
        </label>
        <div class="search_button">
            <div @click="search([price, make, model, color])">
                Найти
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Search',
        data: function() {
            return {
                price: '',
                make: '',
                model: '',
                color: ''
            }
        },
        methods: {
            search: function(vals) {
                // reset fields
                this.price = '';
                this.make = '';
                this.model = '';
                this.color = '';

                // dispatch action
                this.$store.dispatch('searchAction', vals);
            }
        }
    }
</script>

<style scoped lang="scss">
    input[name='price'],
    input[name='make'],
    input[name='model'],
    input[name='color'] {
        outline-color: #50a09a;
        color: cadetblue;
    }
    input[name='price'] {
        margin: 0 0 0 18px;
    }
    input[name='make'] {
        margin: 0 0 0 10px;
    }
    input[name='color'] {
        margin: 0 0 0 20px;
    }
    .search {
        width: 300px;
        padding: 0 0 20px 40px;
        &_button {
            width: 100px;
            height: 25px;
            border: #50a09a 1px solid;
            border-radius: 4px;
            background-color: #50a09a;
        }
    }
    .search_button > div {
        color: #ffffff;
        padding: 5px 0 0 25px;
        cursor: pointer;
    }
</style>
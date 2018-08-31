<template>
    <div class="model">
        <span class="title">
            Модель:
        </span>
        <label class="filters">
            <input
                    type="text"
                    v-model="model"
                    name="model_filter"
                    @blur="modelFilter(model)"
            />
        </label>
        <span class="check-filter" :class="{checked: isCheck}">
            Отмечен
        </span>
    </div>
</template>

<script>
    export default {
        name: 'ModelFilter',
        data: function() {
            return {
                model: this.$store.state.path.model
            }
        },
        computed: {
            isCheck() {
                return this.$store.state.filters.filter_model;
            }
        },
        methods: {
            modelFilter: function(model) {
                this.$store.dispatch('filterModelAction', model);
            }
        }
    }
</script>

<style scoped lang="scss">
    .model {
        margin: -170px 0 0 384px;
        height: 30px;
    }
    .filters > input[name='model_filter'] {
        outline-color: #50a09a;
        color: #50a09a;
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
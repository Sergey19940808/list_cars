<template>
    <aside class="container-car">
        <img src="/public/car.jpg" width="500" height="250" />
        <li class="car car_color fz">
            <span class="car-item">
                {{car.make}}
            </span>
            <span class="car-item">
                {{car.model}}
            </span>
            <span class="car-item">
                {{car.price}}
            </span>
            <span class="car-item">
                {{car.color}}
            </span>
        </li>
    </aside>
</template>

<script>
    export default {
        name: 'Car',
        props: {
            car: Object
        }
    }
</script>

<style scoped lang="scss">
    .container-car {
        padding: 0 10px 40px 0;
    }
    .car {
        padding: 30px 0 0 40px;
        list-style-type: none;
        &_color {
            color: #335ba0;
        }
    }
    .car-item {
        padding: 0 15px 0 0;
    }
    .fz {
        font-size: 1.5em;
    }
</style>
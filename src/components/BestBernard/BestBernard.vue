<template>
    <div>
        <h3>BESTEST BERNARD HILL</h3>
        <img v-bind:src="bestBernard.contentUrl">
    </div>
</template>

<script>

    import { getBestBernard } from '../../vuex/actions';

    export default {
        vuex: {
            getters: {
                bestBernard: state => state.bestBernard
            }
        }
    }
</script>

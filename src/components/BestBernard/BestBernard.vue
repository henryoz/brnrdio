<template>
    <div class="row">
        <div class="col-xs-12">
        <h3 class="center"><span class="glyphicon glyphicon-heart"></span> BESTEST BERNARD HILL <span class="glyphicon glyphicon-heart"></span></h3>
        <img class="center-block" v-bind:src="bestBernard.contentUrl">
        </div>
    </div>
</template>

<style>
    .center {
        text-align: center;
    }

    .glyphicon-heart {
        color: hotpink;
    }
</style>

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

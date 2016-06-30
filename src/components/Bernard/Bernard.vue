<template>
    <div class="bernard">
        <a href="#" v-on:click.prevent="vote(bernard)" ><img v-bind:src="bernard.contentUrl"></a>
    </div>
</template>

<style>

    div.bernard {
        display: inline-block;
        margin: 20px;
    }

    img {

        height: 350px;
    }

    img:hover {
        border: deeppink solid 5px;
    }

</style>

<script>

    import { voteBernard, getRandomPair, getBestBernard } from '../../vuex/actions';

    export default {
        props: ['bernard'],
        vuex: {
            actions: {
                voteBernard,
                getRandomPair,
                getBestBernard
            }
        },
        methods: {
            vote(bernard) {
                this.voteBernard(bernard);
                this.getRandomPair();
                this.getBestBernard();
            }
        }
    }


</script>

<template>
    <vote>
    <h3 class="center">PLACE YOUR VOTE NOW <span class="glyphicon glyphicon-pencil"></span></h3>
        <div class="center" v-if="votePair.length > 1">
                <bernard v-for="vote in votePair" :bernard="vote"></bernard>
        </div>
    </vote>

</template>



<script>

    import { getBernards, getRandomPair } from '../../vuex/actions';
    import Bernard from '../Bernard/Bernard.vue';

    export default {
        data() {
            return {
              retrievedBernards: this.initGetBernards()
            }
        },
        components: {
            Bernard
        },
        vuex: {
            getters: {
                bernards: state => state.bernards,
                votePair: state => state.votePair
            },
            actions: {
                getBernards,
                getRandomPair
            }
        },
        methods: {
            initGetBernards() {
                if (this.bernards.length == 0) {
                    this.$http.post(
                        'https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=bernard hill',
                        function(data) {
                            this.$set('retrievedBernards', data.value);
                        },
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                                "Ocp-Apim-Subscription-Key": "c82da6d6251a42a299d713be34a943aa"
                            }
                        }
                    ).then(function() {
                        this.getBernards(this.retrievedBernards);
                        this.getRandomPair();
                    });
                }
            }
        }
    }
</script>

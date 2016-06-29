<template>
    <vote>
    <h3>VOTE PAGE</h3>
    </vote>
</template>

<script>

    import { getBernards } from '../../vuex/actions';

    export default {
        data() {
            return {
              bernards: this.initGetBernards()
            }
        },
        vuex: {
            getters: {
                bernards: state => state.bernards
            },
            actions: {
                getBernards
            }
        },
        methods: {
            initGetBernards() {
            console.log('initgetbernards');
            }
        }
    }
</script>

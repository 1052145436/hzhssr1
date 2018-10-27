<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'App'
    }
</script>
<style lang="scss" type="text/scss">
    @import '~@/assets/scss/common/reset';
    
    .caret {
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: middle;
        border-top:   4px dashed;
        border-right: 4px solid transparent;
        border-left:  4px solid transparent;
        transition: transform .2s;

        &-up {
            transform: rotate(-180deg);
        }
    }
</style>

<template>
    <div class="con">
        <myfooter/>
    </div>
</template>

<script>
import myfooter from '../components/myfooter'
    export default {
        name: "user",
        components:{
            myfooter
        }
    }
</script>

<style scoped>
@media screen and (min-width:1025px) {}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:481px) and (max-width:768px){}
@media screen and (min-width:320px) and (max-width:480px){}
</style>
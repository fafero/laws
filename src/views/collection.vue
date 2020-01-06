<template>
    <div class="ain">
        <presentation/>
        <myfooter/>
    </div>
</template>

<script>
    import presentation from '../components/presentation'
    import myfooter from '../components/myfooter'
    export default {
        name: "collection",
        components:{
            presentation,
            myfooter
        },
        beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      alert('veillez vous connectez')
      next('/login')
    }
  }
    }
</script>

<style scoped>
@media screen and (min-width:1025px) {
    .ain{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: white;
     }
}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:481px) and (max-width:768px){}
@media screen and (min-width:320px) and (max-width:480px){}

</style>
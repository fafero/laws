<template>
    <div>
        <div class="myhe">
      <img src="../assets/hstr.jpg" alt="fin1" class="fin1">
      <div id=""></div>
  </div>
       
        <street1/>
        <street2/>
        <myfooter/>
    </div>
</template>

<script>
    import street1 from '../components/street1';
     import street2 from '../components/street2';
    import myfooter from '../components/myfooter'
    export default {
        name: "streetstyle",
        components:{
            street1,
            street2,
            myfooter
        },
        beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next('/streetstyle')
    } else {
      alert('bienvenu au home')
      next('/login')
    }
  }
    }
</script>

<style scoped>
.fin1{
  width: 100%;
}

@media screen and (min-width:1025px) {}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:481px) and (max-width:768px){}
@media screen and (min-width:320px) and (max-width:480px){}

</style>
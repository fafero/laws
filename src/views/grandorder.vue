<template>
  <div class="grandor">
      <Order/>
  </div>
</template>

<script>
import Order from '../components/Order'
    export default {
        name: "grandorder",
         components:{
        Order
    },
//     beforeRouteEnter (to, from, next) {
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       alert('bienvenu au home')
//       next('/login')
//     }
//   }
    }
</script>

<style scoped>
.grandor{
    color: black;
}
</style>
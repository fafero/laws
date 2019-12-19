<template>
  <div class="grandpa">
      <Panier/>
  </div>
</template>

<script>
import Panier from '../components/Panier'
    export default {
        name: "grandpanier",
         components:{
        Panier
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
.grandpa{
    color: black;
}
</style>
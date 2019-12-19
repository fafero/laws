<template>
  <div class="grandcom">
      <Complete/>
  </div>
</template>

<script>
import Complete from '../components/Complete'
    export default {
        name: "grandcomplete",
         components:{
        Complete
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
.grandcom{
    color: black;
}
</style>
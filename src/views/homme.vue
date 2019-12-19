<template>
  <div class="homme">
      <myhomme/>
  </div>
</template>

<script>
import myhomme from '../components/myhomme'
    export default {
        name: "homme",
         components:{
        myhomme
    },
    beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      alert('bienvenu au home')
      next('/login')
    }
  }
    }
</script>

<style scoped>

</style>

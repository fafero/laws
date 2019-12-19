<template>
  <div class="femme">
      <myfemme/>
  </div>
</template>

<script>
import myfemme from '../components/myfemme'
    export default {
        name: "femme",
         components:{
        myfemme
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

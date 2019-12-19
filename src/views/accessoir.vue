<template>
  <div class="accessoir">
      <accessoir1/>
  </div>
</template>

<script>
import accessoir1 from '../components/accessoir1'
    export default {
        name: "accessoir",
         components:{
        accessoir1
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

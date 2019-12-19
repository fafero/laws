<template>
<div>
    <div @click="selectedComponent = 'newEmployer'" class="p-2 n-2 btn btn-primary">Add new employer</div>
    <div @click="selectedComponent = 'DataTable'" class="p-2 n-2 btn btn-primary">Liste Employer</div>

    <div class="">
        <component :is="selectedComponent" :fetch-url="url" :columns="columns"></component>
    </div>
    <newEmployer/>
</div>
</template>

<script>

import newEmployer from '../components/newEmployer';
import DataTable from '../components/DataTable';
export default {
  name: 'employer',
  components: {newEmployer, DataTable},
  data() {
      return {
          selectedComponent: 'newEmployer',
          url: "http://164.132.224.172:5000/employer/all",
          columns: ['idEmployer', 'Nom', 'prenom', 'sexe', 'date_de_naissance', 'email', 'password', 'adresse', 'salaire', 'telephone', 'poste', 'qualification' , 'admin'],
      }
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
@media screen and (min-width:1025px) {}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:481px) and (max-width:768px){}
@media screen and (min-width:320px) and (max-width:480px){}
</style>

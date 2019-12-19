<template>
 <div>
     <dataTable fetchUrl="http://localhost:5000/client/All"
     :columns="['idClient', 'Nom', 'prenom', 'sexe', 'date_de_naissance', 'email', 'password', 'adresse', 'created_at', 'updated_at']">

     </dataTable>
     <!-- <table>
         <thead>
            <tr>
                <td>ID</td>
                <td>Nom</td>
                <td>Prenom</td>
                <td>Email</td>
            </tr>
         </thead>
         <tbody>
         <tr v-for="item in clients" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.nom}}</td>
                <td>{{item.prenom}}</td>
                <td>{{item.email}}</td>
         </tr>
         </tbody>
     </table> -->
 </div>
</template>

<script>
import DataTable from '../components/DataTable';
    export default {
        name: "client",
        components: {
            DataTable
        },
        data(){
            return{
                clients: []
            }
        },
        created: function()
        {
            this.getclients();
        },
        methods: {
            getclients: function () {
                let url = "http://164.132.224.172:5000/client/All";
                this.axios.get(url).then((res) => {
                    alert("ok");
                    this.clients = res.data;
                    console.log(res)
                })
                    .catch(err =>{
                        console.log(err);
                    })

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
div{
    color: black;
}

@media screen and (min-width:1025px) {}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:481px) and (max-width:768px){}
@media screen and (min-width:320px) and (max-width:480px){}
</style>

<template>
 <div>
     <dataTable fetchUrl="http://localhost:5000/produit/All"
     :columns="['Reference', 'Libelle', 'Description', 'Prix', 'Taille', 'Img', 'Motif']">
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
        name: "produit",
        components: {
            DataTable
        },
        data(){
            return{
                produits: []
            }
        },
        created: function()
        {
            this.getproduits();
        },
        methods: {
            getproduits: function () {
                let url = "http://164.132.224.172:5000/produit/All";
                this.axios.get(url).then((res) => {
                    alert("ok");
                    this.produits = res.data;
                    console.log(res)
                })
                    .catch(err =>{
                        console.log(err);
                    })

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

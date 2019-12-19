<template>
    <div id="client">
        <div class="clients">
            <form v-on:submit.prevent="addclient">
                <div class="div1">
                <label for="nom">Nom:</label>
                <input type="text" v-model="client.nom" placeholder="nom" required>
                </div>
                <div class="div2">
                <label for="prenom">Prenom:</label>
                <input type="text" v-model="client.prenom" placeholder="prenom" required>
                </div>
                <div class="div3">
                <label for="sexe">Sexe:</label>
                <input type="radio" v-model="client.sexe" name="sexe" value="M">
                <label for="M">M</label>
                <input type="radio" v-model="client.sexe" name="sexe" value="F">
                <label for="F">F</label>
                <input type="radio" v-model="client.sexe" name="sexe" value="A">
                <label for="A">A</label>
                </div>
                <div class="div4">
                <label for="date_de_naissance">Date de Naissance:</label>
                <input type="text" v-model="client.date_de_naissance" placeholder="aaaa/mm/jj" required>
                 </div>
                <div class="div5">
                <label for="email">Email:</label>
                <input type="text" v-model="client.email" placeholder="exemple@exemple.fr" required>
                 </div>
                <div class="div6">
                <label for="password">Mot de Passe:</label>
                <input type="text" v-model="client.password" placeholder="mot de passe" required>
                 </div>
                <div class="div7">
                <label for="adresse">Adresse:</label>
                <input type="tel" v-model="client.adresse" placeholder="adresse" required>
                 </div>

                <input type="submit" value="Creer">
            </form>
            </div>
            <myfooter/>
    </div>

</template>

<script>
import myfooter from '../components/myfooter'
    export default {
        name: "AddNewClient",
        components:{
        myfooter
    },
        data(){
            return{
               client:{
                   nom: '',
                   prenom: '',
                   sexe: '',
                   date_de_naissance: '',
                   email: "",
                   password: '',
                   adresse: ""
               } ,
                url: "http://164.132.224.172:5000/client/newclient",
            }
        },
        methods: {
            addclient(e){
                e.preventDefault();
                console.log(this.url);

                this.axios.post("http://164.132.224.172:5000/client/newclient",this.client)
                    .then((res) =>{
                        alert(res.data.json);
                        alert(res.data.error);
                        //console.log(res)
                    })
                    .catch(err =>{
                        console.log(err)
                    })
                    this.$router.push("/login");
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
.clients{
     display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    color: black;
    height: 500px;
}

.div1, .div2, .div4, .div5, .div6, .div7{
  display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;  
}
</style>

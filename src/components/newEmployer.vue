<template>
<div class="tout">
    <form v-on:submit="addemployer">
        <input type="text" placeholder="Nom" v-model="employer.nom">
        <input type="text" placeholder="prenom" v-model="employer.prenom">
        <label for="sexe">Sexe:</label>
        <input type="radio" v-model="employer.sexe" name="sexe" value="M">
        <label for="M">M</label>
        <input type="radio" v-model="employer.sexe" name="sexe" value="F">
        <label for="F">F</label>
        <input type="radio" v-model="employer.sexe" name="sexe" value="A">
        <label for="A">A</label>
        <input type="text" placeholder="aaaa/mm/jj" v-model="employer.date_de_naissance">
        <input type="text" placeholder="email" v-model="employer.email">
        <input type="text" placeholder="password" v-model="employer.password">
        <input type="text" placeholder="adresse" v-model="employer.adresse">
        <input type="text" placeholder="salaire" v-model="employer.salaire">
        <input type="tel" placeholder="telephone" v-model="employer.telephone">
        <input type="text" placeholder="poste" v-model="employer.poste">
        <input type="text" placeholder="qualification" v-model="employer.qualification">
        <input type="text" placeholder="Admin=oui/non" v-model="employer.admin">
                
        <input type="submit" value="Add employer">
    </form>
    </div>
</template>

<script>
    export default {
        name: "newEmployer",
        data() {
            return {
                employer: {},
                magasins: [],
            }
        },
        created: function()
        {
            this.getAll();
        },
        methods: {
            addemployer() {
                let url = "http://164.132.224.172:5000/employer/register";
                this.axios.post(url, this.employer).then((response) => {
                    console.log(response)
                })
                    .catch(err =>{
                        console.log("error" + err)
                    });
            }
        }
    }
</script>

<style scoped>
div{
    color: black;
}

form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>

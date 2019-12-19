<template>
<div class="templatepanier">
    <br />
    <br />
    <h2>Votre Panier</h2>      
  <table>
    <thead>
      <tr>
        <th>Image</th>
        <th>Libelle</th>
       <th>Quantité</th>
       <th>Prix</th>
       <th>Total</th>
       <th></th>
       <th></th>
      </tr>
    </thead>
    <tbody>
        <tr v-if="contenupanier === null">
          <td id="paniervide" colspan="6">Pas de produit dans votre panier</td>
        </tr>
      <tr v-for="(item,index) in contenupanier" :key="item.reference" v-else>
          <td>
            <img :src="item.image" :alt="item.libelle"/>
          </td>
          <td>{{ item.libelle}}</td>
          <td>
            <button type="button" class="btn btn-dark" @click="retireUnproduit(index)">-</button>
            <input type="number" v-model="item.quantite" readonly/>
            <button type="button" class="btn btn-dark" @click="rajouteUnproduit(index)">+</button>
          </td>

          <td>{{ item.prix}}</td>
          <td>{{ item.quantite * item.prix}} €</td>
          <td><button type="button" class="btn btn-white" @click="suprimerLeproduit(index)"><img src="../assets/filled-trash.png" alt="supprimerIcon" class="sup"/></button></td>

        </tr>
        <tr>
          <td id="totalPanier" colspan="5">TOTAL</td>
          <td>
            <strong>{{ total}} €</strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div>
      <button role="button" type="button" class="btn btn-light">
        <router-link
          to="/collection"
          style="text-decoration:none"
          title="cliquez pour continuer vos achats"
        >Continuez mes achats</router-link>
      </button>
      <button role="button" type="button" @click="viderMonPanier" class="btn btn-light">
        <router-link
          to="/collection"
          style="text-decoration:none"
          title="Vider mon panier"
        >Vider mon panier</router-link>
      </button>

      <button role="button" type="button" class="btn btn-light">
       <router-link
          to="/grandorder"
          style="text-decoration:none"
          title="cliquez pour valider vos achats"
        >Valider mon panier/procéder au paiement</router-link>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "panier",
  data() {
    return {
     contenupanier: {},
      quantite: 1
    };
  },
  created() {
    //au chargement du panier, on récupère les données du LS que l'on stocke dans la variable panierStorage
    //va permettre de remplir le tableau
    this.contenupanier = JSON.parse(localStorage.getItem("contenupanier"));
    console.log("fafa",this.contenupanier);
  },
  computed: {
    total: function() {
      var total = 0;
      if (this.contenupanier) {
        this.contenupanier.forEach(function(item) {
          total += item.prix * item.quantite;
        });
      }
      //total avec 2 chiffres après la virgule
      return total.toFixed(2);
    }
  },
  methods: {
    //fonction rajouteUnProduit s'effectue au click du bouton + dans la ligne quantite l37
    rajouteUnproduit: function(index) {
      //pour récupérer la ligne cliquée on se sert du paramètre index
      //on incrémente de 1 la quantité de la ligne
      this.contenupanier[index].quantite++;
      //la quantité vient d'être modifiée, on doit la prendre en compte dans le calcul du sous total
      this.contenupanier[index].soustotal =
        this.contenupanier[index].prix *
        this.contenupanier[index].quantite;
      console.log(this.contenupanier);

      //pour cela on doit vider le LS pour le reremplir
      localStorage.removeItem("contenupanier");
      //on va alors envoyer au localstorage le contenupanier mis à jour
      localStorage.setItem("contenupanier", JSON.stringify(this.contenupanier));
      window.location.reload();
    },
    suprimerLeproduit: function(index){
       //on applique la fonction supprimer avec comme paramètre l'index du produit qu'on doit enlever
        this.supprimer(index);
        window.location.reload();
        //on force le rafraîchissement de la page pour que la quantité dans le header se mette à jour
    },
    retireUnproduit: function(index) {
      //on pose une condition : si la quantité du produit est strictement supérieur à 1
      //on peut décrémenter de 1 la quantité
      //sinon on supprime le produit du panier
      if (this.contenupanier[index].quantite > 1) {
        this.contenupanier[index].quantite--;
        this.contenupanier[index].soustotal =
          this.contenupanier[index].prix *
          this.contenupanier[index].quantite;
        console.log(this.contenupanier);
        localStorage.removeItem("contenupanier");
        //on va alors envoyer au localstorage le panierStorage mis à jour
        localStorage.setItem(
          "contenupanier",
          JSON.stringify(this.contenupanier)
        );
        window.location.reload();
        //on force le rafraîchissement de la page pour que la quantité dans le header se mette à jour
      } else {
        //la quantite n'étant pas supérieur à 1, on ne peut pas décrémenter
        //on applique la fonction supprimer avec comme paramètre l'index du produit qu'on doit enlever
        this.supprimer(index);
        window.location.reload();
        //on force le rafraîchissement de la page pour que la quantité dans le header se mette à jour
      }
    },
    supprimer: function(index) {
      //supprime la ligne de produit correspondant à l'index d'une ligne tr
      this.contenupanier.splice(index, 1);
    //le panier vient d'être modifié, on vide le LS pour le reremplir

      localStorage.removeItem("contenupanier");
      //on vérifie que la longueur du panier est supérieur>0
      //ce qui signifie qu'il reste des produits dedans
      //on renvoie le tout au LS pour le mettre à jour
      if(this.contenupanier.length>0){
      //on renvoie  le tableau mis à jour dans le LS
      localStorage.setItem("contenupanier", JSON.stringify(this.contenupanier));
      }else{
      //on lui dit que le contenupanier est  =  null pour qu'il mette la phrase par défaut dans le panier 
      //qu'aucun produit n'a été ajouté dans le panier
        this.contenupanier = null;
        localStorage.setItem("contenupanier", JSON.stringify(this.contenupanier));
        window.location.reload();

      }
    
    },
    viderMonPanier: function() {
      //pour cela on doit vider le LS pour le reremplir
      this.contenupanier = localStorage.removeItem("contenupanier");
      //on va alors envoyer au localstorage le contenupanier mis à jour
      window.location.reload();
    },
    // validerMonPanier:function(){
    // //on vérifie si le token du client est bien stocké dans le localStorage 
    // //si oui, cela signifie qu'il est connecté 
    // if(localStorage.getItem("token")!==null ||localStorage.getItem("token")!= undefined){
    // // if(localStorage.getItem("token")!==null){

    // //on decode le token pour récupérer l'id du client 
    // var user = VueJwtDecode.decode(localStorage.getItem("token"));
    //        console.log(user.id);"}"
    //          clientId:user.id,
    //          panier:this.panierStorage,
    //        })
    //        .then(res =>{
    //          console.log(res.data)
    //        this.$router.push({name:'Paiement',params:{total:this.total} })
    //        })
    //         .catch(function (err){
    //         console.log(err);
    //         })
    //      }else{
    //        alert('Merci de vous connectez ou de vous inscrire pour passer votre commande' );
    //       this.$router.push({name:'login'})
    //       localStorage.setItem("statut validation panier",JSON.stringify(this.statutValidationPanier))
    //      }
    //    }
  }
};
</script>
<style  scoped>

@media screen and (min-width:1025px) {
  h2 {
  /* padding-top:25px; */
  font-size: 30px;
  font-family: "Copperplate Gothic Bold";
  /* color: #ff6633; */
  /* line-height: 1.2; */
  text-align: center;
}
#templatepanier {
  background-color: rgb(167, 159, 159);
  height: 100vh;
  color: black;
}
table {
  width: 100%;
}
th {
  height: 50px;
  background-color: #f3a640;
}
td {
  height: 50px;
  vertical-align: center;
}

.sup{
  width: 40%;
}

#paniervide {
  text-align: center;
  font-weight: 800;
}
#totalPanier {
  text-align: center;
  color: #666666;
}

/* #di{
    position: absolute;
    top: 300px;
    width: 50%;
    display: none;
} */
}

@media screen and (min-width:769px) and (max-width:1024px){
  h2 {
  /* padding-top:25px; */
  font-size: 30px;
  font-family: "Copperplate Gothic Bold";
  /* color: #ff6633; */
  /* line-height: 1.2; */
  text-align: center;
}
#templatepanier {
  background-color: rgb(167, 159, 159);
  height: 100vh;
  color: black;
}
table {
  width: 100%;
}
th {
  height: 50px;
  background-color: #f3a640;
}
td {
  height: 50px;
  vertical-align: center;
}

.sup{
  width: 40%;
}

#paniervide {
  text-align: center;
  font-weight: 800;
}
#totalPanier {
  text-align: center;
  color: #666666;
}

/* #di{
    position: absolute;
    top: 300px;
    width: 50%;
    display: none;
} */
}

@media screen and (min-width:481px) and (max-width:768px){
  h2 {
  /* padding-top:25px; */
  font-size: 30px;
  font-family: "Copperplate Gothic Bold";
  /* color: #ff6633; */
  /* line-height: 1.2; */
  text-align: center;
}
#templatepanier {
  background-color: rgb(167, 159, 159);
  height: 100vh;
  color: black;
}
table {
  width: 100%;
}
th {
  height: 50px;
  background-color: #f3a640;
}
td {
  height: 50px;
  vertical-align: center;
}

.sup{
  width: 40%;
}

#paniervide {
  text-align: center;
  font-weight: 800;
}
#totalPanier {
  text-align: center;
  color: #666666;
}

/* #di{
    position: absolute;
    top: 300px;
    width: 50%;
    display: none;
} */
}

@media screen and (min-width:320px) and (max-width:480px){
  h2 {
  /* padding-top:25px; */
  font-size: 30px;
  font-family: "Copperplate Gothic Bold";
  /* color: #ff6633; */
  /* line-height: 1.2; */
  text-align: center;
}
#templatepanier {
  background-color: rgb(167, 159, 159);
  height: 100vh;
  color: black;
}
table {
  width: 100%;
}
th {
  height: 50px;
  background-color: #f3a640;
}
td {
  height: 50px;
  vertical-align: center;
}

.sup{
  width: 40%;
}

#paniervide {
  text-align: center;
  font-weight: 800;
}
#totalPanier {
  text-align: center;
  color: #666666;
}

/* #di{
    position: absolute;
    top: 300px;
    width: 50%;
    display: none;
} */
}

</style>
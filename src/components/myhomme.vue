<template>
  <div class="myhom">
    <div class="divim" v-for="item in produits" :key="item.reference">
      <div class="div1">
      <img :src="require(`../assets/${item.img}.jpg`)" :alt="item.libelle"/>
    <h1>{{item.libelle}}</h1>
    </div>
    <div class="div2">
            <p> <strong>Prix:</strong> {{item.prix}}€</p>
            <select name="tai" id="tai">
            <option value="">--Choisissez votre taille--</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            </select>
        
<input
        type="submit"
        class="boutonAjouterAuPanier"
        value="Ajouter au panier"
        @click="ajouter(item.img,item.reference,item.libelle,item.quantite,item.prix,item.taille)"
      />
</div>

    </div>
  </div>
</template>
<script>

    export default {
        name: "myhomme",
        data (){
          return {
            produits: "",
            paniertableau: []
          }
        },
        created: function (){
          this.getAll();
    this.recupLocalStorage();
        },
        methods: {
          getAll (){
            let url="http://164.132.224.172:5000/produit/findbydescription/homme";
            this.axios.get(url)
             .then((response) =>{
              console.log(response.data);
              this.produits = response.data;
            })
            .catch(err => {
              console.log("error" + err);
            })
          },
          ajouter(img,reference,libelle,quantite,prix,taille) {
      //j'efface mon localstorage pour éviter un panier erroné
      localStorage.removeItem("contenupanier")
      //je vide mon LS avec clear
      console.log(img,reference,libelle, quantite, prix, taille)
            alert(`${libelle} a bien été ajouté dans votre panier!`);
       console.log("fafavi",this.paniertableau);
      // localStorage.clear(); pas clear sinon effacera le token du login
      //on verifie la lg du paniertableau, s'il est vide on ajoute le produit
      //sans vérification de la présence de ce produit
      if (this.paniertableau.length == 0) {
        let quantite = 1;
        this.paniertableau.push({
          image: img,
          reference: reference,
          libelle: libelle,
          quantite: quantite,
          prix: prix,
          taille: taille,
          soustotal:quantite * prix
        });
      } else {
        //on déclare existenceProduit à false car à ce stade
        // on ne sait pas si le produit cliqué est déjà dans le paniertableau 
        let existenceProduit = false;
        //dans le cas où le paniertableau n'est pas vide, on va boucler
        //pour vérifier si le pdt ajouté est dans le paniertableau
        this.paniertableau.forEach(item => {
          //on trouver le produit, on incrémente la quantité
          if (item.reference === reference) {
            item.quantite++;
            item.soustotal = item.quantite * item.prix;
            // la variable existenceProduit passe à true parce que le produit 
            // est déjà dans le panier 
            existenceProduit = true;
            console.log("produit existant");
          }
        });
        //le produit n'existe pas donc on ajoute le nouveau produit
        if (existenceProduit == false) {
          let quantite = 1;
          this.paniertableau.push({
            image: img,
            reference: reference,
            libelle: libelle,
            quantite: quantite,
            prix: prix,
            taille: taille,
            soustotal: quantite * prix
          });
          console.log("produit absent");
        }
        console.log("sibi",this.paniertableau);
        
      //la variable existenceProduit correspond à la reference du produit ajouté et se 
      //réfère à la variable déclarée en ligne 69
        // this.existenceProduit = id;
        // console.log(this.existenceProduit);
      }
      //on envoie le paniertableau dans le localstorage
      localStorage.setItem("contenupanier", JSON.stringify(this.paniertableau));
      window.location.reload()
    //au click de la fonction ajouter le composant émet un signal à son parent qui est la boutique 
    },
    //fonction pour récupérer le localStorage
    //si le LS n'est pas vide on récupère ce qu'il y a dedans
    //on le met dans created pour que la fonction se fasse au chargement
    recupLocalStorage() {
      let recupererLS = localStorage.getItem("contenupanier");
      if (recupererLS != null || recupererLS != undefined) {
        this.paniertableau = JSON.parse(recupererLS);
        console.log(this.paniertableau);
      }
    }
        }
    }
</script>

<style scoped>

@media screen and (min-width:1025px) {
  .myhom{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
}

.divim{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 30%;
  height: 400px;
  border-radius: 10px;
  /*background-color: brown;*/
  box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}

.div1{
  display: flex;
   justify-content: center;
}

.im{
  width: 30%;
}
}


@media screen and (min-width:769px) and (max-width:1024px){
  .myhom{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
}

.divim{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 45%;
  height: 400px;
  border-radius: 10px;
  /*background-color: brown;*/
  box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}

.div1{
  display: flex;
   justify-content: center;
}

.im{
  width: 50%;
}
}


@media screen and (min-width:481px) and (max-width:768px){
  .myhom{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
}

.divim{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 75%;
  height: 400px;
  border-radius: 10px;
  /*background-color: brown;*/
  box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}

.div1{
  display: flex;
   justify-content: center;
}

.im{
  width: 40%;
}
}


@media screen and (min-width:320px) and (max-width:480px){
  .myhom{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
}

.divim{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  /*background-color: brown;*/
  box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}

.div1{
  display: flex;
   justify-content: center;
}

.im{
  width: 30%;
}
}

</style>

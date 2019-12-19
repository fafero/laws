<template>
    <div class="propo">
        <img src="../assets/logolaw.png" alt="logo" class="logo"/>
         <h1>Origine</h1>
    <p>LawStyle est un site de vente en ligne de vêtements et accessoires confectionnés en pagne.
 L’idée  m’est venu après un séjour chez ma tante pour la première communion de mon petit cousin;
  ma tante avais fais appel à un couturier pour la confection des habits. Lorsque nous avons reçu les tenues, quelle ne fut notre déception de constater que le couturier avait bâclé son travail et  que les finitions étais désastreuses. Nous avons dû découdre certaines partie et les refaire à la main sans machine. Je me suis rendue compte que pour pouvoir avoir des tenues en pagne dignes de se nom, il fallait le commander depuis le Togo et attendre qu’une connaissance qui y est aller ait l’indulgence  de nous le rapporter en revenant. 
  S’est de là que j’ai eu l’idée de faire le site LawStyle.
</p>
        <myfooter/>
    </div>
</template>

<script>
import myfooter from '../components/myfooter'
    export default {
        name: "apropos",
        components:{
            myfooter
        }
  }
</script>

<style scoped>

@media screen and (min-width:1025px) {
  .propo{
    color: black;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: rgba(255, 255, 255, 0.63),
                  url("../assets/ls.png");
}
.logo{
    width: 20%;
}
}


@media screen and (min-width:769px) and (max-width:1024px){
  .propo{
    color: black;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: rgba(255, 255, 255, 0.63),
                  url("../assets/ls.png");
}
.logo{
    width: 20%;
}
}


@media screen and (min-width:481px) and (max-width:768px){
  .propo{
    color: black;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: rgba(255, 255, 255, 0.63),
                  url("../assets/ls.png");
}
.logo{
    width: 20%;
}
}


@media screen and (min-width:320px) and (max-width:480px){
  .propo{
    color: black;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: rgba(255, 255, 255, 0.63),
                  url("../assets/ls.png");
}
.logo{
    width: 20%;
}
}

</style>
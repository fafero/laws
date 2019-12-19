<template>
    <div class="calen">
        <h1>Calendrier</h1>
      <div class="calendrier">
        <p>Nous sommes ouvert:</p>
        <p>Lundi: 09h-20h</p>
        <p>Mardi: 09h-20h</p>
        <p>Mercredi: 09h-20h</p>
        <p>Jeudi: 09h-20h</p>
        <p>Vendredi: 09h-20h</p>
        <p>Samedi: 09h-18h</p>
        </div>
        <myfooter/>
        
    </div>
</template>

<script>
    import myfooter from '../components/myfooter'
    export default {
        name: "agenda",
        components:{
            myfooter
        },
  //       beforeRouteEnter (to, from, next) {
  //   if (localStorage.getItem('token')) {
  //     next()
  //   } else {
  //     alert('bienvenu au home')
  //     next('/login')
  //   }
  // }
    }
</script>

<style scoped>

@media screen and (min-width:1025px) {
  .calen{
    margin-top: 20px;
    width: 100%;
    height: 400px;
    color: black;
}

.calendrier{
   margin-top: 20px;
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
}


@media screen and (min-width:769px) and (max-width:1024px){
  .calen{
    width: 100%;
    color: black;
}

.calendrier{
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
}


@media screen and (min-width:481px) and (max-width:768px){
  .calen{
    width: 100%;
    color: black;
}

.calendrier{
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
}


@media screen and (min-width:320px) and (max-width:480px){
  .calen{
    width: 100%;
    color: black;
}

.calendrier{
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
}

</style>

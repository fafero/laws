<template>
  <div>
    <b-container class="bv-example-row">
    </b-container>
    <vslider :images="images"/>
  </div>
</template>

<script>
// @ is an alias to /src
import vslider from '../components/vslider';
export default {
  name: 'home',
  components: {
    vslider
  },
  data(){
    return {
      images: [
              "../assets/sl2.jpg",
              "../assets/tr1.jpg",
              "../assets/sl2.jpg",
              "../assets/sl2.jpg"
      ]

    };
  }
   
}
</script>

<style scoped>
@media screen and (min-width:1025px) {
  .acc{
  width: 100%;
  background-color: white;
}
}
@media screen and (min-width:769px) and (max-width:1024px){
  .acc{
  width: 100%;
  background-color: white;
}
}
@media screen and (min-width:481px) and (max-width:768px){
  .acc{
  width: 100%;
  background-color: white;
}
}
@media screen and (min-width:320px) and (max-width:480px){
  .acc{
  width: 100%;
  background-color: white;
}
}

</style>

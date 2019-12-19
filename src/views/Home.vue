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
              "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
              "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
              "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
              "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
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

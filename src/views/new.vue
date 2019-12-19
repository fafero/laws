<template>
    <div>
        <myheader/><br/><br/><br/>
    <div class="info">
        <div class="info1">
          <img src="../assets/def3.jpg" alt="def3" class="def3">
          <p class="p1">Défilé au Palais congrès</p>
        </div><br/>
        <div class="info2">
          <img src="../assets/def2.jpg" alt="def2" class="def2">
          <p class="p1">Défilé la soiée africaine</p>
        </div><br/>
      </div>
      <myfooter/>
    </div>
</template>

<script>
    import myheader from '../components/myheader'
    import myfooter from '../components/myfooter'
    export default {
        name: "new",
        components:{
            myheader,
            myfooter
        },
        beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next('/new')
    } else {
      alert('bienvenu au home')
      next('/login')
    }
  }
    }
</script>

<style scoped>
@media screen and (min-width:1025px) {
    .info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.info1, .info2{
    color: black;
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius:1px;
    box-shadow: 100px black;
    background-color: white;
    box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}
.def3, .def2{
  width: 50%;
}

.p1{
    font-size: 20px;
}
}
@media screen and (min-width:769px) and (max-width:1024px){
    .info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.info1, .info2{
    color: black;
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius:1px;
    box-shadow: 100px black;
    background-color: white;
     box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}
.def3, .def2{
  width: 50%;
}

.p1{
    font-size: 40px;
}
}
@media screen and (min-width:481px) and (max-width:768px){
    .info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.info1, .info2{
    color: black;
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius:1px;
    box-shadow: 100px black;
    background-color: white;
     box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}
.def3, .def2{
  width: 50%;
}

.p1{
    font-size: 30px;
}
}
@media screen and (min-width:320px) and (max-width:480px){
    .info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.info1, .info2{
    color: black;
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius:1px;
    box-shadow: 100px black;
    background-color: white;
     box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
}
.def3, .def2{
  width: 50%;
}

.p1{
    font-size: 15px;
}
}

</style>
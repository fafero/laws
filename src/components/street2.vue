<template>
    <div><br/>
       <div class="voie2">
                <div class="article1">
                    <img src="../assets/str6.jpg" alt="str1" class="str1">
                </div>
                <div class="article2">
                    <img src="../assets/str7.jpg" alt="str1" class="str1">
                </div>
                <div class="article3">
                    <img src="../assets/str3.jpg" alt="str1" class="str5">
                </div>
       </div><br/>
               
    </div>
</template>

<script>
    export default {
        name: "street2"
    }
</script>

<style scoped>

@media screen and (min-width:1025px) {
    .voie2{
   width: 100%;
   height: 600px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.article1{
     width: 25%;
    /*background-color: red;*/
    border-radius: 20px;
}

.article2{
      width: 25%;
    /*background-color: rgb(255, 208, 0);*/
    border-radius: 20px;
}

.article3{
     width: 30%;
    /*background-color: rgb(0, 255, 98);*/
    border-radius: 20px;
}

.str1{
    width: 100%;
}

.str5{
    width: 100%;
}
}


@media screen and (min-width:769px) and (max-width:1024px){
    .voie2{
   width: 100%;
   height: 350px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.article1{
     width: 25%;
    /*background-color: red;*/
    border-radius: 20px;
}

.article2{
      width: 25%;
    /*background-color: rgb(255, 208, 0);*/
    border-radius: 20px;
}

.article3{
     width: 30%;
    /*background-color: rgb(0, 255, 98);*/
    border-radius: 20px;
}

.str1{
    width: 100%;
}

.str5{
    width: 100%;
}
}


@media screen and (min-width:481px) and (max-width:768px){
    .voie2{
   width: 100%;
   height: 250px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.article1{
     width: 25%;
    /*background-color: red;*/
    border-radius: 20px;
}

.article2{
      width: 25%;
    /*background-color: rgb(255, 208, 0);*/
    border-radius: 20px;
}

.article3{
     width: 30%;
    /*background-color: rgb(0, 255, 98);*/
    border-radius: 20px;
}

.str1{
    width: 100%;
}

.str5{
    width: 100%;
}
}


@media screen and (min-width:320px) and (max-width:480px){
    .voie2{
   width: 100%;
   height: 150px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.article1{
     width: 25%;
    /*background-color: red;*/
    border-radius: 20px;
}

.article2{
      width: 25%;
    /*background-color: rgb(255, 208, 0);*/
    border-radius: 20px;
}

.article3{
     width: 30%;
    /*background-color: rgb(0, 255, 98);*/
    border-radius: 20px;
}

.str1{
    width: 100%;
}

.str5{
    width: 100%;
}
}
</style>

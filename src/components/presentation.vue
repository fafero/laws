<template>
    <div>
        <div class="affichage">
        <div class="aff1">
            <img src="../assets/col2.jpg" alt="vetement" class="vetement">
            <div class="cache1">
                <p>Nous vous proposons une gamme variée de tenues pour femme</p>
                 <button><router-link to="/femme">Voir</router-link></button>
            </div>
        </div><br/>
        <div class="aff2">
            <img src="../assets/col3.jpg" alt="accessoir" class="accessoir">
            <div class="cache2">
                <p>Nous vous proposons une multitude d'accessoirs</p>
                 <button><router-link to="/accessoir">Voir</router-link></button>
            </div>
        </div><br/>
        <div class="aff3">
            <img src="../assets/col4.jpg" alt="vetement" class="vetement">
            <div class="cache3">
                <p>Nous vous proposons une gamme variée de tenues pour homme</p>
                 <button><router-link to="/homme">Voir</router-link></button>
            </div>
        </div><br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "presentation"
    }
</script>

<style scoped>

@media screen and (min-width:1025px) {
    .affichage {  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
     /*background-color: rgb(160, 87, 87);*/
}

.aff1{
    width: 100%;
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
    background-color:  rgb(116, 108, 108);
    /* background-color: red;*/
}

.aff2 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

.aff3 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

 .accessoir, .vetement{
     width: 100%;
}

.aff1:hover .cache1{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 289px;
    top: 111px;
     background-color: rgba(155, 150, 150, 0.616);
     color: black;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 20px;
}
 .aff2:hover .cache2{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 202px;
    top: 424px;
     background-color: rgba(155, 150, 150, 0.616);
     color: black;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 20px;
}

.aff3:hover .cache3{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 331px;
     top: 653px;
     background-color: rgba(155, 150, 150, 0.616);
     color: black;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 20px;
}

.cache1, .cache2, .cache3{
    display: none;
}

a{
    text-decoration: none;
}
}
@media screen and (min-width:769px) and (max-width:1024px){
    .affichage {  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
     /*background-color: rgb(160, 87, 87);*/
}

.aff1{
    width: 100%;
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
    background-color:  rgb(116, 108, 108);
    /* background-color: red;*/
}

.aff2 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

.aff3 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

 .accessoir, .vetement{
     width: 100%;
}

.cache1{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 166px;
    top: 107px;
     background-color: rgba(155, 150, 150, 0.39);
     color: black;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 20px;
}
.cache2{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 116px;
    top: 295px;
     background-color: rgba(155, 150, 150, 0.39);
     color: black;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 20px;
}

.cache3{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 188px;
     top: 436px;
     background-color: rgba(155, 150, 150, 0.39);
     color: black;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 20px;
}

/* .cache1, .cache2, .cache3{
    display: none;
} */

a{
    text-decoration: none;
}
}
@media screen and (min-width:481px) and (max-width:768px){
    .affichage {  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
     /*background-color: rgb(160, 87, 87);*/
}

.aff1{
    width: 100%;
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
    background-color:  rgb(116, 108, 108);
    /* background-color: red;*/
}

.aff2 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

.aff3 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

 .accessoir, .vetement{
     width: 100%;
}

.cache1{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 104px;
    top: 103px;
     background-color: rgba(155, 150, 150, 0.336);
     color: white;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 15px;
}
.cache2{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 72px;
    top: 230px;
     background-color: rgba(155, 150, 150, 0.336);
     color: white;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 15px;
}

.cache3{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 119px;
     top: 327px;
     background-color: rgba(155, 150, 150, 0.336);
     color: white;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 15px;
}

/* .cache1, .cache2, .cache3{
    display: none;
} */

a{
    text-decoration: none;
}
}
@media screen and (min-width:320px) and (max-width:480px){
    .affichage {  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
     /*background-color: rgb(160, 87, 87);*/
}

.aff1{
    width: 100%;
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
    background-color:  rgb(116, 108, 108);
    /* background-color: red;*/
}

.aff2 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

.aff3 {
    width: 100%;
    background-color: rgb(240, 232, 232);
   box-shadow: 4px 4px 30px 0px rgba(50, 50, 50, 1);
     /*background-color: rgb(77, 243, 0);*/
}

 .accessoir, .vetement{
     width: 100%;
}

.cache1{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 69px;
    top: 102px;
     background-color: rgba(155, 150, 150, 0.253);
     color: white;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 10px;
}
.cache2{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 48px;
    top: 195px;
     background-color: rgba(155, 150, 150, 0.253);
     color: white;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 10px;
}

.cache3{
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     width: 100%;
     height: 78px;
     top: 268px;
     background-color: rgba(155, 150, 150, 0.253);
     color: white;
     font-family: 'Suranna',
     serif;
     font-weight: bold;
     font-size: 10px;
}

/* .cache1, .cache2, .cache3{
    display: none;
} */

a{
    text-decoration: none;
}
}



</style>

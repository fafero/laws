<template>
    <div class="myfooter">
        <div>
            <img src="../assets/logolaw.png" alt="logo" class="logo">
        </div>
        <div>
            <img src="../assets/facebook.png" alt="logo" class="logo1">
            <img src="../assets/instagram.png" alt="logo" class="logo2">
            <img src="../assets/linkedIn.png" alt="logo" class="logo3">
        </div>
        <div class="copy"><p>&copy; LawStyle</p></div>
    </div>
</template>

<script>
    export default {
        name: "myfooter"
    }
</script>

<style scoped>

@media screen and (min-width:1025px) {
    .myfooter{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(238, 156, 23);
}

.logo{
  width: 10%;
}
}


@media screen and (min-width:769px) and (max-width:1024px){
    .myfooter{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(238, 156, 23);
}

.logo{
  width: 10%;
}
}


@media screen and (min-width:481px) and (max-width:768px){.myfooter{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(238, 156, 23);
}

.logo{
  width: 10%;
}
}


@media screen and (min-width:320px) and (max-width:480px){
    .myfooter{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(238, 156, 23);
}

.logo{
  width: 20%;
}
}


</style>

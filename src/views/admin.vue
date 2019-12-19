<template>
    <div id="admin">
        <div>
        <button><router-link to="/employer">Employer</router-link></button>
        </div>
        <div>
        <button><router-link to="/client">Client</router-link></button>
        </div>
        <div>
        <button><router-link to="/produit">Produit</router-link></button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "admin"
    }
</script>

<style scoped>
@media screen and (min-width:1025px) {
    #admin{
        margin-top: 10%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    button{
        width: 100px;
        height: 150px;
        border-radius: 20px;
    }
}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:481px) and (max-width:768px){}
@media screen and (min-width:320px) and (max-width:480px){}

</style>

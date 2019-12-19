<template>
    <div class="log">
        <div class="log1">
        <form @submit="loginSubmit">
            <label for="email">.   Email .</label>
            <input type="email" id="email" v-model="email">
            <label for="password">.    Password  .</label>
            <input type="password" id="password" v-model="password">

            <input type="submit" value="login">
        </form><br/><br/>

        <router-link to="/AddNewClient">Pas de compte? Inscrivez-vous</router-link>
        </div>
        <myfooter/>
    </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import myfooter from '../components/myfooter';
export default {
    name: "login",
    components:{
        myfooter
    },
    data(){
        return{
            admindata: false,
            email: '',
            password: '',
        }
    },
    methods: {
        loginSubmit: function (e) {
            e.preventDefault();

            this.axios.post('http://164.132.224.172:5000/client/login',{
                email: this.email,
                password: this.password
            })
            .then((res) => {
                localStorage.setItem('token', res.data['token']);
                console.log(res);
                
                var client = VueJwtDecode.decode(res.data["token"]);
                 //on stocke les données dans les variables puisqu'on vient de 
                    //les décrypter
                var clientdata = {
                    id: client.idClient,
                    admin: client.admin
                };
                console.log(clientdata);
                localStorage.setItem("token",res.data.token);
                    localStorage.setItem("client",JSON.stringify(clientdata))
                if(clientdata.admin == true){
                    this.$router.push({ name:"/Home" });
                        window.location.reload();
                }else{
                        this.$router.push({ name:"/collection" });
                        window.location.reload();
                }
            })
            .catch(function (res) {
                alert(res);
            })
        }
    }
}
</script>

<style scoped>
@media screen and (min-width:1025px) {
    .log{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
}

.log1{
    color: black;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
}

}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:481px) and (max-width:768px){}
@media screen and (min-width:320px) and (max-width:480px){}

</style>
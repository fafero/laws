<template>
    <div id="navtemp">
  <b-navbar toggleable="lg" type="dark" variant="warning">
    <b-navbar-brand href="#"><img src="../assets/logolaw.png" alt="logo" class="logo">LawStyle</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/Home">Accueil</router-link></b-nav-item>
        <b-nav-item><router-link to="/new">News</router-link></b-nav-item>
        <b-nav-item><router-link to="/collection">Collections</router-link></b-nav-item>
        <b-nav-item> <router-link to="/streetstyle">StreetStyle</router-link></b-nav-item>
        <b-nav-item><router-link to="/agenda">Agenda</router-link></b-nav-item>
        <b-nav-item><router-link to="/apropos">A Propos</router-link></b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Recherche"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
          <b-button @click="good">¤</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Profil</em>
          </template>
          <b-dropdown-item v-if="connect" @click="login"><router-link to="/login">Connexion</router-link></b-dropdown-item>
          <b-dropdown-item v-if="deconnect" @click="logout"><router-link to="/home">deconnection</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/grandpanier"><img src="../assets/icopanier.png" alt="icopanier" class="icopanier"></router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "navtemp",
  
        data(){
        return{
      connect: true,
      deconnect: false,
            }
        },
        // tout ce que je mettre ici sera cree une fois sur la page 
  created () {
    if (localStorage.getItem('token')) {
      // si elle est connecter il vas affiche connecter
      this.connect= false
      this.deconnect= true
    }else if (!localStorage.getItem('token')) {
        this.connect= true
      this.deconnect= false
    }
  },
  methods: {
    login (){
      this.$router.push('/login')
    },
    logout (){
      localStorage.removeItem('token')
       this.$router.push('/home')
       window.location.reload();
    },
    good (){
      console.log("je suis good");
     let recup = localStorage.getItem("client")
     console.log(recup);
     recup=JSON.parse(recup);
     console.log(recup);
     console.log(recup.admin)
      if(recup.admin==true){
      this.$router.push('/admin')
      }else{
        this.$router.push('/collection')
      }
    }
    }   
}

</script>

<style scoped>

@media screen and (min-width:1025px) {
  .icopanier{
  width: 50%;
  height: 30px;
}
.logo{
  width: 50px;
}

router-link{
  text-decoration: none;
}
}


@media screen and (min-width:769px) and (max-width:1024px){
  .icopanier{
  width: 40%;
}
.logo{
  width: 50px;
}

router-link{
  text-decoration: none;
}
}


@media screen and (min-width:481px) and (max-width:768px){
  .icopanier{
  width: 20%;
}
.logo{
  width: 50px;
}

router-link{
  text-decoration: none;
}
}


@media screen and (min-width:320px) and (max-width:480px){
  .icopanier{
  width: 40%;
}
.logo{
  width: 50px;
}

router-link{
  text-decoration: none;
}
}


</style>

<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name:'Contanct'}">Contanct</router-link>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 15px;
  border-radius: 10px;
  text-decoration: none;
  background: rgb(161, 109, 109);
}
#nav a:hover{
    background: rgb(153, 145, 145);

}

#nav a.router-link-exact-active {
  color: #931919;
}
</style>

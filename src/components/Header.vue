<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <router-link class="nav-item" to="/portafolio" activeClass="active" tag="li">
        <a class="nav-link" href="#">Portafolio <span class="sr-only">(current)</span></a>
      </router-link>
      <router-link class="nav-item" to="/stocks" activeClass="active" tag="li">
        <a class="nav-link" href="#">Stocks</a>
      </router-link>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="endDay()">End Day</a>
      </li>
      <li class="nav-item">
        <strong>Current fund: {{ funds | currency }}</strong>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save and Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions(['randomizeStocks']),
      endDay() {
        this.randomizeStocks();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
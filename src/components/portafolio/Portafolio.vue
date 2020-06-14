<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

  export default {
    name: 'Portafolio',
    components: {
      appStock: Stock
    },
    computed: {
      ...mapGetters({ stocks: 'stockPortafolio' }),
    }
  }
</script>

<style lang="scss" scoped>

</style>
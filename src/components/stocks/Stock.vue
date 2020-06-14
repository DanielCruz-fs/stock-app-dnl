<template>
  <div class="col-sm-6 col-md-4 mt-3" v-if="stock">
    <div class="card text-center">
      <div class="card-header">
        {{ stock.name }}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ stock.price }}</h5>
        <input type="number" class="form-control" v-model="quantity" :class="{danger: insufficientFunds}">
        <button @click="buyStock()" 
                class="btn btn-primary mt-2" 
                :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)">
          {{ insufficientFunds ? 'Not enough money' : 'Buy'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.stock.price * this.quantity > this.funds; 
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      }
      console.log(order);
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>

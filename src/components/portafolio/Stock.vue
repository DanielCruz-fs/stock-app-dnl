<template>
  <div class="col-sm-6 col-md-4 mt-3" v-if="stock">
    <div class="card text-center">
      <div class="card-header">
        {{ stock.name }}
      </div>
      <div class="card-body">
        <h5 class="card-title">Price: {{ stock.price }} | Quantity: {{ stock.quantity }} </h5>
        <input type="number" class="form-control" v-model="quantity" :class="{danger: insufficientQuantity}">
        <button @click="sellStock()" 
                class="btn btn-warning mt-2" 
                :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)">
                {{ insufficientQuantity ? 'Lack stock' : 'Sell' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Stock",
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({ sellOrderStock: 'sellStock' }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      console.log(order);
      this.sellOrderStock(order);
    }
  }
};
</script>

<style scoped>
  .danger {
    border: 2px solid red;
  }
</style>

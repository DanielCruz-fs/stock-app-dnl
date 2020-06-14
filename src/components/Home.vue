<template>
  <div>
    <h1>Trade or view your portafolio</h1>
    <h6>You may save and load your data</h6>
    <h6>Click on END DAY to begin a new one</h6>
    <hr>
    <p>your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <cube-button class="Btn" @click="addCard">+ 添加银行卡</cube-button>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    addCard () {
      this.$router.replace({ name: 'addAccount' })
    }
  }
}
</script>

<style scoped>

 .Btn{
    font-size: 16px;
    margin: 26px auto 0;
    width: 45%;
    background: #297FFF;
    border-radius: 25px;
 }
</style>

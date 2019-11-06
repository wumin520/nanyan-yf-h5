<template>
<div class="wrap_">
  <div class="tabBar">
      <a href="javascript:;" class="weui-tabbar__item " v-for="(i,index) in tabs" :key="index" :class="{active:index == thatnum}" @click="addClassName(index)">
          <router-link :to="i.url">
            <img v-if="thatnum!=index"  :src="i.img" class="first weui-tabbar__icon">
            <img v-if="thatnum==index"  :src="i.active" class="last first weui-tabbar__icon">
            <!-- <p class="weui-tabbar__label">{{i.text}}</p> -->
          </router-link>
      </a>
    </div>
</div>
</template>

<script>
export default {
  props: ['num'], // 页面跳转初值设置
  data () {
    return {
      thatnum: this.num,
      tabs: [
        { url: './home', img: require('../assets/home/home.png'), active: require('../assets/home/homeAct.png') },
        // { url: '#', img: require('../assets/home/kefu.png'), active: require('../assets/home/kefuAct.png') },
        { url: './center', img: require('../assets/home/my.png'), active: require('../assets/home/myAct.png') }
      ]
    }
  },
  methods: {
    addClassName: function (index) {
      this.thatnum = index // tarbar图片切换
      // console.log("index-->",index,"thatnum==>",this.thatnum)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap_ {
    height: 50px;
}
.tabBar{
   height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
}
.weui-tabbar__icon{
  height: auto;
  width: 21px;
}
</style>

<template>
  <div class="home">
    <div class="title">宇泰员福</div>

    <cube-slide :loop="slideDate.loop" :auto-play="slideDate.autoPlay" :interval="slideDate.interval" :data="items">
    </cube-slide>

    <div class="guarantee">
      <div class="guarantee-up">
        <img class="guarantee-up-icon"  src="../assets/home/guranteeIcon.png" alt="icon">
        保单服务
        </div>
      <div class="guarantee-down">
        <div class="guarantee-down-child1" @click="myBd">
          <div class="child-text1">我的保单</div>
          <div class="child-text2">新的体验马上来</div>
        </div>
        <div class="guarantee-down-child2">
          <div class="child-text1">保单保全</div>
          <div class="child-text2">安全舒心每一天</div>
        </div>
      </div>
    </div>

    <div class="guarantee payFor">
      <div class="guarantee-up">
        <img class="guarantee-up-icon"  src="../assets/home/guranteeIcon.png" alt="icon">
        理赔中心
        </div>
      <div class="guarantee-down">
        <div class="guarantee-down-child3">
          <div class="child-text1 payFor1">掌上理赔</div>
          <div class="child-text2 payFor2">轻松玩转理赔</div>
          <img class="guarantee-down-icon" src="../assets/home/guarantee3.png" alt="img">
        </div>
        <div class="guarantee-down-child3">
          <div class="child-text1 payFor1">理赔查询</div>
          <div class="child-text2 payFor2">查询我的信息</div>
          <img class="guarantee-down-icon" src="../assets/home/guarantee3.png" alt="img">
        </div>
      </div>
    </div>

    <!-- <div class="tabBar">
      <img src="../assets/home/home.png" @click="change($route,'homeAct')">
      <img src="../assets/home/kefu.png">
      <img src="../assets/home/my.png">
    </div> -->

  <tab-Bar :num="0"></tab-Bar>

  </div>

  
</template>

<script>

export default {
  data () {
    return {
      slideDate: {
        loop: true,
        autoPlay: true,
        interval: 2000
      },
      items: [
        {
          url: '#',
          image: require('../assets/home/banner.png')
        },
        {
          url: '#',
          image: require('../assets/home/banner.png')
        },
        {
          url: '#',
          image: require('../assets/home/banner.png')
        }
      ]
    }
  },
  methods:{
    change(val,e) {
      console.log(val,e)
    },
    myBd() {
      this.$router.push({name:"bdDetail"})
    }
  }
}
</script>
<style scoped lang="scss">
  

 .title{
    font-size: 0.453333rem;
    font-family: Source Han Sans CN;
    font-weight: 600;
    color: #252525;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    margin:30px 100px 17px 100px;
 }

 .guarantee{
   height: 190px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-bottom: 12px solid #F1F1F1;
 }

 .guarantee-up{
   flex:1;
   width:94%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-size: 17px;
   font-weight: bold;
 }

  .guarantee-up-icon{
    height:20px;
    width: 4px;
    margin-right: 30px;
  }

 .guarantee-down{
   flex: 3;
   width: 100%;
   display: flex;
   justify-content: space-around;
 }
.guarantee-down-icon{
    height:61px;
    width: 56px;
    top: 12%;
    position: absolute;
    right: 3%;
}
 .guarantee-down-child1{
  height: 96px;
  width: 173px;
  background: url(../assets/home/guarantee1.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
 }
.guarantee-down-child2{
  height: 96px;
  width: 173px;
  background: url(../assets/home/guarantee2.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.guarantee-down-child3{
 
  position: relative;
  width:170px;
  height:82px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(181,181,181,1);
  border-radius:5px;
}
.child-text1{
  font-size: 15px;
    color: #fff;
    top: 8%;
    position: absolute;
    left: 8%;
}

.child-text2{
    font-size: 8px;
    color: #fff;
    position: absolute;
    top: 33%;
    left: 8%;
}

.payFor{
  border-bottom: 0;
}

.payFor1{
  color: #252525;
  top: 33%;
  left: 13%;
}
.payFor2{
  color: #6E6E6E;
    top: 55%;
    left: 13%;
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
  height: 34px;
  width: 21px;
}


.tabWrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
 
.active p{
  color: #006a3c;
}

</style>
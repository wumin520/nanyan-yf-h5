<template>
  <div class="center">
    <div class="title">个人中心</div>
    <div class="head">
      <!-- <img class="head_1" src="../assets/center/head.png" alt="head"> -->
      <div class="head_2">昵称：我是路人甲</div>
      <div class="head_2 head_3">手机号：13315216545</div>
    </div>

    <div class="list">
      <div @click="forwardTo('/bdList')" class="list_1">
        <!-- <router-link to="/pdList"> -->
          <img class="list_img" src="../assets/center/center2.png" alt="img">
          <div class="list_txt">我的保单</div>
        <!-- </router-link> -->
      </div>
      <!-- <div  class="list_1">
        <img class="list_img" src="../assets/center/center2.png" alt="img">
        <div class="list_txt">常用出险人信息</div>
      </div>
      <div  class="list_1">
        <img class="list_img" src="../assets/center/center3.png" alt="img">
        <div class="list_txt">通知设置</div>
      </div>
      <div  class="list_1">
        <img class="list_img" src="../assets/center/center4.png" alt="img">
        <div class="list_txt">关于我们</div>
      </div> -->
      <div class="list_btn">
        <cube-button class="Btn" @click="exit">退出登录</cube-button>
      </div>
    </div>
  
  <tab-Bar :num="2"></tab-Bar>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods:{
    forwardTo (path) {
      this.$router.push(path)
    },
    exit () {
      this.$router.push({name:'login'})
    }
  }
}
</script>
<style lang="scss" scoped>
 .title{
  margin:30px 100px 17px 100px;
  font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:600;
    color:rgba(37,37,37,1);
    line-height:19px;
 }

.head{
}

.head_1{
  height: 68px;
  border:NaNpx solid rgba(142,142,142,1);
  border-radius:50%;
}

.head_2{
  font-size:13px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(56,56,56,1);
}

.head_3{
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(110,110,110,1);
  line-height:28px;
}

.list{
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    align-items: center;
    margin-top: 100px;
}

.list_1{
  height: 46px;
  display: flex;
  width: 85%;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(211,211,211,0.6);
  position: relative;

  &::after {
    position: absolute;
    top: 18px;
    right: 10px;
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    border-top: 2px solid #eee;
    border-right: 2px solid #eee;
    transform: rotateZ(45deg);
  }
}

.list_img{
  height:12px;
  margin-right: 10px;
}

.list_txt{
  height:15px;
  font-size:15px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(181,181,181,1);
}

.list_btn{
  border: none;
  margin-top: 50px;
}

.Btn{
    margin: 0.693333rem auto 0;
    background: none;
    border-radius: 0.666667rem;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(41,127,255,1);
 }
</style>
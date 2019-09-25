<template>
  <div class="center">
    <div class="title">个人中心</div>
    <div class="head">
      <img class="head_1" src="../assets/center/head.png" alt="head">
      <div class="head_2">我是路人甲</div>
      <div class="head_2 head_3">13315216545</div>
    </div>

    <div class="list">
      <div class="list_1">
        <img class="list_img" src="../assets/center/center1.png" alt="img">
        <div class="list_txt">常用理赔账户</div>
      </div>
      <div  class="list_1">
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
      </div>
      <div class="list_1 list_btn">
        <cube-button class="Btn" @click="addCard">退出登录</cube-button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
 .title{
  margin:30px 152px 17px 151px;
  font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:600;
    color:rgba(37,37,37,1);
    line-height:19px;
 }

.head{
    height: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.head_1{
  height: 68px;
  border:NaNpx solid rgba(142,142,142,1);
  border-radius:50%;
}

.head_2{
  width:68px;
  height:13px;
  font-size:13px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(56,56,56,1);
}

.head_3{
  width:94px;
  height:11px;
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
}

.list_1{
  height: 67px;
  display: flex;
  width: 85%;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(211,211,211,1);
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
}

.Btn{
    margin: 0.693333rem auto 0;
    width: 45%;
    background: none;
    border-radius: 0.666667rem;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(41,127,255,1);
 }
</style>
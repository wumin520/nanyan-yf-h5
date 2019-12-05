<template>
  <div class="center">
    <div class="title">常用出险人</div>

    <div class="box">
        <div class="box1">
            <div class="text1">用户名称：<span class="text2">路人甲</span></div>
            <div class="text1">用户账号：<span class="text2">12121212112</span></div>
        </div>
        <div  class="box2">加入时间：1999-8-8</div>
    </div>

    <div class="box">
        <div class="box1">
            <div class="text1">用户名称：<span class="text2">路人甲</span></div>
            <div class="text1">用户账号：<span class="text2">12121212112</span></div>
        </div>
        <div  class="box2">加入时间：1999-8-8</div>
    </div>

    <div class="box">
        <div class="box1">
            <div class="text1">用户名称：<span class="text2">路人甲</span></div>
            <div class="text1">用户账号：<span class="text2">12121212112</span></div>
        </div>
        <div  class="box2">加入时间：1999-8-8</div>
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
  margin:30px 100px 17px 100px;
  font-size:18px;
    font-family:PingFang SC;
    font-weight:600;
    color:rgba(37,37,37,1);
    line-height:19px;
 }

 .box{
     width:350px;
    height:80px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(153,153,153,0.39);
    border-radius:10px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
 }

.box1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:2;
    align-items: center;
}

.box2{
    width: 95%;
    height: 0.32rem;
    flex:1;
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(110,110,110,1);
    display: flex;
    justify-content: flex-end;
}

.text1{
    width: 90%;
    height: 0.373333rem;
    font-size: 0.373333rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(110,110,110,1);
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>

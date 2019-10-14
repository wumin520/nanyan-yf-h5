<template>
  <div class="verify">
    <div class="title">手机验证</div>
    <div class="verify-input">
        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <input type="text" class="input-2" name="" id="" placeholder="输入手机号">
            <div class="input-3 ">
            <img class="input-direct" src="../assets/verify/verify2.png">
            </div>
        </div>
        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <input type="text" class="input-2" name="" id="" placeholder="验证码">
            <div class="input-3">获取验证码</div>
        </div>   
    </div>

    <cube-button class="verifyBtn">下一步</cube-button>

    <div class="help">收不到短信？ </div>
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
  font-size: 17px;
  font-family:Source Han Sans CN;
  font-weight:600;
  color:rgba(37,37,37,1);
 }

  .verify-input{
      height: 150px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

 .input{
     font-size: 16px;
     height: 40px;
     width: 85%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     border-bottom: 1px solid #D3D3D3;
 }

 .input-1{
    margin-right: 12px;
    width:11px;
    height:17px;
 }

 .input-2{
    height: 32px;
    width: 250px;
    outline: none;
 }

.input-3{
     height: 16px;
     width: 100px;
    display: flex;
    justify-content: flex-end;
 }

 .input-direct{
     width: 12px;
 }

 .verifyBtn{
    font-size: 16px;
    margin: 0 auto;
    width: 85%;
    background: #297FFF;
    border-radius: 25px;
 }

 .help{
    color: #297FFF;
    margin: 0 auto;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
 }
</style>
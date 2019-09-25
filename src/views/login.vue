<template>
  <div class="login">
    <div class="logo">LOGO</div>
    <div class="login_form">
        <cube-input class="logStyle" :placeholder="placeholder1"></cube-input>
        <cube-input class="logStyle" :placeholder="placeholder2"></cube-input>
        <cube-button class="Btn">立即登录</cube-button>
        <div class="logStyle1">
            <div class="logTxt">忘记密码？</div>
            <div class="logTxt">立即注册 </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        placeholder1:'登录',
        placeholder2:'密码'
    }
  }
}
</script>
<style scoped>
 .logo{
     margin: 100px auto;
    font-size:52px;
    font-family:Myriad Pro;
    font-weight:400;
    color:rgba(41,127,255,1);
    text-shadow:0px 1px 2px rgba(177,176,176,0.36);
 }

 .login_form{
    display: flex;
    flex-direction: column;
    height: 285px;
    justify-content: space-between;
    align-items: center;
 }

 .logStyle{
    width:305px;
    height:36px;
    border:1px solid rgba(181,181,181,1);
    border-radius:18px;
    background: none;
    display: flex;
 }

 .logStyle1{
    width:305px;
    display: flex;
    height: 50px;
    justify-content: space-between;
 }

 .logTxt{
    width:100px;
    height:14px;
    font-size:15px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(41,127,255,1);
    line-height:15px;
 }

 .Btn{
    font-size: 16px;
    width:305px;
    background: #297FFF;
    border-radius: 25px;
 }

 .cube-input_active{
     border-color: #297FFF;
 }

 .cube-input::after{
     border: none;
 }
</style>
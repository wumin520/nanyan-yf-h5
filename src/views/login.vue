<template>
  <div class="login">
    <div class="logo">LOGO</div>
    <div class="login_form">
        <cube-input class="logStyle" :placeholder="placeholder1" v-model="form.userName"></cube-input>
        <cube-input class="logStyle" :placeholder="placeholder2" v-model="form.passWord"></cube-input>
        <cube-button class="Btn" @click="login">立即登录</cube-button>
        <div class="logStyle1">
            <div class="logTxt">忘记密码？</div>
            <div class="logTxt">立即注册 </div>
        </div>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api"
import { setLogined, cacheUserInfo } from "@/utils/authorized";

export default {
  data () {
    return {
        form:{
          userName:'',
          passWord: ''
        },
        placeholder1:'请输入省份证、手机号',
        placeholder2:'请输入密码'
    }
  },
  methods:{
    login() {
      api.login(this.form).then(res => {
        cacheUserInfo(res.data.content);
        setLogined(1);
        
        if(res.data.returnCode !== "0000"){
          this.$createToast({
            type: 'correct',
            txt:  res.data.returnMsg,
            time: 1000
          }).show()
        } else {
          this.$createToast({
            txt: '登录成功,准备跳转...',
            time: 1000,
            onTimeout: () => {
              this.$router.push({name:'home'})
            }
          }).show()
        }
      })
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
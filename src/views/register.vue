<template>

  <div class="verify">
    <!-- <div class="title">身份认证</div> -->
    <span class="welcome_">欢迎注册宇泰员福</span>

    <div class="verify-input">
        <div class="input">
            <div class="label_">姓名：</div>
            <!-- <img class="input-1" src="../assets/center/center1.png"> -->
            <input v-model="form.name" type="text" style="padding-left:27px;" class="input-2" name="" id="" placeholder="姓名">

        </div>
        <div class="input">
            <div class="label_">证件类型：</div>
            <!-- <img class="input-1" src="../assets/center/center1.png"> -->
            <!-- <input type="text" class="input-2" name="" id="" placeholder="证件类型"> -->
            <cube-select
              v-model="idTypeValue"
              :options="idTypeOptions"
              :placeholder="idTypePlaceholder"
              @change="idTypeChange">
            </cube-select>
        </div>
        <div class="input">
            <!-- <img class="input-1" src="../assets/account/account2.png"> -->
            <div class="label_">证件号码：</div>
            <input v-model="form.idNumber" type="text" class="input-2" name="" id="" placeholder="证件号码">
        </div>
        <div class="input">
            <!-- <img class="input-1" src="../assets/verify/verify1.png"> -->
            <div class="label_">出生日期：</div>
            <input v-model="form.birthday" type="text" class="input-2" name="" id="" placeholder="生日" @click="showDatePicker">

        </div>

        <div class="input">
            <!-- <img class="input-1" src="../assets/account/account3.png"> -->
            <div class="label_">手机号码：</div>
            <input v-model="form.phone" type="text" class="input-2" name="" id="" placeholder="手机号">
        </div>

        <div class="input">
            <!-- <img class="input-1" src="../assets/verify/verify1.png"> -->
            <div class="label_">验证码：</div>
            <input v-model="form.verificationCode" style="width: 41%;" type="text" class="input-2" name="" id="" placeholder="验证码">
            <div class="input-3 input-code" @click="getCode">{{codeMsg}}</div>
        </div>
    </div>

    <cube-button class="verifyBtn" @click="regist" :disabled="codeDisabled">提交</cube-button>

    <div class="bottom_">
      <span class="help" @click="jumpLogin">已有账号，去登录</span>
    </div>

  </div>

</template>

<script>
import api from '@/utils/api'
export default {
  data () {
    return {
      codeDisabled: false,
      countdown: 60,
      timer: null,
      codeMsg: '获取验证码',
      idTypeValue: '证件类型',
      idTypeOptions: ['身份证', '其他'],
      idTypePlaceholder: '证件类型',
      form: {
        name: '',
        idType: '',
        idNumber: '',
        birthday: '',
        phone: '',
        verificationCode: ''
      }
    }
  },
  methods: {
    tipInfo(msg){
              this.$createToast({
                  type: 'correct',
                  txt: msg,
                  time: 1000
                }).show()
    },
    jumpLogin () {
      this.$router.push({ name: 'login' })
    },
    regist () {
     if(this.form.name == ""){
        this.tipInfo("请输入姓名")
        return false
     } else if (this.form.idType == ""){
       this.tipInfo("请输入证件类型") 
       return false
     } else if (this.form.idNumber == ""){
       this.tipInfo("请输入证件号码")
       return false
     } else if (this.form.birthday == ""){
       this.tipInfo("请输入生日")
       return false
     } else if (this.form.verificationCode == ""){
       this.tipInfo("请输入验证码")
       return false
     }

      var myPromise = new Promise((result,reject) => {
          api.validate({verificationCode:this.form.verificationCode,phone:this.form.phone}).then(res => {
             if (res.data.returnCode !== '0000') {
                this.tipInfo(res.data.returnMsg)
                rejest()
              } else {  
                result()
              }
          })
      })
      
      myPromise.then(() => {
          api.binding(this.form).then(res => {
          if (res.data.returnCode !== '0000') {
            this.$createToast({
              type: 'correct',
              txt: res.data.returnMsg,
              time: 1000
            }).show()
          } else {
            this.$createToast({
              txt: '注册成功',
              time: 1000,
              onTimeout: () => {
                this.$router.push({ name: 'login' })
              }
            }).show()
          }
        })
      })
      

    },
    getCode () {
      let params = {
        type: '1',
        phone: this.form.phone
      }

      if (!this.timer) {
         if(!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.form.phone)){
        this.$createToast({
                  type: 'correct',
                  txt: "手机格式不正确",
                  time: 1000
                }).show()
          return false
       }

        api.getVerificationCode(params).then(res => {
          // console.log(res)
          if (res.data.returnCode !== '0000') {
            this.$createToast({
              type: 'correct',
              txt: res.data.returnMsg,
              time: 1000
            }).show()
          }
        }).catch(err => {
              clearInterval(this.timer)
              this.codeMsg = '获取验证码'
              this.countdown = 60
              this.timer = null
              this.codeDisabled = false
        })

        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--
            if (this.countdown !== 0) {
              this.codeMsg = '重新发送(' + this.countdown + ')'
            } else {
              clearInterval(this.timer)
              this.codeMsg = '获取验证码'
              this.countdown = 60
              this.timer = null
              this.codeDisabled = false
            }
          }
        }, 1000)
      }
    },
    idTypeChange (value, index, text) {
      console.log('idTypeChange', value, index, text)
      this.form.idType = index + 1
    },
    showDatePicker () {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: '请选择时间',
          min: new Date(1949, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker.show()
    },
    selectHandle (date, selectedVal, selectedText) {
      console.log(selectedText.join('-'))
      this.form.birthday = selectedText.join('-')
    },
    cancelHandle () {
      // this.$createToast({
      //   type: 'correct',
      //   txt: 'Picker canceled',
      //   time: 1000
      // }).show()
      console.log('用户取消')
    }
  }
}
</script>
<style lang="scss" scoped>
.welcome_{
  font-size:22px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  margin-top: 40px;
  position: absolute; 
  left: 7%;
  top: 0;
}
.label_{
  font-size:13px;
  font-family:PingFang SC;
  font-weight:600;
  color:rgba(51,51,51,1);
}
.cube-select{
  width:78%;
  text-align: left;
  padding: 0;
  background: none;
}
.verify{
  margin-top: 70px;
}
i{
  display: none;
}
.cube-select::after{
  border:none;
}
.cube-select-icon{
  display:none;
}
.input-2::-webkit-input-placeholder {
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(204,204,204,1);
    font-size: 13px;
    padding-left: 20px; 
}
.input:-moz-placeholder {
    color: rgba(181,181,181,1);
}
.input:-ms-input-placeholder {
    color: rgba(181,181,181,1);
}

 .title{
  margin:30px 100px 17px 100px;
  font-size: 17px;
  font-family:Microsoft YaHei,Source Han Sans CN;
  font-weight:600;
  color:rgba(37,37,37,1);
 }

  .verifyCode{
    width:100px;
    height:30px;
  }

  .verify-input{
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    font-family: Microsoft YaHei;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

 .input{
     font-size: 16px;
     padding: 15px 0px 5px;
     height: 40px;
     width: 85%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     border-bottom: 1px solid #f0f0f0;
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
    background: none;
 }

.input-3{
     height: 16px;
     width: 100px;
    display: flex;
    justify-content: flex-end;
 }

 .input-code{
     height: 40px;
     width: 100px;
     color:#297FFF;
     font-size: 14px;
     display: flex;
     justify-content: flex-end;
     align-items:center;
 }

 .input-direct{
     width: 12px;
 }

 .verifyBtn{
    font-size: 15px;
    padding: 0;
    margin: 0 auto;
    height:42px;
    width: 85%;
    background: #2989FF;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
 }
.bottom_ {
  text-align: right;
  font-size: 12px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  width: 85%;
 .help{
   font-family:PingFang SC;
    font-weight:400;
    color:rgba(41,127,255,1);
 }
}
</style>

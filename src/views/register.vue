<template>
  <div class="verify">
    <div class="title">手机验证</div>
    <div class="verify-input">
        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <input v-model="form.name" type="text" class="input-2" name="" id="" placeholder="姓名">
            
        </div>
        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <!-- <input type="text" class="input-2" name="" id="" placeholder="证件类型"> -->
            <cube-select
              v-model="idTypeValue"
              :options="idTypeOptions"
              :placeholder="idTypePlaceholder"
              @change="idTypeChange">
            </cube-select>
        </div>   
        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <input v-model="form.idNumber" type="text" class="input-2" name="" id="" placeholder="证件号码">
        </div>
        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <cube-select
              v-model="sexValue"
              :options="sexOptions"
              :placeholder="sexPlaceholder"
              @change="sexChange">
            </cube-select>
            
        </div>   
        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <input v-model="form.birthday" type="text" class="input-2" name="" id="" placeholder="生日" @click="showDatePicker">
            
        </div>

        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <input v-model="form.phone" type="text" class="input-2" name="" id="" placeholder="手机号">
        </div>

        <div class="input">
            <img class="input-1" src="../assets/verify/verify1.png">
            <input v-model="form.verifyCode" style="width: 41%;" type="text" class="input-2" name="" id="" placeholder="验证码">
            <div class="input-3 input-code" @click="getCode">{{codeMsg}}</div>
        </div>
    </div>

    <cube-button class="verifyBtn" @click="regist" :disabled="codeDisabled">立即注册</cube-button>

    <div class="help" @click="jumpLogin">已有账号 立即登录</div>


  </div>

  
</template>

<script>
import api from "@/utils/api"
export default {
  data () {
    return {
      codeDisabled: false,
      countdown: 60,
      timer: null,
      codeMsg: "获取验证码",
      idTypeValue: "证件类型",
      idTypeOptions: ["省份证","其他"],
      idTypePlaceholder: "证件类型",
      sexOptions: ["男","女"],
      sexPlaceholder: "性别",
      sexValue:"",
      form:{
        name:"",
        idType:"",
        idNumber:"",
        sex: "",
        birthday:"",
        phone: '',
        verifyCode: ''
      }
    }
  },
  methods:{
    jumpLogin() {
      this.$router.push({name:'login'})
    },
    regist () {

      api.binding(this.form).then(res => {
        if(res.data.returnCode !== "0000"){
          this.$createToast({
            type: 'correct',
            txt:  res.data.returnMsg,
            time: 1000
          }).show()
        } else {
          this.$createToast({
            txt: '注册成功',
            time: 1000,
            onTimeout: () => {
              this.$router.push({name:'login'})
            }
          }).show()
        }
      })
    },
    getCode() {
      let params = {
        type: "1",
        phone: this.form.phone
      }

      if (!this.timer) {
        api.getVerificationCode(params).then(res => {
                  // console.log(res)
                 if(res.data.returnCode !== "0000"){
                  this.$createToast({
                    type: 'correct',
                     txt:  res.data.returnMsg,
                    time: 1000
                }).show()
              }
        })

        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--;
            if (this.countdown !== 0) {
              this.codeMsg = "重新发送(" + this.countdown + ")";
              
            } else {
            clearInterval(this.timer);
            this.codeMsg = "获取验证码";
            this.countdown = 60;
            this.timer = null;
            this.codeDisabled = false;
            }
          }
        }, 1000)
      }
      
     
    },
    idTypeChange(value, index, text) {
      console.log('idTypeChange', value, index, text)
      this.form.idType = index+1
    },
    sexChange(value, index, text) {
      console.log('sexChange', value, index, text)

    },
     showDatePicker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker.show()
    },
     selectHandle(date, selectedVal, selectedText) {
      console.log(selectedText.join('-'))
       this.form.birthday = selectedText.join('-')
    },
     cancelHandle() {
      // this.$createToast({
      //   type: 'correct',
      //   txt: 'Picker canceled',
      //   time: 1000
      // }).show()
      console.log("用户取消")
    }
  }
}
</script>
<style scoped>
.cube-select{
  width:78%;
  text-align: left;
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
    color: #ccc;
    font-size: 14px;
    padding-left:9px;
    font-weight: 400;
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
     padding: 15px 10px 5px;
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
    font-size: 16px;
    padding: 0;
    margin: 0 auto;
    height:42px;
    width: 85%;
    background: #297FFF;
    border-radius: 25px;
    font-family:Microsoft YaHei;
    font-weight:500;
    color:rgba(255,255,255,1);
 }

 .help{
    color: #297FFF;
    margin: 0 auto;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
 }
</style>
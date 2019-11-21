<template>
  <div class="login">
    <img src="../assets/login.png" alt="logo" class="logo" />
    <div class="login_form">
      <div class="input_">
        <img class="img_" src="../assets/login1.png" alt="img" /><cube-input
          class="logStyle"
          :placeholder="placeholder1"
          v-model="form.loginName"
        ></cube-input>
      </div>
      <div class="input_">
        <img class="img_" src="../assets/login2.png" alt="img" /><cube-input
          type="passWord"
          class="logStyle"
          :placeholder="placeholder2"
          v-model="form.passWord"
        ></cube-input>
      </div>
      <cube-button class="Btn" @click="login">立即登录</cube-button>
      <div class="logStyle1">
        <!-- <div class="logTxt"><router-link to="/">返回首页</router-link></div> -->
        <div class="logTxt"><div>忘记密码?</div><router-link to="/register">立即注册</router-link> </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
import { setLogined, cacheUserInfo } from "@/utils/authorized";

export default {
  data() {
    return {
      form: {
        loginName: "",
        passWord: ""
      },
      placeholder1: "请输入账号",
      placeholder2: "请输入密码"
    };
  },
  methods: {
    login() {
      api.login(this.form).then(res => {
        cacheUserInfo(res.data.content);
        setLogined(1);

        if (res.data.returnCode !== "0000") {
          this.$createToast({
            type: "correct",
            txt: res.data.returnMsg,
            time: 1000
          }).show();
        } else {
          this.$createToast({
            txt: "登录成功,准备跳转...",
            time: 1000,
            onTimeout: () => {
              this.$router.push({ name: "home" });
            }
          }).show();
        }
      });
    }
  }
};
</script>
<style scoped>
.logo {
  height: 80px;
  width: auto;
  margin: 100px auto;
  font-size: 52px;
  font-family: Myriad Pro;
  font-weight: 400;
  color: rgba(41, 127, 255, 1);
  text-shadow: 0px 1px 2px rgba(177, 176, 176, 0.36);
}

.input_{
  width: 305px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding: 5px 0;
}

.img_{
  height: 13px;
  width: auto;
}

.login_form {
  display: flex;
  flex-direction: column;
  height: 285px;
  justify-content: space-between;
  align-items: center;
}

.logStyle {
  font-size:13px;
  font-family:PingFang SC;
  font-weight:600;
  color:rgba(204,204,204,1);
  height: 36px;
  border-radius: 18px;
  background: none;
  display: flex;
}

.logStyle1 {
  width: 305px;
  display: flex;
  height: 50px;
  justify-content: space-around;
  font-family:PingFang SC;
}

.logTxt {
  height: 0.373333rem;
    font-size: 0.4rem;
    line-height: 0.4rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153,153,153,1);
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.Btn {
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  font-size: 15px;
  width: 305px;
  height: 45px;
  background: #297fff;
  margin: 0px 30px !important;
}
a {
  color: #297fff;
}
.cube-input_active {
  border-color: #297fff;
}

.cube-input::after {
  border: none;
}
</style>

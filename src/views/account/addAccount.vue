<template>
      <div class="addCard-input">
        <div class="input">
            <img class="input-1" src="../../assets/account/account1.png">
            <input type="text" class="input-2" name="" id="" placeholder="持卡人">
            <div class="input-3">持卡人</div>
        </div>
        <div class="input">
            <img class="input-1" src="../../assets/account/account2.png">
            <input type="text" class="input-2" name="" id="" placeholder="身份证号码">
            <div class="input-3">1212***121</div>
        </div>
        <div class="input">
            <img class="input-1" src="../../assets/account/account3.png">
            <input type="text" class="input-2" name="" id="" placeholder="银行卡号">
            <div class="input-3">1212***121</div>
        </div>
        <div class="input">
            <img class="input-1" src="../../assets/account/account2.png">
            <input type="text" class="input-2" name="" id="" placeholder="开户行">
            <div class="input-3">请选择开户行</div>
        </div>
        <cube-button class="Btn">更改</cube-button>
     </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 input::-webkit-input-placeholder{
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(181,181,181,1);
 }
 .addCard-input{
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

 .input{
    color:#B5B5B5;
     font-size: 16px;
     height: 50px;
     width: 85%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     border-bottom: 1px solid #D3D3D3;
 }

 .input-1{
     height: 16px;
     width: 5%;
     margin-right: 12px;
 }

 .input-2{
    height: 32px;
    width: 54%;
    outline: none;
 }

.input-3{
     height: 16px;
     width: 32%;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(181,181,181,1);
    display: flex;
    justify-content: flex-end;
 }

  .Btn{
    font-size: 16px;
    margin: 26px auto 0;
    width: 45%;
    background: #297FFF;
    border-radius: 25px;
 }
</style>

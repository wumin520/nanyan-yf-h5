<template>
  <div class="account">
    <div class="title">理赔账户</div>

    <div class="card">
        <div class="card-up">
            <div class="card-up-left">
                <div class="circle"></div>
                <div>
                    <div class="txt">xx银行</div>
                    <div class="txt txt1">储蓄卡</div>
                </div>
            </div>
            <div class="txt">
                ****     1756
            </div>
        </div>
        <div  class="txt card-down">每日支付限额50000元</div>
    </div>

    <router-view></router-view>

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

 .card{
    height: 178px;
    width: 350px;
    margin: 0 auto;
    background:linear-gradient(270deg,rgba(254,82,99,1),rgba(254,116,102,1));
    border-radius:10px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 6px 2px #ccc;
 }

 .card-up{
    display: flex;
    flex: 1;
    justify-content: space-between;
 }

 .card-up-left{
     flex:1;
     color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
 }

 .card-down{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 12px;
    font-weight: normal;
    margin: 0 10px 10px 0;
 }

 .txt{
     font-size:16px;
     font-weight: 600;
     font-family:Microsoft YaHei;
     flex:1;
     color: #fff;
     display: flex;
    justify-content: center;
    align-items: center;
 }

 .txt1{
     font-size: 12px;
     font-weight: normal;
     margin-top:4px;
 }

 .circle{
     height:40px;
     width: 40px;
     border-radius: 50%;
     background: #FFFFFF;
     margin-right: 16px;
 }

</style>

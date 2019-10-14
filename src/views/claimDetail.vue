<template>
  <div class="claimDetail">
    <div class="title">理赔明细</div>
    <div class="detail">
        <div class="text">赔案号：6911015620180033037</div>
        <div class="text">保单号：2019-02-28</div>
        <div class="text">提交日期：2020-01-28</div>
        <div class="text">受理日期：2020-01-28</div>
        <div class="text">结案日期：2020-01-28</div>
        <div class="text">申请金额：180.00</div>
        <div class="text">赔付金额：180.00</div>
        <div class="text">出险人：不适用</div>
        <div class="text">影像资料：<span class="text2">查看影像</span></div>
        <div class="text">理赔通知：<span class="text2">查看通知</span></div>
        <div class="text">备注：1873978931</div>
        <div class="text"><span  class="text3">|</span>收款银行卡</div>
        <div class="text">招商银行xxxxxxxxxxxxxx</div>
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
  font-size: 17px;
  font-family:Source Han Sans CN;
  font-weight:600;
  color:rgba(37,37,37,1);
  
 }

 .detail{
     width:100%;
 }

.text{
    font-size:17px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(110,110,110,1);
    height: 45px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.text2{
    margin: 0 15px;
    font-size:17px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:#297FFF;
    line-height:25px;
}

.text3{
    margin-right: 15px;
    font-size:17px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:#297FFF;
    line-height:25px;
    font-weight: bold;
}
</style>
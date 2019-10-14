<template>
  <div class="claimDetail">
    <div class="title">理赔明细</div>
    <div class="detail">
        <div class="text" v-for="(item,index) in txtList" :key="index">{{item}}</div>
        <cube-button class="Btn">查看福利详情</cube-button>
        <cube-button class="Btn Btn1">申请批改</cube-button>

    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      txtList:[
        '保单号：6911015620180033037',
        '保单起期：2019-02-28',
        '保单止期：2020-01-28',
        '产品：太平-无忧海外计划C',
        '保单状态：投保成功',
        '保费：180.00',
        '保单报备：',
        '押金状态：不适用',
        '投保人：路人甲',
         '证件号码：无',
        '投保人电话：1873978931',
        '投保人邮箱：1423239431@qq.com',
        '被保人：李康',
         '证件号码：342314198201170934',
        '出生日期：1982-01-17',
        '性别：女'
      ]
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

.Btn{
    font-size: 16px;
    width:305px;
    background: #297FFF;
    border-radius: 25px;
    margin: 20px auto;
    padding: 12px;
 }

 .Btn1{
     background: #fff;
    color: #297FFF;
    border: #297FFF 1px solid;
 }
</style>
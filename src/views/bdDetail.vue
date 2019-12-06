<template>
  <div class="page_">
    <!-- <div class="title">保单详情</div> -->
    <div class="detail">
      <div class="up_">
        <div class="up_txt">总保额</div>
        <div class="up_box">
          <div class="up_money">{{detailInfo.coverage}}</div>
          <div class="up_time">保险期间：{{detailInfo.startDate}} —— {{detailInfo.endDate}}</div>
        </div>
      </div>
        <!-- <div class="text">保单号：{{detailInfo.policyNo}}</div>
        <div class="text">保单起期：{{detailInfo.startDate}}</div>
        <div class="text">保单止期：{{detailInfo.endDate}}</div>
        <div class="text">保障方案：</div> -->
        <ul class="plan_wrap_">
          <li :key="item.id" v-for="item in detailInfo.planList">
            <div class="top_"><span>{{item.planName}}</span><label class="right_">{{item.coverage}}元</label></div>
            <div v-if="item.deductibleExcess || item.lossRation" class="middle_">免赔额{{item.deductibleExcess}}元 赔付比率{{item.lossRation}}</div>
          </li>
        </ul>
        <!-- <cube-button class="Btn">查看福利详情</cube-button> -->
        <!-- <cube-button class="Btn Btn1">申请批改</cube-button> -->
    </div>

  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  data () {
    return {
      detailInfo: {
        // startDate:'2020-10-10',
        // endDate:'2020-10-10',
        // planList:[{
        //   planName: '门急诊',
        //   coverage: '1.0万',
        //   deductibleExcess:'1000',
        //   lossRation:'100%'
        // }
        // ]
      }
    }
  },
  mounted () {
    const { params } = this.$route
    this.fetchData(params)
  },
  methods: {
    fetchData (params) {
      api.getPolicyById({
        id: params.id
      }).then(res => res.data).then(data => {
        const {
          coverage,
          policyNo,
          startDate,
          endDate,
          planList
          
        } = data.content
        this.detailInfo = {
          coverage,
          policyNo,
          startDate,
          endDate,
          planList
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .up_{
      font-family:Source Han Sans CN;
      height:90%;
      height: 154px;
      background:rgba(255,255,255,1);
      border-radius:10px;
      margin: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    .up_txt{
      height: 30%;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:13px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(153,153,153,1);
      border-bottom: 1px solid #f0f0f0;
    }
    .up_box{
      height: 70%;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .up_money{
        width:157px;
        height:68px;
        font-size:42px;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(51,118,255,1);
      }
      .up_time{
        font-size:13px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
  }

  .page_ {
    background: #f8f8f8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .plan_wrap_ {
    li {
      height: 68px;
      width: 81%;
      margin: 10px auto;
      position: relative;
      text-align: left;
      padding: 15px;
      background:rgba(255,255,255,1);
      border-radius:10px;
      font-family:Source Han Sans CN;
      font-weight:600;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .top_ {
        font-size:15px;
        font-family:PingFang SC;
        font-weight:600;
        color:rgba(51,51,51,1);
        margin-bottom:22px;

      }

      .right_ {
        position: absolute;
        top: 24px;
        right: 24px;
        font-size:15px;
        font-family:PingFang SC;
        font-weight:600;
        color:rgba(51,51,51,1);
      }
      .middle_ {
        font-size:11px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
  }
 .title{
  margin:30px 100px 17px 100px;
  font-size: 17px;
  font-family:PingFang SC;
  font-weight:600;
  color:rgba(37,37,37,1);
 }

 .detail{
    width:100%;
 }
.text{
    font-size:13px;
    font-family:PingFang SC;
    font-weight:400;
    color: #333333;
    height: 28px;
    margin: 0 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

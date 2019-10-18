<template>
  <div class="page_">
    <div class="title">保单详情</div>
    <div class="detail">
        <div class="text">保单号：{{detailInfo.policyNo}}</div>
        <div class="text">保单起期：{{detailInfo.startDate}}</div>
        <div class="text">保单止期：{{detailInfo.endDate}}</div>
        <div class="text">保障方案：</div>
        <ul class="plan_wrap_">
          <li :key="item.id" v-for="item in detailInfo.planList">
            <div class="top_"><span>{{item.planName}}</span><label class="right_">{{item.coverage}}元</label></div>
            <div v-if="item.deductibleExcess || item.lossRation" class="middle_">免赔额{{item.deductibleExcess}}元 赔付比率{{item.lossRation}}%</div>
          </li>
        </ul>
        <!-- <cube-button class="Btn">查看福利详情</cube-button> -->
        <!-- <cube-button class="Btn Btn1">申请批改</cube-button> -->
    </div>

  </div>
</template>

<script>
import api from '@/utils/api';

export default {
  data () {
    return {
      detailInfo: {}
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
          policyNo,
          startDate,
          endDate,
          planList
        } = data.content
        this.detailInfo = {
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
  .page_ {
    // background: #f8f8f8;
  }
  .plan_wrap_ {
    padding: 0 24px;
    li {
      position: relative;
      text-align: left;
      padding: 12px;
      border-top: 1px solid rgba(110,110,110,0.1);

      .top_ {
        font-size: 14px;
        color: #3a3a3a;
        font-family: PingFangSC-Regular;
        margin-bottom: 8px;
      }

      .right_ {
        position: absolute;
        top: 12px;
        right: 24px;
      }
      .middle_ {
        font-size: 12px;
        color: rgba(110,110,110,1);
      }
    }
  }
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
    font-size:13px;
    font-family:Source Han Sans CN;
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
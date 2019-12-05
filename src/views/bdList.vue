<template>
  <div class="center">
    <!-- <div class="title">我的保单</div> -->
    <div class="search_">
      <input type="text" class="input_" placeholder="请输入产品名称">
      <img class="img_" src="../assets/search.png" alt="img">
    </div>
    
    <div @click="forwardTo(item)" :key="item.id" v-for="item in list" class="box">
            <div  class="box1">
                <!-- <div class="text1">保单号：<span class="text2">{{item.policyNo}}</span></div> -->
                <div class="text1"><span class="text2">{{item.productName}}</span></div>
            </div>
            <div  class="box2">保险期间：{{item.startDate}} —— {{item.endDate}}</div>
    </div>
    <!-- <div @click="forwardTo(item)" :key="item.id" v-for="item in list" class="box">
            <div  class="box1">
                <div class="text1">保单号：<span class="text2">{{item.policyNo}}</span></div>
                <div class="text1">产品名称：<span class="text2">{{item.productName}}</span></div>
            </div>
            <div  class="box2">加入时间：{{item.startDate}}</div>
    </div> -->
    <div v-if="!list" class="empty_">暂无保单数据</div>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  data () {
    return {
      list: [
      //   {
      //   productName:'平安航空意外险',
      //   startDate: '2019-10-09',
      //   endDate: '2019-10-09',
      // }
      ]
    }
  },
  mounted () {
    api.getPolicyListByWechatUserId().then(res => res.data).then(data => {
      this.list = data.content
    })
  },
  methods: {
    forwardTo (record) {
      this.$router.push(`/bdDetail/${record.id}`)
    }
  }
}
</script>
<style scoped lang="scss">

.center{
  background:rgba(245,245,245,1);
  height: 100vh;
}
.search_{
  position: relative;
  width:336px;
  height:40px;
  margin: 0px auto;
  padding-top: 20px;
}

.input_{
  width:100%;
  height:100%;
  font-size:12px;
  font-family:PingFang SC;
  font-weight:400;
  background:rgba(255,255,255,1);
  border-radius:10px;
}

.input_::placeholder{
  padding-left: 20px;
  font-size:12px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(204,204,204,1);
}
.img_{
  height: 12px;
  position: absolute;
  top: 65%;
  right: 5%;
}


.empty_ {
    line-height: 260px;
    font-size: 16px;
    color: #ccc;
}
 .title{
    margin:30px 100px 17px 100px;
    font-size:18px;
    font-family:PingFang SC;
    font-weight:600;
    color:rgba(37,37,37,1);
    line-height:19px;
 }

 .box{
   position: relative;
    width:336px;
    height:80px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(153,153,153,0.39);
    border-radius:10px;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    &::after {
      position: absolute;
      top: 35px;
      right: 20px;
      display: block;
      content: '';
      width: 10px;
      height: 10px;
      border-top: 2px solid rgba(204,204,204,1);
      border-right: 2px solid rgba(204,204,204,1);
      transform: rotateZ(45deg);
  }
 }

.box1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:2;
    align-items: center;
    margin-top: 8px;
}

.box2{
    width: 95%;
    height: 0.32rem;
    flex:1;
    font-size:11px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);  
    display: flex;
    justify-content: flex-start;
    padding-left: 5%;
}

.text1{
    width: 90%;
    height: 0.373333rem;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: bold;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.text2{
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: bold;
    color:rgba(51,51,51,1);
}
</style>

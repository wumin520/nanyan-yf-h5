<template>
  <div class="center">
    <div class="title">我的保单</div>

    <div @click="forwardTo(item)" :key="item.id" v-for="item in list" class="box">
        <!-- <router-link :to="`/bdDetail/${item.id}`"> -->
            <div  class="box1">
                <div class="text1">保单号：<span class="text2">{{item.policyNo}}</span></div>
                <div class="text1">产品名称：<span class="text2">{{item.productName}}</span></div>
            </div>
            <div  class="box2">加入时间：{{item.startDate}}</div>
        <!-- </router-link> -->
    </div>
    <div v-if="!list" class="empty_">暂无保单数据</div>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  data () {
    return {
      list: []
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
<style scoped>
.empty_ {
    line-height: 260px;
    font-size: 16px;
    color: #ccc;
}
 .title{
  margin:30px 100px 17px 100px;
  font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:600;
    color:rgba(37,37,37,1);
    line-height:19px;
 }

 .box{
     width:350px;
    height:80px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(153,153,153,0.39);
    border-radius:10px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
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
    font-size: 0.32rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(110,110,110,1);
    display: flex;
    justify-content: flex-end;
}

.text1{
    width: 90%;
    height: 0.373333rem;
    font-size: 0.373333rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(110,110,110,1);
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>

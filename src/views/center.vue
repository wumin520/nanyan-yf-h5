<template>
  <div class="center_">
    <!-- <div class="title">个人中心</div> -->
    <div class="head">
      <div class="head_user">
        <img class="head_1" src="../assets/center/head.png" alt="head">
        <div class="right_">
          <div class="user_">
            <div class="head_2 head_3">{{userInfo.name || '骆聪颖'}}</div>
           <div class="head_2">{{userInfo.phone || '18310427777'}}</div>
          </div>
          <img src="../assets/center/arrow.png" alt="img" class="arrow_">
        </div>
      
      </div>
    </div>

    <div class="list">
      <div v-for="item in nav" :key="item.id" @click="forwardTo(item.id,'/bdList')" class="list_child">
          <img class="list_img" :src="item.img" alt="img">
          <div class="list_txt">{{item.txt}}</div>
      </div>
      
      <div style="display: none;" class="list_btn">
        <cube-button class="Btn" @click="exit">退出登录</cube-button>
      </div>
    </div>

  <tab-Bar :num="1"></tab-Bar>
  </div>
</template>

<script>
import api from '@/utils/api';
import { getUserInfo } from '@/utils/authorized';
export default {
  data () {
    return {
      userInfo: {},
       nav:[
        {
          id: '1',
          img:require('../assets/center/center1.png'),
          txt:'我的保单'
        },
        {
          id: '2',
          img:require('../assets/center/center2.png'),
          txt:'我的体检'
        },
        // {
        //   id: '3',
        //   img:require('../assets/center/center3.png'),
        //   txt:'掌上理赔'
        // },
        // {
        //   id: '4',
        //   img:require('../assets/center/center4.png'),
        //   txt:'理赔查询'
        // }
      ]
    }
  },
  created () {
    this.userInfo = getUserInfo() || {}
  },
  methods: {
    forwardTo (id,path) {
      if(id==="1"){
        this.$router.push(path)
      }
    },
    exit () {
      api.exitLogin().then(res => res.data).then(data => {
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.center_{
  height: 100vh;
  background: #F5F5F5;
}
 .title{
    margin:30px 100px 17px 100px;
    font-size:18px;
    line-height:19px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
 }

.head{
  background:url('../assets/center/center.png');
  height: 120px;
  position: relative;
  .head_user{
    width: 90%;
    position: absolute;
    top: 37%;
    left: 5%;
    height: 3.2rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    .head_1{
      height: 95px;
      width:auto;
      border-radius:50%;
      flex: 1;
    }
    .right_{
      height: 95px;
      flex: 4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user_{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        .head_2{
          font-size:13px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .head_3{
          margin-bottom: 15px;
          font-size:18px;
          font-family:PingFang SC;
          font-weight:600;
          color:rgba(51,51,51,1);
        }
      }
      .arrow_{
        height: 14px;
        width: auto;
        margin-right: 19px;
      }
    }
  }
}


.list{
    height: 325px;
    width: 90%;
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    align-items: center;
    margin:60px auto 0;
}

.list_child{
  height: 46px;
  display: flex;
  width: 86%;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &::after {
    position: absolute;
    top: 18px;
    right: 0px;
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    transform: rotateZ(45deg);
  }
}

.list_img{
  height:20px;
  width: auto;
  margin-right: 10px;
}

.list_txt{
  font-size:15px;
  font-family:PingFang SC;
  font-weight:600;
  color:rgba(51,51,51,1);
}

.list_btn{
  border: none;
  margin-top: 50px;
}

.Btn{
    margin: 0.693333rem auto 0;
    background: none;
    border-radius: 0.666667rem;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(41,127,255,1);
 }
</style>

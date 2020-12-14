<template>
  <div class="Footer">
    <div class="bottom-box">
      <div class="box-left">
        <ul class="ul">
          <a><li>关于本站</li></a>
          <a><li>意见反馈</li></a>
          <a><li>免责声明</li></a>
          <a><li>友情链接</li></a>
          <a><li>招聘站长</li></a>
        </ul>
        <div>地址:重庆市荣昌区</div>
        <div>联系方式:18223133289(手机)</div>
        <div>©2018 All rights reserved</div>
      </div>

      <div class="box-right">
        <img class="foot-img" src="/static/img/WeChat.png" alt="">
        <img class="foot-img" src="/static/img/QQ.png" alt="">
        <img class="foot-img" src="/static/img/JianShu.png" alt="">
        <img class="foot-img" src="/static/img/email.png" alt="">
        <img class="foot-img" src="/static/img/github.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.Footer{
  overflow: hidden;
  height: 220px;
  background-color: #D2B48C;
}
  .foot-img{
    width: 46px;
    height: 46px;
    margin: 0 10px;
  }
  .bottom-box{
    align-items: center;
    width: 1060px;
    margin: 0 auto;
    display: flex;
    margin-top: 14px;

  }
  .box-left{
    color: #fff;
    flex: 1;
    height: 190px;
    border-right: 2px solid #646f7c;
  }
  .box-right{
    flex: 1;
  }
  ul{
    margin-top: 10px;
    display: flex;
  }
  ul li{
    margin-right: 16px;
  }
</style>

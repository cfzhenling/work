<template>
    <div class="middle">
      <div class="swiper">
      <div class="swiper-nav" style="position:relative" v-on:mouseleave="removeActive">
        <ul v-on:mouseover="addActive">
          <li v-for="(item,index) in menuList" :data-id='index'>{{item}}</li>
        </ul>
        <div class="plug" v-show='num == 0'>
        <img class="imges" src="/static/img/6.jpg" alt="">
        </div>
        <div class="plug" v-show='num == 1'>
        <img class="imges" src="/static/img/7.jpg" alt="">
        </div>
        <div class="plug" v-show='num == 2'>
        <img class="imges" src="/static/img/8.jpg" alt="">
        </div>
        <div class="plug" v-show='num == 3'>
        <img class="imges" src="/static/img/9.jpg" alt="">
        </div>
      </div>
      <div class="swiper-img layui-carousel"  id="test1">
        <div  carousel-item>
          <div><img class="slideImg" src="/static/img/1.jpg" alt=""></div>
          <div><img class="slideImg" src="/static/img/2.jpg" alt=""></div>
          <div><img class="slideImg" src="/static/img/3.jpg" alt=""></div>
          <div><img class="slideImg" src="/static/img/4.jpg" alt=""></div>
          <div><img class="slideImg" src="/static/img/5.jpg" alt=""></div>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
      data(){
        return{
          menuList: ['JavaScript','CSS3','HTML5','vue','软件','微信小程序','工具','Node',],
          num:10,
          test1:[
          ],
        }
      },
      mounted(){
        layui.use('carousel', function(){
          var carousel = layui.carousel;
          carousel.render({
            elem: '#test1'
            ,width: '100%'
            ,arrow: 'always'
            ,height:'100%'
          });
        });

      },
      methods:{
        addActive:function (e) {
          this.num=e.target.dataset.id;
        },
        removeActive:function (e) {
          this.num='10';
        }
      }
    }
</script>

<style scoped>
.swiper{
  margin: 40px auto;
  width: 1060px;
  height: 480px;
  display: flex;
  border-radius: 10px;
  position: relative;
  background-color: MediumSpringGreen;
}
  .swiper ul li{
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .swiper ul li:hover{
    background-color: LightGrey;
  }
  .swiper-img{
    flex: 1;
  }
  .plug{
    width: 800px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 180px;
    z-index: 10;
    background-color: Cyan;
  }
  .slideImg{
    width: 100%;
    height: 100%;
  }
.middle{
  background-color:#F5DEB3;
}
.imges{
  width: 800px;
  height: 400px;
}
</style>

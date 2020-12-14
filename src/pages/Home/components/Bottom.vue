<template>
    <div class=imgBox>
      <div class="imgList">
          <div v-for="item in items">
            <img class="imgg" :src="item.src" alt="">
            <h5>{{item.title}}</h5>
          </div>
      </div>
    </div>
</template>



<script>
    export default {
        name: "Bottom",
      data(){
          return{
            items:[
              {src:require('../images/html5.jpg'),title:"html5"},
              {src:require('../images/css.png'),title:"css"},
              {src:require('../images/js.png'),title:"JavaScript"},
              {src:require('../images/vue.png'),title:"vue"},
              {src:require('../images/node.png'),title:"ndoe"},
           
            ],
          }
      }
    }
</script>

<style scoped>
  .imgBox{
    background-color: #eeeeee;
    padding: 30px 0;
  }

.imgList{
  display: flex;
  width: 1060px;
  justify-content: space-between;
  margin: 0 auto;
  height: ;
  text-align: center;
  background-color: #eee;
}
.imgg{
  width: 90px;
  height: 90px;
}
</style>

<template>
  <div>
<router-view/>
<Swiper></Swiper>
<Bottom></Bottom>
  </div>
</template>

<script>
import Swiper from './components/Swiper'
import Bottom from './components/Bottom'
export default {
  components:{
      Swiper,
      Bottom
  }
}
</script>

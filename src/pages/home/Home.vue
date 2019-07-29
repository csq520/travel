<template>
    <div>
      <div class="home"><HomeHeader></HomeHeader></div>
      <div class="home"><HomeSwiper></HomeSwiper></div>
      <!--<router-link to="/list">列表页</router-link>-->
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>
</style>

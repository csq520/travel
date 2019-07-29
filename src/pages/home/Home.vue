<template>
    <div>
      <div class="home"><HomeHeader></HomeHeader></div>
      <!--<router-link to="/list">列表页</router-link>-->
    </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
</style>

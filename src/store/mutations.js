export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
      // 页面缓存
    } catch (e) {}
  }
}

<template>
    <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recmmendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="" />
          <div class="item-info">
            <p class="item-title">{{item.title}}}</p>
            <p class="item-desc">{{item.desc}}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recmmendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        title: '北京欢乐谷',
        desc: '亚洲唯一飞行式过山车等你来挑战'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
        title: '北水古镇',
        desc: '欢迎'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '欢迎'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
        title: '北京动物园',
        desc: '欢迎'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        title: '八达岭长城',
        desc: '不到长城非好汉'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg',
        title: '京东石林峡',
        desc: '谷内山峰挺立峭拔，天上美景落人间'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_200x200_595cfa1d.jpg',
        title: '金隅凤山温泉',
        desc: '欢迎'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background: #eee;
    text-indent: .2rem;
  .item
    overflow hidden
    display flex
    height: 1.9rem;
    .item-img
      width: 1.7rem;
      height: 1.7rem;
      padding:.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width 0
    .item-title
      line-height: .54rem;
      font-size .32rem
      ellipse()
    .item-desc
      line-height: .4rem;
      color: #ccc;
      ellipse()
    .item-button
      background: #ff9300;
      padding:0.1rem
      border-radius .06rem
      margin-top .16rem
      line-height: .4rem;
      color: #fff;
</style>

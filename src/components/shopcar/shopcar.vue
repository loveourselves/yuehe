<template>
  <div id="shopcar">
    <div class="shopcar">
      <div class="header">
      购物车
      </div>
      <div class="title">
        ——  {{title}}  ——
      </div>
      <div v-if="carInData.length>0">
      <div class="second"  v-for="(item,i) in carInData" :key="i" >
        <div class="pic">
          <img :src="item.imgUrl">
        </div> 
        <div>
          <div class="duo">{{item.description}}</div>
          <div class="back">加订国际机票立减${{item.ji}}</div>
          <div class="color">￥{{item.newPrice}}</div>
        </div>
      </div>
      </div>
      <div v-else>
        <div class="car"></div>
        <div class="word">购物车空空的哦~，去看看心仪的旅行产品吧！</div>
        <router-link to="/home">去购物</router-link>
      </div>
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'shopcar',
  props:["shopcar"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:"购物车"
    }
  },
  computed:{
    carInData(){
      return this.$store.getters.getShopCarData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.second .back{
  background: #01B9FF;
  padding: 2px;
  width: 70%;
}
.second .color{
  color: red;
}
.second div{
  text-align: left;
}
.duo{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  overflow: hidden;
}
.second .pic{
  width: 200%;
} 
.second img{
  width: 120px;
  height: 120px;
}
.second{
  width: 100%;
  display: flex;
  margin-top: 10px;
}
.car{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -200px;
  width:25px;
  height:25px;
  background-size: cover;
  margin: 0 auto;
}
.header{
  width: 100%;
  height: 40px;
  background: #01B9FF;
  position: fixed;
  top: 0px;
  line-height: 40px;
  color: white;
  z-index: 1000;
}
.title{
  width: 100%;
  height: 35px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}

</style>

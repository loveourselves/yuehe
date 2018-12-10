<template>
<div id="details1">
  <div class="details1">
    <div class="header">产品详情</div>
    <img :src="JSON.parse($route.params.detailsObj).imgUrl" width="100%">
    <div class="desc">
      {{JSON.parse($route.params.detailsObj).description}}
    </div>
    <span class="blue nei">加订国内机票立减${{JSON.parse($route.params.detailsObj).nei}}</span>
    <span class="blue">加订国际机票立减${{JSON.parse($route.params.detailsObj).ji}}</span>
    <span class="blue">{{JSON.parse($route.params.detailsObj).zhe}}折起</span>
    <div class="price">￥{{JSON.parse($route.params.detailsObj).newPrice}}起</div>
    <div class="title1">{{JSON.parse($route.params.detailsObj).detailTitle1}}</div>
    <div class="content1">{{JSON.parse($route.params.detailsObj).detailContent1}}</div>
    <div class="title2">{{JSON.parse($route.params.detailsObj).detailTitle2}}</div>
    <div class="content2">{{JSON.parse($route.params.detailsObj).detailContent2}}</div>
    <div class="title3">{{JSON.parse($route.params.detailsObj).detailTitle3}}</div>
    <div class="content3" v-for="(item,i) in JSON.parse($route.params.detailsObj).detailContent3" :key="i">
      <div class="tan">
      <div class="num">D{{i+1}}</div>
      <div class="inline1">{{item}}</div>
    </div>
    </div>
    <div class="gu">
      <div class="blue">
        <div class="tel"></div>
      </div>
      <div class="order" @click="addToCar(JSON.parse($route.params.detailsObj))">开始预订-加购</div>
    </div>
   
  </div>
</div>
</template>
<script>
export default {
    name: 'details1',
    methods:{
      addToCar(obj){
        obj.count=1,
        this.$store.commit("add",obj)
      }
    }
}
</script>
<style scoped>
.gu .order{
  width: 63%;
  height: 50px;
  background: red;
  font-size: 18px;
  color: white;
  border-radius: 5px;
  line-height: 50px;
  margin-left: 10px;
  margin-top: 10px;
}
.gu{
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
}
.gu .blue{
  width: 35%;
  height: 40px; 
  background:#01B9FF;
  border-radius: 5
}
.gu .tel{
  margin-left: 40px;
  margin-top: 8px;
   width:30px;height:27px;
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/Tel_icon.png") no-repeat 0 -30px;
}
.tan{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.num{
  background: #01B9FF;
  color: white;
  padding: 5px;
  border-radius: 50%;
}
.title1,
.content1,
.title2,
.content2,
.title3,
.content3{
  text-align: left;
  line-height: 23px;
}
.content3{
  line-height: 25px;
}
.title1,
.title2,
.title3{
  font-size: 18px;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
}
.price{
  width: 90%;
  text-align: right;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  color: red;
}
.blue{
  display: inline-block;
  background: #01B9FF;
  color: white;
  padding: 6px;
  font-size: 12px;
  margin-top: 10px;
}
span.nei{
  width: 32%;
  margin: 5px 0px;
}
.desc{
  text-align: left;
  font-size: 18px;
}
.details1{
  margin-top: -20px;
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

</style>




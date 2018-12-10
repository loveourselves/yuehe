<template>
<div id="group">
  <div class="group">
    <div class="header">
      团购
    </div>
    <div class="box" v-for="(item,i) in group.products" :key="i"  @click="showDetail(item)">
      <!-- 每一个产品链接每一个details -->
      <div class="pic">
        <img :src="item.imgUrl" >
      </div>
      <div class="picRight">
        <div class="duo">{{item.description}}</div>
        <span class="blue nei">加订国内机票立减${{item.nei}}</span>
        <span class="blue">加订国际机票立减${{item.ji}}</span>
        <span class="blue">{{item.zhe}}折起</span>
        <div>
          <span class="oldPrice">￥{{item.oldPrice}}起</span>
          <span class="newPrice">￥{{item.newPrice}}起</span>
        </div>

      </div>
    </div>
   
  </div>
</div>
</template>

<script>
export default {
  name: 'group',
  props:["group"],
  methods:{
    showDetail(item){
      this.$router.push({
        name:"details1",
        params:{detailsObj:JSON.stringify(item)}
      })

    }
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 98%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  padding: 10px 0px;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 700;
}
.box .pic{
  width: 38%;
}
.box .pic img{
  width: 100%;
}
.box .picRight{
  width: 58%;
  text-align: left;
}
.box .picRight .blue{
  background: #01B9FF;
  color: white;
  padding: 2px;
  font-size: 12px;
}
.box .picRight span.nei{
  display: block;
  width: 53%;
  margin: 5px 0px;
}
.box .picRight .duo{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  overflow: hidden;
}
.box .picRight .oldPrice{
  color: #cccccc;
  text-decoration: line-through;
}
.box .picRight .newPrice{
  color: red;
  padding-left: 10px;
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

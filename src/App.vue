<template>
  <div id="app">
    <div class="five">
      <router-link to="/home"><span class="icon1"></span>首页</router-link>
      <router-link to="/classify"><span class="icon2"></span>分类</router-link>
      <router-link to="/group"><span class="icon3"></span>团购</router-link>
      <router-link to="/shopcar"><span class="icon4"></span>购物车</router-link>
      <router-link to="/me"><span class="icon5"></span>我的</router-link>
    </div>
    <router-link to="/reg"></router-link>
    <router-view :group="group"></router-view>
    <!-- <router-view :home="home0"></router-view> -->
  </div>
</template>

<script>
import Axios from "axios"
let url = "http://localhost:84/static/data1.json"
export default {
  name: 'App',
  data(){
    return {
        group:{},
    }
},
created(){
  this.getData()
},
methods:{
  getData(){
    let self =this;
    Axios.get(url).then(function(res){
      self.group = res.data.group
    },function(err){
      console.log(err)
    })
  }
}
}
</script>

<style>
#app > div > a.router-link-exact-active.router-link-active{
 color: #01B9FF;
}
.icon1{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -2px;
}
.icon2{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -25px;
}
.icon3{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -50px;
}
.icon4{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -75px;
}
.icon5{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -100px;
}
.icon1,.icon2,.icon3,.icon4,.icon5{
  display: block;
  width:25px;
  height:25px;
  background-size: cover;
}
#app > div > a.router-link-exact-active.router-link-active>.icon1{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -125px;
  background-size: cover;
}
#app > div > a.router-link-exact-active.router-link-active>.icon2{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -150px;
  background-size: cover;
}
#app > div > a.router-link-exact-active.router-link-active>.icon3{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -175px;
  background-size: cover;
}
#app > div > a.router-link-exact-active.router-link-active>.icon4{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -200px;
  background-size: cover;
}
#app > div > a.router-link-exact-active.router-link-active>.icon5{
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/foot_icon.png") no-repeat 0px -225px;
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 90px;
}
.five{
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #f0f0f0;
  background-color: white;
  font-size: 12px;
  padding-top: 5px;
  z-index: 1000;
}
.five a{
  color: #2c3e50;
  text-decoration: none;
}

</style>


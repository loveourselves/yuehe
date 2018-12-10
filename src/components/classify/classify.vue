<template>
  <div id="classify">
   <div class="classify">
     <div class="header">
      分类
      </div>
      <div class="search">
        <input type="text" placeholder="城市、景点、产品、关键字">
        <span class="sou"></span>
      </div>
      <div v-for="(item,index) in classify1" :key="index">
      <div class="two" >
        <div class="left">
          <ul >
            <li @click="select(index)" :class="{active:active==index}">{{item.type}}</li>
          </ul>
        </div>
       
      </div>
       <div class="right" v-show="index==active">
            <div v-for="(item,index) in item.content" :key="index"><img :src="item" ></div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'classify',
  props:["classify"],
  methods:{
    select(index){
      this.active = index;
    }
  },
  data () {
    return {
      active:0,
      msg: 'Welcome to Your Vue.js App',
      url:"https://s.joytrav.com/site/rev/images/mobile/sort/sort_icon.png",
      classify1:[
                 {"type":"热门推荐",
                 "content":["//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic1.jpg","//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic2.jpg"]},
                 {"type":"目的地参团",
                 "content":["//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic3.jpg","//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic6.jpg"]},
                 {"type":"自由行",
                 "content":["//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic8.jpg","//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic9.jpg"]},
                 {"type":"定制包团",
                 "content":["//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic5.jpg","//s.joytrav.com/site/rev/images/mobile/sort/Sort_pic7.jpg"]},
                 {"type":"主题旅行"},
                 {"type":"欧洲旅行"},
                 {"type":"亚洲旅行"},
                 {"type":"澳新旅行"},
                 {"type":"机票推荐"},
                 {"type":"旅游攻略"},
                 {"type":"关于我们"}
                 ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
  width: 30%;
}
.right{
  width: 60%;
  float: right;
  position: absolute;
  top: 100px;
  left:120px;
}
.left ul{
  list-style: none;
}
.left ul li{
  height: 55px;
  background: #01B9FF;
  font-size: 16px;
  color: white;
  line-height: 55px;
}
.sou{
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("https://s.joytrav.com/site/rev/images/mobile/sort/sort_icon.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 11px;
  left: 25px;
}
*{
  margin: 0px;
  padding: 0px;
}
.search input{
  width: 90%;
  height: 30px;
  margin: 0px auto;
  text-indent: 40px;
  border-radius:20px; 
  border: 1px solid #cccccc;
}
.search{
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: -15px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
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

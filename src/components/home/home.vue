<template>
  <div id="home">
    <div class="home">
      <div class="header">
      首页
      </div>
      <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(index,i) in img" :key="i">
        <img :src="index" class="img">
      </mt-swipe-item>
      </mt-swipe>
      <div class="fourimg">
        <div v-for="(index,i) in imgurl.smallimg" :key="i" class="i">
          <img :src="index">
        </div>
      </div>
      <div class="back"></div>
      <div class="title1">
        ——  {{title1}}  ——
      </div>
      <div class="content1" >
        <div class="co" v-for="(index,i) in content1" :key="i">
            <img :src="index.title1img">
            <div class="yi"><p >{{index.title1p}}</p></div>
            <div class="du1">热门度：</div>
            <div class="du2">好评度：</div>
            <div class="price">{{index.price}}<span class="qi">起</span></div>
        </div>
      </div>
      <div class="back"></div>
      <div class="title1">
        ——  {{title2}}  ——
      </div>
      <div class="content1" >
        <div class="co" v-for="(index,i) in content2" :key="i">
            <img :src="index.title2img">
            <div class="yi"><p >{{index.title2p}}</p></div>
            <div class="du1">热门度：</div>
            <div class="du2">好评度：</div>
            <div class="price">{{index.price2}}<span class="qi">起</span></div>
        </div>
      </div>
      <div class="ticket"><a href="https://member.joytrav.com/e-ticket/"><img :src="ticketImg"></a></div>
      <div class="page"><img :src="pageImg"></div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component("mt-swipe",Swipe)
Vue.component("mt-swipe-item", SwipeItem)

export default {
  name: 'home',
  props:["home"],
  data () {
    return {
      img1:"//s.joytrav.com/images/400x400-150163800993015683421921562820229.jpg",
      img:["http://s.joytrav.com/images/600x600-15335588380818020970141885332381.jpg",
           "http://s.joytrav.com/images/600x600-1539135744611645480959264390676.jpg",
           "http://s.joytrav.com/images/600x600-154207586157318121579727185132.jpg"],
      imgurl:{smallimg:[
            "http://s.joytrav.com/images/280x108-153188834921827312155208776751.jpg",
            "http://s.joytrav.com/images/280x108-153189795761418362533301146543305.jpg",
            "http://s.joytrav.com/images/280x108-15154922652063139464071405215093.jpg",
            "http://s.joytrav.com/images/280x108-15154922751811902222582394069383.jpg"],

      urls:["http://www.joytrav.com/topic/cancun.html",
            "http://www.joytrav.com/topic/alaska-aurora/",
            "http://www.joytrav.com/topic/rocky-mountains/",
            "http://www.joytrav.com/topic/miami/"]},
      title1:"限时购",
      title2:"热卖排行",
      content1: [
      {
      "title1img":  "http://s.joytrav.com/images/140x107-1504081753749167807693430979339.jpg", 
       "title1p": "6 天 12.31新年狂欢<美东经典>【纽约+华盛顿+费城+普林斯顿大学+费城+华尔街+国会大厦】走进米奇网红快闪店，亲临时代广场和百万人共迎新年，参观总统蜡像馆，走进美东最美校园 ( 纽约接机，纽约送机 )",
      "price":"￥2670"
      },
      {
       "title1img":"http://s.joytrav.com/images/140x107-15287058018777924775962137105210.jpg",
       "title1p":"6 天 美东6城经典深度游【纽约+华盛顿+波士顿+尼亚加拉瀑布+康宁+费城】到访哈佛、麻省2大世界名校，乐享自由女神环岛游船观光，参观世界级杜莎夫人蜡像馆 ( 纽约接机，纽约或波士顿送机 )",
      "price":"￥1179"
      },
      {
       "title1img":"http://s.joytrav.com/images/140x107-150933327599619581748611647875285.jpg",
       "title1p":"8 天 <全年热卖>美西三城年度最热销线路【洛杉矶＋拉斯维加斯＋旧金山＋大峡谷＋圣塔芭芭拉】独家到访硅谷苹果总部，打卡摄影师拍摄圣地，2晚入住赌城主干道酒店 ( 洛杉矶接机，洛杉矶送机 )",
      "price":"￥2237"
      },
      {
       "title1img":"http://s.joytrav.com/images/140x107-150163800993015683421921562820229.jpg",
       "title1p":"7 天 <暖冬预售>美西4大国家公园摄影之旅【东南双峡+拱门+布莱斯+锡安】深度拍摄羚羊谷、马蹄湾，独家入住国家公园湖景酒店 ( 洛杉矶或拉斯维加斯接机，拉斯维加斯结束或洛杉矶送机 )",
      "price":"￥1420"
      }
    ],
      content2: [
      {
      "title2img":  "http://s.joytrav.com/images/225x192-14951982459986648785321530560731.jpg", 
       "title2p": "6 天 美东4城10年畅销路线【纽约＋费城＋华盛顿＋波士顿】纽约市区深度游，最佳视角观尼亚加拉大瀑布，探访两大世界名校 ( 纽约接机，纽约或波士顿送机 )",
      "price2":"￥1988"
      },
      {
       "title2img":"http://s.joytrav.com/images/225x192-1495198278167753053001486411470.jpg",
       "title2p":"7 天 美东经典口碑线路【纽约＋华盛顿＋费城＋尼亚加拉大瀑布＋波士顿＋罗德岛 豪华游】8大名城，3大名校，入住2晚纽约大都会地区 ( 纽约接机，纽约或波士顿送机 )",
      "price2":"￥2308"
      },
      {
       "title2img":"http://s.joytrav.com/images/225x192-154112254752116162819401397366300.jpg",
       "title2p":"5 天 <极光销冠> 阿拉斯加冬季北极光经典【北极圈+道顿公路+珍娜温泉+费尔班克斯】探寻冰雪仙境，温泉+酒吧+山顶木屋3次极光观测 ( 费尔班克斯接机，费尔班克斯送机 )",
      "price2":"￥4253"
      },
      {
       "title2img":"http://s.joytrav.com/images/225x192-154112634895820709889341769689789.jpg",
       "title2p":"7 天 <极地探索>阿拉斯加极光列车【安克雷奇+迪纳利国家公园+坦纳根海湾+珍娜温泉+费尔班克斯】尊享极地飞行观光，4晚极光追踪，入住冻脚镇极地营地 ( 安克雷奇接机，费尔班克斯送机 )",
      "price2":"￥8153"
      }
    ],
      ticketImg:"//s.joytrav.com/site/rev/images/mobile/index/H_sicon1.png",
      pageImg:"//s.joytrav.com/site/rev/images/mobile/index/H_sicon2.png"   

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket,.page{
  width: 60px;
  height: 60px;
  position: fixed;
  right: 0px;
}
.ticket{
   top: 30%;
}
.page{
  top: 40%;
}
.ticket img,
.page img{
  width:100%;
  height: 100%;
}
.content1{
  display: flex;
  width: 99%;
  justify-content: space-between;
  flex-flow: row wrap;
}
.content1 div.co{
  width: 49%;
  border: 1px solid #F4F4F4;
  margin-top: 10px;
  padding-bottom: 5px;
}
.content1 div.yi{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  overflow: hidden;
}
.content1 div.co img{
  width: 100%;
}
.content1 div.co p{
  font-size: 14px;
  font-weight: 700;
}
.content1 div.co .du1{
  font-size: 14px;
  text-align: left;
  padding: 3px;
}
.content1 div.co .du2{
  font-size: 14px;
  text-align: left;
  padding: 3px;
}
.content1 div.co .price{
  font-size: 16px;
  font-weight: 700;
  float: right;
  padding-right:10px;
  color: red;
}
.content1 div.co .price .qi{
  font-size: 12px;
  font-weight: 500;
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
img{
  width: 100%;
  height: 170px;
}
.mint-swipe{
  height: 170px;
  margin-top: -20px;
} 
.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-80%) !important;
}
.fourimg{
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-flow: row wrap;
}
.fourimg div.i{
  width: 49%;
  margin-top: 5px;
}
.fourimg div.i img{
  width: 100%;
  height: 100%;
}
.back{
  width: 100%;
  height: 6px;
  background-color:#F0F0F0;
  margin-top: 6px;
}
.title1{
  width: 100%;
  height: 35px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}

</style>

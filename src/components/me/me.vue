<template>
  <div id="me">
    <div class="me">
      <div class="header">
      登录 | 注册
      </div>
      <div class="main">
        <div class="logo"></div>
        <div class="user">
          <span class="userImg"></span> 
          <input class="user" type="text" placeholder="邮箱/数字ID">
        </div>
        <div class="pass">
          <span class="passImg"></span> 
          <input class="pass" type="text" placeholder="密码">
        </div>
        <div class="forget">忘记密码?</div>
        <div class="login" @click="log()">立即登录</div>
        <div class="reg">我还不是会员  <router-link to="/reg">立即注册</router-link></div>
        <div class="prompt"></div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:"https://s.joytrav.com/site/rev/images/mobile/member/member/login_Sicon.png",

    }
  },
  methods:{
    log(){
      let user = document.getElementsByClassName("user")[1].value-0
      let pass = document.getElementsByClassName("pass")[1].value-0
      let prompt = document.getElementsByClassName("prompt")[0];
      console.log(user,pass)
      if(user&&pass){
        let bb = JSON.parse(sessionStorage.getItem("userInfo")).userName-0;
        let cc = JSON.parse(sessionStorage.getItem("userInfo")).pwd-0;
        if(user==bb&&pass==cc){
          this.$router.push({
          name:"home"
        })
        }else{
          prompt.innerHTML = "输入密码错误！"
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prompt{
  color: red;
  margin-top: 20px;
  font-size: 16px;
}
.reg a{
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
}
.reg{
  margin-top: 20px;
  color: white;
  font-size: 14px;
}
.login{
  width: 60%;
  height: 50px;
  background: #01B9FF;
  font-size: 20px;
  color: white;
  line-height: 50px;
  border-radius: 10px;
  margin: 10px auto;
}
.forget{
  margin-left: 50%;
  height: 50px;
  line-height: 50px;
  color: white;
}
.pass{
  margin-top: 20px;
}
.pass,.user{
  border-bottom: 1px solid rgba(255,255, 255,0.2);
  padding-bottom: 20px;
}
.user input,
.pass input{
  border: none;
  background: rgba(0, 0, 0, 0);
  height: 30px;
  font-size: 18px;
  outline: none;
  color: white;
}
.user ::-webkit-input-placeholder{
  color: white;
  text-indent: 10px;
}
.pass ::-webkit-input-placeholder{
  color: white;
  text-indent: 10px;
}
.userImg,
.passImg{
  display: inline-block;
  width:24px;height:21px;
}
.userImg{
  background: url("https://s.joytrav.com/site/rev/images/mobile/member/member/login_Sicon.png") no-repeat -9px -4px;
}
.passImg{
  background: url("https://s.joytrav.com/site/rev/images/mobile/member/member/login_Sicon.png") no-repeat -9px -35px;
}
.logo{
  background: url("https://s.joytrav.com/site/rev/images/mobile/member/member/logo_icon1.png");
  width: 80px;
  height: 102px;
  background-size: cover;
  margin: 40px auto; 
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
.main{
  margin-top: -30px;
  width: 100%;
  height: 650px;
  background: url("https://s.joytrav.com/site/rev/images/mobile/common/sidebar_bg.jpg");
  background-size: cover;
  margin-bottom: -1000px;
  overflow: hidden;
}

</style>

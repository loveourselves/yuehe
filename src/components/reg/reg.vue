<template>
  <div id="reg">
    <div class="reg">
      <div class="header">
      注册
      </div>
      <div class="main">
        <div class="top">
        <div class="smallLogo">
          <img :src="url" width="30%">
        </div>
        <div class="word">注册新会员</div>
        </div>
        <div class="user">
          <span class="userImg"></span> 
          <input class="userName" v-model="userName" type="text" placeholder="注册邮箱">
        </div>
        <div class="pass">
          <span class="passImg"></span> 
          <input class="pwd" v-model="pwd" type="text" placeholder="设置密码">
        </div>
        <div class="repass">
          <span class="repassImg"></span> 
          <input class="newPwd" v-model="newPwd" type="text" placeholder="重输密码">
        </div>
        <div class="login regUser" @click="regNewUser">立即注册新会员</div>
        <div class="reg">已经是会员？  <router-link to="/me">立即登录</router-link></div>
        <div class="prompt"></div>

      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'reg',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:"https://s.joytrav.com/site/rev/images/mobile/member/member/logo_icon.png",
      userName:"",
      pwd:"",
      newPwd:""
    }
  },
  methods:{
    regNewUser(){
      let prompt = document.getElementsByClassName("prompt")[0];
      if(!this.userName||!this.pwd||!this.newPwd){
        prompt.innerHTML= "填写不完整！"
      }else if(this.pwd!=this.newPwd){
        prompt.innerHTML = "密码不一致！"
      }else{
        this.$router.push({
          name:"home"
        });
        var obj = {};
        obj.userName = this.userName;
        obj.pwd = this.pwd;
        sessionStorage.setItem("userInfo",JSON.stringify(obj))
      }
    }
  }
}
</script>

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
  margin: 25px auto 10px;
}
.pass,.user,.repass{
  margin-top: 20px;
}
.pass,.user,.repass{
  border-bottom: 1px solid rgba(255,255, 255,0.2);
  padding-bottom: 20px;
}
.user input,
.pass input,
.repass input{
  border: none;
  background: rgba(0, 0, 0, 0);
  height: 30px;
  font-size: 18px;
  outline: none;
  color: white;
}
.user ::-webkit-input-placeholder,
.pass ::-webkit-input-placeholder,
.repass ::-webkit-input-placeholder{
  color: white;
  text-indent: 10px;
}
.userImg,
.passImg,
.repassImg{
  display: inline-block;
  width:24px;height:23px;
}
.userImg{
  background: url("https://s.joytrav.com/site/rev/images/mobile/member/member/login_Sicon.png") no-repeat -9px -64px;
}
.passImg{
  background: url("https://s.joytrav.com/site/rev/images/mobile/member/member/login_Sicon.png") no-repeat -9px -208px;
}
.repassImg{
  background: url("https://s.joytrav.com/site/rev/images/mobile/member/member/login_Sicon.png") no-repeat -9px -35px;
}
.top{
  display: flex;
  align-items: center;
  margin-top: 40px;
}
 .word{
  font-size: 22px;
  color: white;
  font-weight: 700;
  margin-left: -18%;
}
.smallLogo{
  margin-left: -10%;
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

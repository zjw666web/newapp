<template>
	<div>
		<div class="body_box">
			<div class="top">
				<p @click="fanhui">x</p>
				<div>
					<span class="one">智能客商城</span>
					<span class="two">您身边的体验店</span>
				</div>
			</div>
			<div class="content">
				<div class="content_box">
					<span>账号</span>
					<input type="text"  placeholder="手机/邮箱/用户名" ref='input_user'/>
				</div>
				<div class="content_box">
					<span>密码</span>
					<input type="text"  placeholder="请输入密码" ref='input_pwd'/>
					<i class="iconfont icon-htmal5icon09"></i>
				</div>
				<div class="yanzheng">
					<input ref='input_veri' class="yanzheng1"/>
					<veri ref='pikaqiu' class="yanzheng2"></veri>
				</div>
				<div class="btn">
					<button @click="btn">登录</button>
				</div>
				<div class="login">
					<span class="login1" @click="add">免费注册</span>
					<span class="login2" @click="zhaohui">找回密码</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import veri from './verification'
	import store from '../vuex/carstore'
	export default{
		store,
		components:{veri},
		data(){
			return{}
		},
		methods:{
			fanhui:function(){
				window.history.back(-1)
				this.$store.commit("abc",'flex')

			},
			//登录按钮
			btn:function(){
				  // 登录事件  ===》 校验验证码、账号密码登录
  		
  		// ref 标记  可以通过 this.$refs.名字  直接获取到标记的标签
      var veri100 =this.$refs.input_veri.value.trim(); // 用于去除输入内容前后的空格  
      var user100 =this.$refs.input_user.value.trim(); //获取账号输入框的值
      var pwd100  =this.$refs.input_pwd.value.trim(); //获取密码输入框的值
      
      
      //校验验证码
      var that=this; //保存指向
      this.$axios({
      	url:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
      	method:'get',
      	params:{ veri:veri100 }
      }).then(function(res){
      	// this的指向丢失
      	console.log(that.message);
      	if(res.data.success){
//    		alert('验证码成功')
      	//   在等待 20分钟 ！！！！！！！！！	
      		// 账号密码的登录  请求里面 嵌套请求
      		  that.$axios({
      		  	url:'/VueHandler/AdminLoginAndRegHandler?action=login',
      		  	method:'post',
      		  	data:{
      		  		userName:user100, // 上面布局里面的 账号输入框里面输入的值
      		  		password:pwd100  // 上面 密码输入框里面输入的值
      		  	}
      		  }).then(function(res){
      		  	console.log(res); // 什么时候 是登录成功 ？什么时候是登陆失败
      		  	if(res.data.err){
      		  	alert('登录失败')
      		  	that.$refs.pikaqiu.changeVeri()
      		  	}else{
      		  	  alert('登录成功')
      		  	  
//  		  	  window.location.href='/#/mine/'+user100
                  window.location.href='/#/mine'
    		  	  that.$store.commit("setss",user100)
    		  	   that.$store.commit("abc",'flex')
      		  	}
      		  })
      		
      	}else{
      		alert('验证码错误')
      		//验证码重新获取===》验证码是个组件，组件里面有个方法 changeVeri()
      		that.$refs.pikaqiu.changeVeri()
      	}
      }).catch(function(err){ //err 异常 接口走不通
      	console.log(err);
      })
  	
			},
			//注册
			add:function(){
				var that=this;
				var user100 =this.$refs.input_user.value.trim(); 
                var pwd100  =this.$refs.input_pwd.value.trim();
                this.$axios({
                	url:'/VueHandler/AdminLoginAndRegHandler?action=add	',
                	method:'post',
                	data:{ 
			 		userName:user100,
			 		turename:'123',
			 		phone:'12312312311',
			 		power:'1',
			 		password: pwd100
			 	        }
                }).then(function(res){
                	console.log(res)
                	if(res.data.success){
                		alert('注册成功')
                	}else{
                		alert('账号名重复或为空')
                	}
                })
			},
			zhaohui:function(){
				alert('暂未开通此功能')
			}
		},
		mounted(){
			this.$store.commit('abc','none')
		}
	}
</script>

<style scoped>
	.body_box{
		width: 1080px;
		background: #fff;
	}
	.top{
		width: 1080px;
		height: 568px;
		overflow: hidden;
	}
	.top p{
		font-size: 68px;margin-top:36px ;margin-left: 84px;
	}
	.top div{
		text-align: center;display: flex;flex-direction: column;
		margin-top: 150px;
	}
	.top .one{
		font-size: 110px;color:#f07464;font-weight: bold;
	}
	.top .two{
		color: #979797;font-size: 56px;
	}
	.content{
		width: 1080px;height: 500px;margin-top: 70px;
	}
	.content_box{
		width: 936px;margin: 0 auto;border-bottom: 5px solid #ccc;line-height: 108px;
		overflow: hidden;
	}
	.content_box span{
		margin-right: 60px;font-size: 50px;
	}
	.content_box input{
		border: none;height: 108px;font-size: 30px;outline: none;
	}
	.content_box i{
		float: right;font-size: 60px;
	}
	.yanzheng{
		width: 936px;height: 132px;margin: 0 auto;margin-top: 40px;
	}
	.yanzheng1{
		float: left;width: 310px;height: 80px;outline: none;border: 5px solid #ccc;
	}
	.yanzheng2{
		float: right;
	}
	.btn{
		width: 936px;height: 132px;margin: 0 auto;margin-top: 140px;
	}
	.btn button{
		width: 936px;height: 132px;border-radius: 65px;background: #eb4a36;
		color: #f28679;font-size: 50px;outline: none;border: none;
	}
	
	.login{
		width: 936px;height: 132px;margin: 0 auto;margin-top: 60px;
	}
	.login1{
		float: left;font-size: 40px;color: #b8b8b8;
	}
	.login2{
		float: right;font-size:40px;color: #b8b8b8;
	}
</style>
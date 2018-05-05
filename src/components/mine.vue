<template>
	<div id="">
		<div class="body_box">
			<div class="top_box">
				<img src="../../static/app_png/top1.png"  class="img1"/>
				<img src="../../static/app_png/top2.png"  class="img2"/>
				<div class="top_box3">
					<span class="span1" @click="aa">{{msg}}</span>
					<span class="span2">></span>
				</div>
			</div>
			<div class="bottom_box">
				<img src="../../static/app_png/tututu.png" usemap='#bottom_box'/>
				
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/carstore'
	export default{
		store,
		data(){
			return{
				msg:'登录/注册'
			}
		},
		methods:{
			aa:function(){
				window.location.href='/#/login'
			}
		},
		mounted(){
			//var names=this.$route.params.year
			this.msg=this.$store.state.ss||'登录/注册'
			console.log(this.msg)
		}
	}
</script>

<style scoped>
	.body_box{
		background: #F4F4F4;width: 1080px;
	}
	
	.top_box{
		display: flex;flex-wrap: wrap;
		width: 1080px;height: 450px;background: #EB4A36;
	}
	.top_box .img1{
		width: 1080px;height: 150px;
	}
	.top_box .img2{
		width: 268px;height: 300px;
	}
	.top_box3{
		width: 812px;height: 300px;
	}
	.top_box3 span{
		margin-top: 72px;display: inline-block;
	}
	.span1{
		float: left;margin-left: 40px;font-size: 55px;
	}
	.span2{
		float: right;margin-right: 50px;font-size: 70px;
	}
	.bottom_box{
		width: 1080px;height: 1181px;
	}
	.bottom_box img{
		width: 1080px;height: 1181px;
	}
	map{
		width: 1080px;height: 450px;
	}
</style>
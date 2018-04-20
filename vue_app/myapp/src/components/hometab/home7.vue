<template>
	<div>
		<div class="body_box">
		   <div class="imgbox"><img src="../../../static/app_png/datu.png"/></div>
		   <!--<div class="fiveicon">
		   	<div class="iconbox"><i class="iconfont icon-wodejuanbao"></i><span>领劵</span></div>
		   	<div class="iconbox"><i class="iconfont icon-qiandao"></i><span>签到</span></div>
		   	<div class="iconbox"><i class="iconfont icon-1zhanshigouwu"></i><span>1元购</span></div>
		   	<div class="iconbox"><i class="iconfont icon-shoujichongzhi"></i><span>手机充值</span></div>
		   	<div class="iconbox"><i class="iconfont icon-gengduo"></i><span>更多</span></div>
		   </div>-->
		   
		   
		   <!--数据循环-->
		   <div class="data_bigbox" v-for="i in shuju">
		   	<div class="data_box" >
		   		<div class="pic_box" @click="aa(i)"><img :src='i.thumbImg'/></div>
		   		<div class="txt1">{{i.goodsName}}</div>
		   		<span>￥{{i.salePrice/100}}</span>
		   	</div>
		   	
		   </div>
		<!--body_box EEEEE-->   
		</div>
	</div>
</template>

<script>
	import store from'../../vuex/carstore'
	export default{
		store,
		data(){
			return{
				shuju:null,
				
			}
		},
		methods:{
			aa(i){
				console.log(i)
//				window.location.href='/#/cart?'+i.pid
				//触发vuex添加
				this.$store.state.getList(i.pid);
				window.location.href='/#/cart'
			}
		},
		mounted(){
			var that=this;
			this.$axios({
				url:'../../../static/json/shouye7.json',
				method:'get'
				
			}).then(function(res){
				console.log(res.data)
				
				that.shuju=res.data
				
			})
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	.body_box{
		width: 1080px;
		overflow: hidden;
		background: #F4F4F4;
		margin-bottom: 144px;
	}
	.imgbox img{
		width: 1080px;
		height: 430px;
	}
	.fiveicon{
		width: 1080px;
		height: 300px;
		background: #fff;
		margin: 20px 0 30px;
		display: flex;
		justify-content: space-around;
		padding-top: 30px;
		box-sizing: border-box;
	}
	.fiveicon .iconbox{
		width: 20%;
		height: 300px;
	}
	.iconbox i{
		font-size: 150px;
	}
	.icon-wodejuanbao{
		color: pink;
	}
	.icon-qiandao{
		color: #4dcaf3;
	}
	.icon-1zhanshigouwu{
		color: #ffbd3f;
	}
	.icon-shoujichongzhi{
		color: #30ccde;
	}
	.icon-gengduo{
		color: #4be286;
	}
	.iconbox i,.iconbox span{
  		width: 100%;
  		display: block;
  		float: left;
  		clear: both;
  	}
  	
  	/*数据渲染*/
  	.data_bigbox{
  		height: auto;width: 1080px;justify-content: space-between;flex-wrap: wrap;
  	}
  	.data_box{
  		width:520px;height: 718px;float: left;background: #fff;
  		margin-bottom: 15px;margin-right: 15px;
  	}
  	.pic_box{
  		width: 494px;height: 497px;margin: 0 auto;
  	}
  	.pic_box img{
  		width: 494px;height: 497px;
  	}
  	.txt1{
  		margin-top: 27px;height: auto;font-size: 30px;
  		width: 418px;display: flex;flex-wrap:wrap;
  		padding-left:30px;box-sizing: border-box;line-height: 38px;
  	}
  	.data_box span{
  		margin-top: 27px;height: auto;font-size: 30px;
  		display: flex;flex-wrap:wrap;
  		padding-left:30px;box-sizing: border-box;line-height: 38px;
  		color: red;
  	}
</style>
<template>
	 	<div class="box" :style="this.$store.state.foothideen">
    		<li><router-link to='/home'><i class="iconfont icon-shouye"></i><span>首页</span></router-link></li>
	    	<li><router-link to='/classify'><i class="iconfont icon-chafenlei"></i><span>分类</span></router-link></li>
	    	<li><router-link to='/cart'><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link></li>
	    	<li><router-link to='/mine'><i class="iconfont icon-wode"></i><span>我的</span></router-link></li>
	    	<li><router-link to='/recommend'><i class="iconfont icon-tuijianshangjia"></i><span>推荐</span></router-link></li>
    	</div>
</template>

<script>
	import store from '@/vuex/carstore'
	export default{
		store
	}
</script>
   
<style scoped>
	.box{
		width: 1080px;
		height: 144px;
		background: #fff;
  		position: fixed;
  		bottom: 0;
  		left: 0;
  		display: flex;
  		justify-content: space-around;
  		margin-top: 144px;
  		z-index: 1;
  		border-top: 5px solid #ccc;
  	}
  	li{
  		width: 20%;
  		list-style: none;
  		font-size: 30px;
  		text-align: center;
  		margin-top: 20px;
  	}
  	li i{
  		font-size: 60px;
  	}
  	li i,li span{
  		width: 100%;
  		display: block;
  		float: left;
  		clear: both;
  	}
  	.router-link-active{
  		color: red;
  	}
  	
  	a{
  		text-decoration: none;
  	}
</style>
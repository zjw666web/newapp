<template>
	<div id="">
		<div class="hello">
		   <div class="top_box">
		      <span>应用</span><i class="iconfont icon-xiazai"></i>
		   </div>
		   <div class="contentbox">
		   	   <div class="content" v-for='i in msg'>
		   	   	<div class="cba"><img :src='i.iconPath'/></div>
		   	   	<div class="abc"><span class="xianame">{{i.name}}</span><p><i class="iconfont icon-ok"></i><span class="xiazailiang">0人下载</span><span class="xiazaisize">{{i.size}}</span></p></div>
		   	   	<div><button><a :href="i.downloadPath">下载</a></button></div>
		   	   </div>
		   </div>
		</div>
	</div>
</template>

<script>
//	import store from '../vuex/carstore'
	export default{
		data(){
			return{
				msg:null
			}
		},
	mounted:function(){	
		    var that=this;
			this.$axios({
				url:'../../static/json/tuijian.json',
				method:'get'
				
			}).then(function(res){
				console.log(res.data)
				that.msg=res.data
			})
			}
	}		
</script>

<style scoped>
.hello{
	width: 1080px;
	background: #f4f4f4;
	margin-bottom: 144px;
	
}
.top_box{
	width: 1080px;
	height: 150px;
	line-height: 150px;
	margin-bottom: 50px;	
	background: #fff;
}

.top_box span{
	margin-left: 490px;font-size: 60px;
}
.icon-xiazai{
	float: right;margin-right: 60px;font-size: 60px;color: #999;
}

/*数据加载*/

.contentbox{
	background: #fff;width: 1080px;height: auto;
}
.contentbox img{
	width:161px ;height: 161px;
}
.content{
	
	height: 245px;width: 1080px;
	display: flex;margin-top:40px ;border-bottom: 5px solid #ccc;
	justify-content: space-around;
	
}
.cba{
	margin-top: 40px;
}
.abc{
	margin-top: 60px;margin-left: -100px;
}
.xianame{
	font-size: 55px;
}
.icon-ok{
	font-size: 45px;color: #41c88d;
}
.xiazailiang{
	font-size: 35px;
}
.xiazaisize{
	font-size: 35px;
}
.content button{
	width: 235px;height: 75px;background: #00a0e8;
	border: none;margin-top: 80px;
}
.content button a{
	color: #fff;
}
</style>
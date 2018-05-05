<template>
  <div class="hello">
  	<div class="body_box">
   <!--头部-->
   	<div class="head_box">
   		<img src="../../static/app_png/logo.png"/>
   		<div class="head_box_right">
   			<i class="iconfont icon-sousuo"></i>
   			<input type="text" placeholder="请输入内容" />
   			<i class="icon-xiazai16 iconfont"></i>
   		</div>
   	</div>
   	<!--tab切换-->
   	<div class="container"> 
		<div class="swiper-container swiper1"> 
				<div class="swiper-wrapper" style="display: flex;flex-direction:column"> 
					<div class="swiper-slide selected fnav">智能穿戴</div> 
					<div class="swiper-slide fnav">智能家居</div> 
					<div class="swiper-slide fnav">智能家电</div> 
					<div class="swiper-slide fnav">智能娱乐</div> 
					<div class="swiper-slide fnav">智能出行</div> 
					<div class="swiper-slide fnav">智能健康</div> 
					<div class="swiper-slide fnav">机器人</div> 
					
	            </div> 
	    </div>
	    <div class="swiper-container swiper2"> 
				<div class="swiper-wrapper"> 
					<div class="swiper-slide swiper-no-swiping">
						<div class="contentbox contentbox1" v-for="i in contentbox1">
							<div @click="aa(i)"><img :src="i.imageurl"/></div>
							<p>{{i.name}}</p>
						</div>
					</div> 
					<div class="swiper-slide swiper-no-swiping" >
						<div class="contentbox contentbox2" v-for="i in contentbox2">
							<div @click="aa(i)"><img :src="i.imageurl"/></div>
							<p>{{i.name}}</p>
						</div>
					</div> 
					<div class="swiper-slide swiper-no-swiping" >
						<div class="contentbox contentbox3" v-for="i in contentbox3">
							<div @click="aa(i)"><img :src="i.imageurl"/></div>
							<p>{{i.name}}</p>
						</div>
					</div> 
					<div class="swiper-slide swiper-no-swiping" >
						<div class="contentbox contentbox4" v-for="i in contentbox4">
							<div @click="aa(i)"><img :src="i.imageurl"/></div>
							<p>{{i.name}}</p>
						</div>
					</div> 
					<div class="swiper-slide swiper-no-swiping" >
						<div class="contentbox contentbox5" v-for="i in contentbox5">
							<div @click="aa(i)"><img :src="i.imageurl"/></div>
							<p>{{i.name}}</p>
						</div>
					</div> 
					<div class="swiper-slide swiper-no-swiping" >
						<div class="contentbox contentbox6" v-for="i in contentbox6">
							<div @click="aa(i)"><img :src="i.imageurl"/></div>
							<p>{{i.name}}</p>
						</div>
					</div> 
					<div class="swiper-slide swiper-no-swiping" >
						<div class="contentbox contentbox7" v-for="i in contentbox7">
							<div @click="aa(i)"><img :src="i.imageurl"/></div>
							<p>{{i.name}}</p>
						</div>
					</div> 
					
			    </div> 
			  </div> 
		</div> 
		<!---->
		
	</div>
  </div>
</template>

<script>
	
	import jQuery from '../../static/jquery-3.2.1.min.js'
	import Swiper from '../../static/swiper'
	import store from '../vuex/carstore'
export default {
  store,
  components:{},
  data () {
    return {
       contentbox1:null,
       contentbox2:null,
       contentbox3:null,
       contentbox4:null,
       contentbox5:null,
       contentbox6:null,
       contentbox7:null
    }
  },
  mounted:function(){
  	$(function() { 
function setCurrentSlide(ele, index) { 
$(".swiper1 .swiper-slide").removeClass("selected"); 
ele.addClass("selected"); 
//swiper1.initialSlide=index; 
} 
var swiper1 = new Swiper('.swiper1', { 
//	设置slider容器能够同时显示的slides数量(carousel模式)。 
//	可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。 
//	loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。 
slidesPerView: 5.5, 
paginationClickable: false,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。 
spaceBetween:0,//slide之间的距离（单位px）。 
freeMode: true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。 
loop: false,//是否可循环 
onTab: function(swiper) { 
var n = swiper1.clickedIndex; 
} 
}); 
swiper1.slides.each(function(index, val) { 
var ele = $(this); 
ele.on("click", function() { 
setCurrentSlide(ele, index); 
swiper2.slideTo(index, 500, false); 
//mySwiper.initialSlide=index; 
}); 
}); 
var swiper2 = new Swiper('.swiper2', { 
//freeModeSticky 设置为true 滑动会自动贴合 
direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。 
loop: false, 
//	effect : 'fade',//淡入 
//effect : 'cube',//方块 
//effect : 'coverflow',//3D流 
//	effect : 'flip',//3D翻转 
autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。 
onSlideChangeEnd: function(swiper) { //回调函数，swiper从一个slide过渡到另一个slide结束时执行。 
var n = swiper.activeIndex; 
setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n); 
swiper1.slideTo(n, 500, false); 
} 
}); 
});
     //   数据加载
    
			var that=this;
			this.$axios({
				url:'../../static/json/classify.json',
				method:'get'
				
			}).then(function(res){
				console.log(res)
				console.log(res.data[0].childCategoryList)
				that.contentbox1=res.data[0].childCategoryList
				that.contentbox2=res.data[1].childCategoryList
				that.contentbox3=res.data[2].childCategoryList
				that.contentbox4=res.data[3].childCategoryList
				that.contentbox5=res.data[4].childCategoryList
				that.contentbox6=res.data[5].childCategoryList
				that.contentbox7=res.data[6].childCategoryList
			})
		
  }
  ,
  methods:{
        aa(i){
				console.log(i)
//				window.location.href='/#/cart?'+i.pid
				//触发vuex添加
				this.$store.state.getList(i.categoryId);
				window.location.href='/#/cart'
			}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	@import url("../../static/swiper.css");
	.body_box{
		background: #f4f4f4;
		overflow: hidden;
		height: 1900px;
		/*margin-bottom: 144px;*/
	}
  .head_box{
		height: 145px;
		background: #FFFFFF;
		line-height: 145px;
		border-bottom: 1px solid #ccc;
	}
	.head_box img{
		width: 142px;height: 90px;float: left;margin-top: 30px;margin-right: 40px;margin-left: 40px;
	}
	.head_box_right{
		overflow: hidden;
	}
	.head_box input{
		height: 90px;
		width: 718px;
		float: left;
		padding-left: 200px;
		box-sizing: border-box;
		border-radius:40px ;
		margin-top: 30px;
	}
	.icon-xiazai16{
		font-size: 70px;
		float: left;
		margin-left: 40px;
	}
	.icon-sousuo{
		font-size: 48px;
		margin-left: -680px;
		
	}
	/*tab切换*/
	.container{
		clear: both;
	}
	.selected{
		color: red;
	}
	
	.fnav{
		width: 270px !important;
		height: 140px ;
		line-height: 140px;
		margin: 10px 0;
		background: #FFFFFF;
		text-align: center;
	}
	.swiper1{
		width: 270px !important; 
		height: auto;
		margin-top: 32px;
		float: left;
	}
	.swiper2{
		width: 750px ;float: left;margin-left: 40px;margin-top: 32px;background: #fff;
		height: auto;
	}
	.swiper2 .swiper-slide{
		width: 750px !important;float: left;
	}
	/*数据*/
	.contentbox{
		height: 350px;width: 250px;float: left;
	}
	.contentbox img{
		width:250px ;height: 225px;
	}
	.contentbox p{
		text-align: center;height: 70px;line-height: 70px;
	}
</style>

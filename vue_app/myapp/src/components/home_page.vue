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
				<div class="swiper-wrapper"> 
					<div class="swiper-slide selected">首页</div> 
					<div class="swiper-slide">智能穿戴</div> 
					<div class="swiper-slide">智能家居</div> 
					<div class="swiper-slide">智能家电</div> 
					<div class="swiper-slide">智能娱乐</div> 
					<div class="swiper-slide">智能出行</div> 
					<div class="swiper-slide">智能健康</div> 
					<div class="swiper-slide">机器人</div> 
					
	      </div> 
	    </div>
	    <div class="swiper-container swiper2"> 
				<div class="swiper-wrapper"> 
					  <div class="swiper-slide swiper-no-swiping"><home1></home1></div> 
						<div class="swiper-slide swiper-no-swiping"><home2></home2></div> 
						<div class="swiper-slide swiper-no-swiping"><home3></home3></div> 
						<div class="swiper-slide swiper-no-swiping"><home4></home4></div> 
						<div class="swiper-slide swiper-no-swiping"><home5></home5></div> 
						<div class="swiper-slide swiper-no-swiping"><home6></home6></div> 
						<div class="swiper-slide swiper-no-swiping"><home7></home7></div> 
						<div class="swiper-slide swiper-no-swiping"><home8></home8></div> 
					
			    </div> 
			  </div> 
		</div> 
		<!---->
		<div class=""></div>
	</div>
  </div>
</template>

<script>
	import home1 from './hometab/home_one'
	import home2 from './hometab/home_two'
	import home3 from './hometab/home3'
	import home4 from './hometab/home4'
	import home5 from './hometab/home5'
	import home6 from './hometab/home6'
	import home7 from './hometab/home7'
	import home8 from './hometab/home8'
	import jQuery from '../../static/jquery-3.2.1.min.js'
	import Swiper from '../../static/swiper'

export default {
 
  components:{home1,home2,home3,home4,home5,home6,home7,home8},
  data () {
    return {
       
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
paginationClickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。 
spaceBetween: 0,//slide之间的距离（单位px）。 
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
  }
  ,
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	@import url("../../static/swiper.css");
	.body_box{
		background: #f4f4f4;
		overflow: hidden;
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
	.selected{
		color: red;text-decoration: underline;
	}
	.container{
		width: 100%;
		overflow: hidden;
	}
	.swiper1{
		width: 2300px !important; 
		background: #FFFFFF;
		line-height: 124px;
		height: 124px;
	}
	.swiper2 .swiper-slide{
		width: 1080px !important;
	}
	.swiper-slide{
		width: 270px !important;text-align: center;
	}
	.swiper2 img{
		width: 1080px;height: 430px;
	}
</style>

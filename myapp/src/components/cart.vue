<template>
	<div >
		<div class="box">
			<p class='top'>购物车</p>
			<div>
				<table>
					<tr class="nav">
						<th>名称</th>
						<th>图片</th>
						<th>数量</th>
						<th>价格</th>
						<th>总价</th>
					</tr>
					<tr class="cart" v-for='(i,v) in arr'>
						<td style="font-size: 12px;">{{i.miaoshu}}</td>
						<td><img :src='i.imgsrc'/></td>
						<td><button @click="jian(i,v)">-</button><span>{{i.count}}</span><button @click="add(i,v)">+</button></td>
						<td>{{i.jiage}}</td>
						<td>{{i.zongjia}}</td>
					</tr>
					
				</table>
				<div class="abc" v-if="isif">
					<button @click='get()'>查看我共需付款多少人民币</button>
					<span>{{this.$store.state.all}}</span>
				</div>
				
				
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/carstore'
	export default {
		store,
		data(){
			return {
				arr:[],
				obj:{},
				isif:false
			}
		},
		methods:{
			jian(i){
				
			this.$store.commit("min",i.pid||i.categoryId);
			},
			add(i){
				
				this.$store.commit("add",i.pid||i.categoryId);
			},
			get(){
				this.$store.commit('total');
			}
		},
		computed:{
			
		},
		
		mounted(){
//			console.log(window.location)
//			var pid=window.location.hash.substr(7);
//			console.log(pid)
//			var that=this
//			this.$axios({
//				url:'../../../static/json/shouye1.json',
//				method:'get'
//			}).then(function(res){
//				console.log(res.data)
//				for (var i=0;i<res.data.length;i++) {
//					var index=res.data[i].pid
//					if(res.data[i].pid==pid){
//						that.obj.categoryName=res.data[i].categoryName
//						that.obj.thumbImg=res.data[i].thumbImg
//						that.obj.salePrice=(res.data[i].salePrice)/100
//						that.obj.num=1
//						that.arr.push(that.obj)
//						
//					}
//				}
//				console.log(that.arr)
//				
//			})
			this.arr=this.$store.state.list;
			if(this.arr.length==0){
				this.isif=false
			}else{
				this.isif=true
			}
		}
	}
</script>

<style scoped>
.box{
	margin-bottom: 144px;
}
.top{
	width:100%;
	line-height:150px;
	height: 150px;
	text-align: center;
	font-size:60px;
	border-bottom: 5px solid #ccc;
}
table{
	width: 1080px;
}
nav th{
	width: 216px;
}
.cart{
	width: 1080px;height: auto;margin-top:30px ;
}
.cart td{
	width: 216px;text-align: center;font-size: 50px;height: 80px;
}
.cart img{
	width: 216px;height: 80px;
}
button{
	width: 60px;height: 60px;
}
.abc button{
	width:auto;float: left;
}
.abc span{
	float: right;margin-right:80px ;
}
</style>
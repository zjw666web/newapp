import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

var tableAdminsList=function(){ // 获取数据库里面的用户信息
	axios({
		url:'../../static/json/shouye1.json',
		method:'get'
	}).then(function(res){
		console.log(res);
		
		
	
		for(var i=0;i<res.data.length;i++){
			// 组织信息： 服务器给咱们的数据，也不能随便加进去
			var obj={
				imgsrc:res.data.thumbImg,
				miaoshu:res.data.goodsName,
				jiage:res.data.salePrice
				
			};
			state.list.push(obj); // state里面的数组 就有数据了（当前页的数据） 将请求过来的数据储存
		};
		console.log('我整理出来的数据是')
		console.log(state.list)
	})
}

const state={
	
	// table组件的数据
		list:[], //容器，装放请求到的当前页面的人员信息
		ss:""
}

const mutations={ 
	setss(state,str){
		state.ss=str
	}
}

export default new Vuex.Store({
	state,mutations
})
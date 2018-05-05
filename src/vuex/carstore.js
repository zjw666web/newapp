import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

var tableAdminsList=function(pid){ // 获取数据库里面的用户信息
	for(var i=0;i<state.list.length;i++){
		if(state.list[i].pid==pid||pid==state.list[i].categoryId){
			state.list[i].count++
			return ;
		}
	}
	
	axios({
		url:'../../static/json/zong.json',
		method:'get'
	}).then(function(res){
		console.log(res);
		
		
	
		for(var i=0;i<res.data.length;i++){
			// 组织信息： 服务器给咱们的数据，也不能随便加进去
			if(pid==res.data[i].pid||pid==res.data[i].categoryId){
			
			var obj={
					imgsrc:res.data[i].thumbImg||res.data[i].imageurl,
//					imageurl
					miaoshu:res.data[i].categoryName||res.data[i].name,
					//name
					jiage:res.data[i].salePrice/100||res.data[i].categoryId,
					count:1,
					pid:res.data[i].pid,
					categoryId:res.data[i].categoryId,
					zongjia:res.data[i].salePrice/100||res.data[i].categoryId
				};
				state.list.push(obj); // state里面的数组 就有数据了（当前页的数据） 将请求过来的数据储存
				
				return;
			
			}
		       
			
		};
		console.log('我整理出来的数据是')
		console.log(state.list)
	})
}

const state={
	
	// table组件的数据
		list:[] ,//容器，装放请求到的当前页面的人员信息
		getList:tableAdminsList,
		idlist:[],
		ss:'',
		all:0,
		foothideen:{
			display:'flex'
		}
		
}

const mutations={ 
	    abc(state,str){
	    	state.foothideen.display=str
	    },
		add(state,pid){
			//
			for(var i=0;i<state.list.length;i++){
				if(state.list[i].pid==pid||state.list[i].categoryId==pid){
					state.list[i].count++;
					state.list[i].zongjia=state.list[i].count*state.list[i].jiage
				}
			}
			
		},
		min(state,pid){
			for(var i=0;i<state.list.length;i++){
				if(state.list[i].pid==pid||state.list[i].categoryId==pid){
					if(state.list[i].count<=1){
						state.list[i].count=1;
						state.list[i].zongjia=state.list[i].count*state.list[i].jiage
					}else{
						state.list[i].count--;
						state.list[i].zongjia=state.list[i].count*state.list[i].jiage
					}
					
				}
			}
		},
		setss(state,str){
		    state.ss=str
	},
	total(state){
		state.all=0
		 for(var i=0;i<state.list.length;i++){
				state.all+=state.list[i].zongjia
			}
	}
	
}

export default new Vuex.Store({
	state,mutations
})
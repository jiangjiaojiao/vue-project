import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	page:'main',
	userInfo:{
		id:'',//19
		name:'',
		nickname:'', //Julian
		phone:'', //17603027471
		password:'',
		imgType:'',
		gender:'',
		address:'',
	},
	payAddrIndex:0,
	orderList:[],
	orderInfo:{
		shopId:'',
		shopName:'',
		totalMoney:'',
		orderTime:'',
		fee:''
	}
}

const mutations = {
	changePage(state,data){
		state.page = data;
	},
	changePayAddrIndex(state,index){
		state.payAddrIndex = index;
	},
	addFood(state,data){
		var flag = false;
		var list = state.orderList;
		if(list.length > 0) {
			for(var i = 0; i < list.length; i++){
				if(list[i].id == data.id) {
					list[i].num = data.num;
					flag = true;
					break;
				}
			}
			if(!flag){
				list.push(data);
			}
		}else{
			list.push(data);
		}
	},
	delFood(state,data){
		var flag = false;
		var list = state.orderList;
		for(var i = 0; i < list.length; i++){
			if(list[i].id == data.id) {
				if (data.num == 0) {
					list.splice(i,1);
				} else {
					list[i].num = data.num;
				}
				break;
			}
		}
	},
	clearOrderList(state,data){
		state.orderList = [];
	},
	clearUserInfo(state,data){
		state.userInfo = {
			id:'',
			name:'',
			nickname:'', 
			phone:'', 
			password:'',
			imgType:'11',
			gender:'男',
			addr:'',
		};
	},
	modifyUserInfo(state,data){
		state.userInfo[data.k] = data.v;
	},
	changeOrderInfo(state,data){
		state.orderInfo = data;
	},
	clearOrderInfo(state,data){
		state.orderInfo = {
			shopId:'',
			shopName:'',
			totalMoney:'',
			orderTime:'',
			fee:''
		}
	}
}

const getters = {
	
}

const actions = {
	
}

const store = new Vuex.Store({
	state,getters,mutations,actions
})

export default store
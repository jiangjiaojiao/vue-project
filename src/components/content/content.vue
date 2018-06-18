<template>
<div class="content">
		<p>App vue</p>
        <p>{{msg}}</p>
        <button @click="$store.commit('add',10)">+</button>
        <button @click="reduce">-</button>
        <button @click="addAction">action+</button>
        <button @click="reduceAction">action-</button>
        <p>this is a getters count value: {{$store.getters.count}}</p>
        <!-- <p>this is a state count value: {{$store.state.a.count1}}</p> -->
</div>
</template>
<script>
	import userManage from './userManage'
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default{
		name:'content',
		data(){
			return{
				msg: 'Welcome to Your Vue.js App'
			}
		},
		computed:{
        ...mapGetters(['count']),
        /*...mapState(['count1'])*/
    	},
		methods:{
        ...mapMutations([
            'add',
            'reduce'
        ]),
        ...mapActions([ 
            'addAction',
            'reduceAction'
        ])
    	},
		components: {
        	userManage,
    	}
	}
</script>
<style scoped>
	
</style>
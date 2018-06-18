<template>
<div class="userManage">
	<h2>{{msg}}</h2>
            <hr/>
    <h3>{{$store.state.a.count}}</h3>
</div>
</template>
<script>
 import store from '../../vuex/store'
	export default{
		name:'userManage',
		data(){
			return{
				msg:'Hello Vuex',
			}
		},
		store,
		components:{

		}
	}
</script>
<style scoped>
	
</style>
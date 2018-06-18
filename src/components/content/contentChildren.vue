<template>
<div class="contentChildren">
	<div id="example-3" class="demo">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="John">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="Jack">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
</div>
</template>
<script>
	export default{
		name:'contentChildren',
		data(){
			return{
				social:['facebook'],
                checkedNames:[]
			}
		},
		props:['text'],
		components:{

		}
	}
</script>
<style scoped>
	
</style>
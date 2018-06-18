<template>
    <div class="layout">
        <Menu mode="horizontal" :theme="theme1" active-key="1" @on-select="changeMenu">
        <Menu-item key="1" name="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </Menu-item>
        <Menu-item key="2" name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </Menu-item>
        <Submenu key="3" name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <Menu-group title="使用">
                <Menu-item key="3-1" name="3-1">新增和启动</Menu-item>
                <Menu-item key="3-2" name="3-2">活跃分析</Menu-item>
                <Menu-item key="3-3" name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item key="3-4" name="3-4">用户留存</Menu-item>
                <Menu-item key="3-5" name="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu>
        <Menu-item key="4" name="4">
            <Icon type="settings"></Icon>
            综合设置
        </Menu-item>
        </Menu>
        <div class="sys-content">
           <router-view></router-view> 
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1:'dark'
            }
        },
        methods:{     
            changeMenu:function(name){
                switch(name){
                    case '1':
                        this.$router.push({'path':'/contentNav'});
                    break;
                    case '2':
                        this.$router.push({'path':'/userManage'});
                    break;
                    case '3-1':
                        this.$router.push({'path':'/content'});
                    break;
                    case '3-2':
                        this.$router.push({'path':'/addNew'});
                    break;
                }
            }
        },
        mounted:function(){
            let path=this.$route.path;
            let name=''
            switch(path){
                case '/contentNav':
                    name="1";
                    break;
                case '/userManage':
                    name="2";
                    break;
                case '/content':
                    name="3-1";
                    break;
                case '/addNew':
                    name="3-2";
                    break;
            }
            this.activeName=name;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

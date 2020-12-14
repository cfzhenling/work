<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">
                <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/ucenter">简介</router-link>
            </el-menu-item>
             <el-menu-item v-if="isLogin" index="3" class="login">
                <span>zhenling</span>
                <button @click="logoutHandler">退出</button>
            </el-menu-item>
            <el-menu-item v-else index="3" class="login">
                <router-link to="/login">登陆</router-link>
            </el-menu-item>          
</el-menu>
</div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: "1",
            isLogin:false
        }
    },
    created() {
        if(localStorage.getItem("token")){
            this.isLogin = true;
        }else{
            this.isLogin = false
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        logoutHandler(){
            localStorage.removeItem("token");
            this.$router.push("/login");
        }
    }
};
</script>
<style scoped>

.login{
    float: right;
}
.el-menu-demo{
    background:MediumTurquoise;
}
</style>
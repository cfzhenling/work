<template>
    <div class="login-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">登陆注册</span>
            </div>
            <div>
                <el-input v-model="username"></el-input>
                <el-input v-model="password"></el-input>
                <el-button type="primary" @click="loginHandler">登录</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        loginHandler(){
            this.$api.login({
                username:this.username,
                password:this.password
            }).then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token);
                    // this.$router.replace("/");
                    window.history.back();
                }else{
                    alert(res.data.msg);
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>
.login-container {
    width: 1000px;
    text-align: center;
    margin: 0 auto;
}

.title {
    text-align: center;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 480px;
    margin: 0 auto;
}
</style>
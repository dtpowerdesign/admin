<template>
  <div class="login">
    <el-form :model="Form" status-icon :rules="rules"  label-width="100px" ref="login">
      <el-form-item style="margin-left:-100px;"><span style="color:gray;font-size:1.5rem">管理员登录</span></el-form-item>
      <el-form-item label="" prop="user" style="margin-left:-100px">
        <el-input v-model="Form.user" placeholder="输入email/手机号">
        <i slot="prefix" class="icon iconfont icon-guanliyuan"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="" prop="pass" style="margin-left:-100px">
        <el-input type="password" v-model="Form.pass" placeholder="输入密码">
        <i slot="prefix" class="icon iconfont icon-suo"></i>
        </el-input>
      </el-form-item>
      <el-form-item style="margin-left:-100px">
        <div style="display:flex;justify-content:space-between">
          <el-checkbox v-model="checked">记住我(30天之内自动登录)</el-checkbox>
          <span style="cursor:pointer;color:gray;" @click="$router.push('/register')">前往注册</span>
        </div>
      </el-form-item>
      <el-form-item style="margin-left:-100px">
        <el-button type="primary" style="width:100%" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validateUser = (rule, value, callback) => {
      var re = /0?(13|14|15|17|18|19)[0-9]{9}|\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else if (!re.test(value)) {
        return callback(new Error('账号只能为手机号或者邮箱'))
      } else if (!this.$preSQL.pre(value)) {
        callback(new Error('非法字符串'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!this.$preSQL.pre(value)) {
        callback(new Error('非法字符串'))
      } else {
        callback()
      }
    }
    return {
      checked: true,
      Form: {
        user: '',
        pass: ''
      },
      rules: {
        user: [
          { validator: validateUser, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'change' }
        ]}
    }
  },
  methods: {
    login () {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$http.post(this.$domain.domain1 + 'electric-design/MLogin', {
            'account': this.Form.user,
            'password': this.Form.pass
          }).then((res) => {
            if (res.data.result && res.data.result !== 'false') {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              if (this.checked) {
                this.$cookie.set('adminUser', this.Form.user, 30)
                this.$cookie.set('adminPass', this.Form.pass, 30)
              } else {
                this.$cookie.set('adminUser', this.Form.user)
                this.$cookie.set('adminPass', this.Form.pass)
              }
              this.$router.push('/manage')
            } else {
              this.$message({
                message: `登录失败:${res.data.reason}`,
                type: 'warning'
              })
            }
          }).catch((err) => { console.log(err) })
        } else {
          this.$message({
            message: '请确保所填信息符合要求',
            type: 'warning'
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    background-image:url(../../assets/register.jpg);
    height:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: 1px solid black;
}
.top{
    background-color:#4d83e7;
    display:flex;
    justify-content:space-between;
}
.top span{
    cursor:pointer;
}
.top span:hover{
    color:yellow;
}
.top-left{
    width:30%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.top-left>img{
    width:15%;
}
.top-left>span{
    font-size:1.5rem;
    color:white;
    margin-left:.5rem;
}
.top-right{
    color:white;
    font-size:1.2rem;
    display:flex;
    justify-content:center;
    align-items:center;
}
.top-right>span{
    margin-right:1rem;
}
.el-form{
  width:21%;
  margin:10% auto 0 auto;
    padding:2.5rem 1.5rem 0.3rem 1.5rem;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  border-radius:.3rem .3rem 0 0;
  background-color: white;
}
.el-form:hover{
  -webkit-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.icon{

}
</style>

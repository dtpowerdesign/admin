<template>
  <div class="manageregister">
  <el-row>
  <el-col :span="8" :offset="2">
  <el-form :model="Form" status-icon label-position="left" :rules="rules" ref="manageregister" label-width="100px">
  <el-form-item style="margin-left:-100px;"><span style="color:gray;font-size:1.5rem">管理员注册</span></el-form-item>
  <el-form-item label="账号" prop="user">
    <el-input type="text" v-model="Form.user" auto-complete="off" placeholder="请填写手机号或者邮箱"></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input type="text" v-model="Form.name" auto-complete="off" placeholder="请填写中文姓名"></el-input>
  </el-form-item>
  <el-form-item label="key" >
    <el-input type="text" v-model="Form.key" auto-complete="off" placeholder="从公司申请到的key"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="Form.pass" auto-complete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="Form.checkPass" auto-complete="off" placeholder="请确认密码"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="check" >
    <el-col :span="16"><el-input type="text" v-model="Form.check" auto-complete="off" placeholder="请填写收到的验证码"></el-input></el-col>
    <el-col :span="8"><el-button type="primary" @click="check()">免费获取</el-button></el-col>
  </el-form-item>
  <el-form-item style="margin-left:-100px">
    <el-button type="primary" @click="submitForm('Form')">注册</el-button>
    <el-button @click="resetForm('Form')">重置</el-button>
  </el-form-item>
  <el-form-item style="margin-left:-100px">
    <el-checkbox v-model="checked" checked><span @click="$router.push('/protocol')" title="点击阅读">我已阅读并同意相关服务条款和隐私政策</span></el-checkbox>
  </el-form-item>
  </el-form>
  </el-col>
  </el-row>
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
      } else {
        if (this.Form.checkPass !== '') {
          this.$refs.manageregister.validateField('checkPass')
        }
        if (!this.$preSQL.pre(value)) {
          callback(new Error('非法字符串'))
        } else {
          callback()
        }
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.Form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else if (!this.$preSQL.pre(value)) {
        callback(new Error('非法字符串'))
      } else {
        callback()
      }
    }
    var checkCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'))
      } else if (value !== this.Form.returnCheck) {
        callback(new Error('请输入与收到短信同样的的验证码'))
      } else if (!this.$preSQL.pre(value)) {
        callback(new Error('非法字符串'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名字不能为空'))
      } else if (!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(value)) {
        return callback(new Error('您输入的姓名不合法'))
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
        comapny: '',
        pass: '',
        name: '',
        checkPass: '',
        check: '',
        returnCheck: '123456'
      },
      rules: {
        user: [
          { validator: validateUser, trigger: 'blur' }
        ],
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        check: [
          { validator: checkCheck, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    check () {
      this.$http.post(this.$domain.domain1 + 'electric-design/sendCheckMsgByJson', {'testNumber': this.Form.user}).then((res) => {
        console.log(res.data)
        if (!res.data.result) {
          this.$message({
            type: 'warning',
            message: `获取验证码失败,原因${res.data.reason}`
          })
        } else {
          this.$message({
            type: 'success',
            message: `验证码已经发送，请填写`
          })
          this.Form.returnCheck = res.data.checkMsg
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    submitForm (formName) {
      if (!this.checked) {
        this.$message({
          message: '您还未同意条款哦',
          type: 'warning'
        })
      } else {
        this.$refs.manageregister.validate((valid) => {
          if (valid) {
            this.$http.post(this.$domain.domain1 + 'electric-design/MRegister ', {
              'account': this.Form.user,
              'password': this.Form.pass,
              'name': this.Form.name,
              'checkMsg': this.Form.check,
              'manageSecret': this.Form.key
            }).then((res) => {
              if (res.data.result && res.data.result !== 'false') {
                this.$message({
                  message: '恭喜您,注册成功',
                  type: 'success'
                })
                this.$router.push('/login')
              } else {
                this.$message({
                  message: `注册失败,原因${res.data.reason}`,
                  type: 'warning'
                })
              }
            }).catch((err) => {
              console.log(err)
            })
          } else {
            this.$message({
              message: '请确保所填信息符合要求',
              type: 'warning'
            })
            return false
          }
        })
      }
    },
    resetForm (formName) {
      this.$refs.manageregister.resetFields()
    }
  },
  watch: {
    checked () {
      console.log(this.checked)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.manageregister{
    background-image:url(../../assets/register.jpg);
    height:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
    margin-top:4%;
    padding:2rem 2rem 0 2rem;
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
</style>

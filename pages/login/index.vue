<template>
  <div style="background-color: white">
    <div class="container container-240">
      <div class="row" style="margin-top: 30px">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div>
            <h1>Login</h1>
          </div>
          <div style="margin-top: 30px">
            <div>
              <div class="form-group">
                <label for="inputfname_2" class=" control-label">Email <span class="f-red">*</span></label>
                <a-input placeholder="email" class="form-control form-account" id="inputfname_2" size="large" v-model="lemail"/>
              </div>
              <div class="form-group">
                <label for="inputfname_3" class=" control-label">Password <span class="f-red">*</span></label>
                <a-input placeholder="password" class="form-control form-account" id="inputfname_3" size="large" type="password" v-model="lpass"/>
              </div>
              <div class="cart-total-bottom v2">
                <a-button type="primary" @click="onClickLogin">Login</a-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div>
            <h1>Register</h1>
          </div>
          <div style="margin-top: 30px">
            <div>
              <div class="form-group">
                <label class=" control-label">First Name <span class="f-red">*</span></label>
                <a-input placeholder="First Name" class="form-control form-account" size="large" v-model="rfname"/>
              </div>
              <div class="form-group">
                <label class=" control-label">Last Name <span class="f-red">*</span></label>
                <a-input placeholder="Last Name" class="form-control form-account" size="large" v-model="rlname"/>
              </div>
              <div class="form-group">
                <label class=" control-label">Phone Number <span class="f-red">*</span></label>
                <a-input placeholder="Phone Number" class="form-control form-account" size="large" v-model="rphone"/>
              </div>
              <div class="form-group">
                <label class=" control-label">Email <span class="f-red">*</span></label>
                <a-input placeholder="Email" class="form-control form-account" size="large" v-model="remail"/>
              </div>
              <div class="form-group">
                <label  class=" control-label">Password <span class="f-red">*</span></label>
                <a-input placeholder="Password" class="form-control form-account" size="large" type="password" v-model="rpass"/>
              </div>
              <div class="cart-total-bottom v2">
                <a-button type="primary" @click="onClickRegister">Register</a-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CreateUserDocument, LoginUserDocument} from "~/gql";

@Component
export default class Login extends Vue {
  private lemail = ''
  private lpass = ''
  private remail = ''
  private rpass = ''
  private rfname = ''
  private rlname = ''
  private rphone = ''

  onClickLogin() {
    if (this.lemail === ''){
      this.$message.error('Please enter your Email')
      return
    }
    if (this.lpass === ''){
      this.$message.error('Please enter your Password')
      return
    }
    this.$apollo.mutate({
      mutation: LoginUserDocument,
      variables: {
        email: this.lemail,
        password: this.lpass
      }
    })
    .then(value => {
      this.$message.success('Welcome Back')
      this.$apolloHelpers.onLogin(value!.data!.LoginUser!.token)
      this.$store.dispatch('user/loginUser', {
        id: value.data.LoginUser.user.id,
        email: value.data.LoginUser.user.email,
        phone: value.data.LoginUser.user.phoneNumber,
        verified: value.data.LoginUser.user.verified,
        firstName: value.data.LoginUser.user.firstName,
        lastName: value.data.LoginUser.user.lastName
      })
      this.$router.push('/')
    })
    .catch(error => {
      this.$message.error(error.message)
    })
  }

  onClickRegister() {
    if (this.rfname === ''){
      this.$message.error('Please enter your First Name')
      return
    }
    if (this.rlname === ''){
      this.$message.error('Please enter your Last Name')
      return
    }
    if (this.remail === ''){
      this.$message.error('Please enter your Email')
      return
    }
    if (this.rphone === '' && !isNaN(Number(this.rphone)) && this.rphone.length === 10){
      this.$message.error('Please enter a valid phone number')
      return
    }
    if (this.rpass === ''){
      this.$message.error('Please enter your Password')
      return
    }
    this.$apollo.mutate({
      mutation: CreateUserDocument,
      variables: {
        fname: this.rfname,
        lname: this.rlname,
        phone: this.rphone,
        email: this.remail,
        password: this.rpass
      }
    }).then(value => {
      this.$message.success('Welcome')
      this.$apolloHelpers.onLogin(value.data!.CreateUser!.token)
      this.$store.dispatch('user/loginUser', {
        id: value.data.CreateUser.user.id,
        email: value.data.CreateUser.user.email,
        phone: value.data.CreateUser.user.phoneNumber,
        verified: value.data.CreateUser.user.verified,
        firstName: value.data.CreateUser.user.firstName,
        lastName: value.data.CreateUser.user.lastName
      })
      this.$router.push('/')
    }).catch(error => {
      this.$message.error(error.message)
    })
  }

}
</script>

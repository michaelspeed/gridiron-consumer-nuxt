<template>
  <div>
    <v-expand-transition>
      <v-sheet v-if="!regopen" elevation="0" >
        <div>
          <h1 class="primary--text">Login</h1>
        </div>
        <div style="margin-top: 30px">
          <div>
            <div class="form-group">
              <label for="inputfname_2" class=" control-label primary--text">Email <span class="f-red">*</span></label>
              <a-input placeholder="email" class="form-control form-account" style="color: white" id="inputfname_2" size="large" v-model="lemail"/>
            </div>
            <div class="form-group">
              <label for="inputfname_3" class=" control-label primary--text">Password <span class="f-red">*</span></label>
              <a-input placeholder="password" class="form-control form-account" style="color: white" id="inputfname_3" size="large" type="password" v-model="lpass"/>
            </div>
            <div class="cart-total-bottom v2">
              <v-btn color="primary" tile @click="onClickLogin" v-if="!loginin">Login</v-btn>
              <v-progress-circular
                indeterminate
                color="primary"
                v-if="loginin"
              ></v-progress-circular>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a href="javascript:;" @click="regopen = true">New here? Register</a>
        </div>
      </v-sheet>
    </v-expand-transition>
    <v-expand-transition>
      <v-sheet v-if="regopen" elevation="0">
        <div>
          <h1 class="primary--text">Register</h1>
        </div>
        <div style="margin-top: 30px">
          <div>
            <div class="form-group">
              <label for="inputfname_2" class=" control-label primary--text">Email <span class="f-red">*</span></label>
              <a-input placeholder="email" class="form-control form-account" style="color: white" size="large" v-model="remail"/>
            </div>
            <div class="form-group">
              <label for="inputfname_3" class=" control-label primary--text">Password <span class="f-red">*</span></label>
              <a-input placeholder="password" class="form-control form-account" style="color: white" size="large" type="password" v-model="rpass"/>
            </div>
            <div class="form-group">
              <label for="inputfname_3" class=" control-label primary--text">First Name <span class="f-red">*</span></label>
              <a-input placeholder="password" class="form-control form-account" style="color: white" size="large" type="password" v-model="rfname"/>
            </div>
            <div class="form-group">
              <label for="inputfname_3" class=" control-label primary--text">Last Name <span class="f-red">*</span></label>
              <a-input placeholder="password" class="form-control form-account" style="color: white" size="large" type="password" v-model="rlname"/>
            </div>
            <div class="form-group">
              <label for="inputfname_3" class=" control-label primary--text">Phone <span class="f-red">*</span></label>
              <a-input placeholder="password" class="form-control form-account" style="color: white" size="large" type="password" v-model="rphone"/>
            </div>
            <div class="cart-total-bottom v2">
              <v-btn color="primary" tile @click="onClickLogin" v-if="!loginin">Register</v-btn>
              <v-progress-circular
                indeterminate
                color="primary"
                v-if="loginin"
              ></v-progress-circular>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a href="javascript:;" @click="regopen = false">Already a user?</a>
        </div>
      </v-sheet>
    </v-expand-transition>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CreateUserDocument, LoginUserDocument} from "~/gql";

@Component
export default class Auth extends Vue {

  private lemail = ''
  private lpass = ''
  private loginin = false
  private regopen = false

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
    this.loginin = true
    this.$apollo.mutate({
      mutation: LoginUserDocument,
      variables: {
        email: this.lemail,
        password: this.lpass
      }
    })
      .then(value => {
        this.loginin = false
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
        this.loginin = false
      })
  }

  onCreateRegister() {
    if (this.remail === ''){
      this.$message.error('Please enter your Email')
      return
    }
    if (this.rpass === ''){
      this.$message.error('Please enter your Password')
      return
    }
    if (this.rfname === ''){
      this.$message.error('Please enter your First Name')
      return
    }
    if (this.rlname === ''){
      this.$message.error('Please enter your Last Name')
      return
    }
    if (this.rphone === ''){
      this.$message.error('Please enter your Phone Number')
      return
    }
    this.loginin = true
    this.$apollo.mutate({
      mutation: CreateUserDocument,
      variables: {
        lname: this.rlname,
        fname: this.rfname,
        phone: this.rphone,
        password: this.rpass,
        email: this.remail
      }
    })
  }
}
</script>

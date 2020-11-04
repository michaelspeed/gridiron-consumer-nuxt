<template>
  <v-app-bar
    color="primary"
    :collapse="!collapseOnScroll"
    :collapse-on-scroll="collapseOnScroll"
    scroll-target="#scrolling-techniques-6"
    absolute
    elevate-on-scroll
    min-width="370px"
  >
    <v-app-bar-nav-icon style="color: white"></v-app-bar-nav-icon>
    <img src="/logo/logo.png" alt="" style="height: 90px; cursor: pointer" @click="$router.push('/')">
    <v-spacer></v-spacer>
    <v-btn
      text
      style="color: white"
      v-if="$store.state.user.user"
      @click="$router.push('/accounts')"
    >{{$store.state.user.user.firstName}}</v-btn>
    <v-dialog
      v-model="auth"
      width="60vw"
      v-if="!$store.state.user.user"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          style="color: white"
          v-bind="attrs"
          v-on="on"
        >Login / register</v-btn>
      </template>
      <v-sheet>
        <div class="row">
          <v-sheet class="col-md-6" color="primary" style="padding: 25px">
            <div class="d-flex flex-row justify-content-center align-items-center">
              <div>
                <img src="/logo/logo.png" alt="" style="height: 100px"/>
              </div>
            </div>
            <h3 style="color: white; margin-top: -20px; margin-left: 10px">Get access to lot of amazing products</h3>
          </v-sheet>
          <div class="col-md-6" style="padding: 25px">
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
              <a href="javascript:;" @click="onClickAccount">New here? Register</a>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-dialog>
    <v-btn
      icon
      color="white"
      @click="opencart = true"
      v-if="$store.state.cart.cart.length === 0"
    >
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-badge
      color="accent"
      overlap
      style="margin-right: 10px"
      small
      :content="$store.state.cart.cart.length"
      v-if="$store.state.cart.cart.length > 0"
    >
      <v-btn
        icon
        color="white"
        @click="opencart = true"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-badge>
    <v-dialog
      v-model="opencart"
      color="primary"
      width="60vw"
    >
      <v-sheet color="primary" style="padding: 20px">
        <h2 style="color: white;">Cart</h2>
        <div>
          <ul class="" style="padding-left: 0px">
            <li class="" v-for="(cartitems, index) of cart" :key="cartitems.variant.id">
              <v-card style="padding: 10px; width: 100%; margin: 10px">
                <div class="d-flex justify-content-between">
                  <div class="product-img-wrap">
                    <a href="#">
                      <img :src="cartitems.variant.assetUrl" alt="" class="img-reponsive" style="height: 100px;width: 200px; object-fit: contain;">
                    </a>
                  </div>
                  <div class="product-details" style="width: 100%;">
                    <div class="inner-left" style="width: 100%; max-width: 100%">
                      <div class="product-name" style="width: 100%;">
                        <a href="#">
                          <h4>{{cartitems.variant.name}}</h4>
                        </a>
                      </div>
                      <div class="product-price">
                        ₹ {{cartitems.price.price}} <span>( x{{cartitems.quantity}})</span>
                      </div>
                    </div>
                  </div>
                  <v-btn
                    icon
                    color="primary"
                    @click="onRemoveItem(index)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </li>
          </ul>
        </div>
        <v-card-actions>
          <v-btn
            rounded
            color="primary"
            style="margin-left: 6px"
            @click="onGoToCart"
          >
            Go to Cart
          </v-btn>
          <v-btn
            rounded
            color="primary"
            style="margin-left: 6px"
            @click="onGoToCart"
          >
            Checkout
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-dialog>
  </v-app-bar>
  <!--<div>

    <div class="topbar">
      <div class="container container-240">
        <div class="row flex">
          <div class="col-md-6 col-sm-6 col-xs-4 flex-left">
            <div class="topbar-left">
              <div class="element hidden-xs hidden-sm">
                <a href="#"><img src="/img/icon-track.png" alt=""><span>Track Your Order</span></a>
              </div>
              <div class="element element-account hidden-md hidden-lg">
                <a href="#">My Account</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-8 flex-right">
            <div class="topbar-right">
              <div class="element hidden-xs hidden-sm">
                <a href="#"><img src="/img/icon-phone.png" alt=""><span>Save big on our app!</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-center">
      <div class="container container-240">
        <div class="row flex" v-if="$apollo.queries.GetDefaultStore.loading">
          <div style="display: flex; justify-content: center; align-items: center">
            <fvLoading/>
          </div>
        </div>
        <div class="row flex" v-if="!$apollo.queries.GetDefaultStore.loading">
          <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 v-center header-logo">
            <a href="/"><h1 style="font-weight: bolder">{{ GetDefaultStore.storeName }}</h1></a>
          </div>
          <div class="col-lg-7 col-md-7 v-center">
            <a-input-search size="large" placeholder="Search ..." style="width: 100%" />
          </div>
          <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6 v-center header-sub">
            <div class="right-panel">
              <div class="header-sub-element hidden-xs hidden-sm">
                <div class="sub-left">
                  <i class="fas fa-phone-volume icon-top-bar" style="font-size: 35px"></i>
                </div>
                <div class="sub-right">
                  <span>Call Us Free</span>
                  <div class="phone">{{GetDefaultStore.phoneNumber}}</div>
                </div>
              </div>
              <div class="header-sub-element row">
                <a class="hidden-xs hidden-sm" href="javascript:;" @click="onClickAccount">
                  <i class="fas fa-user icon-top-bar" style="font-size: 25px"></i>
                </a>
                &lt;!&ndash;<a href="#"><img src="img/icon-heart.png" alt=""></a>&ndash;&gt;
                <a href="#"><i class="fas fa-search icon-top-bar" style="font-size: 25px"></i></a>
                <div class="cart">
                  <a href="javascript:;" @click="onClickCart">
                    <i class="fas fa-shopping-cart icon-top-bar" style="font-size: 25px"></i>
                    <span class="count cart-count">{{cart.length}}</span>
                  </a>
                </div>
                <a href="#" class="hidden-md hidden-lg icon-pushmenu js-push-menu">
                  <i class="fa fa-bars icon-top-bar"></i>
                </a>
              </div>
              <a-drawer width="640" placement="right" :visible="cartOpen" :closable="true" @close="onClickCart">
                <h3>Cart</h3>
                <div>
                  <ul class="mini-products-list">
                    <li class="item-cart" v-for="(cartitems, index) of cart" :key="cartitems.variant.id">
                      <div class="product-img-wrap">
                        <a href="#"><img :src="cartitems.variant.assetUrl" alt="" class="img-reponsive"></a>
                      </div>
                      <div class="product-details" style="width: 100%;">
                        <div class="inner-left">
                          <div class="product-name" style="width: 100%;"><a href="#">{{cartitems.variant.name}} </a></div>
                          <div class="product-price">
                            ₹ {{cartitems.price.price}} <span>( x{{cartitems.quantity}})</span>
                          </div>
                        </div>
                      </div>
                      <a href="javascript:;" @click="onRemoveItem(index)" class="e-del"><i class="ion-ios-close-empty"></i></a>
                    </li>
                  </ul>
                  <div class="button-cart">
                    <a-button type="dashed" @click="onGoToCart">View Cart</a-button>
                    <a-button type="primary">Checkout</a-button>
                  </div>
                </div>
              </a-drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>-->
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {GetDefaultStoreDocument, LoginUserDocument, Store} from "~/gql";
import {mapState} from "vuex";

@Component({
  apollo: {
    GetDefaultStore: {
      query: GetDefaultStoreDocument
    }
  },
  computed: {
    ...mapState({
      cart: (state: any) => state.cart.cart,
      cartOpen: (state: any) => state.cart.cartOpen
    })
  },
})
export default class TopBar extends Vue {
  private GetDefaultStore: Store
  private search = ''
  private collapseOnScroll = true
  private auth = false
  private carts = false

  private opencart = false;
  private lemail = ''
  private lpass = ''
  private loginin = false

  user() {
    return this.$store.state.user.user
  }

  mounted() {
    this.$store.dispatch('user/autoLogin')
    this.$store.dispatch('defstore/setDefault')
  }

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

  onGoToCart() {
    this.$router.push('/cart')
    this.$store.dispatch('cart/toggleCart')
    this.opencart = false
  }

  onClickCart() {
    this.$store.dispatch('cart/toggleCart')
  }

  onRemoveItem(index) {
    this.$store.dispatch('cart/removeFromCart', index)
  }

  onClickAccount() {
    if (this.user() === undefined) {
      this.$router.push('/login')
    } {
      this.$router.push('/accounts')
    }
    this.auth = false
  }
}
</script>

<style scoped>
.icon-top-bar {
  background: -webkit-linear-gradient(#9C27B0, #BA68C8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

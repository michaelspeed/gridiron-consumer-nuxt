<template>
  <div>
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
                <!--<a href="#"><img src="img/icon-heart.png" alt=""></a>-->
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
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {GetDefaultStoreDocument, Store} from "~/gql";
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

  user() {
    return this.$store.state.user.user
  }

  onGoToCart() {
    this.$router.push('/cart')
    this.$store.dispatch('cart/toggleCart')
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
  }
}
</script>

<style scoped>
.icon-top-bar {
  background: -webkit-linear-gradient(#D9F66B, #8CC209);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

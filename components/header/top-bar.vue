<template>
  <v-app-bar
    color="#23272b"
    absolute
    elevation="0"
    style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000"
  >
    <v-btn
      icon
      color="primary"
      :style="{'margin-left': 10, 'margin-right': mainMobile ? 0 : 10}"
      @click="menuActive = true"
    >
      <v-icon color="primary">mdi-arrange-bring-to-front</v-icon>
    </v-btn>
    <img v-if="!mainMobile" src="/logo/mainlogo.png" alt="" style="height: 70px; cursor: pointer; background-color: #ffbf00" @click="$router.push('/')">
    <img v-if="mainMobile" src="/logo/mainlogo.png" alt="" style="height: 40px; cursor: pointer; background-color: #ffbf00" @click="$router.push('/')">
    <v-spacer></v-spacer>
    <nav class="main-menu flex align-center">
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav js-menubar">
          <li class="level1" v-for="(menuitem, index) of menu" :class="{'dropdown': true}" :key="index">
            <a href="javascript:;" @click="OnClickMenu(menuitem)" v-if="!menuitem.children || menuitem.children.length === 0">{{menuitem.title.substring(0, 10)}}</a>
            <v-menu
              open-on-hover
              offset-y
              transition="scale-transition"
              v-if="menuitem.children && menuitem.children.length > 0"
            >
              <template v-slot:activator="{ on, attrs }">
                <a href="javascript:;" @click="OnClickMenu(menuitem)" v-bind="attrs"
                   v-on="on">{{menuitem.title.substring(0, 10)}}</a>
              </template>
              <v-list>
                <v-list-item
                  v-for="(subitem, subindex) of menuitem.children"
                  :key="subindex"
                  @click="OnClickMenu(menuitem)"
                >
                  <v-list-item-title>{{subitem.title.substring(0, 10)}}</v-list-item-title>
                  <!--<a href="javascript:;" @click="OnClickMenu(menuitem)" title="">{{subitem.title}}</a>-->
                </v-list-item>
              </v-list>
            </v-menu>

          </li>
        </ul>
      </div>
    </nav>
    <v-menu offset-y tile color="primary" v-if="$store.state.user.user">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          style="color: white"
          v-bind="attrs"
          v-on="on"
        >{{$store.state.user.user.firstName}}</v-btn>
      </template>
      <v-list>
        <v-list-item @click="$router.push('/accounts')">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/accounts?q=order')">
          <v-list-item-title>Orders</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/accounts?q=address')">
          <v-list-item-title>Addresses</v-list-item-title>
        </v-list-item>
        <v-list-item @click="onClickLogout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog
      v-model="auth"
      :width="mainMobile ? '100vw': '60vw'"
      v-if="!$store.state.user.user"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          style="color: white"
          v-bind="attrs"
          v-on="on"
          color="primary"
          v-if="!mainMobile"
        >Login / register</v-btn>
        <v-btn
          icon
          color="primary"
          v-bind="attrs"
          v-on="on"
          x-small
          v-if="mainMobile"
          style="margin-left: 5px"
        >
          <v-icon color="primary">mdi-lock</v-icon>
        </v-btn>
      </template>
      <v-sheet>
        <div class="row">
          <v-sheet class="col-md-6" color="primary" style="padding: 25px">
            <div class="d-flex flex-row justify-content-center align-items-center">
              <div>
                <img src="/logo/coloredlogo.jpg" alt="" style="height: 200px"/>
              </div>
            </div>
            <h3 style="color: #23272b; margin-left: 10px">Get access to lot of amazing products</h3>
          </v-sheet>
          <div class="col-md-6" style="padding: 25px">
            <Auth/>
          </div>
        </div>
      </v-sheet>
    </v-dialog>
    <v-btn
      icon
      color="primary"
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
      :width="mainMobile ? '100vw': '60vw'"
    >
      <v-sheet color="primary" style="padding: 20px">
        <h2 style="color: white;">Cart</h2>
        <div>
          <ul class="" style="padding-left: 0px">
            <li class="" v-for="(cartitems, index) of cart" :key="cartitems.variant.id">
              <v-card style="padding: 10px; width: 100%; margin: 10px" color="secondary">
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
    <v-bottom-sheet v-model="menuActive" fullscreen>
      <v-sheet elevation="4" style="height: 100%;" :style="{'padding': mainMobile ? 0 : 20}">
        <v-card-title style="display: flex; justify-content: space-between; align-items: center;" v-if="GetDefaultStore">
          <img v-if="!mainMobile" src="/logo/mainlogo.png" alt="" style="height: 70px; cursor: pointer; background-color: #ffbf00" @click="$router.push('/')">
          <img v-if="mainMobile" src="/logo/mainlogo.png" alt="" style="height: 40px; cursor: pointer; background-color: #ffbf00" @click="$router.push('/')">
          <v-btn
            icon
            color="primary"
            @click="menuActive = false"
          >
            <v-icon color="primary">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <hr style="border-top: 1px solid #2e3439"/>
        <div style="margin-left: 35px">
          <h4 :style="{'color': theme['color-primary-500']}">Golden Choice</h4>
        </div>
        <div class="row" style="padding: 20px">
          <div class="col-md-4 col-sm-6 col-xs-12" v-for="(menuitem, index) of menu" :key="index">
            <v-btn text color="primary" :x-small="mainMobile" @click="OnClickMenu(menuitem)">{{menuitem.title}}</v-btn>
            <div v-if="menuitem.children && menuitem.children.length > 0">
              <v-list :dense="mainMobile">
                <v-list-item
                  v-for="(subitem, subindex) of menuitem.children"
                  :key="subindex"
                  @click="OnClickMenu(subitem)"
                >
                  <v-list-item-title>{{subitem.title}}</v-list-item-title>
                  <!--<a href="javascript:;" @click="OnClickMenu(menuitem)" title="">{{subitem.title}}</a>-->
                </v-list-item>
              </v-list>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {GetDefaultStoreDocument, GetMenuDocument, LoginUserDocument, Store} from "~/gql";
import {mapState} from "vuex";
import {myTheme} from "~/utils/custom-theme";
import {getCollectionRoute, getFacetRoute} from "~/utils/routingUtils";
import Auth from "~/components/auth/auth.vue";

@Component({
  components: {Auth},
  apollo: {
    GetDefaultStore: {
      query: GetDefaultStoreDocument
    },
    GetMenu: {
      query: GetMenuDocument
    },
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

  private searchText = ''
  private theme = myTheme
  private mainMobile = this.$device.isMobile
  private menuActive = false

  private GetMenu
  private menu: any[] = []

  @Watch('GetMenu')
  onGetMenu() {
    this.menu = JSON.parse(this.GetMenu.menu)
  }

  user() {
    return this.$store.state.user.user
  }

  mounted() {
    this.$store.dispatch('user/autoLogin')
    this.$store.dispatch('defstore/setDefault')
  }

  OnClickMenu(item) {
    if (item.target === 'COLLECTION') {
      this.$router.push(getCollectionRoute(item.targetId))
    } else if (item.target === 'FACET') {
      this.$router.push(getFacetRoute(item.targetId))
    }
    this.menuActive = false
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

  onClickSearch() {

  }

  onClickLogout() {
    this.$apolloHelpers.onLogout()
    this.$store.dispatch('user/removeUser')
    this.$router.push('/')
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

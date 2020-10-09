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
        <div v-if="$apollo.queries.GetDefaultStore.loading"
             style="display: flex; justify-content: center; align-items: center">
          <fvLoading/>
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
                  <i class="fas fa-phone-volume" style="font-size: 35px"></i>
                </div>
                <div class="sub-right">
                  <span>Call Us Free</span>
                  <div class="phone">{{GetDefaultStore.phoneNumber}}</div>
                </div>
              </div>
              <div class="header-sub-element row">
                <a class="hidden-xs hidden-sm" href="">
                  <i class="fas fa-user" style="font-size: 25px"></i>
                </a>
                <!--<a href="#"><img src="img/icon-heart.png" alt=""></a>-->
                <a href="#"><i class="fas fa-search" style="font-size: 25px"></i></a>
                <div class="cart">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false" id="label5">
                    <i class="fas fa-shopping-cart" style="font-size: 25px"></i>
                    <span class="count cart-count">0</span>
                  </a>
                  <div class="dropdown-menu dropdown-cart">
                    <ul class="mini-products-list">
                      <li class="item-cart">
                        <div class="product-img-wrap">
                          <a href="#"><img src="img/cart1.jpg" alt="" class="img-reponsive"></a>
                        </div>
                        <div class="product-details">
                          <div class="inner-left">
                            <div class="product-name"><a href="#">Harman Kardon Onyx Studio </a></div>
                            <div class="product-price">
                              $ 60.00 <span>( x2)</span>
                            </div>
                          </div>
                        </div>
                        <a href="#" class="e-del"><i class="ion-ios-close-empty"></i></a>
                      </li>
                      <li class="item-cart">
                        <div class="product-img-wrap">
                          <a href="#"><img src="img/cart1.jpg" alt="" class="img-reponsive"></a>
                        </div>
                        <div class="product-details">
                          <div class="inner-left">
                            <div class="product-name"><a href="#">Harman Kardon Onyx Studio </a></div>
                            <div class="product-price">
                              $ 60.00 <span>( x2)</span>
                            </div>
                          </div>
                        </div>
                        <a href="#" class="e-del"><i class="ion-ios-close-empty"></i></a>
                      </li>
                    </ul>
                    <div class="bottom-cart">
                      <div class="cart-price">
                        <span>Subtotal</span>
                        <span class="price-total">$ 120.00</span>
                      </div>
                      <div class="button-cart">
                        <a href="#" class="cart-btn btn-viewcart">View Cart</a>
                        <a href="#" class="cart-btn e-checkout btn-gradient">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" class="hidden-md hidden-lg icon-pushmenu js-push-menu">
                  <i class="fa fa-bars f-15"></i>
                </a>
              </div>
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

@Component({
  apollo: {
    GetDefaultStore: {
      query: GetDefaultStoreDocument
    }
  }
})
export default class TopBar extends Vue {
  private GetDefaultStore: Store
  private search = ''
}
</script>

<template>
  <div style="background-color: white">
    <div class="container container-240">

      <div class="checkout">
        <ul class="breadcrumb v3">
          <li><a href="#">Home</a></li>
          <li class="active">Cart</li>
        </ul>
        <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="shopping-cart bd-7">
              <div class="cmt-title text-center abs">
                <h1 class="page-title v2">Cart</h1>
              </div>
              <div class="table-responsive">
                <table class="table cart-table">

                  <tbody>
                  <tr class="item_cart" v-for="(cartitem, index) of cart">
                    <td class="product-name flex align-center">
                      <a href="#" class="btn-del"><i class="ion-ios-close-empty"></i></a>
                      <div class="product-img">
                        <img :src="cartitem.variant.assetUrl" alt="Futurelife">
                      </div>
                      <div class="product-info">
                        <a href="javascript:;" title="">{{cartitem.variant.name}}</a>
                      </div>
                    </td>

                    <td class="bcart-quantity single-product-detail">
                      <div class="single-product-info">
                        <a-button type="dashed" shape="circle" icon="plus" @click="onIncreaseQuantity(index)"/>
                        <span style="margin-left: 10px; margin-right: 10px">{{cartitem.quantity}}</span>
                        <a-button type="dashed" shape="circle" icon="minus" @click="onDecreaseQuantity(index)"/>
                      </div>
                    </td>
                    <td class="total-price">
                      <p class="price">₹ {{cartitem.price.price * cartitem.quantity}}</p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="cart-total bd-7">
              <div class="cmt-title text-center abs">
                <h1 class="page-title v3">Cart totals</h1>
              </div>
              <div class="table-responsive">
                <table class="shop_table">
                  <tbody>
                  <tr class="cart-subtotal" >
                    <th>Subtotal</th>
                    <td>₹ {{onGetTotal()}}</td>
                  </tr>
                  <tr class="cart-shipping">
                    <th>Shipping</th>
                    <td class="td">
                      <ul class="shipping">
                        <li>
                          <input type="radio" name="gender" value="Flat" id="radio1" checked="checked">
                          <label for="radio1">Flat rate : $ 12</label>
                        </li>
                        <li>
                          <input type="radio" name="gender" value="Free" id="radio2">
                          <label for="radio2">Free Shipping</label>
                        </li>
                      </ul>
                      <a href="#" class="calcu">Calculate shipping</a>
                    </td>
                  </tr>
                  <tr class="order-total">
                    <th>Total</th>
                    <td>₹ {{onGetTotal()}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="cart-total-bottom" style="margin-bottom: 50px" v-if="onGetTotal() !== 0">
                <a href="javascript:;" @click="$router.push('/checkout')" class="btn-gradient btn-checkout">Proceed to checkout</a>
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
import {mapState} from "vuex";
import {ICartItem} from "~/store/cart";

@Component({
  computed: {
    ...mapState({
      cart: (state: any) => state.cart.cart,
    })
  },
})
export default class Cart extends Vue {
  private cart: ICartItem[]

  onIncreaseQuantity(index) {
    this.$store.dispatch('cart/addQuantity', index)
  }
  onDecreaseQuantity(index) {
    this.$store.dispatch('cart/removeQuantity', index)
  }
  onGetTotal() {
    let total = 0
    for (const its of this.cart) {
      total = its.price.price * its.quantity
    }
    return total
  }
}
</script>

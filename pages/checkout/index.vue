<template>
  <div style="background-color: white">
    <div class="container container-240">
      <ul class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li class="active">Checkout</li>
      </ul>
      <div class="co" v-if="!$apollo.queries.GetCurrentUser.loading">
        <div class="cart-box-container-ver2">
          <div class="row">
            <div class="col-md-8">
              <div class="co-left bd-7">
                <div class="cmt-title text-center abs">
                  <h1 class="page-title v1">Billing details</h1>
                </div>
                <div>
                  <div v-for="address of GetCurrentUser.address">
                    <h4>{{address.fullName}}</h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- End contact-form -->
            <div class="col-md-4">
              <div class="cart-total bd-7">
                <div class="cmt-title text-center abs">
                  <h1 class="page-title v3">Your order</h1>
                </div>
                <div class="table-responsive">
                  <table class="shop_table">
                    <tbody>
                    <tr class="cart-subtotal">
                      <th>Subtotal</th>
                      <td>₹ {{onGetTotal()}}</td>
                    </tr>
                    <tr class="cart-shipping v2">
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
                      </td>
                    </tr>
                    <tr class="order-total v2">
                      <th>Total</th>
                      <td>₹ {{onGetTotal()}}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <div class="form-check">
                  <label class="form-check-label ver2">
                    <input type="checkbox" class="form-check-input">
                    <span>I’ve read and accept the <a href="#" class="term">terms &amp; conditions *</a></span>
                  </label>
                </div>
                <div class="cart-total-bottom v2">
                  <a href="#" class="btn-gradient btn-checkout btn-co-order">Place order</a>
                </div>
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
import {GetCurrentUserDocument, User} from "~/gql";
import {mapState} from "vuex";
import {ICartItem} from "~/store/cart";

@Component({
  apollo: {
    GetCurrentUser: {
      query: GetCurrentUserDocument
    }
  },
  computed: {
    ...mapState({
      cart: (state: any) => state.cart.cart,
    })
  },
})
export default class Checkout extends Vue {
  private GetCurrentUser: User
  private cart: ICartItem[]


  onGetTotal() {
    let total = 0
    for (const its of this.cart) {
      total = its.price.price * its.quantity
    }
    return total
  }
}
</script>

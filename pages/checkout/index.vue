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
            <v-card class="col-md-8">
              <div class="co-left ">
                <div class="cmt-title text-center abs">
                  <h1 class="page-title v1">Billing details</h1>
                </div>
                <div>
                  <div v-for="address of GetCurrentUser.address">
                    <h4>{{address.fullName}}</h4>
                  </div>
                </div>
              </div>
            </v-card>
            <!-- End contact-form -->
            <div class="col-md-4">
              <v-card class="cart-total bd-7" color="primary">
                <div class="cmt-title text-center abs">
                  <h1 class="page-title v3">Your order</h1>
                </div>
                <div style="padding: 20px; width: 100%">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; margin-bottom: 5px">
                    <h4 class="text-white">Subtotal</h4>
                    <h3 class="text-white">₹ {{onGetTotal()}}</h3>
                  </div>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; margin-bottom: 5px">
                    <h4 class="text-white">Shipping</h4>
                    <div class="text-white">
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
                    </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; margin-bottom: 5px">
                    <h4 class="text-white">Total</h4>
                    <h3 class="text-white">₹ {{onGetTotal()}}</h3>
                  </div>
                  <div class="cart-total-bottom" style="margin-bottom: 20px" v-if="onGetTotal() !== 0">
                    <v-btn
                      depressed
                      color="secondary"
                      @click="$router.push('/checkout')"
                    >
                      Checkout
                    </v-btn>
                  </div>
                </div>
              </v-card>
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

<style scoped>
.text-white {
  color: white;
}
</style>


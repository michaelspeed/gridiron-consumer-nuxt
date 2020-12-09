<template>
  <div style="background-color: #212121">
    <div class="container container-240">
      <ul class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li class="active">Checkout</li>
      </ul>
      <div class="co" v-if="!$apollo.queries.GetCurrentUser.loading">
        <div class="cart-box-container-ver2">
          <div class="row">
            <v-card class="col-md-8">
              <div class="co-left">
                <div class="cmt-title text-center abs">
                  <h1 class="page-title v1" style="color: #9C27B0">Address details</h1>
                </div>
              </div>
              <div>
                <div style="margin-bottom: 10px;">
                  <div class="float-right">
                    <v-dialog
                      v-model="add"
                      persistent
                      max-width="600px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn small color="primary" tile
                               v-bind="attrs"
                               v-on="on"
                        >Add new Address</v-btn>
                      </template>
                      <v-card>
                        <v-card-title color="primary">
                          <span class="headline">Add new address</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Full Name*"
                                  required
                                  v-model="fullname"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="6"
                              >
                                <v-text-field
                                  label="Phone Number"
                                  required
                                  v-model="phoneNumber"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                              >
                                <v-text-field
                                  label="Address (Area and Street)*"
                                  persistent-hint
                                  required
                                  v-model="addressLine"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6"
                                     md="6">
                                <v-text-field
                                  label="City / District/ Town*"
                                  required
                                  v-model="city"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6"
                                     md="6">
                                <v-text-field
                                  label="State*"
                                  required
                                  v-model="state"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6"
                                     md="6">
                                <v-text-field
                                  label="Pincode*"
                                  required
                                  v-model="postalcode"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6"
                                     md="6">
                                <v-select
                                  :items="addTypes"
                                  label="Address Type"
                                  v-model="type"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-progress-linear
                          v-if="loading"
                          color="lime"
                          indeterminate
                          reverse
                        ></v-progress-linear>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn small color="primary" tile text :disabled="loading"
                                 @click="onCreateAddress"
                          >Add Address</v-btn>
                          <v-btn small color="red" tile text @click="add = false"
                          >Cancel</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
              <v-container style="width: 100%;">
                <v-row>
                  <v-col v-for="(address, index) of GetCurrentUser.address" :key="index" cols="12"
                         sm="12"
                         md="6">
                    <v-sheet elevation="1" style="padding: 20px; margin: 10px; cursor: pointer;" @click="selecteAdd = address.id" >
                      <div style="display: flex; justify-content: space-between; align-items: center">
                        <h4 class="text-capitalize" style="color: white">{{address.fullName}}</h4>
                        <v-checkbox
                          label="Select Address"
                          :input-value="true"
                          v-if="address.id === selecteAdd"
                        ></v-checkbox>
                      </div>
                      <h5 class="text-capitalize" style="color: white">{{address.addressLine}}</h5>
                      <span style="color: white">{{address.city}}</span>
                      <span style="color: white">{{address.state}}</span>
                      <span style="color: white">{{address.postalCode}}</span>
                      <div>
                        <h6 style="color: white">Phone Number: {{address.phoneNumber}}</h6>
                      </div>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <!-- End contact-form -->
            <div class="col-md-4">
              <v-card class="cart-total bd-7" color="primary">
                <div class="cmt-title text-center abs">
                  <h1 class="page-title v3" style="color: #9C27B0">Your order</h1>
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
                      @click="onClickPay"
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
    <v-dialog
      v-model="processing"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          <div style="display: flex; justify-content: center; align-items: center; padding: 10px">
            <span style="color: white;">Processing your order please stand by! Please stand by</span>
          </div>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {
  AddressType,
  CreateNewAddressDocument, CreateShopOrderDocument,
  GetCurrentUserDocument,
  GetPaymentCodesDocument,
  PaymentMethod,
  User
} from "~/gql";
import {mapState} from "vuex";
import {ICartItem} from "~/store/cart";
import {IRaxor} from "~/utils/IRaxor";

declare global {
  interface Window {
    Razorpay:any;
  }
}

@Component({
  apollo: {
    GetCurrentUser: {
      query: GetCurrentUserDocument,
      pollInterval: 3000
    },
    getPaymentCodes: {
      query: GetPaymentCodesDocument
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

  private add = false;

  private fullname = ''
  private addressLine = ''
  private city = ''
  private state = ''
  private landmark = ''
  private postalcode = ''
  private phoneNumber = ''
  private type = ''
  private loading = false;
  private addTypes = [AddressType.Home, AddressType.Work]

  private selecteAdd = ''

  private getPaymentCodes: PaymentMethod

  private processing = false;


  onGetTotal() {
    let total = 0
    for (const its of this.cart) {
      total = its.price.price * its.quantity
    }
    return total
  }

  onClickPay() {
    console.log(this.getPaymentCodes)
    if (this.selecteAdd === '') {
      this.$message.error('Select Delivery address')
      return
    }
    this.processing = true;
    const opts = {
      key: this.getPaymentCodes.api,
      amount: this.onGetTotal() * 100,
      name: this.$store.state.defstore.defstore.storeName,
      theme: {
        color: '#9C27B0'
      },
      handler: (transaction: IRaxor) => {
        console.log(transaction)
        this.$apollo.mutate({
          mutation: CreateShopOrderDocument,
          variables: {
            address: this.selecteAdd,
            transaction: transaction.razorpay_payment_id,
            orderLineDto: this.$store.state.cart.cart.map(item => ({priceId: item.price.id, quantity: item.quantity}))
          }
        })
        .then(value => {
          console.log(value)
          setTimeout(() => {
            this.processing = false;
            this.$router.push(`/success/${value.data.createShopOrder.id}`)
          }, 3000)
        })
      }
    }
    const razor = <any>(window).Razorpay(opts)
    razor.open()
  }

  onCreateAddress() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateNewAddressDocument,
      variables: {
        fullName: this.fullname,
        addressLine: this.addressLine,
        city: this.city,
        state: this.state,
        landmark: this.landmark,
        postalCode: this.postalcode,
        phoneNumber: this.phoneNumber,
        type: this.type,
      }
    })
    .then(value => {
      this.loading = false;
      this.add = false;
      this.$message.success('Address added')
    })
    .catch(e => {
      this.loading = false;
      this.$message.error(e)
    })
  }
}
</script>

<style scoped>
.text-white {
  color: white;
}
</style>


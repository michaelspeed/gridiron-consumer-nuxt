<template>
  <div style="background-color: white;">
    <div class="container container-240">
      <div class="single-product-detail product-bundle product-aff">
        <ul class="breadcrumb" :style="{'margin-top': '50px'}">
          <li v-if="!mainMobile"><a href="#">Home</a></li>
          <li class="active" v-if="!mainMobile">{{variant.product.collection.name}}</li>
          <li class="active">{{variant.name}} </li>
        </ul>
        <v-sheet elevation="2">
          <div class="row" style="padding-bottom: 10px">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <v-carousel continuous cycle show-arrows-on-hover :hide-delimiters="mainMobile" delimiter-icon="mdi-minus">
                <v-carousel-item
                  v-for="asset of variant.product.assets" :key="asset.id"
                >
                  <v-img aspect-ratio="2" contain :src="`${assetLink}/${asset.asset.source}`" alt="photo" :style="{'height': '100%'}"/>
                </v-carousel-item>
              </v-carousel>

            </div>
            <div class="col-xs-12 col-sm-6 col-md-6" style="padding: 0">
              <v-toolbar color="primary" :elevation="mainMobile ? '4': '0'">
                <v-toolbar-title class="product-title" style="color: white;margin-top: 10px">
                  <span style="font-weight: bold">{{variant.name}}</span>
                  <p class="product-cate" style="color: white">{{variant.product.collection.name}}</p>
                </v-toolbar-title>
              </v-toolbar>
              <v-expand-transition>
                <div class="single-flex">
                  <div class="single-product-info product-info product-grid-v2 s-50">
                    <v-sheet style="padding: 10px">
                      <div class="product-rating">
                        <v-rating
                          color="primary"
                          small
                          length="5"
                          dense
                          :value="variant.rating"
                        ></v-rating>
                        <div class="number-rating">( {{ variant.reviews.length }} reviews )</div>
                      </div>

                      <div class="product-price" v-if="lowPrice() !== 0">
                        <h2 class="title-white">₹ {{ lowPrice() }}</h2>
                      </div>
                      <div class="availability">
                        <p class="product-inventory"><label>Availability : </label>
                          <v-chip
                            class="ma-2"
                            :color="lowPrice() === 0 ? 'red' : 'light-green'"
                            label
                            text-color="white"
                          >
                            <span v-if="lowPrice() !== 0" style="color: white"> In stock</span>
                            <span v-if="lowPrice() === 0" style="color: white"> Out of stock</span>
                          </v-chip>
                        </p>
                      </div>
                      <div class="product-brand" v-for="facet of variant.product.facets">
                        <label>{{ facet.facet.name }} :</label>
                        <span>{{ facet.code }}</span>
                      </div>
                      <div style="margin-bottom: 10px">
                        <div v-for="opts of variant.product.options" :key="opts.id">
                          <div style="margin-bottom: 5px">
                            <label class="text-capitalize">{{ opts.name }} :</label>
                          </div>
                          <div>
                    <span v-for="miniopts of opts.options" :key="miniopts.id">
                      <v-chip
                        class="ma-2"
                        color="primary"
                        @click="splitNames(miniopts.code)"
                        :outlined="optColor(miniopts.code).back === `#9C27B0`"
                      >
                        <a href="javascript:;" @click="splitNames(miniopts.code)"
                           :style="{'color': optColor(miniopts.code).color}">
                          {{ miniopts.name }}
                        </a>
                      </v-chip>
                      <!--<a href="javascript:;" @click="splitNames(miniopts.code)"
                         :style="{'color': optColor(miniopts.code).color}">
                      {{miniopts.name}}
                    </a>-->
                  </span>
                          </div>
                        </div>
                      </div>
                      <div style="margin-top: 10px">
                        <div v-if="!priceRequested && availablePrice.length === 0">
                          <div>
                            <div>
                              <span>Please enter zip code</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center">
                              <a-input placeholder="Please enter your zipcode" style="color: white" v-model="zipcode"></a-input>
                              <div>
                                <v-btn
                                  elevation="2"
                                  rounded
                                  color="primary"
                                  small
                                  style="margin-left: 6px" @click="getProductPrices"
                                  v-if="!gettingPrice"
                                >
                                  Apply
                                </v-btn>
                                <div v-if="gettingPrice" style="margin-left: 4px">
                                  <v-progress-circular
                                    :width="3"
                                    color="primary"
                                    indeterminate
                                  ></v-progress-circular>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <v-expand-transition>
                          <div v-if="priceRequested && !gettingPrice && availablePrice.length > 0">
                            <v-card elevation="4">
                              <v-card-title>
                                Available with {{ availablePrice.length }} Seller
                              </v-card-title>
                              <v-divider></v-divider>
                              <v-card-text>
                                <div style="display: flex; justify-content: space-between; align-items: center"
                                     v-for="price of availablePrice">
                                  <span class="text-muted">{{ price.store.storeName }}</span>
                                  <v-btn
                                    elevation="2"
                                    rounded
                                    color="primary"
                                    small
                                    style="margin-left: 6px" @click="onClickAddToCart(price)"
                                  >
                                    Add To Cart
                                  </v-btn>
                                </div>
                              </v-card-text>
                            </v-card>

                          </div>
                        </v-expand-transition>
                      </div>
                    </v-sheet>
                  </div>
                  <div class="single-product-feature s-50 hidden-xs hidden-sm">
                    <div style="padding: 10px">
                      <v-sheet elevation="5" class="bd-7">
                        <div class="single-feature-box">
                          <div class="single-feature-img">
                            <v-icon
                              x-large
                              color="primary"
                            >
                              mdi-shield-key
                            </v-icon>
                          </div>
                          <div class="single-feature-info">
                            <h3 class="title-white">Safe Payment</h3>
                            <p>Pay with the world’s most payment methods.</p>
                          </div>
                        </div>

                        <div class="single-feature-box">
                          <div class="single-feature-img">
                            <v-icon
                              x-large
                              color="primary"
                            >
                              mdi-shield-check
                            </v-icon>
                          </div>
                          <div class="single-feature-info">
                            <h3 class="title-white">Confidence</h3>
                            <p>Protection covers your purchase</p>
                          </div>
                        </div>

                        <div class="single-feature-box">
                          <div class="single-feature-img">
                            <v-icon
                              x-large
                              color="primary"
                            >
                              mdi-truck
                            </v-icon>
                          </div>
                          <div class="single-feature-info">
                            <h3 class="title-white">Worldwide Delivery</h3>
                            <p>Ship to over 200 countries & regions.</p>
                          </div>
                        </div>
                      </v-sheet>
                    </div>
                  </div>
                </div>
              </v-expand-transition>
            </div>
          </div>
        </v-sheet>
        <v-card tile>
          <v-tabs
            color="primary"
            background-color="primary"
            right
            v-model="tabitem"
            :show-arrows="mainMobile"
          >
            <v-tab>Description</v-tab>
            <v-tab>Specification</v-tab>
            <v-tab>Reviews</v-tab>
            <v-tab-item
              :key="0"
            >
              <v-container fluid dark>
                <div v-html="variant.product.description" style="background-color: #212121"></div>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
        <!--<div class="single-product-tab bd-7">
          <div class="cmt-title text-center abs">
            <ul class="nav nav-tabs text-center">
              <li class="active"><a data-toggle="pill" href="#desc">Description</a></li>
              <li><a data-toggle="pill" href="#info">Specification</a></li>
              <li><a data-toggle="pill" href="#review">Reviews</a></li>
            </ul>
          </div>
          <div class="tab-content">
            <div id="desc" class="tab-pane fade in active">
              <div v-html="variant.product.description"></div>
            </div>
            <div id="info" class="tab-pane fade in">

            </div>
            <div id="review" class="tab-pane fade in ">

            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {
  GetSingleProductVariantDocument, GetStocksAndZipAvailabilityDocument,
  ProductVariant, ProductVariantPrice,
  ShiftProductVariantDocument,
  SingProductPriceDocument, Store
} from "~/gql";
import {assetsURL} from "~/utils/global-constants";
import {myTheme} from "~/utils/custom-theme";
import {getProdRoute} from "~/utils/routingUtils";
import {ICartItem} from "~/store/cart";
import {isMobile} from "mobile-device-detect";

@Component({
  layout: 'default',
  scrollToTop: true,
  head: {
    script: [
      {src: '/js/main.js', body: true},
    ]
  },
  async asyncData(context: any) {
    const client = context.app.apolloProvider.defaultClient
    const variant = await client.query({
      query: GetSingleProductVariantDocument,
      variables: {
        id: context.route.params.id
      }
    })
    const price = await client.query({
      query: SingProductPriceDocument,
      variables: {
        id: context.route.params.id
      }
    })
    return {
      variant: variant.data.getSingleProductVariant,
      price: price.data.singProductPrice.price
    }
  }
})
export default class ProductView extends Vue {
  private variant: ProductVariant
  private assetLink = assetsURL
  private price
  private tabitem = 0

  private quantity = 1
  private zipcode = ''

  private gettingPrice = false
  private availablePrice: ProductVariantPrice[] = []
  private priceRequested = false
  private theme = myTheme

  private mainMobile = isMobile

  lowPrice () {
    let mainPrice = 0
    for (const pr of this.price) {
      if (mainPrice === 0) {
        mainPrice = pr.price
      } else if (mainPrice > pr.price) {
        mainPrice = pr.price
      }
    }
    return mainPrice
  }

  optColor(name) {
    const namesplit = name.split(" ")
    const varsplit = this.variant.name.replace(/[^a-zA-Z0-9 ]/gi, '').split(" ")
    if (!namesplit.every(elm => varsplit.includes(elm))) {
      return {
        back: '#FFFFFF',
        color: '#FFFFFF'
      }
    } else {
      return {
        back: myTheme["color-primary-500"],
        color: myTheme["color-primary-500"]
      }
    }
  }

  onClickAddToCart(price: ProductVariantPrice) {
    const item: ICartItem = {
      variant: {
        id: this.variant.id,
        name: this.variant.name,
        assetUrl: `${this.assetLink}/${this.variant.asset!.asset.preview}`
      },
      store: {
        id: price.store!.id,
        storeName: price.store!.storeName
      },
      price: {
        id: price.id,
        price: price.price
      },
      quantity: 1
    }
    this.$store.dispatch('cart/addToCart', item)
  }

  getProductPrices() {
    this.gettingPrice = true
    this.$apollo.mutate({
      mutation: GetStocksAndZipAvailabilityDocument,
      variables: {
        variantId: this.variant.id,
        zipf: Number(this.zipcode)
      }
    }).then(value => {
      this.gettingPrice = false
      this.availablePrice = value.data.GetStocksAndZipAvailability
      console.log(this.availablePrice)
      this.priceRequested = true
    }).catch(error => {
      this.gettingPrice = false
      console.log(error)
    })
  }

  updated() {
    (<any>$('.js-click-product')).not('.slick-initialized').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.js-product-slider',
      dots: false,
      focusOnSelect: true,
      infinite: true,
      arrows: false,
      vertical: true,
      responsive: [

        {
          breakpoint: 1367,
          settings: {
            vertical: false
          }
        }
      ]
    });
    (<any>$('.js-product-slider')).not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.js-click-product'
    });
  }

  mounted() {
    console.log(this.variant);

    (<any>$('.js-click-product')).not('.slick-initialized').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.js-product-slider',
      dots: false,
      focusOnSelect: true,
      infinite: true,
      arrows: false,
      vertical: true,
      responsive: [

        {
          breakpoint: 1367,
          settings: {
            vertical: false
          }
        }
      ]
    });
    (<any>$('.js-product-slider')).not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.js-click-product'
    });
  }

  splitNames(name) {
    this.$apollo.mutate({
      mutation: ShiftProductVariantDocument,
      variables: {
        prodId: this.variant.product.id,
        name: name
      }
    }).then(value => {
      this.$router.push(getProdRoute(value.data.ShiftProductVariant.id))
    }).catch(error => {
    })
  }

}
</script>

<style scoped>
.slick-cloned {
  height: 100px;
}

.btn-gradient {
  background: #ffbf00;
  background-image: linear-gradient(122deg, #ffbf00, #a67c00);
}

.e-gradient {
  background: #EAFC9D;
  background-image: linear-gradient(122deg, #D9F66B, #71A206);
}

.hot-line {
  background: -webkit-gradient(linear, left top, right top, from(#ffbf00), to(#a67c00));
  background-image: linear-gradient(122deg, #ffbf00, #a67c00);
}
.title-white {
  color: white;
}
</style>

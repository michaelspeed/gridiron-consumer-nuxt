<template>
  <div style="background-color: white">
    <div class="container container-240">
      <div class="single-product-detail product-bundle product-aff">
        <ul class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li class="active">{{variant.product.collection.name}}</li>
          <li class="active">{{variant.name}} </li>
        </ul>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6">

            <div class="flex product-img-slide">


              <div class="product-images">
                <div class="main-img js-product-slider">
                  <a href="#" class="hover-images effect" v-for="asset of variant.product.assets" :key="asset.id" style="display: flex; justify-content: center;align-items: center">
                    <img :src="`${assetLink}/${asset.asset.preview}`" alt="photo" style="object-fit: contain" class="img-reponsive">
                  </a>
                </div>
              </div>
              <div class="multiple-img-list-ver2 js-click-product">
                <div class="product-col" v-for="asset of variant.product.assets" :key="asset.id">
                  <div class="img active">
                    <img :src="`${assetLink}/${asset.asset.source}`" alt="photo" class="img-reponsive">
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="single-flex">
              <div class="single-product-info product-info product-grid-v2 s-50">
                <p class="product-cate">{{variant.product.collection.name}}</p>
                <div class="product-rating">
                  <span class="star star-5"></span>
                  <span class="star star-4"></span>
                  <span class="star star-3"></span>
                  <span class="star star-2"></span>
                  <span class="star star-1"></span>
                  <div class="number-rating">( 896 reviews )</div>
                </div>
                <h3 class="product-title"><a href="#">{{variant.name}}</a></h3>
                <div class="product-price" v-if="lowPrice() !== 0">
                  <span>₹ {{ lowPrice() }}</span>
                </div>
                <div class="availability">
                  <p class="product-inventory"> <label>Availability : </label>
                    <span v-if="lowPrice() !== 0"> In stock</span>
                    <span v-if="lowPrice() === 0" style="color: #eb5050"> Out of stock</span>
                  </p>
                </div>
                <div class="product-brand" v-for="facet of variant.product.facets">
                  <label>{{facet.facet.name}} :</label>
                  <span>{{facet.code}}</span>
                </div>
                <div class="color-group">
                  <label>Color :</label>
                  <a href="#" class="circle black"></a>
                  <a href="#" class="circle red"></a>
                  <a href="#" class="circle gray"></a>
                </div>

                <div class="single-product-button-group">
                  <div class="e-btn cart-qtt btn-gradient">
                    <div class="e-quantity">
                      <input type="number" step="1" min="1" max="999" name="quantity" v-model="quantity" title="Qty" class="qty input-text js-number" size="4">
                      <div class="tc pa">
                        <a class="js-plus quantity-right-plus"><i class="fa fa-caret-up"></i></a>
                        <a class="js-minus quantity-left-minus"><i class="fa fa-caret-down"></i></a>
                      </div>
                    </div>
                    <a href="#" class="btn-add-cart">Add to cart <span class="icon-bg icon-cart v2"></span></a>
                  </div>
                  <a href="#" class="e-btn btn-icon">
                    <span class="icon-bg icon-wishlist"></span>
                  </a>
                  <a href="#" class="e-btn btn-icon">
                    <span class="icon-bg icon-compare"></span>
                  </a>
                </div>
              </div>
              <div class="single-product-feature s-50 hidden-xs hidden-sm">
                <div class="bd-7">
                  <div class="single-feature-box">
                    <div class="single-feature-img">
                      <img src="/img/feature/credit-card2.png" alt="">
                    </div>
                    <div class="single-feature-info">
                      <h3>Safe Payment</h3>
                      <p>Pay with the world’s most payment methods.</p>
                    </div>
                  </div>

                  <div class="single-feature-box">
                    <div class="single-feature-img">
                      <img src="/img/feature/safety2.png" alt="">
                    </div>
                    <div class="single-feature-info">
                      <h3>Confidence</h3>
                      <p>Protection covers your purchase</p>
                    </div>
                  </div>

                  <div class="single-feature-box">
                    <div class="single-feature-img">
                      <img src="/img/feature/truck2.png" alt="">
                    </div>
                    <div class="single-feature-info">
                      <h3>Worldwide Delivery</h3>
                      <p>Ship to over 200 countries & regions.</p>
                    </div>
                  </div>
                </div>
                <div class="hot-line e-gradient">
                  <p>Hotline</p>
                  <div class="flex align-center tele">
                    <img src="/img/feature/hotline.png" alt="">
                    <div class="phone-number">
                      <p>(+123) 456 789 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="single-product-tab bd-7">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {GetSingleProductVariantDocument, ProductVariant, SingProductPriceDocument} from "~/gql";
import {assetsURL} from "~/utils/global-constants";

@Component({
  layout: 'default',
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
      variables:{
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

  private quantity = 1

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

  mounted() {
    (<any>$('.js-click-product')).slick({
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
    (<any>$('.js-product-slider')).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.js-click-product'
    });
  }

}
</script>

<style scoped>
.slick-cloned {
  height: 100px;
}
.btn-gradient {
  background: #EAFC9D;
  background-image: linear-gradient(122deg, #D9F66B, #71A206);
}
.e-gradient {
  background: #EAFC9D;
  background-image: linear-gradient(122deg, #D9F66B, #71A206);
}
.hot-line {
  background: -webkit-gradient(linear, left top, right top, from(#71A206), to(#D9F66B));
  background-image: linear-gradient(122deg, #D9F66B, #71A206);
}
</style>

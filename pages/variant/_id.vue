<template>
  <div style="background-color: white">
    <div class="container container-240">
      <div class="e-product">
        <ul class="breadcrumb v4">
          <li><a href="#">Home</a></li>
          <li class="active">{{prod.productName}}</li>
        </ul>
        <div class="pd-banner">
          <a href="javascript:;" class="image-bd effect_img2"><img src="/img/shop-banner.jpg" alt="" class="img-reponsive"></a>
        </div>
        <div class="pd-top">
          <h1 class="title">{{prod.productName}}</h1>
          <div class="show-element"><span>Showing {{variant.length}} results</span></div>
        </div>
        <div class="product-collection-grid product-grid spc1">
          <div class="row">
            <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3 product-item" v-for="items of variant" :key="items.id">
              <div class="pd-bd product-inner">
                <div class="product-img" style="display: flex; justify-content: center">
                  <a href="javascript:;" @click="onClickVariant(items.id)"><img :src="`${assetLink}/${items.asset.asset.preview}`" alt="" class="img-reponsive" style="max-height: 320px; object-fit: contain"></a>
                </div>
                <div class="product-info">
                  <div class="element-list element-list-middle">
                    <p class="product-cate">{{items.product.productName}}</p>
                    <h3 class="product-title"><a href="javascript:;" @click="onClickVariant(items.id)">{{items.name}}</a></h3>
                    <div class="product-bottom">
                      <div class="product-price" v-if="getPrice(items) !== 0"><span>₹{{getPrice(items)}}</span></div>
                      <div class="product-price" v-if="getPrice(items) === 0"><span class="text-danger">Unavailable</span></div>
                    </div>
                    <div class="product-bottom-group">
                      <a href="#" class="btn-icon">
                        <span class="icon-bg icon-cart"></span>
                      </a>
                      <a href="#" class="btn-icon">
                        <span class="icon-bg icon-compare"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="product-button-group">
                  <a href="#" class="btn-icon">
                    <span class="icon-bg icon-cart"></span>
                  </a>
                  <a href="#" class="btn-icon">
                    <span class="icon-bg icon-compare"></span>
                  </a>
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
import {GetProductVariantByProductDocument, Product, ProductVariant, SingProductInfoDocument} from "~/gql";
import {assetsURL} from "~/utils/global-constants";
import {getProdRoute} from "~/utils/routingUtils";

@Component({
  async asyncData(context: any) {
    const client = context.app.apolloProvider.defaultClient
    const allVariant  = await client.query({
      query: GetProductVariantByProductDocument,
      variables:{
        id: context.route.params.id
      }
    })
    const prodinfo = await client.query({
      query: SingProductInfoDocument,
      variables: {
        id: context.route.params.id
      }
    })
    return {
      variant: allVariant.data.getProductVariantByProduct,
      prod: prodinfo.data.singProductInfo
    }
  }
})
export default class VariantView extends Vue {
  private variant: ProductVariant[]
  private prod: Product

  private assetLink = assetsURL

  getPrice(variant: ProductVariant){
    let lowPrice = 0
    if (variant.price!.length > 0) {
      lowPrice = variant.price![0].price
    }
    return lowPrice
  }

  onClickVariant(id) {
    this.$router.push(getProdRoute(id))
  }
}
</script>

<template>
  <div class="container">
    <div v-if="$apollo.queries.getProductVariantByProduct.loading"
         style="display: flex; justify-content: center; align-items: center">
      <fvLoading/>
    </div>
    <div class="product-collection-grid product-grid product-grid-v2 product-list" v-if="!$apollo.queries.getProductVariantByProduct.loading">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 product-item" v-for="variants of getProductVariantByProduct" :key="variants.id">
          <div class="pd-bd product-inner">
            <div class="product-img">
              <a href="javascript:;" @click="onGoToProdRoute(variants.id)"><img :src="`${assetLink}/${variants.asset.asset.preview}`" alt="" class="img-reponsive"></a>
            </div>
            <div class="product-info">
              <div class="color-group"></div>
              <div class="element-list element-list-middle">
                <div class="product-rating bd-rating">
                  <span class="star star-5"></span>
                  <span class="star star-4"></span>
                  <span class="star star-3"></span>
                  <span class="star star-2"></span>
                  <span class="star star-1"></span>
                  <div class="number-rating">( 896 reviews )</div>
                </div>
                <span class="product-cate" v-for="opt of variants.product.options" :key="opt.id">
                  <span v-for="miniopt of opt.options" :key="miniopt.id">
                    <span>{{GatherNames(opt, miniopt, variants)}}</span>
                  </span>
                </span>
                <h3 class="product-title"><a href="javascript:;" @click="onGoToProdRoute(variants.id)">{{variants.name}}</a></h3>
                <div class="product-bottom">
                  <div class="product-price" v-if="lowPrice(variants) !== 0"><span>₹ {{lowPrice(variants)}}</span></div>
                  <div class="product-price" v-if="lowPrice(variants) === 0"><span>Unavailable</span></div>
                  <a href="#" class="btn-icon btn-view">
                    <span class="icon-bg icon-view"></span>
                  </a>
                </div>
                <div class="product-bottom-group">
                  <a href="#" class="btn-icon" v-if="lowPrice(variants) !== 0">
                    <span class="icon-bg icon-cart"></span>
                  </a>
                  <a href="#" class="btn-icon">
                    <span class="icon-bg icon-compare"></span>
                  </a>
                </div>
              </div>
              <div class="product-button-group">
                <a href="#" class="btn-icon" v-if="lowPrice(variants) !== 0">
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
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {GetProductVariantByProductDocument, ProductVariant} from "../../gql";
import {assetsURL} from "~/utils/global-constants";
import {getProdRoute} from "~/utils/routingUtils";

@Component({
  apollo: {
    getProductVariantByProduct: {
      query: GetProductVariantByProductDocument,
      variables() {
        return {
          id: this.id
        }
      }
    }
  }
})
export default class VariantQuickView extends Vue {
  @Prop() id: string
  private getProductVariantByProduct: ProductVariant[]
  private assetLink = assetsURL

  lowPrice(item){
    let mainPrice = 0
    for (const pr of item.price!) {
      if (mainPrice === 0) {
        mainPrice = pr.price
      } else if (mainPrice > pr.price) {
        mainPrice = pr.price
      }
    }
    return mainPrice
  }

  GatherNames (opt, miniopt, item) {
    let master = ''
    if (item.name.indexOf(opt.code) !== -1) {
      master = master + opt.code + ' / '
    } else if (item.name.indexOf(miniopt.code) !== -1) {
      master = master + miniopt.code + ' / '
    }
    return master
  }

  onGoToProdRoute(id) {
    this.$router.push(getProdRoute(id))
  }


}
</script>

<style scoped>
.product-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-reponsive{
  height: 320px;
}
</style>

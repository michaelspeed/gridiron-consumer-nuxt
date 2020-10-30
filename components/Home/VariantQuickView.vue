<template>
  <div class="container">
    <div v-if="$apollo.queries.getProductVariantByProduct.loading"
         style="display: flex; justify-content: center; align-items: center">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <div class="product-collection-grid product-grid product-grid-v2 product-list" v-if="!$apollo.queries.getProductVariantByProduct.loading">
      <div class="row">
        <v-card class="col-xs-6 col-sm-6 col-md-3 col-lg-3" v-for="variants of getProductVariantByProduct" :key="variants.id" style="padding: 15px; margin: 10px" >
          <div class="product-inner">
            <div class="product-img">
              <a href="javascript:;" @click="onGoToProdRoute(variants.id)">
                <v-img contain :src="`${assetLink}/${variants.asset.asset.source}`" :lazy-src="`${assetLink}/${variants.asset.asset.preview}`" alt="" class="img-reponsive"/>
              </a>
            </div>
            <div class="product-info">
              <div class="color-group"></div>
              <div class="element-list element-list-middle">
                <v-rating
                  color="primary"
                  small
                  value="4"
                ></v-rating>
                <span class="product-cate" v-for="opt of variants.product.options" :key="opt.id">
                  <span v-for="miniopt of opt.options" :key="miniopt.id">
                    <span>{{GatherNames(opt, miniopt, variants)}}</span>
                  </span>
                </span>
                <h4 class=""><a href="javascript:;" @click="onGoToProdRoute(variants.id)">{{variants.name}}</a></h4>
                <div class="product-bottom">
                  <div class="product-price" v-if="lowPrice(variants) !== 0"><span>₹ {{lowPrice(variants)}}</span></div>
                  <div class="product-price" v-if="lowPrice(variants) === 0"><span>Unavailable</span></div>
                </div>
                <v-expand-transition>
                  <v-card-actions>
                    <v-btn
                      icon
                      color="primary"
                      v-if="lowPrice(variants) !== 0"
                    >
                      <v-icon>mdi-cart</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-expand-transition>
              </div>
            </div>
          </div>
        </v-card>
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
  private hover = false

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

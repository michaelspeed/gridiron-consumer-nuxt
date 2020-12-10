<template>
  <div>
    <div v-if="$apollo.queries.getProductAsset.loading"
         style="display: flex; justify-content: center; align-items: center">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-card v-if="!$apollo.queries.getProductAsset.loading" style="padding: 15px;" @mouseover="hover = true"
            @mouseleave="hover = false" elevation="4">
      <div class="product-img">
        <a href="javascript:;" @click="onClickSelection">
          <img :src="`${assetLink}/${getProductAsset.preview}`" alt="" class="img-reponsive" style="background-color: #212121">
        </a>
      </div>
      <div class="product-info">
        <div class="color-group"></div>

        <div class="element-list">

          <p class="product-cate">Computers &amp; Accessories</p>
          <h3 class="product-title">
            <a href="javascript:;" @click="onClickSelection" v-if="item.type.key === 'product'">{{item.target.target.productName.substring(0, 30)}}</a>
            <a href="javascript:;" @click="onClickSelection" v-else-if="item.type.key === 'variant'">{{item.target.target.name.substring(0, 30)}}</a>
          </h3>
          <div class="product-bottom">
            <div class="product-price">
              <span v-if="item.type.key === 'product'">
                <v-btn
                  @click="view = true"
                  tile
                  small
                  color="primary"
                >See Variants</v-btn>
              </span>
              <div v-if="!$apollo.queries.singProductPrice.loading">
                <span v-if="item.type.key === 'variant' && lowPrice !== 0">₹ {{lowPrice}}</span>
                <span v-if="item.type.key === 'variant' && lowPrice === 0" class="text-danger">Unavailable</span>
              </div>
            </div>
          </div>
          <v-expand-transition>
            <v-card-actions v-if="hover">
              <v-btn
                icon
                color="primary"
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <v-btn
                icon
                color="primary"
              >
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-expand-transition>
        </div>
      </div>
    </v-card>
    <a-drawer
      placement="bottom"
      :closable="true"
      :visible="view"
      @close="view = false"
      height="90vh"
    >
      <VariantQuickView :id="item.target.target.id" v-if="item.type.key === 'product'"/>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "nuxt-property-decorator";
import {GetProductAssetDocument, SingProductPriceDocument} from "~/gql";
import {assetsURL} from "~/utils/global-constants";
import VariantQuickView from "~/components/Home/VariantQuickView.vue";
import {getProdRoute, getVariantRoute} from "~/utils/routingUtils";

@Component({
  components: {
    VariantQuickView
  },
  apollo: {
    getProductAsset: {
      query: GetProductAssetDocument,
      variables() {
        if(this.item.type.key === 'variant') {
          return {
            variantId: this.item.target.target.id
          }
        } else if (this.item.type.key === 'product') {
          return {
            prodId: this.item.target.target.id
          }
        }
      }
    },
    singProductPrice: {
      query: SingProductPriceDocument,
      variables() {
        if(this.item.type.key === 'variant') {
          return {
            id: this.item.target.target.id
          }
        }
      }
    }
  }
})
export default class HomeListItem extends Vue {
  @Prop() item
  private getProductAsset
  private singProductPrice

  private assetLink = assetsURL
  private view: boolean = false
  private lowPrice = 0
  private hover = false

  @Watch('singProductPrice')
  onGetPrice() {
    for (const prs of this.singProductPrice.price) {
      if (this.lowPrice === 0) {
        this.lowPrice = prs.price
      } else if (this.lowPrice > prs.price) {
        this.lowPrice = prs.price
      }
    }
  }

  onClickSelection() {
    if (this.item.type.key === 'variant') {
      this.$router.push(getProdRoute(this.item.target.target.id))
    } else if (this.item.type.key === 'product') {
      this.$router.push(getVariantRoute(this.item.target.target.id))
    }
  }
}
</script>

<style scoped>
.product-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-reponsive {
  height: 200px;
  object-fit: contain;
}
</style>

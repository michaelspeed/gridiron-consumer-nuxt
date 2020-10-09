<template>
  <div>
    <div v-if="$apollo.queries.getProductAsset.loading"
         style="display: flex; justify-content: center; align-items: center">
      <fvLoading/>
    </div>
    <div class="pd-bd product-inner" v-if="!$apollo.queries.getProductAsset.loading">
      <div class="product-img">
        <a href="#" @click="onClickSelection"><img :src="`${assetLink}/${getProductAsset.preview}`" alt="" class="img-reponsive"></a>
      </div>
      <div class="product-info">
        <div class="color-group"></div>

        <div class="element-list element-list-middle">

          <p class="product-cate">Computers &amp; Accessories</p>
          <h3 class="product-title">
            <a href="#" @click="onClickSelection" v-if="item.type.key === 'product'">{{item.target.target.productName}}</a>
            <a href="#" @click="onClickSelection" v-if="item.type.key === 'variant'">{{item.target.target.name}}</a>
          </h3>
          <div class="product-bottom">
            <div class="product-price"><span>$1,215.00</span></div>
          </div>
          <div class="product-bottom-group">
            <a href="#" class="btn-icon">
              <span class="icon-bg icon-cart"></span>
            </a>
            <a href="#" class="btn-icon" @click="view = true">
              <span class="icon-bg icon-view"></span>
            </a>
            <a href="#" class="btn-icon">
              <span class="icon-bg icon-compare"></span>
            </a>
          </div>
        </div>
        <div class="product-button-group">
          <a href="#" class="btn-icon">
            <span class="icon-bg icon-cart"></span>
          </a>
          <a href="#" class="btn-icon" @click="view = true">
            <span class="icon-bg icon-view"></span>
          </a>
          <a href="#" class="btn-icon">
            <span class="icon-bg icon-compare"></span>
          </a>
        </div>
      </div>
    </div>
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
import {GetProductAssetDocument} from "~/gql";
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
    }
  }
})
export default class HomeListItem extends Vue {
  @Prop() item
  private getProductAsset

  private assetLink = assetsURL

  private view: boolean = false

  onClickSelection() {
    if (this.item.type.key === 'variant') {
      this.$router.push(getProdRoute(this.item.target.id))
    } else if (this.item.type.key === 'product') {
      this.$router.push(getVariantRoute(this.item.target.id))
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

<template>
  <div style="background-color: white;">
    <div class="container container-240 shop-collection catleft">
      <ul class="breadcrumb">
        <li><a href="/">Home</a></li>
        <li class="active">{{collection.name}}</li>
      </ul>
      <div class="filter-collection-left hidden-lg hidden-md">
        <a class="btn">Filter</a>
      </div>
      <div class="row shop-colect">
        <div class="col-md-3 col-sm-3 col-xs-12 col-left collection-sidebar" id="filter-sidebar">
          <div class="close-sidebar-collection hidden-lg hidden-md">
            <span>filter</span><i class="icon_close ion-close"></i>
          </div>
          <v-card class="filter-cate" style="margin-bottom: 10px;" elevation="4">
            <v-list subheader>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>
                    mdi-shape
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="primary--text">All Categories</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-subheader>{{collection.name}}</v-subheader>

              <v-list-item @click="onClickCollection(child.id)" v-for="child of collection.children" :key=child.id>

                <v-list-item-content>
                  <v-list-item-title>{{child.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card elevation="4">
            <v-card-title class="primary--text">Filters</v-card-title>
            <v-card-text>
              <v-expansion-panels accordion flat>
                <v-expansion-panel>
                  <v-expansion-panel-header>Price</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-range-slider
                      dense
                      hint="Select Price Range"
                      v-model="priceRange"
                      min="0"
                      max="999999"
                    ></v-range-slider>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <div>
                        <span>₹ {{priceRange[0]}}</span>
                      </div>
                      <div>
                        <span>To</span>
                      </div>
                      <div>
                        <span>₹ {{priceRange[1]}}</span>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel
                  v-for="(facetitems, index) of allFacets" :key="facetitems.id"
                >
                  <v-expansion-panel-header>{{facetitems.name}}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-radio-group v-model="dirtys" multiple>
                      <v-radio
                        color="primary"
                        v-for="childfacet of facetitems.child" :key="childfacet.id"
                        :label="childfacet.name"
                        :value="childfacet.id"
                        @change="onClickChange(childfacet)"
                      ></v-radio>
                    </v-radio-group>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
          <div class="banner" style="margin-top: 20px;">
            <a class="image-bd hover-images" href=""><img src="/img/o-banner3.jpg" alt="" class="img-reponsive"></a>
          </div>
        </div>
        <div class="col-md-9 col-sm-12 col-xs-12 collection-list">
          <v-container>
            <div class="e-product" ref="slider">
              <div class="pd-banner">
                <a href="#" class="image-bd effect_img2"><img src="/banner/1.png" alt="" class="img-responsive"></a>
              </div>
              <div style="margin-bottom: 10px;" v-if="dirty">
                <div style="display: flex; align-items: center;">
                  <span>Filters: </span>
                  <v-chip
                    label
                    style="margin-left: 5px"
                  >
                    ₹ {{priceRange[0]}} - ₹ {{priceRange[1]}}
                  </v-chip>
                  <v-chip
                    label
                    v-for="(dlabs, index) of dirtyLabels" :key="index"
                    style="margin-left: 5px; margin-right: 5px"
                  >
                    {{dlabs}}
                  </v-chip>
                  <v-btn
                    icon
                    color="red"
                    @click="onResetFilter"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </div>
              <v-row v-if="GetAllProdsWithPriceRangeAndFacet">
                <v-col sm="6" md="3" v-for="vars of GetAllProdsWithPriceRangeAndFacet" :key="vars.id">
                  <v-card style="padding: 10px; background-color: #2e3439" elevation="1" @click="onGoToProdRoute(vars.id)">
                    <div class="product-inner">
                      <div class="product-img" style="display: flex; align-items: center; justify-content: center;">
                        <a href="#">
                          <img :src="`${assetLink}/${vars.asset.asset.preview}`" alt="" class="img-reponsive" style="max-height: 320px;object-fit: contain">
                        </a>
                      </div>
                      <div class="product-info">
                        <div class="color-group">
                        </div>
                        <div class="element-list element-list-left">
                        </div>
                        <div class="element-list element-list-middle">
                          <p class="product-cate" style="max-lines: 1">{{vars.product.productName.substring(0 , 40)}}</p>
                          <h3 class="product-title"><a href="#" style="max-lines: 1">{{vars.name.substring(0 , 40)}}</a></h3>
                          <div class="product-bottom">
                            <div class="product-price">
                              <span v-if="getPrice(vars) !== 0">₹ {{getPrice(vars)}}</span>
                              <span v-if="getPrice(vars) === 0" class="text-danger">Unavailable</span>
                            </div>
                          </div>
                        </div>
                        <v-rating
                          color="primary"
                          small
                          length="5"
                          dense
                          :value="vars.rating"
                        ></v-rating>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-container>
          <!--<client-only>
            <div class="e-product" ref="slider">
              <div class="pd-banner">
                <a href="#" class="image-bd effect_img2"><img src="/img/o-banner2.jpg" alt="" class="img-reponsive"></a>
              </div>
              <div class="bestseller">
                <div class="ecome-heading style3v2 spc3">
                  <h1>BestSellers</h1>
                  <a href="#" class="btn-show">Shop more<i class="ion-ios-arrow-forward"></i></a>
                </div>
                <div class="owl-carousel owl-theme owl-cate v2 js-owl-cate2">
                  <v-card class="" v-for="vars of variants" :key="vars.id">
                    <div class="pd-bd product-inner">
                      <div class="product-img">
                        <a href="#">
                          <img :src="`${assetLink}/${vars.asset.asset.preview}`" alt="" class="img-reponsive" style="max-height: 320px;object-fit: contain">
                        </a>
                      </div>
                      <div class="product-info">
                        <div class="color-group">
                        </div>
                        <div class="element-list element-list-left">
                        </div>
                        <div class="element-list element-list-middle">
                          <p class="product-cate" style="max-lines: 1">{{vars.product.productName.substring(0 , 40)}}</p>
                          <h3 class="product-title"><a href="#" style="max-lines: 1">{{vars.name.substring(0 , 40)}}</a></h3>
                          <div class="product-bottom">
                            <div class="product-price">
                              <span v-if="getPrice(vars) !== 0">₹ {{getPrice(vars)}}</span>
                              <span v-if="getPrice(vars) === 0" class="text-danger">Unavailable</span>
                            </div>
                          </div>
                        </div>
                        <v-rating
                          color="primary"
                          small
                          length="5"
                          dense
                          :value="vars.rating"
                        ></v-rating>
                      </div>
                    </div>
                  </v-card>
                </div>
              </div>
            </div>
          </client-only>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {
  Collection, GetAllProdsWithPriceRangeAndFacetDocument,
  GetFacetsByCollectionDocument,
  GetProductVariantForCollectionDocument,
  GetSingleCollectionDocument, ProductVariant
} from "~/gql";
import {getCollectionRoute, getProdRoute} from "~/utils/routingUtils";
import {assetsURL} from "~/utils/global-constants";

@Component({
  layout: 'default',
  async asyncData(context: any) {
    const client = context.app.apolloProvider.defaultClient
    const collection = await client.query({
      query: GetSingleCollectionDocument,
      variables: {
        id: context.route.params.id
      }
    })
    const facetCol = await client.query({
      query: GetFacetsByCollectionDocument,
      variables: {
        id: context.route.params.id
      }
    })
    /*const prodVars = await client.query({
      query: GetProductVariantForCollectionDocument,
      variables: {
        id: context.route.params.id
      }
    })*/
    return {
      collection: collection.data.GetSingleCollection.collection,
      facetValues: collection.data.GetSingleCollection.facetValues,
      facets: facetCol.data.GetFacetsByCollection,
      /*variants: prodVars.data.GetProductVariantForCollection*/
    }
  },
  apollo: {
    GetAllProdsWithPriceRangeAndFacet: {
      query: GetAllProdsWithPriceRangeAndFacetDocument,
      variables() {
        return {
          id: this.$route.params.id,
          facetIds: this.dirtyIds,
          start: this.priceRange[0],
          last: this.priceRange[1]
        }
      }
    }
  }
})
export default class CollectionId extends Vue {
  private collection: Collection
  private facets
  private allFacets: any[] = []
  private variants: ProductVariant[]

  private priceRange=[0, 999999]

  private assetLink = assetsURL

  private dirty = false;
  private dirtyLabels: any[] = []
  private dirtyIds: any[] = []
  private dirtys: any[] = []

  private GetAllProdsWithPriceRangeAndFacet: Collection[]

  $refs: {
    slider: HTMLDivElement
  }

  @Watch('GetAllProdsWithPriceRangeAndFacet')
  onChangeDirty(){
    console.log(this.GetAllProdsWithPriceRangeAndFacet)
  }

  onClickChange(e) {
    if (!this.dirty) {this.dirty = true}
    this.dirtyIds.push(e.id)
    this.dirtyLabels.push(e.name)
  }

  @Watch('priceRange')
  onChangePrice() {
    if (this.priceRange[0] !== 0 || this.priceRange[1] !== 999999) {this.dirty = true}
    console.log(this.priceRange)
  }

  onClickCollection(id){
    this.$router.push(getCollectionRoute(id))
  }

  getPrice(variant: ProductVariant) {
    let price = 0
    if (variant.price !== null && variant.price!.length !== 0) {
      price = variant.price![0].price
    }
    return price
  }

  onResetFilter() {
    this.dirty = false;
    this.priceRange = [0, 999999]
    this.dirtyIds = []
    this.dirtyLabels = []
    this.dirtys = []
  }

  mounted() {
    let face: any[] = []
    for (const fac of this.facets) {
      const filtfac = face.filter(item => item.id === fac.facet.id)
      if (filtfac.length > 0) {
        face[face.findIndex(item => item.id === fac.facet.id)].child.push({id: fac.id, name: fac.code})
      } else {
        face.push({id: fac.facet.id, name: fac.facet.name, code: fac.facet.code, child: [{id: fac.id, name: fac.code}]})
      }
    }
    this.allFacets = face;
  }

  onGoToProdRoute(id) {
    this.$router.push(getProdRoute(id))
  }
}
</script>

<style scoped>
.img-reponsive {
  height: 200px;
  object-fit: contain;
}
</style>

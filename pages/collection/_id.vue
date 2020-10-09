<template>
  <div style="background-color: white">
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
          <div class="filter filter-cate">
            <ul class="wiget-content v3">
              <li class="active"><a href="#">All Categories</a>

                <ul class="wiget-content v4">
                  <li><h3>{{collection.name}}</h3></li>
                  <li v-for="child of collection.children"><a href="javascript:;" @click="onClickCollection(child.id)">{{child.name}}</a></li>
                </ul>
              </li>

            </ul>
          </div>
          <div class="filter filter-group">
            <h1 class="widget-blog-title">Product filter</h1>
            <div class="filter-price filter-inside">
              <h3>Price</h3>
              <div class="filter-content">
                <div class="price-range-holder">
                  <input type="text" class="price-slider" value="">
                </div>
                <span class="min-max">
                                    Price: $25 — $258
                                </span>
                <a href="#" class="btn-filter e-gradient">Filter</a>
              </div>
            </div>
            <div class="filter-brand filter-inside" v-for="(facetitems, index) of allFacets" :key="facetitems.id">
              <h3>{{facetitems.name}}</h3>
              <ul class="e-filter brand-filter">
                <li v-for="childfacet of facetitems.child" :key="childfacet.id"><a href="#">{{childfacet.name}}</a></li>
              </ul>
            </div>
          </div>
          <div class="banner">
            <a class="image-bd hover-images" href=""><img src="/img/o-banner3.jpg" alt="" class="img-reponsive"></a>
          </div>
        </div>
        <div class="col-md-9 col-sm-12 col-xs-12 collection-list">
          <div class="e-product">
            <div class="pd-banner">
              <a href="#" class="image-bd effect_img2"><img src="/img/o-banner2.jpg" alt="" class="img-reponsive"></a>
            </div>
            <div class="bestseller">
              <div class="ecome-heading style3v2 spc3">
                <h1>BestSellers</h1>
                <a href="#" class="btn-show">Shop more<i class="ion-ios-arrow-forward"></i></a>
              </div>
              <div class="owl-carousel owl-theme owl-cate v2 js-owl-cate2">

                <div class="product-item" v-for="vars of variants" :key="vars.id">
                  <div class="pd-bd product-inner">
                    <div class="product-img">
                      <a href="#"><img :src="`${assetLink}/${vars.asset.asset.preview}`" alt="" class="img-reponsive" style="height: 320px;object-fit: contain"></a>
                    </div>
                    <div class="product-info">
                      <div class="color-group">
                      </div>
                      <div class="element-list element-list-left">
                      </div>
                      <div class="element-list element-list-middle">
                        <p class="product-cate">{{vars.product.productName}}</p>
                        <h3 class="product-title"><a href="#">{{vars.name}}</a></h3>
                        <div class="product-bottom">
                          <div class="product-price">
                            <span v-if="getPrice(vars) !== 0">₹ {{getPrice(vars)}}</span>
                            <span v-if="getPrice(vars) === 0" class="text-danger">Unavailable</span>
                          </div>
                        </div>
                      </div>
                      <div class="product-button-group">
                        <a href="#" class="btn-icon" v-if="getPrice(vars) !== 0">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {
  Collection,
  GetFacetsByCollectionDocument,
  GetProductVariantForCollectionDocument,
  GetSingleCollectionDocument, ProductVariant
} from "~/gql";
import {getCollectionRoute} from "~/utils/routingUtils";
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
    const prodVars = await client.query({
      query: GetProductVariantForCollectionDocument,
      variables: {
        id: context.route.params.id
      }
    })
    return {
      collection: collection.data.GetSingleCollection.collection,
      facetValues: collection.data.GetSingleCollection.facetValues,
      facets: facetCol.data.GetFacetsByCollection,
      variants: prodVars.data.GetProductVariantForCollection
    }
  }
})
export default class CollectionId extends Vue {
  private collection: Collection
  private facets
  private allFacets: any[] = []
  private variants: ProductVariant[]

  private assetLink = assetsURL

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

    (<any>$('.js-owl-cate2')).owlCarousel({
      margin: 30,
      autoplay: false,
      autoplayTimeout: 3000,
      loop: true,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        1024: {
          items: 3
        },
        1200: {
          items: 3
        },
        1600: {
          items: 3,
          margin: 40
        }
      }
    });
  }
}
</script>

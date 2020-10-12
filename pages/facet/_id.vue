<template>
  <div style="background-color: white">
    <div class="container container-240 shop-collection catleft">
      <ul class="breadcrumb">
        <li><a href="/">Home</a></li>
        <li class="active">{{facets.facet.name}}</li>
      </ul>
      <div class="row shop-colect">
        <div class="col-md-9 col-sm-12 col-xs-12 collection-list">
          <div class="e-product">
            <div class="pd-banner">
              <a href="#" class="image-bd effect_img2"><img src="/img/o-banner2.jpg" alt="" class="img-reponsive"></a>
            </div>
            <div class="bestseller" v-for="cols of getCollections()" :key="cols.id">
              <div class="ecome-heading style3v2 spc3">
                <h1>{{cols.name}}</h1>
                <a href="#" class="btn-show">Shop more<i class="ion-ios-arrow-forward"></i></a>
              </div>
              <div class="owl-carousel owl-theme owl-cate v2 js-owl-cate2">

                <div class="product-item" v-for="vars of cols.products" :key="vars.id">
                  <div class="pd-bd product-inner">
                    <div class="product-img">
                      <a href="#"><img :src="`${assetLink}/${vars.featuredAsset.preview}`" alt="" class="img-reponsive" style="height: 320px;object-fit: contain"></a>
                    </div>
                    <div class="product-info">
                      <div class="color-group">
                      </div>
                      <div class="element-list element-list-left">
                      </div>
                      <div class="element-list element-list-middle">
                        <!--<p class="product-cate">{{vars}}</p>-->
                        <h3 class="product-title"><a href="#">{{vars.productName}}</a></h3>
                        <div class="product-bottom">
                          <div class="product-price">

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
        <div class="col-md-3 col-sm-3 col-xs-12 col-left collection-sidebar" id="filter-sidebar">
          <div class="close-sidebar-collection hidden-lg hidden-md">
            <span>filter</span><i class="icon_close ion-close"></i>
          </div>
          <div class="filter filter-cate">
            <ul class="wiget-content v3">
              <li class="active"><a href="#">All Categories</a>

                <ul class="wiget-content v4" v-for="cols of getCollections()" :key="cols.id">
                  <li><h3>{{cols.name}}</h3></li>
                  <li v-for="child of cols.children"><a href="javascript:;" @click="onClickCollection(child.id)">{{child.name}}</a></li>
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
            <!--<div class="filter-brand filter-inside" v-for="(facetitems, index) of allFacets" :key="facetitems.id">
              <h3>{{facetitems.name}}</h3>
              <ul class="e-filter brand-filter">
                <li v-for="childfacet of facetitems.child" :key="childfacet.id"><a href="#">{{childfacet.name}}</a></li>
              </ul>
            </div>-->
          </div>
          <div class="banner">
            <a class="image-bd hover-images" href=""><img src="/img/o-banner3.jpg" alt="" class="img-reponsive"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {Collection, FacetValue, GetFacetDocumentDocument, Product, ProductVariant, QueryFacetDocument} from "~/gql";
import {assetsURL} from "~/utils/global-constants";
import {getCollectionRoute} from "~/utils/routingUtils";

@Component({
  layout: 'default',
  async asyncData(context: any) {
    const client = context.app.apolloProvider.defaultClient
    const allProds = await client.query({
      query: QueryFacetDocument,
      variables: {
        id: context.route.params.id
      }
    })
    const facetDoc = await client.query({
      query: GetFacetDocumentDocument,
      variables: {
        id: context.route.params.id
      }
    })
    return {
      products: allProds.data.queryFacet,
      facets: facetDoc.data.GetFacetDocument
    }
  }
})
export default class Facet extends Vue {
  private products: Product[]
  private facets: FacetValue
  private assetLink = assetsURL

  private collections: Collection[] = []

  getCollections(): Collection[] {
    let allcoll: Collection[] = []
    for (const ites of this.products) {
      const colfilt = allcoll.filter(item => item.id === ites.collection!.id)
      if (colfilt.length > 0) {
        const index = allcoll.findIndex(item => item.id === ites.collection!.id)
        allcoll[index].products!.push(ites)
      } else {
        allcoll.push({
          ...ites.collection!,
          products: [ites],
        })
      }
    }
    return allcoll
  }

  onClickCollection(id){
    this.$router.push(getCollectionRoute(id))
  }

  updated() {
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

  mounted() {
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

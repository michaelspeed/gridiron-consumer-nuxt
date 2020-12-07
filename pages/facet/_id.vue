<template>
  <div style="background-color: #212121">
    <div class="container container-240 shop-collection catleft">
      <ul class="breadcrumb">
        <li><a href="javascript:;" @click="$router.push('/')" style="color: white">Home</a></li>
        <li class="active">{{facets.facet.name}}</li>
      </ul>
      <div class="row shop-colect">
        <div class="col-md-12 col-sm-12 col-xs-12 collection-list">
          <div class="e-product">
            <div class="pd-banner">
              <a href="#" class="image-bd effect_img2"><img src="/img/o-banner2.jpg" alt="" class="img-reponsive"></a>
            </div>
            <div class="bestseller" v-for="cols of getCollections()" :key="cols.id">
              <div class="ecome-heading style2" style="background-color: #212121">
                <h1 style="background-color: #212121" class="title-white">{{cols.name}}</h1>
              </div>
              <div class="row">

                <v-card class="col-md-4 col-sm-6 col-xs-12 col-lg-4" v-for="vars of cols.products" elevation="4" hover @click="onClickVariant(vars.id)" :key="vars.id">
                  <div>
                    <div class="product-inner">
                      <div class="product-img" style="display: flex; justify-content: center; align-items: center;">
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
                </v-card>
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
import {Collection, FacetValue, GetFacetDocumentDocument, Product, ProductVariant, QueryFacetDocument} from "~/gql";
import {assetsURL} from "~/utils/global-constants";
import {getCollectionRoute, getVariantRoute} from "~/utils/routingUtils";

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

  onClickVariant(id) {
    this.$router.push(getVariantRoute(id))
  }

}
</script>

<template>
  <section class="all-s">
    <div class="ads-group v2 nospc" style="margin-top: 68px;">
      <div class="container container-240">
        <div class="row" v-if="getHomePage.single.main">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 set-flex ">
            <div class="slide-home3" style="height: 500px !important;">
              <v-carousel cycle continuous hide-delimiter-background show-arrows-on-hover
                          delimiter-icon="mdi-minus">
                <v-carousel-item
                  v-for="(mainitems, index) of getHomePage.single.main" @click="onClickCarousel(mainitems)" :key="index"
                >
                  <div class="e-slide-img bg-gradient" style="height: 500px !important;">
                    <a href="javascript:;" @click="onClickCarousel(mainitems)" style="height: 450px !important;">
                      <!--<img :src="`${assetLink}/${mainitems.preview.preview}`" alt="" style="height: 450px; object-fit: contain; opacity: 0.4">-->
                      <v-img :src="`${assetLink}/${mainitems.preview.preview}`" contain height="450px"></v-img>
                    </a>
                    <v-sheet class="slide-content v2" style="padding: 20px;" color="primary" elevation="2">
                      <h2 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-if="mainitems.type === 'product'">{{mainitems.target.productName.substring(0, 30)}}</h2>
                      <h2 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-else-if="mainitems.type === 'variant'">{{mainitems.target.name.substring(0, 30)}}</h2>
                      <h2 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-else-if="mainitems.type === 'category'">{{mainitems.target.name.substring(0, 30)}}</h2>
                      <v-btn
                        text
                        color="secondary"
                      >Shop Now</v-btn>
                    </v-sheet>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-product spc2">
      <div class="container container-240">
        <client-only>
          <div v-for="(listitem,index) of getHomePage.single.lists" :class="{'active': index === listIndex}" :key="index">
            <div class="ecome-heading style2">
              <h1>{{listitem.name}}</h1>
            </div>
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 product-item" v-for="(sublistitem, subindex) of listitem.items" :key="subindex">
                <HomeListItem :item="sublistitem"/>
              </div>
            </div>
          </div>
        </client-only>
        <!--<div class="row">
          <div class="col-md-3 col-sm-4 col-xs-12">
            <ul class="tab-link">
              <li v-for="(listitem,index) of getHomePage.single.lists" :class="{'active': index === listIndex}">
                <a data-toggle="tab" href="#" aria-expanded="true" @click="listIndex = index">
                  <div class="tab-link-info flex align-center">
                    &lt;!&ndash;<img src="img/category/1.png" alt="">&ndash;&gt;
                    <span>{{listitem.name}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-9 col-sm-8 col-xs-12">
            <client-only>
              <div class="tab-content">
                <div class="tab-pane" v-for="(listitem,index) of getHomePage.single.lists" :id="`main-list-${index}`" :class="{'fade active in': index === listIndex}">
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 product-item" v-for="(sublistitem, subindex) of listitem.items" :key="subindex">
                      <HomeListItem :item="sublistitem"/>
                    </div>
                  </div>
                </div>
              </div>
            </client-only>
          </div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {GetHomePageDocument} from "~/gql";
import {assetsURL} from "~/utils/global-constants";
import HomeListItem from "~/components/Home/HomeListItem.vue";
import {getProdRoute, getVariantRoute} from "~/utils/routingUtils";
import VueSlickCarousel from 'vue-slick-carousel'

@Component({
  components: {HomeListItem, VueSlickCarousel},
  layout: 'default',
  /*apollo: {
    getHomePage: {
      query: GetHomePageDocument
    }
  },*/
  asyncData(context: any) {
    const client = context.app.apolloProvider.defaultClient
    return new Promise((resolve, reject) => {
      client.query({
        query: GetHomePageDocument
      }).then(value => {
        resolve({
          getHomePage: value.data.getHomePage
        })
      }).catch(e => console.log(e))
    })
  }
})
export default class Index extends Vue {
  private getHomePage
  private assetLink = assetsURL

  private listIndex = 0

  onClickCarousel(item) {
    if (item.type === 'variant') {
      this.$router.push(getProdRoute(item.target.id))
    } else if (item.type === 'product') {
      this.$router.push(getVariantRoute(item.target.id))
    }
  }

}
</script>

<style scoped>
.theme--dark.v-btn.v-btn--icon {
  color: #F44336;
}
.icon-mega {
  background: -webkit-linear-gradient(#9C27B0, #BA68C8);
  font-size: 40px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slick-slider {
  height: 500px !important;
}
.e-slide-img {
  height: 450px !important;
}
.e-slide .slick-slide img {
  height: 450px !important;
  object-fit: contain;
}
</style>

<template>
  <section class="all-s" style="background-color: #23272b;" :style="{'margin-top': mainMobile? '60px': '0'}">
    <div class="ads-group v2 nospc">
      <div class="container container-240">
        <div class="row" v-if="getHomePage.single.main">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 set-w" v-if="!mainMobile">
            <v-sheet class="vertical-wrapper" v-if="$route.path === '/'" elevation="4">
              <client-only>
                <v-list subheader>
                  <v-list-item v-for="child of GetCollectionTree" :key="child.id" v-if="child.name !== 'default'">

                    <v-list-item-content v-if="child.children.length === 0" @click="$router.push(`/collection/${child.id}`)">
                      <v-list-item-title>{{child.name}}</v-list-item-title>
                    </v-list-item-content>
                    <v-menu
                      open-on-hover
                      offset-x
                      v-if="child.children.length > 0"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item-content v-bind="attrs"
                                             v-on="on" @click="$router.push(`/collection/${child.id}`)">
                          <v-list-item-title>{{child.name}}</v-list-item-title>
                        </v-list-item-content>
                      </template>

                      <v-card>
                        <v-subheader>{{child.name}}</v-subheader>
                        <v-list v-for="childcol of child.children" :key="childcol.id">
                          <v-list-item @click="$router.push(`/collection/${childcol.id}`)" v-if="childcol.children.length === 0">
                            <v-list-item-content>
                              <v-list-item-title>{{childcol.name}}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-menu
                            open-on-hover
                            offset-x
                            v-if="childcol.children.length > 0"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-list-item @click="$router.push(`/collection/${childcol.id}`)">
                                <v-list-item-content>
                                  <v-list-item-title>{{childcol.name}}</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </template>

                            <v-card>
                              <v-subheader>{{childcol.name}}</v-subheader>
                              <v-list v-for="subitem of childcol.children" :key="subitem.id">
                                <v-list-item @click="$router.push(`/collection/${subitem.id}`)">
                                  <v-list-item-content>
                                    <v-list-item-title>{{subitem.name}}</v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-card>
                          </v-menu>
                        </v-list>
                      </v-card>
                    </v-menu>
                  </v-list-item>
                </v-list>
              </client-only>
            </v-sheet>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 set-flex ">
            <div class="slide-home3">
              <v-carousel cycle continuous hide-delimiters :height="mainMobile ? '300px' : '500px'">
                <v-carousel-item
                  v-for="(mainitems, index) of getHomePage.single.main" @click="onClickCarousel(mainitems)" :key="index"
                >
                  <div style="background-color: #23272b">
                    <a href="javascript:;" @click="onClickCarousel(mainitems)">
                      <!--<img :src="`${assetLink}/${mainitems.preview.preview}`" alt="" style="height: 450px; object-fit: contain; opacity: 0.4">-->
                      <v-img :src="`${assetLink}/${mainitems.preview.preview}`" contain :height="mainMobile ? 300 : 500 "></v-img>
                    </a>
                    <v-sheet class="slide-content v2" style="padding: 20px;" color="primary" elevation="2">
                      <h2 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-if="mainitems.type === 'product' && !mainMobile">{{mainitems.target.productName.substring(0, 30)}}</h2>
                      <h6 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-if="mainitems.type === 'product' && mainMobile">{{mainitems.target.productName.substring(0, 30)}}</h6>
                      <h2 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-else-if="mainitems.type === 'variant' && !mainMobile">{{mainitems.target.name.substring(0, 30)}}</h2>
                      <h6 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-else-if="mainitems.type === 'variant' && mainMobile">{{mainitems.target.name.substring(0, 30)}}</h6>
                      <h2 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-else-if="mainitems.type === 'category' && !mainMobile">{{mainitems.target.name.substring(0, 30)}}</h2>
                      <h6 class="v2 font-weight-bold" style="font-weight: bolder !important; color: white" v-else-if="mainitems.type === 'category' && mainMobile">{{mainitems.target.name.substring(0, 30)}}</h6>
                      <v-btn
                        text
                        color="secondary"
                        :x-small="mainMobile"
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

    <div class="feature v2" v-if="!mainMobile">
      <div class="container container-240">
        <div class="feature-inside">
          <div class="feature-block v2 text-center">
            <div class="feature-block-img">
              <i class="fas fa-truck icon-mega"></i>
            </div>
            <div class="feature-info v2">
              <h3 class="title-white">Prompt Delivery</h3>
              <p>With sites in 5 languages, we ship to over 200 countries & regions.</p>
            </div>
          </div>
          <div class="feature-block v2 text-center">
            <div class="feature-block-img"><i class="fas fa-credit-card icon-mega"></i></div>
            <div class="feature-info v2">
              <h3 class="title-white">Safe Payment</h3>
              <p>Pay with the world’s most popular and secure payment methods.</p>
            </div>
          </div>
          <div class="feature-block v2 text-center">
            <div class="feature-block-img">
              <i class="fas fa-shield-alt icon-mega"></i>
            </div>
            <div class="feature-info v2">
              <h3 class="title-white">Shop with Confidence</h3>
              <p>Our Buyer Protection covers your purchase from click to delivery.</p>
            </div>
          </div>
          <div class="feature-block v2 text-center">
            <div class="feature-block-img icon-mega">
              <i class="fas fa-headset"></i>
            </div>
            <div class="feature-info v2">
              <h3 class="title-white">24/7 Help Center</h3>
              <p>Round-the-clock assistance for a smooth shopping experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-product spc2">
      <div class="container container-240">
        <client-only>
          <div v-for="(listitem,index) of getHomePage.single.lists" :class="{'active': index === listIndex}" :key="index">
            <div class="ecome-heading style2" style="background-color: #23272b">
              <h1 style="background-color: #23272b" class="title-white">{{listitem.name}}</h1>
            </div>
            <hooper :itemsToSlide="2" v-if="mainMobile" :infiniteScroll="false" :itemsToShow="2" style="height: 400px">
              <slide v-for="(sublistitem, subindex) of listitem.items" :key="subindex" style="height: 400px">
                <v-col sm="6" md="3" lg="3">
                  <HomeListItem :item="sublistitem"/>
                </v-col>
              </slide>
            </hooper>
            <v-row v-if="!mainMobile">
              <v-col sm="6" md="3" lg="3" v-for="(sublistitem, subindex) of listitem.items" :key="subindex">
                <HomeListItem :item="sublistitem"/>
              </v-col>
            </v-row>
          </div>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {GetCollectionTreeDocument, GetHomePageDocument, GetMenuDocument} from "~/gql";
import {assetsURL} from "~/utils/global-constants";
import HomeListItem from "~/components/Home/HomeListItem.vue";
import {getProdRoute, getVariantRoute} from "~/utils/routingUtils";
import VueSlickCarousel from 'vue-slick-carousel'
import { Hooper, Slide } from 'hooper';

@Component({
  components: {HomeListItem, VueSlickCarousel, Hooper, Slide},
  layout: 'default',
  apollo: {
    GetCollectionTree:{
      query: GetCollectionTreeDocument
    }
  },
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

  private mainMobile = this.$device.isMobile

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
.icon-mega {
  background: -webkit-linear-gradient(#ffbf00, #a67c00);
  font-size: 40px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
ul {
  padding-left: 0 !important;
}
</style>

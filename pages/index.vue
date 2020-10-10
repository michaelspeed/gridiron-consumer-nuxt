<template>
  <section class="all-s">
    <div class="ads-group v2 nospc">
      <div class="container container-240">
        <div class="row" v-if="getHomePage.single.main">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 set-w hidden-xs hidden-sm "></div>
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 set-flex ">
            <div class="slide-home3" style="height: 500px !important;">
              <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :infinite="true" :adaptiveHeight="true" class="e-slide v2">
                <div class="e-slide-img bg-gradient" v-for="mainitems of getHomePage.single.main" @click="onClickCarousel(mainitems)" style="height: 500px !important;">
                  <a href="javascript:;" @click="onClickCarousel(mainitems)" style="height: 450px !important;">
                    <img :src="`${assetLink}/${mainitems.preview.preview}`" alt="" style="height: 450px; object-fit: contain"></a>
                  <div class="slide-content v2">
                    <h3 class="v2" v-if="mainitems.type === 'product'">{{mainitems.target.productName}}</h3>
                    <h3 class="v2" v-else-if="mainitems.type === 'variant'">{{mainitems.target.name}}</h3>
                    <h3 class="v2" v-else-if="mainitems.type === 'category'">{{mainitems.target.name}}</h3>
                    <a href="#" class="slide-btn e-yl-gradient">Shop now<i class="ion-ios-arrow-forward"></i></a>
                  </div>
                </div>
              </VueSlickCarousel>
              <!--<div class="e-slide v2 js-slider-3items">
                <div class="e-slide-img bg-gradient" v-for="mainitems of getHomePage.single.main" @click="onClickCarousel(mainitems)">
                  <a href="javascript:;" @click="onClickCarousel(mainitems)"><img :src="`${assetLink}/${mainitems.preview.preview}`" alt="" style="height: 450px; object-fit: contain"></a>
                  <div class="slide-content v2">
                    <h3 class="v2" v-if="mainitems.type === 'product'">{{mainitems.target.productName}}</h3>
                    <h3 class="v2" v-else-if="mainitems.type === 'variant'">{{mainitems.target.name}}</h3>
                    <h3 class="v2" v-else-if="mainitems.type === 'category'">{{mainitems.target.name}}</h3>
                    <a href="#" class="slide-btn e-yl-gradient">Shop now<i class="ion-ios-arrow-forward"></i></a>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature v2">
      <div class="container container-240">
        <div class="feature-inside">
          <div class="feature-block v2 text-center">
            <div class="feature-block-img">
              <i class="fas fa-truck icon-mega"></i>
            </div>
            <div class="feature-info v2">
              <h3>Prompt Delivery</h3>
              <p>With sites in 5 languages, we ship to over 200 countries & regions.</p>
            </div>
          </div>
          <div class="feature-block v2 text-center">
            <div class="feature-block-img"><i class="fas fa-credit-card icon-mega"></i></div>
            <div class="feature-info v2">
              <h3>Safe Payment</h3>
              <p>Pay with the world’s most popular and secure payment methods.</p>
            </div>
          </div>
          <div class="feature-block v2 text-center">
            <div class="feature-block-img">
              <i class="fas fa-shield-alt icon-mega"></i>
            </div>
            <div class="feature-info v2">
              <h3>Shop with Confidence</h3>
              <p>Our Buyer Protection covers your purchase from click to delivery.</p>
            </div>
          </div>
          <div class="feature-block v2 text-center">
            <div class="feature-block-img icon-mega">
              <i class="fas fa-headset"></i>
            </div>
            <div class="feature-info v2">
              <h3>24/7 Help Center</h3>
              <p>Round-the-clock assistance for a smooth shopping experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-product spc2">
      <div class="container container-240">
        <div class="ecome-heading style2">
          <h1>Featured</h1>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-4 col-xs-12">
            <ul class="tab-link">
              <li v-for="(listitem,index) of getHomePage.single.lists" :class="{'active': index === listIndex}">
                <a data-toggle="tab" href="#" aria-expanded="true" @click="listIndex = index">
                  <div class="tab-link-info flex align-center">
                    <img src="img/category/1.png" alt="">
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
        </div>
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
      })
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

  mounted() {
    /*(<any>$('.js-slider-3items')).not('.slick-initialized').slick({
      autoplay: true,
      infinite: true,
      arrows: true,
      dots: true
    });*/
  }
}
</script>

<style scoped>
.icon-mega {
  background: -webkit-linear-gradient(#D9F66B, #8CC209);
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

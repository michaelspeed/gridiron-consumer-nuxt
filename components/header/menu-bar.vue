<template>
  <v-app-bar elevation="4" color="primary" class="header-bottom hidden-xs hidden-sm" style="margin-top: 64px; background-color: #212121; ">
    <div class="container container-240">
      <div class="row">
        <div class="col-lg-3 widget-verticalmenu">
          <div class="navbar-vertical" v-if="$route.path === '/'">
            <v-btn
              text
              rounded
              color="secondary"
              style="width: 100%;"
            >All Categories</v-btn>
          </div>
          <a-popover placement="bottomLeft" v-if="$route.path !== '/'">
            <template slot="content">
              <div>
                <ul class="vertical-group">
                  <li class="vertical-item level1 mega-parent"><a href="#">New Arrivals</a></li>
                  <li class="vertical-item level1 mega-parent"><a href="#">Top 100 Best Seller <span class="h-ribbon e-red mg-l10">Hot</span></a></li>
                  <li class="vertical-item level1" v-for="coltree of GetCollectionTree" :key="coltree.id" v-if="coltree.name !== 'default'"
                      :class="{'vertical-drop': coltree.children.length > 0, 'mega-parent': coltree.children.length === 0}">
                    <a href="javascript:;" @click="$router.push(`/collection/${coltree.id}`)">{{coltree.name}}</a>
                    <div class="menu-level-1 dropdown-menu vertical-menu v2 pd2 style1" v-if="coltree.children.length > 0">
                      <ul class="level1">
                        <li class="level2 col-md-4" v-for="childcol of coltree.children" :key="childcol.id">
                          <a href="javascript:;" @click="$router.push(`/collection/${childcol.id}`)">{{childcol.name}}</a>
                          <ul class="menu-level-2" v-if="childcol.children > 0">
                            <li class="level3" v-for="summenu of coltree.children" :key="summenu.id">
                              <a href="javascript:;" @click="$router.push(`/collection/${summenu.id}`)" title="">{{summenu.name}}</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </template>
            <div class="navbar-vertical" >
              <v-btn
                rounded
                color="primary"
                style="width: 100%;"
              >All Categories</v-btn>
            </div>
          </a-popover>
        </div>
        <div class="col-lg-9 widget-left">
          <div class="flex lr" style="margin-top: -12px">
            <nav class="main-menu flex align-center">
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav js-menubar">
                  <li class="level1" v-for="(menuitem, index) of menu" :class="{'dropdown': true}" :key="index">
                    <a href="javascript:;" @click="OnClickMenu(menuitem)" v-if="!menuitem.children || menuitem.children.length === 0">{{menuitem.title.substring(0, 10)}}</a>
                    <v-menu
                      open-on-hover
                      offset-y
                      transition="scale-transition"
                      v-if="menuitem.children && menuitem.children.length > 0"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <a href="javascript:;" @click="OnClickMenu(menuitem)" v-bind="attrs"
                           v-on="on">{{menuitem.title.substring(0, 10)}}</a>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(subitem, subindex) of menuitem.children"
                          :key="subindex"
                          @click="OnClickMenu(menuitem)"
                        >
                          <v-list-item-title>{{subitem.title.substring(0, 10)}}</v-list-item-title>
                          <!--<a href="javascript:;" @click="OnClickMenu(menuitem)" title="">{{subitem.title}}</a>-->
                        </v-list-item>
                      </v-list>
                    </v-menu>

                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {Collection, GetCollectionTreeDocument, GetMenuDocument} from "~/gql";
import {getCollectionRoute, getFacetRoute} from "~/utils/routingUtils";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState({
      cart: (state: any) => state.cart.cart
    })
  },
  apollo: {
    GetMenu: {
      query: GetMenuDocument
    },
    GetCollectionTree:{
      query: GetCollectionTreeDocument
    }
  }
})
export default class MenuBar extends Vue {
  private menu: any[] = []
  private GetMenu
  private GetCollectionTree: Collection[]

  @Watch('GetMenu')
  onGetMenu() {
    this.menu = JSON.parse(this.GetMenu.menu)
  }

  OnClickMenu(item) {
    if (item.target === 'COLLECTION') {
      this.$router.push(getCollectionRoute(item.targetId))
    } else if (item.target === 'FACET') {
      this.$router.push(getFacetRoute(item.targetId))
    }
  }

}
</script>

<style scoped>
.widget-verticalmenu .navbar-toggles {
  background: #EAFC9D;
  background-image: linear-gradient(122deg, #D9F66B, #71A206);
}
.widget-verticalmenu .vertical-group .vertical-item {
  border-bottom: 0
}
.widget-verticalmenu .vertical-group {
  border: 0
}
.widget-verticalmenu .vertical-group .vertical-item.mega-parent > a {
  color: whitesmoke;
}
.vertical-wrapper {
  margin-top: 13px;
  position: absolute;
  z-index: 4;
  width: 100%;
  padding-right: 37px;
  background-color: transparent;
}
.vertical-group {
  border-radius: 10px;
  position: relative;
  background: #212121;
}
.vertical-item {
  padding: 0 24px;
}
.vertical-item:last-child {
  border-bottom: 0; }
.vertical-item > a {
  color: #333333;
  display: block;
  padding: 16px 0 15px 0;
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  position: relative;
  line-height: 100%; }
.vertical-item.vertical-drop > a {
  color: #666; }
.vertical-item.vertical-drop > a:before {
  content: '\f3d3';
  font-family: ionicons;
  text-align: center;
  font-size: 17px;
  top: 50%;
  position: absolute;
  right: 0px;
  line-height: 100%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #bcbcbc; }
.vertical-item.mega-parent > a {
  color: #333333;
  font-weight: bold; }
.vertical-item:hover > a {
  color: #ff5050; }
.vertical-item:hover > a:before {
  color: #ff5050; }
.vertical-item:hover::before {
  content: '';
  width: 15px;
  height: 100%;
  right: -13px;
  top: 0;
  display: block;
  position: absolute; }
</style>

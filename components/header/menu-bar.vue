<template>
  <v-app-bar elevation="0" color="#23272b" class="header-bottom hidden-xs hidden-sm" style="margin-top: 64px; background-color: #23272b; ">
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
              <div style="width: 100%; background-color: #2e3439">
                <v-sheet elevation="4" color="primary" style="background-color: #2e3439; width: 100%;">
                  <v-list subheader style="width: 300px;" color="primary">
                    <v-list-item v-for="child of GetCollectionTree" v-if="child.name !== 'default'" :key="child.id">

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

                        <v-card style="background-color: #2e3439">
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

                              <v-card style="background-color: #2e3439">
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
                </v-sheet>
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
            <div style="margin-top: 20px; width: 400px; display: flex; justify-content: flex-end; align-items: flex-end">
              <v-text-field
                class="hidden-sm-and-down"
                v-model="searchText"
                append-icon="mdi-magnify"
                solo
                clear-icon="mdi-close-circle"
                clearable
                label="Search ..."
                type="text"
                dense
                width="400px"
                @click:append="onClickSearch"
              ></v-text-field>
            </div>
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
  private searchText = ''

  @Watch('GetMenu')
  onGetMenu() {
    this.menu = JSON.parse(this.GetMenu.menu)
  }

  onClickSearch() {

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

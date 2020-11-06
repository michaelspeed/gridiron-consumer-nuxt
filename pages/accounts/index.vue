<template>
  <div>
    <v-container style="margin-top: 40px">
      <div class="row">
        <div class="col-md-3 col-sm-12 col-xs-12">
          <v-sheet elevation="1">
            <h2 style="padding: 20px">My Account</h2>
            <div>
              <v-list dense>
                <v-list-item-group
                  color="primary"
                  v-model="tabs"
                >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-face-profile</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-cart-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Orders</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-office-building-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Addresses</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-sheet>
        </div>
        <div class="col-md-9 col-sm-12 col-xs-12">
          <Profile v-if="tabs === 0"/>
          <OrdersComponent v-if="tabs === 1"/>
          <AccountsComponent v-if="tabs === 2"/>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import Profile from "~/components/accounts/Profile.vue";
import OrdersComponent from "~/components/accounts/Orders.vue";
import AccountsComponent from "~/components/accounts/Accounts.vue";

@Component({
  components: {Profile, OrdersComponent, AccountsComponent}
})
export default class Accounts extends Vue {
  private tabs = 0

  mounted() {
    if (this.$route.query.q === 'order') {
      this.tabs = 1
    } else if (this.$route.query.q === 'address') {
      this.tabs = 2
    }
  }

  @Watch('$route.query.q')
  onChangeQuery() {
    if (this.$route.query.q === 'order') {
      this.tabs = 1
    } else if (this.$route.query.q === 'address') {
      this.tabs = 2
    } else {
      this.tabs = 0
    }
  }
}
</script>

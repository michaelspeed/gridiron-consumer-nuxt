<template>
  <div>
    <v-container>
      <v-row>
        <v-col col="12" md="3" sm="12" >
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
        </v-col>
        <v-col col="12" md="9" sm="12" >
          <Profile v-if="tabs === 0"/>
          <OrdersComponent v-if="tabs === 1"/>
          <AccountsComponent v-if="tabs === 2"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import Profile from "~/components/accounts/Profile.vue";
import OrdersComponent from "~/components/accounts/Orders.vue";
import AccountsComponent from "~/components/accounts/Accounts.vue";

@Component({
  components: {Profile, OrdersComponent, AccountsComponent}
})
export default class Accounts extends Vue {
  private tabs = 0

}
</script>

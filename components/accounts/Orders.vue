<template>
  <v-sheet style="padding: 20px" elevation="1">
    <div>
      <h3>Orders</h3>
    </div>
    <v-divider/>
    <v-progress-linear
      color="lime"
      indeterminate
      reverse
      v-if="$apollo.queries.getMyOrders.loading"
    ></v-progress-linear>

    <div v-if="!$apollo.queries.getMyOrders.loading">
      <v-card v-for="orders of getMyOrders" :key="orders.id" style="padding: 20px; margin: 4px; cursor: pointer;" outlined @click="onGetOrders(orders.id)">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <div>
              <h4>
                <v-chip
                  color="primary"
                  outlined
                >
                  Order On : {{getDate(orders.createdAt)}}
                </v-chip>
              </h4>
            </div>
            <div>
              Total Items: {{orders.line.length}}
            </div>
          </div>
          <div>
            ₹ {{orders.totalPrice}}
          </div>
          <div>
            <v-btn
              text
              color="primary"
            >
              <v-icon
                small
                color="primary"
              >
                mdi-star
              </v-icon>
              Rate and Review
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {GetMyOrdersDocument, Order} from "~/gql";
import moment from "moment";

@Component({
  apollo: {
    getMyOrders: {
      query: GetMyOrdersDocument
    }
  }
})
export default class OrdersComponent extends Vue {
  private getMyOrders: Order[]

  getDate(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  onGetOrders(id: string) {
    return this.$router.push(`/order/${id}`)
  }
}
</script>

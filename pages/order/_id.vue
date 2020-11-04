<template>
  <v-container>
    <v-progress-linear
      color="lime"
      indeterminate
      reverse
      v-if="!getSingleOrder"
    ></v-progress-linear>
    <v-sheet style="padding: 20px" elevation="1" v-if="getSingleOrder">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px">
            <h3>Order</h3>
            <v-chip
              color="success"
              outlined
              x-small
            >
              {{getDate(getSingleOrder.createdAt)}}
            </v-chip>
          </div>
          <div>
            <h6 >#{{getSingleOrder.id}}</h6>
          </div>
        </div>
      </div>
      <v-divider/>
      <div>
        <div v-for="lines of getSingleOrder.line" :key="lines.id">
          <OrderLineComponent :lines="lines"/>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {GetSingleOrderDocument, Order} from "~/gql";
import {myTheme} from "~/utils/custom-theme";
import {assetsURL} from "~/utils/global-constants";
import OrderLineComponent from "~/components/order/orderLine.vue";
import moment from "moment";

@Component({
  components: {
    OrderLineComponent
  },
  async asyncData(context: any) {
    const client = context.app.apolloProvider.defaultClient
    const order = await client.query({
      query: GetSingleOrderDocument,
      variables:{
        id:context.route.params.id
      }
    })
    return {
      getSingleOrder: order.data.getSingleOrder
    }
  }
})
export default class SingleOrder extends Vue {
  private getSingleOrder: Order;
  private theme = myTheme;

  mounted() {
    console.log(this.getSingleOrder)
  }

  getDate(date) {
    return moment(date).format('DD-MM-YYYY')
  }

}
</script>

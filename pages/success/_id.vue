<template>
  <v-container>
    <v-sheet elevation="1">
      <v-sheet style="padding-bottom: 20px">
        <div>
          <v-img src="/logo/success.jpg" style="height: 300px" contain/>
        </div>
        <div style="padding: 20px">
          <h2 style="margin-top: 50px" :style="{'color': theme['color-primary-500']}">Order Placed</h2>
        </div>
        <div v-if="getSingleOrder">
          <div v-for="lines of getSingleOrder.line" :key="lines.id">
            <v-sheet elevation="2" style="padding: 15px; margin: 15px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <h3 :style="{'color': theme['color-primary-500']}">{{lines.item.productVariant.name}}</h3>
                <div>
                  <span>Quantity: {{lines.item.quantity}}</span>
                </div>
              </div>
              <v-divider></v-divider>
              <v-chip
                color="green "
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-label
                </v-icon>
                {{lines.stage}}
              </v-chip>
            </v-sheet>
          </div>
        </div>
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {myTheme} from "~/utils/custom-theme";
import {GetSingleOrderDocument, Order} from "~/gql";

@Component({
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
export default class SuccessOrder extends Vue {
  private theme = myTheme;
  private getSingleOrder: Order;

  mounted() {
    console.log(this.getSingleOrder)
  }
}
</script>

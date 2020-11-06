<template>
  <v-container>
    <v-sheet elevation="1">
      <v-sheet style="padding-bottom: 20px">
        <div>
          <v-img src="/logo/success.jpg" style="height: 350px" contain/>
        </div>
        <div style="padding: 20px; display: flex; align-items: center; justify-content: center">
          <v-icon
            large
            color="green darken-2"
          >
            mdi-check-bold
          </v-icon>
          <h2 style="margin-top: 30px" class="display-1" :style="{'color': theme['color-primary-500']}">Order Placed</h2>
        </div>
        <div v-if="getSingleOrder">
          <div v-for="lines of getSingleOrder.line" :key="lines.id">
            <v-sheet elevation="0" style="padding: 15px; margin: 15px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <h3 :style="{'color': theme['color-primary-500']}">{{lines.item.productVariant.name}}</h3>
                <div>
                  <span class="subtitle-1">Quantity: {{lines.item.quantity}}</span>
                </div>
              </div>
              <v-divider></v-divider>
              <v-stepper alt-labels v-model="lines.stage" >
                <v-stepper-header>
                  <v-stepper-step step="1" :complete="lines.stage === 'CREATED'">
                    <v-chip
                      color="red"
                      label
                      small
                      outlined
                    >
                      CREATED
                    </v-chip>
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="2" :complete="lines.stage === 'PACKAGED'">
                    <v-chip
                      color="orange"
                      label
                      small
                      outlined
                    >
                      PROCESSED
                    </v-chip>
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3" :complete="lines.stage === 'PROCESSED'">
                    <v-chip
                      color="orange"
                      label
                      small
                      outlined
                    >
                      PACKAGED
                    </v-chip>
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step step="4" :complete="lines.stage === 'SHIPPED'">
                    <v-chip
                      color="green"
                      label
                      small
                      outlined
                    >
                      SHIPPED
                    </v-chip>
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step step="5" :complete="lines.stage === 'DELIVERED'">
                    <v-chip
                      color="green "
                      label
                      small
                      outlined
                    >
                      DELIVERED
                    </v-chip>
                  </v-stepper-step>
                </v-stepper-header>
              </v-stepper>
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

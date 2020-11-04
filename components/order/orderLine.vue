<template>
  <div>
    <v-sheet elevation="0" style="padding: 15px; margin: 15px">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <div style="display: flex; align-items: center; justify-content: center">
          <v-img v-if="getProductAsset" :src="`${assetLink}/${getProductAsset.preview}`" contain aspect-ratio="2" style="height: 80px; width: 80px; margin-right: 10px"/>
          <h3 :style="{'color': theme['color-primary-500']}">{{lines.item.productVariant.name}}</h3>
        </div>
        <div>
          <span class="subtitle-1">Quantity: {{lines.item.quantity}}</span>
          <div>
            <span class="font-weight-bold">₹ {{lines.item.quantity * lines.priceField.price}}</span>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <v-stepper alt-labels v-model="lines.stage" >
        <v-stepper-header>
          <v-stepper-step step="1" :complete="lines.stage === 'CREATED'">
            <v-chip
              color="red"
              label
              x-small
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
              x-small
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
              x-small
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
              x-small
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
              x-small
              outlined
            >
              DELIVERED
            </v-chip>
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from "nuxt-property-decorator";
import {GetProductAssetDocument, OrderLine} from "~/gql";
import {myTheme} from "~/utils/custom-theme";
import {assetsURL} from "~/utils/global-constants";

@Component({
  apollo: {
    getProductAsset: {
      query: GetProductAssetDocument,
      variables() {
        return {
          variantId: this.lines.item.productVariant.id
        }
      },
    }
  }
})
export default class OrderLineComponent extends Vue {
  @Prop() lines: OrderLine
  private theme = myTheme;
  private getProductAsset
  private assetLink = assetsURL

}
</script>

<style scoped>
.v-stepper {
  box-shadow: inherit
}
</style>

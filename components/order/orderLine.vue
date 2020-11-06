<template>
  <div>
    <v-sheet elevation="0" style="padding: 15px; margin: 15px">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <div style="display: flex; align-items: center; justify-content: center">
          <v-img v-if="getProductAsset" :src="`${assetLink}/${getProductAsset.preview}`" contain aspect-ratio="2" style="height: 80px; width: 80px; margin-right: 10px"/>
          <div>
            <h3 :style="{'color': theme['color-primary-500']}">{{lines.item.productVariant.name}}</h3>
            <v-btn text x-small color="primary" @click="addReview = true">Rate & Review</v-btn>
          </div>
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
    <v-dialog v-model="addReview" width="60vw">
      <v-card tile>
        <v-card-title class="primary lighten-2">
          Add Rating & Review
        </v-card-title>
        <v-card-text>
          <div>
            <v-rating
              hover
              length="5"
              :value="rating"
            ></v-rating>
            <v-textarea
              label="Review"
              :value="review"
            ></v-textarea>
          </div>
        </v-card-text>
        <v-progress-linear
          color="lime"
          indeterminate
          reverse
          v-if="adding"
        ></v-progress-linear>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="onClickAddingReview"
          >
            Add
          </v-btn>
          <v-btn
            color="red"
            text
            @click="addReview = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from "nuxt-property-decorator";
import {CreateReviewDocument, GetProductAssetDocument, OrderLine} from "~/gql";
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
  private addReview = false;
  private adding = false;

  private rating = 0
  private review = ''

  onClickAddingReview() {
    this.adding = true;
    this.$apollo.mutate({
      mutation: CreateReviewDocument,
      variables: {
        text: this.review,
        stars: this.rating,
        varId: this.lines.item.productVariant.id
      }
    })
    .then(value => {
      this.adding = false;
      this.addReview = false;
      this.$message.success('Review added');
    })
    .catch(e => {
      this.adding = false;
      this.$message.error(e.message);
    })
  }

}
</script>

<style scoped>
.v-stepper {
  box-shadow: inherit
}
</style>

<template>
  <div>
    <v-sheet elevation="1" style="padding: 20px; margin:5px" v-if="adds">
      <div style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
        <v-chip
          label
          small
        >
          {{adds.addressType}}
        </v-chip>
        <div>
          <v-btn text color="primary">Edit</v-btn>
          <v-btn text color="red">Delete</v-btn>
        </div>
      </div>
      <div style="display: flex; align-items: center;">
        <h3>{{adds.fullName}}</h3> : <h5 style="margin-left: 20px">{{adds.phoneNumber}}</h5>
      </div>
      <div>
        <span>{{adds.addressLine}}, {{adds.city}}, {{adds.state}}, {{adds.postalCode}}</span>
      </div>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {Address, AddressType} from "~/gql";

@Component
export default class AddressLine extends Vue {
  @Prop() adds: Address
  private edit = false;

  private fullname = ''
  private addressLine = ''
  private city = ''
  private state = ''
  private landmark = ''
  private postalcode = ''
  private phoneNumber = ''
  private type = ''
  private loading = false;
  private addTypes = [AddressType.Home, AddressType.Work]


}
</script>

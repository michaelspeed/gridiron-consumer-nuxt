<template>
  <div>
    <v-sheet elevation="1" style="padding: 20px; margin:5px" v-if="adds && !edit">
      <div style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
        <v-chip
          label
          small
        >
          {{adds.addressType}}
        </v-chip>
        <div>
          <v-btn text color="primary" @click="edit = true">Edit</v-btn>
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
    <v-sheet v-if="edit" style="margin:5px">
      <v-card style="margin-bottom: 10px;">
        <v-card-title color="primary">
          <span class="headline">Add new address</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Full Name*"
                  required
                  v-model="fullname"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Phone Number"
                  required
                  v-model="phoneNumber"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Address (Area and Street)*"
                  persistent-hint
                  required
                  v-model="addressLine"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"
                     md="6">
                <v-text-field
                  label="City / District/ Town*"
                  required
                  v-model="city"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"
                     md="6">
                <v-text-field
                  label="State*"
                  required
                  v-model="state"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"
                     md="6">
                <v-text-field
                  label="Pincode*"
                  required
                  v-model="postalcode"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"
                     md="6">
                <v-select
                  :items="addTypes"
                  label="Address Type"
                  v-model="type"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-progress-linear
          v-if="loading"
          color="lime"
          indeterminate
          reverse
        ></v-progress-linear>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small color="primary" tile text :disabled="loading"
          >Update Address</v-btn>
          <v-btn small color="red" tile text @click="edit = false"
          >Cancel</v-btn>
        </v-card-actions>
      </v-card>
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

  mounted() {
    if (this.adds) {
      this.fullname = this.adds.fullName
      this.addressLine = this.adds.addressLine
      this.city = this.adds.city
      this.state = this.adds.state
      this.postalcode  = this.adds.postalCode
      this.phoneNumber = this.adds.phoneNumber
      this.type = this.adds.addressType
    }
  }

}
</script>

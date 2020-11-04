<template>
  <v-sheet>
    <v-card style="padding: 10px; cursor: pointer;" v-if="!add" @click="add = true">
      <v-btn text color="primary">
        <v-icon>
          mdi-plus
        </v-icon>
        Add a new address
      </v-btn>
    </v-card>
    <v-card v-if="add" style="margin-bottom: 10px;">
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
        >Add Address</v-btn>
        <v-btn small color="red" tile text @click="onClickCancelAdd"
        >Cancel</v-btn>
      </v-card-actions>
    </v-card>
    <AddressLine v-for="adds of GetCurrentUser.address" :key="adds.id" :adds="adds"/>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {AddressType, CreateNewAddressDocument, GetCurrentUserDocument, User} from "~/gql";
import AddressLine from "~/components/accounts/AddressLine.vue";

@Component({
  components: {
    AddressLine
  },
  apollo: {
    GetCurrentUser: {
      query: GetCurrentUserDocument
    }
  }
})
export default class AccountsComponent extends Vue {
  private add = false;
  private GetCurrentUser: User;

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

  onClickCancelAdd() {
    setTimeout(() => {
      this.add = false;
    }, 800)
  }

  onCreateAddress() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: CreateNewAddressDocument,
      variables: {
        fullName: this.fullname,
        addressLine: this.addressLine,
        city: this.city,
        state: this.state,
        landmark: this.landmark,
        postalCode: this.postalcode,
        phoneNumber: this.phoneNumber,
        type: this.type,
      }
    })
      .then(value => {
        this.loading = false;
        this.add = false;
        this.$message.success('Address added')
      })
      .catch(e => {
        this.loading = false;
        this.$message.error(e)
      })
  }

}
</script>

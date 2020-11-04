<template>
  <v-sheet style="padding: 20px" elevation="1">
    <div>
      <h3>Profile</h3>
    </div>
    <v-divider/>
    <v-row>
      <v-col md="6" sm="12">
        <v-text-field
          label="First Name*"
          required
          v-model="firstName"
        ></v-text-field>
      </v-col>
      <v-col md="6" sm="12">
        <v-text-field
          label="Last Name*"
          required
          v-model="lastName"
        ></v-text-field>
      </v-col>
      <v-col md="6" sm="12">
        <v-text-field
          label="Phone*"
          required
          v-model="phone"
        ></v-text-field>
      </v-col>
      <v-col md="6" sm="12">
        <v-text-field
          label="Email"
          disabled
          v-model="email"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-progress-linear
      v-if="loading"
      color="lime"
      indeterminate
      reverse
    ></v-progress-linear>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="onUpdate">
        <v-icon left>
          mdi-content-save
        </v-icon>
        Update
      </v-btn>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {UpdateAccountInfoDocument} from "~/gql";

@Component
export default class Profile extends Vue {
  private firstName = ''
  private lastName = ''
  private phone = ''
  private email = ''

  private loading = false;

  @Watch("$store.state.user.user")
  onWatchError() {
    if (this.$store.state.user.user) {
      this.firstName = this.$store.state.user.user.firstName
      this.lastName = this.$store.state.user.user.lastName
      this.phone = this.$store.state.user.user.phoneNumber
      this.email = this.$store.state.user.user.email
    }
  }

  mounted(){
    if (this.$store.state.user.user) {
      this.firstName = this.$store.state.user.user.firstName
      this.lastName = this.$store.state.user.user.lastName
      this.phone = this.$store.state.user.user.phoneNumber
      this.email = this.$store.state.user.user.email
    }
  }

  onUpdate() {
    this.loading = true;
    this.$apollo.mutate({
      mutation: UpdateAccountInfoDocument,
      variables: {
        fname: this.firstName,
        lname: this.lastName,
        phone: this.phone,
      }
    })
    .then(value => {
      this.loading = false;
      this.$message.success('Profile updated')
    })
    .catch(e => {
      this.loading = false;
      this.$message.error(e.message)
    })
  }
}
</script>

<style scoped></style>

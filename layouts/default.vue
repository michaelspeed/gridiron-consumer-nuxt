<template>
  <v-app>
    <div>
      <top-bar/>
      <menu-bar/>
      <v-sheet
        id="scrolling-techniques-6"
        class="overflow-y-auto"
        style="height: 100vh;"
      >
        <nuxt />
        <Footer/>
      </v-sheet>
    </div>
    <!--<div class="h3-bg">
      <div class="wrappage">
        <client-only>
          <header id="header" class="header-v3 bg-w">

            <menu-bar/>
          </header>
        </client-only>

        <Footer/>
      </div>
    </div>-->
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import TopBar from "~/components/header/top-bar.vue";
import MenuBar from "~/components/header/menu-bar.vue";
import Footer from "~/components/footer/footer.vue";
@Component({
  components: {MenuBar, TopBar, Footer}
})
export default class Default  extends Vue {

}
</script>

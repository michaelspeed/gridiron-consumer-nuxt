<template>
  <div>
    <div class="h3-bg">
      <div class="wrappage">
        <client-only>
          <header id="header" class="header-v3 bg-w">
            <top-bar/>
            <menu-bar/>
          </header>
        </client-only>
        <nuxt />
        <Footer/>
      </div>
    </div>
  </div>
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

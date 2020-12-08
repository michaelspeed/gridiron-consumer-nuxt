<template>
  <footer v-if="$store.state.defstore.defstore">
    <div class="f-top v2">
      <div class="container container-240">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div class="footer-block footer-about">
              <div class="f-logo">
                <a href="#"></a>
              </div>
              <ul class="footer-block-content">
                <li>
                  <h2 :style="{'color': theme['color-primary-500']}" class="text-uppercase">{{$store.state.defstore.defstore.storeName}}</h2>
                </li>
                <li class="address">
                  <span>{{$store.state.defstore.defstore.streetAddress1}}</span>
                </li>
                <li class="address">
                  <span>{{$store.state.defstore.defstore.streetAddress2}}</span>
                </li>
                <li class="phone">
                  <span>{{$store.state.defstore.defstore.phoneNumber}}</span>
                </li>
                <li class="email">
                  <span>{{$store.state.defstore.defstore.officialemail}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <!--<div class="footer-block">
              <h3 class="footer-block-title">Quick menu</h3>
              <ul class="footer-block-content">
                <li><a href="#">TV & Video</a></li>
                <li><a href="#">Home Audio & Theater</a></li>
                <li><a href="#">Camera, Photo & Video</a></li>
                <li><a href="#">Cell Phones & Accessories</a></li>
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Video Games</a></li>
                <li><a href="#">Bluetooth & Wireless Speakers</a></li>
                <li><a href="#">Car Electronics</a></li>
              </ul>
            </div>-->
          </div>
          <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div class="footer-block">
              <div class="footer-block-phone">
                <h3 class="footer-block-title">Hot Line</h3>
                <p class="phone-desc">Call Us toll Free</p>
                <p class="phone-light">{{$store.state.defstore.defstore.phoneNumber}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f-bottom" :style="{'background-color': theme['color-primary-500']}">
      <div class="container container-240">
        <div class="row flex lr">
          <div class="col-xs-6 f-copyright"><h6 style="color: white">© 2020 {{$store.state.defstore.defstore.storeName}}. All rights reserved.</h6></div>
          <div class="col-xs-6 f-payment hidden-xs">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {myTheme} from "~/utils/custom-theme";

@Component
export default class Footer extends Vue {
  private theme = myTheme

}
</script>

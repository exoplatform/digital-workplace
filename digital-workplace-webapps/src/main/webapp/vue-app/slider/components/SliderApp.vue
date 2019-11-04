<template>
  <v-app
    id="digital-workplace-slider"
    color="transaprent"
    class="VuetifyApp"
    flat>
    <main>
      <v-carousel
        :height="250"
        hide-delimiter-background>
        <v-carousel-item
          v-for="(item,i) in sliderItems"
          :key="i"
          :src="item.illustration"
          aspect-ratio="2.3">
          <v-sheet
            color="transparent"
            height="100%"
            width="70%"
            class="mx-auto"
            tile>
            <v-row
              class="fill-height"
              align="center"
              justify="center">
              <div>
                <a
                  :href="item.url"
                  class="white--text font-weight-medium carousel-text">
                  {{ item.summary }}</a>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </main>
  </v-app>
</template>
<script>
  import * as  sliderlAPI from '../sliderAPI';
  export default {
    data () {
      return {
        sliderItems: {}
      }
    },
    created() {
      this.getSliderlListItem();
    },
    methods: {
      getSliderlListItem() {
        sliderlAPI.getSliderItems().then(
                (data) => {
                  this.sliderItems = data;
                }
        )
      }
    }
  }
</script>
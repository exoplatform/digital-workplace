<template>
  <v-app
    id="digital-workplace-slider"
    color="transaprent"
    class="VuetifyApp"
    flat>
    <main>
      <v-carousel
        :height="300"
        hide-delimiter-background>
        <v-carousel-item
          v-for="(color, i) in colors"
          :key="color">
          <v-sheet
            :color="color"
            height="100%"
            tile>
            <v-row
              class="fill-height"
              align="center"
              justify="center">
              <div class="display-3">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </main>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'primary',
          'yellow darken-2',
          'orange',
        ],
      }
    },
  }
</script>
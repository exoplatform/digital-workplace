<template>
  <v-app
    id="digital-workplace-news"
    color="transaprent"
    class="VuetifyApp"
    flat>
    <v-container pa-0>
      <v-layout row mx-0 class="white">
        <v-flex
          d-flex
          xs12
          px-3>
          <v-layout
            row
            mx-0
            align-center>
            <v-flex
              d-flex 
              xs12 
              sm6>
              <v-card
                flat
                color="transparent">
                <v-card-text class="body-1 text-uppercase grey--text px-0">
                  Latest news post
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              d-flex 
              xs12 
              sm6
              justify-end>
              <v-btn 
                depressed 
                small 
                class="caption text-uppercase grey--text">See all</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex 
          d-flex 
          xs12 
          px-3>
          <v-layout 
            row 
            wrap 
            mx-0>
            <v-flex
              d-flex
              xs12
              md6
              pb-3>
              <v-img
                aspect-ratio="2.3"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                <v-row align="end" class="lightbox white--text pa-2 fill-height">
                  <v-col>
                    <div class="subtitle-1 font-weight-bold text-uppercase">Lorem ipsum dolor sit amet</div>
                    <div class="body-2">Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem,</div>
                  </v-col>
                </v-row>
              </v-img>
            </v-flex>
            <v-flex
              d-flex
              xs12
              md6>
              <v-layout 
                row 
                wrap 
                mx-0
                pl-3>
                <v-flex
                  v-for="n in 3"
                  :key="n"
                  mb-3>
                  <v-layout row mx-0>
                    <v-flex
                      d-flex
                      xs12
                      md3>
                      <v-img
                        aspect-ratio="2"
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"/>
                    </v-flex>
                    <v-flex
                      d-flex
                      xs12
                      md9>
                      <v-card
                        flat
                        color="transparent">
                        <v-card-title class="subtitle-1 font-weight-bold text-uppercase pt-2">I'm a title</v-card-title>
                        <v-card-text class="pb-2">{{ lorem.slice(0, 70) }}</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem,
      explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.
      Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem,
      explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  }
</script>
<style scoped>
  .v-navigation-drawer {
    transition: none !important;
  }

  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 120px);
  }
</style>


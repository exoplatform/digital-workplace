<template>
  <v-app
    id="digital-workplace-news"
    color="transaprent"
    class="VuetifyApp"
    flat>
    <v-container pa-0>
      <v-layout 
        row 
        mx-0 
        class="white">
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
                :src="news[0].illustration"
                aspect-ratio="2.3">
                <v-row align="end" class="lightbox white--text pa-2 fill-height">
                  <v-col>
                    <div class="subtitle-1 font-weight-bold text-uppercase">{{ news[0].title }}</div>
                    <div class="body-2">{{ news[0].summary }}</div>
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
                pl-md-3>
                <v-flex
                  v-for="(item, index) of news.slice(1)"
                  :key="index"
                  mb-3
                  md12
                  sm4>
                  <v-layout 
                    row 
                    mx-0 
                    mr-sm-2>
                    <v-flex
                      d-flex
                      xs12
                      md3>
                      <v-img
                        :src="item.illustration"
                        aspect-ratio="2"/>
                    </v-flex>
                    <v-flex
                      d-flex
                      xs12
                      md9>
                      <v-card
                        flat
                        color="transparent">
                        <v-card-title class="subtitle-2 font-weight-bold text-uppercase pt-2">{{ item.title }}</v-card-title>
                        <v-card-text class="pb-2">{{ item.summary }}</v-card-text>
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
  import * as newsAPI from '../newsApi'
  export default {
    data () {
      return {
        news: {},
    },
    created() {
      this.getLatestNews();
    },
    methods: {
      getLatestNews() {
        newsAPI.getLatestNews().then(
            (data) => {
               this.news = data;
            }
        )
      }
    }
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


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
                class="caption text-uppercase grey--text d-none d-sm-flex">See all</v-btn>
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
            mx-0
            class="d-none d-sm-flex">
            <v-flex
              d-flex
              xs12
              sm6
              pb-3>
              <v-img
                v-if="news.length > 0"
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
              sm6
              align-start>
              <v-layout 
                row 
                wrap 
                mx-0
                pl-3>
                <v-list
                  three-line
                  class="d-xs-none py-0 list-news">
                  <template v-for="item of news.slice(1)">
                    <v-list-item
                      :key="item.title"
                      class="px-0">
                      <v-list-item-avatar 
                        tile 
                        size="75"
                        class="mr-2 my-0">
                        <v-img :src="item.illustration"/>
                      </v-list-item-avatar>

                      <v-list-item-content class="pt-0">
                        <v-list-item-title class="subtitle-2 font-weight-bold text-uppercase mb-2" v-html="item.title"/>
                        <v-list-item-subtitle class="pb-2 grey-color" v-html="item.summary"/>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>

              </v-layout>
            </v-flex>
          </v-layout>

          <v-carousel
            :height="250"
            class="d-sm-none carousel-news"
            touch
            hide-delimiters>
            <v-carousel-item
              v-for="(slide, index) of news"
              :key="index"
              :src="slide.illustration"
              aspect-ratio="2.3">
              <v-sheet
                color="transparent news-text"
                height="50%"
                width="100%"
                class="mx-auto"
                tile>
                <v-row
                  class="fill-height lightbox mx-0 px-2"
                  justify="center">
                  <div>
                    <a
                      :href="slide.url"
                      class="white--text subtitle-1 font-weight-bold"
                      style="text-shadow: 0 0 13px #000000a8;">
                      {{ slide.title }}</a>
                    <p>{{ slide.summary }}</p>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
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
        news: [],
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
      }
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


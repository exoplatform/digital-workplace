<template>
  <v-app
    id="digital-workplace-events"
    color="transparent"
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
              xs12>
              <v-card
                flat
                color="transparent">
                <a href="#"><v-card-text class="body-1 text-uppercase color-title px-0">
                  {{ this.$t('homepage.events.header') }}
                </v-card-text></a>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          d-flex
          xs12
          px-3>
          <v-layout row>
            <v-flex
              d-flex
              xs12
              pl-3>
              <v-flex
                d-flex
                xs2>
                <v-layout column><v-avatar 
                  color="#568DC9"
                  class="pa-2"
                  size="36">
                  <span class="white--text headline">19</span>
                </v-avatar>
                  <v-avatar size="20">
                    <span class="ml-7 blueText">OCT</span>
                  </v-avatar>            
              </v-layout></v-flex>
              <v-flex
                d-flex
                xs10><v-list-item>
                  <v-list-item-content class="pt-0">
                    <v-card
                      flat
                      class="mb-3 py-1 pl-0"
                      dark
                      color="#52B68D">
                      <v-list-item-title class="ml-2">Training Javascript</v-list-item-title>
                      <v-list-item-title class="ml-2">8:00 - 9:00</v-list-item-title>
                    </v-card>
                    <v-divider
                      color="black"
                      class="mb-3 mt-0"/>
                    <v-card
                      flat
                      class="mb-3 py-1 pl-0"
                      dark
                      color="#D07B7B">
                      <v-list-item-title class="ml-2">Home page Meeting</v-list-item-title>
                      <v-list-item-title class="ml-2">12:00 - 13:30</v-list-item-title>
                    </v-card>
                    <v-card
                      flat
                      class="mb-3 py-1 pl-0"
                      dark
                      color="#FBB340">
                      <v-list-item-title class="ml-2">Product meeting</v-list-item-title>
                      <v-list-item-title class="ml-2">15:00 - 16:30</v-list-item-title>
                    </v-card>
                  </v-list-item-content>
              </v-list-item></v-flex>
            </v-flex>
            <v-flex
              d-flex
              xs12
              pl-3>
              <v-flex
                d-flex
                xs2>
                <v-layout column>
                  <v-avatar size="36" class="px-2">
                    <span class="headline blueText">20</span>
                  </v-avatar>
                  <v-avatar size="20">
                    <span class="ml-7 blueText">OCT</span>
                  </v-avatar>
              </v-layout></v-flex>
              <v-flex
                d-flex
                xs10><v-list-item>
                  <v-list-item-content class="pt-0">
                    <v-card
                      flat
                      dark
                      class="mb-3 py-1"
                      color="#999999">
                      <v-list-item-title class="ml-2">Feature Team Gamification</v-list-item-title>
                      <v-list-item-title class="ml-2">11:00 - 11:15</v-list-item-title>
                    </v-card>
                    <v-card
                      flat
                      class="mb-3 py-1"
                      dark
                      color="#A7B3C5">
                      <v-list-item-title class="ml-2">Feature Team News</v-list-item-title>
                      <v-list-item-title class="ml-2">08:00 - 09:30</v-list-item-title>
                    </v-card>
                  </v-list-item-content>
              </v-list-item></v-flex>
            </v-flex>
          </v-layout>
    </v-flex></v-layout></v-container>
  </v-app>
</template>
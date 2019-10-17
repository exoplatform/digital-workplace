<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app
    id="digital-workplace-events"
    color="transaprent"
    class="VuetifyApp"
    flat>
    <v-container class="white">
      <v-layout align>
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
              sm8>
              <v-card
                class="pt-0"
                flat
                color="transparent">
                <v-card-text class="body-1 text-uppercase grey--text px-0">
                  Events
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              d-flex
              xs12
              sm4
              justify-end>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn 
                    class="pr-0"
                    outlined 
                    color="#568DC9"
                    style="height: 50px"
                    v-on="on">{{ date }}</v-btn>
                  <v-btn 
                    class="ma-2" 
                    color="#568DC9"
                    icon 
                    v-on="on">
                  <v-icon>event</v-icon></v-btn>
                  <!--</v-btn><v-icon color="#568DC9" class="ml-2">event</v-icon>-->
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable>
                  <v-spacer/>
                  <v-btn 
                    text 
                    color="primary" 
                    @click="menu = false">Cancel</v-btn>
                  <v-btn 
                    text 
                    color="primary" 
                    @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>  
      <v-layout>
        <v-flex 
          d-flex
          xs12
          px-3>
          <v-flex
            d-flex
            xs12
            sm2><v-layout column><v-avatar color="#568DC9" size="36">
              <span class="white--text headline">19</span>
            </v-avatar>
              <span style="font-size: 20px">MU</span>
            </v-layout>
          </v-flex>
          <v-flex
            d-flex
            xs12
            sm10><v-list-item>
              <v-list-item-content class="pt-0">
                <v-card 
                  class="mb-3" 
                  dark 
                  color="#52B68D">
                  <v-list-item-title class="ml-2">Training Javascript</v-list-item-title>
                  <v-list-item-title class="ml-2">8:00 - 9:00</v-list-item-title>
                </v-card>
                <v-divider 
                  color="black" 
                  class="mb-3 mt-0"/>
                <v-card 
                  class="mb-3" 
                  dark 
                  color="#D07B7B">
                  <v-list-item-title class="ml-2">Home page Meeting</v-list-item-title>
                  <v-list-item-title class="ml-2">12:00 - 13:30</v-list-item-title>
                </v-card>
                <v-card 
                  class="mb-3" 
                  dark 
                  color="#FBB340">
                  <v-list-item-title class="ml-2">Product meeting</v-list-item-title>
                  <v-list-item-title class="ml-2">15:00 - 16:30</v-list-item-title>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-flex>
        </v-flex>
      </v-layout>

      <v-layout class="mt-4">
        <v-flex
          d-flex
          xs12
          px-3>
          <v-flex
            d-flex
            xs12
            sm2>
            <v-layout column>
              <v-avatar size="36">
                <span class="headline">20</span>
              </v-avatar>
              <v-avatar size="36">
                <span style="font-size: 20px">TU</span>
              </v-avatar>
          </v-layout></v-flex>
          <v-flex
            d-flex
            xs12
            sm10><v-list-item>
              <v-list-item-content class="pt-0">
                <v-card 
                  dark 
                  class="mb-3" 
                  color="#999999">
                  <v-list-item-title class="ml-2">Feature Team Gamification</v-list-item-title>
                  <v-list-item-title class="ml-2">11:00 - 11:15</v-list-item-title>
                </v-card>
                <v-card 
                  class="mb-3" 
                  dark 
                  color="#A7B3C5">
                  <v-list-item-title class="ml-2">Feature Team News</v-list-item-title>
                  <v-list-item-title class="ml-2">08:00 - 09:30</v-list-item-title>
                </v-card>
              </v-list-item-content>
          </v-list-item></v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
    export default {
        
        data: () => ({
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
        }),
    }
</script>

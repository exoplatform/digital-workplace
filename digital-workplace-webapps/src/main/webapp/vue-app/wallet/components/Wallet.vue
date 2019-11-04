<template>
  <v-app
    id="digital-workplace-perkstore"
    class="VuetifyApp"
    flat
    dark>
    <main>
      <v-container pa-0>
        <v-layout
          row
          wrap
          mx-0>
          <v-flex
            d-flex
            sx12>
            <v-layout
              row
              ma-0
              class="white">
              <v-flex d-flex xs12>
                <v-card flat>
                  <v-card-text class="subtitle-2 grey--text pa-2">Wallet Balance</v-card-text>
                </v-card>
              </v-flex>
              <v-flex 
                d-flex 
                xs12 
                justify-center>
                <v-card flat>
                  <v-card-text class="display-1 font-weight-bold pa-2 big-number">300 Ȼ</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

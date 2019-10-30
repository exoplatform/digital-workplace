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
          mx-0
          class="white">
          <v-flex
            d-flex
            xs12
            py-2>
            <div>
              <span class="subtitle-2 grey--text pa-1">Perkstore</span>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="amber lighten-1"
                    fab
                    depressed
                    dark
                    height="20"
                    width="20"
                    class="mb-1"
                    v-on="on">
                    <span class="white--text caption">44</span>
                  </v-btn>
                </template>
                <span>Pending orders</span>
              </v-tooltip>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-card
              flat
              color="transparent">
              <v-list-item class="px-1">
                <span class="product-number mr-1 my-0 display-1 font-weight-bold blue-grey--text darken-1">122</span>
                <span class="product-label caption mt-4">Products</span>
              </v-list-item>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>
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
            xs12
            sm12>
            <v-layout
              row
              wrap
              mx-0>
              <v-flex d-flex>
                <v-layout
                  row
                  mx-0>
                  <v-flex
                    xs12
                    d-flex>
                    <v-layout
                      row
                      ml-0
                      mr-lg-2
                      mb-lg-0
                      mr-0
                      mb-2
                      class="white">
                      <v-flex d-flex xs12>
                        <v-card flat>
                          <v-card-text class="subtitle-2 grey--text pa-1">Perkstore</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex
                        d-flex
                        xs12
                        pb-2>
                        <v-layout
                          wrap
                          row
                          mx-0>
                          <v-flex
                            d-flex
                            md6>
                            <v-layout row mx-0>
                              <v-flex
                                d-flex
                                xs12
                                xs2
                                md4>
                                <v-card flat>
                                  <v-card-text class="py-0 pl-1 display-1 font-weight-bold">3</v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex
                                d-flex
                                xs10
                                md8>
                                <v-card flat>
                                  <v-card-text class="pa-0 caption-1 green--text darken-2 mt-1">New</v-card-text>
                                  <v-card-text class="pa-0 caption-1 mt-n2">Products</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                          <v-flex
                            d-flex
                            md6>
                            <v-layout row mx-0>
                              <v-flex
                                d-flex
                                md4
                                xs2>
                                <v-card flat>
                                  <v-card-text class="py-0 pl-1 display-1 font-weight-bold">2</v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex
                                d-flex
                                md8
                                xs10>
                                <v-card flat>
                                  <v-card-text class="pa-0 caption-1 orange--text darken-1 mt-1">Pending</v-card-text>
                                  <v-card-text class="pa-0 caption-1 mt-n2">Orders</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>
<template>
  <v-app
    id="digital-workplace-profile-stats"
    class="VuetifyApp ml-md-3"
    flat
    dark>
    <main>
      <v-container pa-0>
        <v-layout 
          row 
          wrap 
          mx-0
          class="white elevation-1"
          mb-2>
          <v-flex 
            d-flex 
            xs12 
            sm12>
            <v-layout 
              row 
              wrap 
              mx-0>
              <v-flex 
                d-flex 
                justify-center
                py-4
                xs12>
                <v-card
                  flat>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img
                        src="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="text-uppercase">Welcome back Sara</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12>
                <v-layout
                  row
                  mx-0>
                  <v-flex
                    xs12
                    sm6
                    py-5
                    d-flex
                    justify-center
                    align-center>
                    <v-card
                      flat>
                      <v-badge>
                        <template v-slot:badge>
                          <span >2</span>
                        </template>
                        <span class="headline blue-grey--text font-weight-bold pa-1">53</span>
                      </v-badge>
                      <v-card-text class="pa-1 subtitle-1">Spaces</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex
                    d-flex
                    sx12
                    sm6
                    justify-center
                    align-center>
                    <v-card
                      tile
                      flat>
                      <v-badge pa-0>
                        <template v-slot:badge>
                          <span>3</span>
                        </template>
                        <span class="headline blue-grey--text font-weight-bold pa-1">53</span>
                      </v-badge>
                      <v-card-text class="pa-1 subtitle-1">Connections</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex 
                d-flex 
                xs12 
                align-center>
                <v-layout row mx-0>
                  <v-flex
                    xs12
                    sm6
                    d-flex
                    justify-center
                    align-center>
                    <v-card
                      flat>
                      <v-card-text class="headline blue-grey--text font-weight-bold pa-1">53</v-card-text>
                      <v-card-text class="pa-1 subtitle-1">Total points</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex
                    d-flex
                    sx12
                    sm6
                    justify-center
                    align-center>
                    <v-card
                      flat
                      color="transparent"
                      align-center>
                      <v-card-text class="headline blue-grey--text font-weight-bold pa-1">53</v-card-text>
                      <v-card-text class="pa-1 subtitle-1">Total Rank</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>

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
                    lg7
                    d-flex>
                    <v-layout 
                      row 
                      ml-0
                      mr-lg-2
                      mb-lg-0
                      mr-0
                      mb-2
                      class="white elevation-1">
                      <v-flex d-flex xs12>
                        <v-card flat>
                          <v-card-text class="subtitle-1 grey--text pa-1">Perkstore</v-card-text>
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
                            d-flex>
                            <v-layout row mx-0>
                              <v-flex 
                                d-flex 
                                xs12
                                xs2
                                md4>
                                <v-card flat>
                                  <v-card-text class="py-0 pl-1 display-2 font-weight-bold">3</v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex 
                                d-flex
                                xs10
                                md8>
                                <v-card flat>
                                  <v-card-text class="pa-0 caption green--text darken-2 mt-1">New</v-card-text>
                                  <v-card-text class="pa-0 caption">Products</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                          <v-flex
                            d-flex>
                            <v-layout row mx-0>
                              <v-flex 
                                d-flex
                                md4
                                xs2>
                                <v-card flat>
                                  <v-card-text class="py-0 pl-1 display-2 font-weight-bold">2</v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex 
                                d-flex
                                md8
                                xs10>
                                <v-card flat>
                                  <v-card-text class="pa-0 caption orange--text darken-1 mt-1">Pending</v-card-text>
                                  <v-card-text class="pa-0 caption">Orders</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex
                    d-flex
                    sx12
                    lg5>
                    <v-layout 
                      row 
                      ma-0 
                      class="white elevation-1">
                      <v-flex d-flex xs12>
                        <v-card flat>
                          <v-card-text class="subtitle-1 grey--text pa-1">Wallet Balance</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12>
                        <v-card flat>
                          <v-card-text class="display-2 font-weight-bold pa-2">251 Ȼ</v-card-text>
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
    </main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  }
</script>

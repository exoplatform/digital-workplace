<template>
  <v-app
    id="digital-workplace-profile-stats"
    class="VuetifyApp ml-md-2"
    flat
    dark>
    <main>
      <v-container pa-0>
        <v-layout
          row
          wrap
          mx-0
          class="white profileCard"
          mb-2>
          <profile-stats
            v-if="!isFlipped"
            class="profileFlippedCard profileStats"
            @specificCard="setFlippedCard"/>
          <v-flex
            v-if="isFlipped"
            :is="currentComponent"
            d-flex
            xs12
            sm12
            class="profileFlippedCard ConnexionsRequests"
            @isProfileStats="setFlippedCard"/>
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
                  <v-flex
                    d-flex
                    sx12
                    lg5>
                    <v-layout
                      row
                      ma-0
                      class="white">
                      <v-flex d-flex xs12>
                        <v-card flat>
                          <v-card-text class="subtitle-2 grey--text pa-1">Wallet Balance</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12>
                        <v-card flat>
                          <v-card-text class="display-1 font-weight-bold pa-2">251 Ȼ</v-card-text>
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
    import ProfileStats from './ProfileStats.vue';
    import ConnectionsRequests from './ConnectionsRequests.vue';
    import LeaderBoard from './LeaderBoard.vue';
    import SpacesRequests from './SpacesRequests.vue';
    import GamificationRank from "./GamificationRank.vue";
    export default {
        components: {
            ProfileStats,
            ConnectionsRequests,
            LeaderBoard,
            SpacesRequests,
            GamificationRank
        },

        data: function() {
          return {
            currentComponent: null,
            isFlipped: false
          };
        },

        methods: {
            setFlippedCard(component) {
                const profileWrapper = document.querySelector('.profileCard');
                profileWrapper.classList.toggle('is-flipped');
                this.currentComponent = component;
                this.isFlipped = !this.isFlipped;
            },
            testMethod() {
                this.currentComponent= null;
                this.isFlipped = !this.isFlipped;
            }
        }
    }
</script>
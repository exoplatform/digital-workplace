<template>
  <v-layout
    row
    wrap
    mx-0>
    <v-flex
      d-flex
      xs12
      my-5>
      <v-layout
        row
        wrap
        mx-2
        align-start
        px-2>
        <v-flex
          d-flex
          xs12
          mt-n2
          justify-center>
          <div>
            <span class="pr-2 text-uppercase subtitle-2">Connections requests</span>
            <v-btn
              color="primary-color"
              fab
              depressed
              dark
              height="20"
              width="20"
              class="mb-1 badge-color">
              <span class="white--text caption">3</span>
            </v-btn>
          </div>
        </v-flex>
        <v-flex
          d-flex
          xs12
          mt-n6>
          <v-icon
            color="grey darken-2"
            size="20"
            @click="toProfileStats()">mdi-arrow-left</v-icon>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex
      xs12>
      <v-list>
        <template v-for="item in connectionsRequestsArray">
          <v-list-item
            :key="item.id"
            class="py-0 px-2">
            <v-list-item-avatar class="my-1 mr-2" size="30">
              <v-img :src="item.avatar"/>
            </v-list-item-avatar>

            <v-list-item-content class="py-0">
              <v-list-item-title class="font-weight-bold subtitle-2 primary-color--text darken-2" v-html="item.userName"/>
              <v-list-item-subtitle class="caption grey-color" v-text="item.communConnections + ' Commun connections'"/>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn-toggle
                class="transparent"
                dark>
                <v-btn
                  text
                  icon
                  small
                  min-width="auto"
                  class="px-0">
                  <v-icon color="primary-color" size="20">mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                <v-btn
                  text
                  small
                  min-width="auto"
                  class="px-0">
                  <v-icon color="grey lighten-1" size="20">mdi-close-circle</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-flex>
    <v-flex
      d-flex
      xs12
      px-4
      pb-2
      justify-end>
      <v-btn
        depressed
        small
        class="caption text-uppercase grey--text">See all</v-btn>
    </v-flex>
  </v-layout>

</template>
<script>
  import * as profileStatsAPI from '../profilStatsAPI'
  export default {
    data() {
      return {
        connectionsRequestsArray: []
      }
    },
    created(){
        this.getConnectionsRequests();
    },

    methods: {
      getConnectionsRequests() {
           profileStatsAPI.getConnectionsRequests().then(
               (data) => {
                   this.connectionsRequestsArray = data;
               })
      },
      toProfileStats() {
        this.$emit('isProfileStats');
      }
    }
  }
</script>

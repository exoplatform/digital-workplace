<template>
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
        pt-4
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
            d-flex
            justify-center
            align-center>
            <v-card
              flat>
              <a class="white--text" @click="getSpecificCard('SpacesRequests')">
                <v-badge class="badge-color">
                  <template v-slot:badge>
                    <span>4</span>
                  </template>
                  <span class="headline blue-grey--text font-weight-bold pa-1">53</span>
                </v-badge>
              </a>
              <v-card-text class="pa-1 subtitle-1 blue-grey--text">Spaces</v-card-text>
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
              <a class="white--text" @click="getSpecificCard('ConnectionsRequests')">
                <v-badge pa-0 class="badge-color">
                  <template v-slot:badge>
                    <span>3</span>
                  </template>
                  <span class="headline blue-grey--text font-weight-bold pa-1">53</span>
                </v-badge>
              </a>
              <v-card-text class="pa-1 subtitle-1 blue-grey--text">Connections</v-card-text>
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
              <a @click="getSpecificCard('LeaderBoard')">
                <v-card-text class="headline blue-grey--text font-weight-bold pa-1">53</v-card-text>
                <v-card-text class="pa-1 subtitle-1 blue-grey--text">Total points</v-card-text>
              </a>
            </v-card>
          </v-flex>
          <v-flex
            d-flex
            xs12
            sm6
            justify-center
            align-center>
            <v-card
              flat
              color="transparent"
              align-center>
              <a @click="getSpecificCard('GamificationRank')">
                <v-card-text class="headline blue-grey--text font-weight-bold pa-1">53</v-card-text>
                <v-card-text class="pa-1 subtitle-1 blue-grey--text">Total Rank</v-card-text>
              </a>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
<script>
  export default {
    methods: {
      getSpecificCard(component) {
        this.$emit('specificCard',component);
      }
    }
  }
</script>



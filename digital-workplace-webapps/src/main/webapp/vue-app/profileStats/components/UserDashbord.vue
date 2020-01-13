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
                :src="avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase subtitle-1">{{ this.$t('homepage.profileStatus.header') }} {{ firstName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12>
        <v-layout
          row
          mx-0>
          <v-flex
            xs6
            d-flex
            justify-center
            align-center>
            <v-card
              flat>
              <a class="white--text">
                <v-badge class="badge-color">
                  <v-btn
                    v-if="spacesRequestsSize > 0"
                    slot="badge"
                    icon
                    dark
                    height="22"
                    width="22"
                    @click="getSpecificCard('SpacesRequests')">{{ spacesRequestsSize }}</v-btn>
                  <a class="headline blue-grey--text font-weight-bold pa-1" href="/portal/dw/spaces">{{ spacesSize }}</a>
                </v-badge>
              </a>
              <v-card-text class="pa-1 subtitle-1 blue-grey--text">{{ this.$t('homepage.profileStatus.spaces') }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            d-flex
            xs6
            justify-center
            align-center>
            <v-card
              tile
              flat>
              <a class="white--text">
                <v-badge pa-0 class="badge-color">
                  <v-btn
                    v-if="connectionsRequestsSize > 0"
                    slot="badge"
                    icon
                    dark
                    height="22"
                    width="22"
                    @click="getSpecificCard('ConnectionsRequests')">{{ connectionsRequestsSize }}</v-btn>
                  <a class="headline blue-grey--text font-weight-bold pa-1" href="/portal/dw/connexions/network">{{ connectionsSize }}</a>
                </v-badge>
              </a>
              <v-card-text class="pa-1 subtitle-1 blue-grey--text">{{ this.$t('homepage.profileStatus.connections') }}</v-card-text>
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
            xs6
            d-flex
            justify-center
            align-center>
            <v-card
              flat>
              <a @click="getSpecificCard('TotalPoints')">
                <v-card-text class="headline blue-grey--text font-weight-bold pa-1">{{ totalPoints }}</v-card-text>
                <v-card-text class="pa-1 subtitle-1 blue-grey--text">{{ this.$t('homepage.profileStatus.totalPoints') }}</v-card-text>
              </a>
            </v-card>
          </v-flex>
          <v-flex
            d-flex
            xs6
            justify-center
            align-center>
            <v-card
              flat
              color="transparent"
              align-center>
              <a @click="getSpecificCard('GamificationRank')">
                <v-card-text class="headline blue-grey--text font-weight-bold pa-1">53</v-card-text>
                <v-card-text class="pa-1 subtitle-1 blue-grey--text">{{ this.$t('homepage.profileStatus.totalRank') }}</v-card-text>
              </a>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
<script>
  import {getUserInformations, getSpaces, getSpacesRequests, getConnections, getConnectionsRequests, getGamificationPoints} from '../profilStatsAPI'
  export default {
    data() {
      return {
        firstName: '',
        avatar:'',
        spacesSize: '',
        spacesRequestsSize: '',
        connectionsSize: '',
        connectionsRequestsSize: '',
        totalPoints: ''
      }
    },
    
    created(){
      this.avatar=`/portal/rest/v1/social/users/${eXo.env.portal.userName}/avatar`;
      this.getFirstName();
      this.getSpacesSize();
      this.getSpacesRequestsSize();
      this.getConnectionsSize();
      this.getConnectionsRequestsSize();
      this.getGamificationPoints();
    },
    
    methods: {
      getFirstName() {
        getUserInformations().then(
          (data) => {
            this.firstName = data.firstname;
          }
        )
      },
      getSpacesSize() {
        getSpaces().then(
          (data) => {
            this.spacesSize = data.size;
          }
        )
      },
      getSpacesRequestsSize() {
        getSpacesRequests().then(
          (data) => {
            this.spacesRequestsSize = data.size;
          }
        )
      },
      getConnectionsSize() {
        getConnections().then(
          (data) => {
            this.connectionsSize = data.size;
          }
        )
      },
      getConnectionsRequestsSize() {
        getConnectionsRequests().then(
          (data) => {
            this.connectionsRequestsSize = data.size;
          }
        )
      },
      getGamificationPoints() {
        getGamificationPoints().then(
          (data) => {
            this.totalPoints = data.points;
          }
        )
      },
      getSpecificCard(component) {
        this.$emit('specificCard',component);
      },
      toProfileStats() {
        this.$emit('isProfileStats');
      }
    }
  }
</script>
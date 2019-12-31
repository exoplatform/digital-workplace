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
                  <template v-slot:badge>
                    <span v-if="spacesRequestsSize > 0" @click="getSpecificCard('SpacesRequests')">{{ spacesRequestsSize }}</span>
                  </template>
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
              <a class="white--text" @click="getSpecificCard('ConnectionsRequests')">
                <v-badge pa-0 class="badge-color">
                  <template v-slot:badge>
                    <span>3</span>
                  </template>
                  <span class="headline blue-grey--text font-weight-bold pa-1">53</span>
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
                <v-card-text class="headline blue-grey--text font-weight-bold pa-1">53</v-card-text>
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
  import {getUserInformations, getSpaces, getSpacesRequests} from '../profilStatsAPI'
  export default {
    data() {
      return {
        firstName: '',
        avatar:'',
        spacesSize: '',
        spacesRequestsSize: '',
      }
    },
    
    created(){
      this.avatar=`/portal/rest/v1/social/users/${eXo.env.portal.userName}/avatar`;
      this.getFirstName();
      this.getSpacesSize();
      this.getSpacesRequestsSize();
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
      getSpecificCard(component) {
        this.$emit('specificCard',component);
      },
      toProfileStats() {
        this.$emit('isProfileStats');
      }
    }
  }
</script>



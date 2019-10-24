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
        mx-0
        align-start
        px-2>
        <v-flex
          d-flex
          md2>
          <v-icon
            color="grey darken-2"
            size="20"
            @click="toProfileStats()">mdi-arrow-left</v-icon>
        </v-flex>
        <v-flex
          d-flex
          md10
          justify-center>
          <div>
            <span class="pr-2 text-uppercase subtitle-2">LeaderBoard</span>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex
      xs12>
      <v-list>
        <template v-for="item in leaderBoardArray.slice(0,5)">
          <v-list-item
            :key="item.id"
            class="py-0 px-4 mt-n3">
            <span class="mr-2">{{ item.rank }}</span>
            <v-list-item-avatar size="25" class="my-0 mr-2">
              <v-img :src="item.avatar"/>
            </v-list-item-avatar>

            <v-list-item-content class="py-0">
              <v-list-item-title class="body-2 " v-html="item.userName"/>
            </v-list-item-content>
            <v-list-item-action class="my-0">
              <span>{{ item.totalPoints }}</span>
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
        leaderBoardArray: []
      }
    },
    created(){
      this.getLeaderBoardList();
    },

    methods: {
      getLeaderBoardList() {
        profileStatsAPI.getGamificationRank().then(
                (data) => {
                  this.leaderBoardArray = data;
                })
      },
      toProfileStats() {
        this.$emit('isProfileStats');
      }
    }
  }
</script>


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
        px12>
        <v-flex
          d-flex
          xs12
          mt-n2
          justify-center>
          <div>
            <span class="pr-2 text-uppercase subtitle-2">{{ this.$t('homepage.profileStatus.Rank') }}</span>
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
      xs12
      mb-1>
      <v-layout
        row
        wrap
        mx-0
        class="podium-layout">
        <v-flex
          d-flex
          justify-center
          align-end>
          <div class="transparent mx-1 align-center">
            <v-avatar size="35" class="mb-1 elevation-1">
              <img
                :src="leaderBoardArray[2].avatar">
            </v-avatar>
            <v-card-text class="top3 grey lighten-1 px-3 py-2 flex d-flex white--text align-center font-weight-bold" style="height: 25px">
              {{ leaderBoardArray[2].totalPoints }}
            </v-card-text>

          </div>

          <div class="transparent mx-1 align-center">
            <v-avatar size="35" class="mb-1 elevation-1">
              <img
                :src="leaderBoardArray[0].avatar"
                alt="John">
            </v-avatar>
            <v-card-text class="top1 yellow darken-1 px-3 py-2 flex d-flex white--text  align-center font-weight-bold" style="height: 55px">
              {{ leaderBoardArray[0].totalPoints }}
            </v-card-text>

          </div>

          <div class="transparent mx-1 align-center">
            <v-avatar size="35" class="mb-1 elevation-1">
              <img
                :src="leaderBoardArray[1].avatar"
                alt="John">
            </v-avatar>
            <v-card-text class="top2 amber darken-1 px-3 py-2 flex d-flex white--text align-center font-weight-bold" style="height: 40px">
              {{ leaderBoardArray[1].totalPoints }}
            </v-card-text>

          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex
      xs12>
      <v-list>
        <template v-for="item in leaderBoardArray.slice(3, 6)">
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
  </v-layout>
</template>

<script>
    import * as profileStatsAPI from '../profilStatsAPI'
    export default {
        name: "GamificationRank",
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

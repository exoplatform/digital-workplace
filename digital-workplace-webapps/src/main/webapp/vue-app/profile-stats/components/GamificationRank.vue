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
            <span class="pr-2 text-uppercase subtitle-2">Rank</span>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex
      xs12
      mb-3>
      <v-layout
        row
        wrap
        mx-0>
        <v-flex
          d-flex
          justify-center
          align-end
          max-height="20">

          <v-card flat class="transparent mx-1 align-center">
            <v-avatar size="35">
              <img
                :src="leaderBoardArray[2].avatar"
                alt="John">
            </v-avatar>
            <v-card-text class="primary px-3 py-2 flex d-flex white--text align-center" style="height: 30px">
              {{ leaderBoardArray[2].totalPoints }}
            </v-card-text>

          </v-card>

          <v-card flat class="transparent mx-1 align-center">
            <v-avatar size="35">
              <img
                :src="leaderBoardArray[0].avatar"
                alt="John">
            </v-avatar>
            <v-card-text class="primary px-3 py-2 flex d-flex white--text align-center" style="height: 60px">
              {{ leaderBoardArray[0].totalPoints }}
            </v-card-text>

          </v-card>

          <v-card flat class="transparent mx-1 align-center">
            <v-avatar size="35">
              <img
                :src="leaderBoardArray[1].avatar"
                alt="John">
            </v-avatar>
            <v-card-text class="primary px-3 py-2 flex d-flex white--text align-center" style="height: 45px">
              {{ leaderBoardArray[1].totalPoints }}
            </v-card-text>

          </v-card>
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

<template>
  <v-layout 
    @mouseover="hover = true"
    @mouseleave="hover = false">
    <v-list-item-avatar size="30" class="mt-0">
      <v-img :src="getUserAvatar(comment.author.username)"/>
    </v-list-item-avatar>
    <v-list-item-content 
      class="pt-1 pb-0">
      <v-flex xs12>
        <v-layout>
          <v-flex xs5>
            <v-list-item-title
              class="primary-color--text font-weight-bold subtitle-2"
              v-html="comment.author.displayName"/>
          </v-flex>
          <v-flex xs6>
            <span class="grey-color caption">{{ relativeTime }}</span>
          </v-flex>
          <v-flex xs1 >
            <v-btn 
              v-show="hover"
              class="deleteComment" 
              icon>
              <i class="uiIconTrashMini uiIconLightGray "></i>
            </v-btn> 
          </v-flex>
        </v-layout>
      </v-flex>
      <span class="taskContentComment" v-html="comment.comment"></span>
      <v-btn
        id="reply_btn"
        depressed
        text
        small
        color="primary"
        @click="openEditor()">{{ $t('homepage.task.drawer.reply') }}
      </v-btn>
      <v-list class="py-0">
        <v-list-item
          v-for="(item, i) in comment.subComments"
          :key="i"
          class="pr-0">
          <task-sub-comments :sub-comment="item"/>
        </v-list-item>
      </v-list>
    </v-list-item-content>
  </v-layout>
</template>

<script>
    import TaskSubComments from './TaskSubComments.vue'

    export default {
        name: "TaskComments",
        components: {TaskSubComments},
        props: {
            comment: {
                type: Object,
                default: () => {
                    return {};
                }
            },
        },
        data() {
          return {
            hover : false,
          }
        },
        computed: {
            relativeTime() {
                return this.getRelativeTime(this.comment.createdTime.time);
            }
        },
        methods: {
            getUserAvatar(username) {
                return `/rest/v1/social/users/${username}/avatar`;
            },
          getRelativeTime(previous) {
            const msPerMinute = 60 * 1000;
            const msPerHour = msPerMinute * 60;
            const msPerDay = msPerHour * 24;
            const msPerMonth = msPerDay * 30;
            const elapsed = new Date().getTime() - previous;

            if (elapsed < msPerMinute) {
              return this.$t('homepage.task.timeConvert.Less_Than_A_Minute');
            } else if (elapsed === msPerMinute) {
              return this.$t('homepage.task.timeConvert.About_A_Minute');
            } else if (elapsed < msPerHour) {
              return this.$t('homepage.task.timeConvert.About_?_Minutes').replace('{0}', Math.round(elapsed / msPerMinute));
            } else if (elapsed === msPerHour) {
              return this.$t('homepage.task.timeConvert.About_An_Hour');
            } else if (elapsed < msPerDay) {
              return this.$t('homepage.task.timeConvert.About_?_Hours').replace('{0}', Math.round(elapsed / msPerHour));
            } else if (elapsed === msPerDay) {
              return this.$t('homepage.task.timeConvert.About_A_Day');
            } else if (elapsed < msPerMonth) {
              return this.$t('homepage.task.timeConvert.About_?_Days').replace('{0}', Math.round(elapsed / msPerDay));
            } else if (elapsed === msPerMonth) {
              return this.$t('homepage.task.timeConvert.About_A_Month');
            } else {
              return this.$t('homepage.task.timeConvert.About_?_Months').replace('{0}', Math.round(elapsed / msPerMonth));
            }
          },

        }
    }
</script>
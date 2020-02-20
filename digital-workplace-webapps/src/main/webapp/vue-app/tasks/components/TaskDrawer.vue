<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    temporary
    stateless
    width="33%">
    <div class="drawer-header">
      <v-flex xs12>
        <v-card flat>
          <v-layout>
            <v-flex xs10>
              <v-card-text class="blueGrey-Color drawer-title">{{ $t('homepage.task.drawer.header') }}</v-card-text>
            </v-flex>
            <v-flex xs1>
              <v-btn
                class="my-2"
                icon>
                <i class="uiIconAndroidOpen grey-color"></i>
              </v-btn>
            </v-flex>
            <v-flex xs1>
              <v-btn
                class="my-2 grey-color"
                icon
                @click="closeDrawer()">
                <v-icon size="22">mdi-close</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </div>
    <div class="drawer-content">
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-layout align-center>
              <v-flex 
                xs9
                row
                class="ml-1">
                <i class="uiIconFolder uiIconBlue px-4 py-3"></i>
                <div id="">
                  <input
                    v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
                    v-if="Task.status != null"
                    v-model="Task.status.project.name"
                    :style="{backgroundColor:Task.status.project.color}"
                    style="border-radius: 5px;font-weight: bold"
                    type="text"
                    placeholder="No project">
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex 
            xs9 
            row 
            class="ml-1">
            <i class="uiIconTag uiIconBlue px-4 py-3"></i>
            <input
              v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
              type="text"
              placeholder="Labels">
          </v-flex>
          <v-flex
            xs8
            row
            class="ml-1">
            <v-btn 
              class="ml-2 mr-1" 
              icon
              color="#578dc9"
              dark
              @click="markAsCompleted(Task)">
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <input 
              v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
              v-if="!Task.completed"
              v-model="Task.title"
              type="text"
              placeholder="title">
            <input 
              v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
              v-else
              v-model="Task.title"
              style="text-decoration: line-through;"
              type="text"
              placeholder="title">
          </v-flex>
          <v-flex xs9 class="ml-4 mt-2"/>
          <v-flex xs12 class="ml-1">
            <v-layout row ml-4>
              <v-flex
                xs4
                class="px-4"
                style="margin: -6px">
                <v-layout row>
                  <i class="uiIconClock my-2"></i>
                  <datepicker
                    v-model="Task.dueDate.time"
                    :value="date"/>
                </v-layout>
              </v-flex>
              <v-flex 
                xs4>
                <v-layout row>
                  <v-avatar size="24"><img :src="getUserAvatar(Task.assignee)"></v-avatar>
                  <a class="pl-3 pt-1">{{ userFullName }}</a>          
                </v-layout>
              </v-flex>
              <v-flex 
                xs4
                row>
                <div style="white-space: nowrap">
                  <i class="uiIconTime uiIconBlue"></i>
                  <select class="autocomplete grey-color my-n1" style="width: 60px;">
                    <option value="1">{{ $t('homepage.task.drawer.ready') }}</option>
                    <option value="2">{{ $t('homepage.task.drawer.doing') }}</option>
                    <option value="3">{{ $t('homepage.task.drawer.done') }}</option>
                  </select>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <div id="app" class="py-3 px-4 mr-4">
              <div>
                <vue-ckeditor :editor-data="Task.description" :placeholder="descriptionPlaceholder"/>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 ml-1>
            <v-layout row ml-4>
              <v-flex
                xs4
                class="px-4"
                style="margin: -6px">
                <v-layout row>
                  <i class="uiIconCalCreateEvent uiIconBlue my-2"></i>
                  <datepicker
                    :value="date"/>
                </v-layout>
              </v-flex>
              <v-flex 
                xs4
                row>
                <div style="white-space: nowrap">
                  <v-icon>mdi-flag-variant</v-icon>
                  <select class="autocomplete grey-color my-n2" style="width: 60px;">
                    <option value="1">{{ $t('homepage.task.drawer.high') }}</option>
                    <option value="2">{{ $t('homepage.task.drawer.normal') }}</option>
                    <option value="3">{{ $t('homepage.task.drawer.low') }}</option>
                  </select>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 class="pt-2 px-4">
            <v-tabs color="#578DC9">
              <v-tab class="text-capitalize">{{ $t('homepage.task.drawer.comments') }}</v-tab>
              <v-tab class="text-capitalize">{{ $t('homepage.task.drawer.changes') }}</v-tab>
              <v-tab-item class="pt-5">
                <v-list>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i">
                    <v-list-item-avatar 
                      size="35" 
                      tile 
                      class="mr-3">
                      <v-img :src="item.avatar"/>
                    </v-list-item-avatar>
                    <v-layout>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          style="color: #578DC9;font-weight: bold"
                          color="#578DC9"
                          v-html="item.title"/>
                        <span>{{ item.comment }}</span>
                        <v-btn 
                          id="reply_btn"
                          depressed
                          text 
                          small
                          color="primary"
                          @click="openEditor()">{{ $t('homepage.task.drawer.reply') }}</v-btn>
                        <v-list >
                          <v-list-item>
                            <v-list-item-avatar 
                              size="30" 
                              tile 
                              class="mr-3">
                              <v-img :src="items2[0].avatar"/>
                            </v-list-item-avatar>
                            <v-layout>
                              <v-list-item-content class="pt-1">
                                <v-list-item-title
                                  style="color: #578DC9;font-weight: bold"
                                  color="#578DC9"
                                  v-html="items2[0].title"/>
                                <span>{{ items2[0].comment }}</span>
                                <v-btn
                                  id="reply_btn"
                                  depressed
                                  text
                                  small
                                  color="primary"
                                  @click="openEditor()">{{ $t('homepage.task.drawer.reply') }}</v-btn>
                              </v-list-item-content>
                            </v-layout>
                          </v-list-item>
                          <v-list-item v-if="showEditor">
                            <v-list-item-avatar size="30" tile>
                              <v-img :src="items[0].avatar"/>
                            </v-list-item-avatar>
                            <v-layout row>
                              <vue-ckeditor/>
                              <v-btn
                                depressed
                                small
                                dark
                                class="primary-color mt-1">{{ $t('homepage.task.drawer.comment') }}</v-btn>
                            </v-layout>
                          </v-list-item>
                        </v-list>
                      </v-list-item-content>
                    </v-layout>
                  </v-list-item>
                  <v-list-item v-if="!showEditor">
                    <v-list-item-avatar size="35" tile>
                      <v-img :src="items[0].avatar"/>
                    </v-list-item-avatar>
                    <v-layout row>
                      <vue-ckeditor :placeholder="commentPlaceholder" class="mr-4"/>
                      <v-btn
                        depressed
                        small
                        dark
                        class="primary-color mt-1">{{ $t('homepage.task.drawer.comment') }}</v-btn>
                    </v-layout>
                  </v-list-item>
                  <v-btn
                    v-else
                    depressed
                    text
                    small
                    color="primary"
                    @click="showEditor=!showEditor">{{ $t('homepage.task.drawer.comment') }}</v-btn>
                </v-list>
              </v-tab-item>
              <v-tab-item/>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-navigation-drawer>
</template>

<script>
  import VueCkeditor from './CkeditorVue.vue';
  import Datepicker from 'vuejs-datepicker';
  import {getUserInformations} from '../TasksAPI';

  export default {
    components: {VueCkeditor, Datepicker},
    props: {
      drawer: {
        type: Boolean,
        default: false
      },
      Task: {
        type: Object,
        default: () => {
          return {};
        }
      },
    },
    data() {
      return {
        date: new Date(2016, 9, 16),
        editorData: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        checkbox: true,
        showEditor : false,
        commentPlaceholder : this.$t('homepage.task.drawer.addYourComment'),
        descriptionPlaceholder : this.$t('homepage.task.drawer.addDescription'),
        userFullName:'',
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Azmi Touil',
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          },
        ],
        items2: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Sara',
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
          },
        ]
      }
    },
      created() {
        this.getUserFullName(this.Task.assignee);
      },
    methods: {
      closeDrawer() {
        this.drawer = false;
        this.$emit('closeDrawer',this.drawer)
        this.showEditor=false;
      },
      openEditor() {
          this.showEditor = true;
        
      },
      markAsCompleted(task){
        task.completed = !task.completed;
      },
      getUserAvatar(username) {
        return `/rest/v1/social/users/${username}/avatar`;
      },
        getUserFullName(useName) {
          getUserInformations(useName).then((userInfo) => {
              this.userFullName = userInfo.fullname;
              }
          )
        }
    }
  }
</script>
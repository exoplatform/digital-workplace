<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    temporary
    stateless
    width="520">
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
                <div id="ProjectName">
                  <v-text-field
                    v-model="projet"
                    solo
                    hide-details
                    style="border-radius: 5px"
                    class="pt-0 pr-3"/>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex 
            xs9 
            row 
            class="ml-1">
            <i class="uiIconTag uiIconBlue px-4 py-3"></i>
            <v-text-field
              placeholder="Label"
              solo
              hide-details
              class="pt-0 pr-3 custom-placeholer-color"/>
          </v-flex>
          <v-flex xs9 class="ml-4 mt-2">
            <v-checkbox
              v-model="checkbox"
              :label="task"
              color="#578DC9"
              class="pt-0 pr-3"/>
          </v-flex>
          <v-flex xs12 class="ml-1">
            <v-layout row ml-4>
              <v-flex
                xs3
                class="px-4"
                style="margin: -6px">
                <v-layout row>
                  <i class="uiIconClock my-2"></i>
                  <datepicker
                    :value="date"/>
                </v-layout>
              </v-flex>
              <v-flex xs3>
                <v-layout row style="width: 100px">
                  <v-avatar size="24"><img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-avatar>
                  <a class="pl-3 pt-1" href="#">{{ items[0].title }}</a>
                </v-layout>
              </v-flex>
              <v-flex xs3 row>
                <div style="white-space: nowrap">
                  <i class="uiIconTime uiIconBlue"></i>
                  <select class="autocomplete grey-color" style="margin-bottom: 6px;width: 60px;">
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
                <vue-ckeditor :editor-data="editorData"/>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 ml-1>
            <v-layout row ml-4>
              <v-flex
                xs3
                class="px-4"
                style="margin: -6px">
                <v-layout row>
                  <i class="uiIconCalCreateEvent uiIconBlue my-2"></i>
                  <datepicker
                    :value="date"/>
                </v-layout>
              </v-flex>
              <v-flex xs3 row>
                <div style="white-space: nowrap">
                  <v-icon>mdi-flag-variant</v-icon>
                  <select class="autocomplete grey-color" style="margin-bottom: 0px;width: 60px;">
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
              <v-tab-item>
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
                    <v-list-item-avatar size="30" tile>
                      <v-img :src="items[0].avatar"/>
                    </v-list-item-avatar>
                    <v-layout row>
                      <vue-ckeditor class="mr-4"/>
                      <v-btn
                        small
                        dark
                        class="primary-color mt-1">{{ $t('homepage.task.drawer.comment') }}</v-btn>
                    </v-layout>
                  </v-list-item>
                  <v-btn
                    v-else
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

  export default {
    components: {VueCkeditor, Datepicker},
    props: {
      drawer: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        date: new Date(2016, 9, 16),
        editorData: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        checkbox: true,
        showEditor : false,
        projet: 'Project name',
        task: 'Design new Home',
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
    methods: {
      closeDrawer() {
        this.$emit('closeDrawer', false);
        this.showEditor=false;
      },
      openEditor() {
          this.showEditor = true;
        
      }
    }
  }
</script>
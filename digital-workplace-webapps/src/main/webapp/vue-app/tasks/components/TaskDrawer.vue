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
              <v-card-text class="blueGrey-Color drawer-title">Edit Task</v-card-text>
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
                    <option value="1">Ready</option>
                    <option value="2">Doing</option>
                    <option value="3">Done</option>
                  </select>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <div id="app" class="py-3 px-4 mr-4">
              <div>
                <vue-ckeditor/>
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
                    <option value="1">High</option>
                    <option value="2">Normal</option>
                    <option value="3">Low</option>
                  </select>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 class="pt-2 px-4">
            <v-tabs color="#578DC9">
              <v-tab class="text-capitalize">Comments</v-tab>
              <v-tab class="text-capitalize">changes</v-tab>
              <v-tab-item>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i">
                    <v-list-item-avatar size="30" tile>
                      <v-img :src="item.avatar"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        style="color: #578DC9;font-weight: bold"
                        color="#578DC9"
                        v-html="item.title"/>
                      <span>{{ item.comment }}</span>
                    </v-list-item-content>
                  </v-list-item>
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
        checkbox: true,
        projet: 'Project name',
        task: 'Design new Home',
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Azmi',
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Houssem',
            comment: "Lorem ipsum dolor sit amet",
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Sara',
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Azmi',
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Houssem',
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
          },
        ]
      }
    },
    methods: {
      closeDrawer() {
        this.$emit('closeDrawer', false);
      }
    }
  }
</script>
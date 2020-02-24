<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    temporary
    stateless
    absolute
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
      <v-container pt-0>
        <v-layout row>
          <v-col>
            <v-combobox
              v-if="Task.status != null"
              v-model="Task.status.project.name"
              :background-color="Task.status.project.color"
              prepend-icon
              solo
              class="pt-0 centered-input projectName"
              placeholder="No project">
              <template v-slot:prepend>
                <i class="uiIconFolder uiIconBlue"></i>
              </template>
            </v-combobox>
            <v-combobox
              v-else
              prepend-icon
              solo
              class="pt-0 centered-input projectName"
              placeholder="No project">
              <template v-slot:prepend>
                <i class="uiIconFolder uiIconBlue"></i>
              </template>
            </v-combobox>
            <v-combobox
              v-model="chips"
              :items="labels"
              class="pt-0"
              chips
              clearable
              placeholder="Labels"
              multiple
              solo
              prepend-icon>
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  close
                  @click="select"
                  @click:close="remove(item)">
                  <strong>{{ item }}</strong>
                </v-chip>
              </template>
              <template v-slot:prepend>
                <i class="uiIconTag uiIconBlue mr-1"></i>
              </template>
            </v-combobox>
            <v-btn
              class="ml-n2"
              icon
              color="#578dc9"
              dark
              @click="markAsCompleted(Task)">
              <v-icon dark >mdi-checkbox-marked-circle</v-icon>
            </v-btn>
            <input
              v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
              v-if="!Task.completed"
              v-model="Task.title"
              class="pl-0"
              type="text"
              style="color:#578DC9;font-weight: bold"
              placeholder="title">
            <input
              v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
              v-else
              v-model="Task.title"
              class="pl-0"
              style="text-decoration: line-through;color:#578DC9;font-weight: bold"
              type="text"
              placeholder="title">
          </v-col>
          <v-container py-0>
            <v-flex xs12>
              <v-layout>
                <v-flex
                  xs4
                  style="height: 0px">
                  <v-menu
                    v-if="Task.dueDate != null"
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        class="pt-0 dateFont"
                        solo
                        prepend-icon
                        readonly
                        v-on="on"><template v-slot:prepend>
                          <i class="uiIconClock" style="margin-top: 3px"></i>
                      </template></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      color="#578DC9"
                      no-title 
                      scrollable>
                      <v-spacer/>
                      <v-btn 
                        text 
                        color="primary" 
                        @click="menu = false">Cancel</v-btn>
                      <v-btn 
                        text 
                        color="primary" 
                        @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <v-text-field
                    v-else
                    v-model="dueDate"
                    class="pt-0 dateFont"
                    solo
                    prepend-icon
                    readonly
                    v-on="on"><template v-slot:prepend>
                      <i class="uiIconClock" style="margin-top: 3px"></i>
                  </template></v-text-field>
                </v-flex>
                <v-flex 
                  xs4>
                  <v-layout row>
                    <v-list-item >
                      <v-list-item-avatar size="22" class="mr-2 pt-1">
                        <v-img :src="getUserAvatar(Task.assignee)"/>                    
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title><span class="user-name">{{ userFullName }}</span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-layout>
                </v-flex>
                <v-flex 
                  xs4>
                  <div v-if="Task.status != null">
                    <v-select
                      v-model="Task.status.name"
                      :items="taskStatus"
                      item-value="key"
                      item-text="value"
                      class="pt-0 selectFont"
                      solo>
                      <template v-slot:prepend>
                        <i class="uiIconTime uiIconBlue"></i>
                      </template>
                    </v-select>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-container>
          <v-flex xs12>
            <div class="py-3 px-4 mr-4">
              <div>
                <vue-ckeditor :editor-data="Task.description" :placeholder="descriptionPlaceholder"/>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 ml-1>
            <v-layout row ml-4>
              <v-flex 
                xs4
                row>
                <div style="white-space: nowrap">
                  <v-select
                    v-model="Task.priority"
                    :items="priorities"
                    item-value="key"
                    item-text="value"
                    solo
                    class="pt-0 selectFont">
                    <template v-slot:prepend>
                      <v-icon :color="getTaskPriorityColor(Task.priority)">mdi-flag-variant</v-icon>
                    </template>
                    <v-icon>mdi-flag-variant</v-icon>
                  </v-select>
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
        priorities: [{key:'HIGH',value:this.$t('homepage.task.drawer.high')},
          {key:'NORMAL',value:this.$t('homepage.task.drawer.normal')},
          {key:'LOW',value:this.$t('homepage.task.drawer.low')},
          {key:'NONE',value:this.$t('homepage.task.drawer.none')}],

        taskStatus: [{key:'ToDo',value:this.$t('homepage.task.status.toDo')},
          {key:'InProgress',value:this.$t('homepage.task.status.inProgress')},
          {key:'WaitingOn',value:this.$t('homepage.task.status.waitingOn')},
          {key:'Done',value:this.$t('homepage.task.status.done')}],
        
        date: '',
        menu: false,
        modal: false,
        showEditor : false,
        commentPlaceholder : this.$t('homepage.task.drawer.addYourComment'),
        descriptionPlaceholder : this.$t('homepage.task.drawer.addDescription'),
        userFullName:'',
        dueDate:'Due date',
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
        ],
        chips: [],
        labels: ['label 1','label 2','label 3'],
        search: ""
      }
    },
      created() {
        this.getUserFullName(this.Task.assignee);
        if (this.Task.dueDate) {
          this.date = new Date(this.Task.dueDate.time).toISOString().substr(0, 10)
        }
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
      },
      getTaskPriorityColor(priority) {
        switch (priority) {
          case "HIGH":
            return "#bc4343";
          case "NORMAL":
            return "#ffb441";
          case "LOW":
            return "#2eb58c";
          case "NONE":
            return "#578dc9";
        }
      },
      dateFormatter(dueDate) {
        if (dueDate) {
          const date = new Date(dueDate.time);
          const day = date.getDate();
          const month = date.getMonth()+1;
          const formattedTime = `${day  }-${  month  }`;
          return formattedTime
        } else {
          return "Due date"
        }
      },
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
    }
  }
</script>
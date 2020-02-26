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
              v-if="task.status != null"
              v-model="task.status.project.name"
              :background-color="task.status.project.color"
              :placeholder="$t('homepage.task.drawer.noProject')"
              prepend-icon
              solo
              class="pt-0 centered-input projectName">
              <template v-slot:prepend>
                <i class="uiIconFolder uiIconBlue"></i>
              </template>
            </v-combobox>
            <v-combobox
              v-else
              :placeholder="$t('homepage.task.drawer.noProject')"
              prepend-icon
              solo
              class="pt-0 centered-input projectName">
              <template v-slot:prepend>
                <i class="uiIconFolder uiIconBlue"></i>
              </template>
            </v-combobox>
            <v-combobox
              v-model="chips"
              :items="labels"
              :placeholder="$t('homepage.task.drawer.labels')"
              class="pt-0"
              chips
              clearable
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
              @click="markAsCompleted()">
              <v-icon dark >mdi-checkbox-marked-circle</v-icon>
            </v-btn>
            <input
              v-if="!task.completed"
              v-model="task.title"
              :placeholder="$t('homepage.task.drawer.title')"
              class="pl-0"
              type="text"
              style="color:#578DC9;font-weight: bold">
            <input
              v-else
              v-model="task.title"
              :placeholder="$t('homepage.task.drawer.title')"
              class="pl-0"
              style="text-decoration: line-through;color:#578DC9;font-weight: bold"
              type="text">
          </v-col>
          <v-container py-0>
            <v-flex xs12>
              <v-layout>
                <v-flex
                  xs4
                  class="mt-1">
                  <i class="uiIconClock"></i>
                  <vue-date-picker
                    v-if="task.dueDate != null"
                    v-model="task.dueDate.time"
                    :placeholder="$t('homepage.task.drawer.dueDate')"
                    clearable
                    value-type="timestamp" 
                    @change="updateDueDate()"/>
                  <vue-date-picker 
                    v-else
                    v-model="date"
                    :placeholder="$t('homepage.task.drawer.dueDate')"
                    @change="addDueDate()"/>
                </v-flex>
                <v-flex 
                  xs5>
                  <v-layout row>
                    <v-list-item>
                      <v-list-item-avatar size="22" class="mr-2 pt-1">
                        <v-img :src="getUserAvatar(task.assignee)"/>                    
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title><span class="user-name">{{ userFullName }}</span></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-layout>
                </v-flex>
                <v-flex 
                  xs3>
                  <div v-if="task.status != null">
                    <v-select
                      v-model="task.status.name"
                      :items="taskStatus"
                      item-value="key"
                      item-text="value"
                      class="pt-0 selectFont"
                      solo
                      @change="updateTaskStatus()">
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
                <vue-ckeditor 
                  v-model="task.description" 
                  :placeholder="descriptionPlaceholder"/>
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
                    v-model="task.priority"
                    :items="priorities"
                    item-value="key"
                    item-text="value"
                    solo
                    class="pt-0 selectFont"
                    @change="updateTask(task.id)">
                    <template v-slot:prepend>
                      <v-icon :color="getTaskPriorityColor(task.priority)">mdi-flag-variant</v-icon>
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
  import VueDatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  import {getUserInformations,updateTask} from '../TasksAPI';

  export default {
    components: {VueCkeditor, VueDatePicker},
    props: {
      drawer: {
        type: Boolean,
        default: false
      },
      task: {
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
        
        date: null,
        menu: false,
        modal: false,
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
        ],
        chips: [],
        labels: ['label 1','label 2','label 3'],
        autoSaveDelay: 1000,
        saveDescription: '',
      }
    },
    watch: {
      'task.description': function(newValue, oldValue) {  
        if (newValue !== oldValue) { 
          this.autoSaveDescription(); 
        } 
      }
    },
    created() {
      this.getUserFullName(this.task.assignee);
    },
    methods: {
      closeDrawer() {
        this.drawer = false;
        this.$emit('closeDrawer',this.drawer);
        this.showEditor=false;
      },
      openEditor() {
          this.showEditor = true;
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
      remove(item) {
        this.chips.splice(this.chips.indexOf(item), 1);
        this.chips = [...this.chips];
      },
      markAsCompleted(){
        this.task.completed = !this.task.completed;
        this.updateTask()
      },
      addDueDate() {
        const dueDate = {};
        dueDate.time = this.date.getTime();
        dueDate.year = this.date.getUTCFullYear()-1900;
        dueDate.month = this.date.getMonth();
        dueDate.day = this.date.getDay();
        dueDate.hours = this.date.getHours();
        dueDate.minutes = this.date.getMinutes();
        dueDate.seconds = this.date.getSeconds();
        dueDate.timezoneOffset = this.date.getTimezoneOffset();
        dueDate.date = this.date.getDate();
        this.task.dueDate = dueDate;
        this.updateTask();
      },
      updateDueDate() {
        const date = new Date(this.task.dueDate.time);
        this.task.dueDate.time = date.getTime();
        this.task.dueDate.year = date.getUTCFullYear()-1900;
        this.task.dueDate.month = date.getMonth();
        this.task.dueDate.day = date.getDay();
        this.task.dueDate.hours = date.getHours();
        this.task.dueDate.minutes = date.getMinutes();
        this.task.dueDate.seconds = date.getSeconds();
        this.task.dueDate.timezoneOffset = date.getTimezoneOffset();
        this.task.dueDate.date = date.getDate();
        if (date.getTime() === 0) {
          this.task.dueDate = null;
        }
        this.updateTask()
      },
      updateTaskStatus() {
        let statusId = 0;
        switch (this.task.status.name) {
          case "ToDo":
            statusId = 1;
            break;
          case "InProgress":
            statusId = 2;
            break;
          case "WaitingOn":
            statusId = 3;
            break;
          case "Done":
            statusId = 4;
            break;
        }
        if (this.task.status.project.id > 1) {
          this.task.status.id = 4 * (this.task.status.project.id -1 ) + statusId;
        } else {
          this.task.status.id = statusId;
        }
        this.updateTask()
      },
      updateTask() {
        updateTask(this.task.id,this.task);
      },
      autoSaveDescription() {
        clearTimeout(this.saveDescription);
        this.saveDescription = setTimeout(() => {
          Vue.nextTick(() => this.updateTask(this.task.id));
        }, this.autoSaveDelay);
      }
    }
  }
</script>
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
                icon
                @click="navigateTo(`tasks/taskDetail/${task.id}`)">
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
            <task-projects :task="task"/>
            <task-labels :task="task"/>
            <v-btn
              id="check_btn"
              class="ml-n2"
              icon
              dark
              @click="markAsCompleted()">
              <v-icon dark >mdi-checkbox-marked-circle</v-icon>
            </v-btn>
            <v-text-field
              v-if="!task.completed"
              v-model="task.title"
              :placeholder="$t('homepage.task.drawer.title')"
              class="pl-0 pt-0 task-name"
              type="text"
              color="#578DC9"
              @change="updateTask"/>
            <v-text-field
              v-else
              v-model="task.title"
              :placeholder="$t('homepage.task.drawer.title')"
              class="pl-0 pt-0 task-name"
              style="text-decoration: line-through"
              type="text"/>
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
                  <task-assignment :task="task"/>
                </v-flex>
                <v-flex 
                  xs3>
                  <div v-if="task.status != null" @click.stop>
                    <v-select
                      ref="selectStatus"
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
                <div style="white-space: nowrap" @click.stop>
                  <v-select
                    ref="selectPriority"
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
                    v-for="(item, i) in comments"
                    :key="i"
                    class="pr-0">
                    <task-comments
                      :task="task"
                      :comment="item" 
                      :comments="comments"
                      @showSubEditor="showEditor = !showEditor"/>
                  </v-list-item>
                  <v-list-item v-if="showEditor">
                    <v-list-item-avatar size="30" tile>
                      <v-img :src="currentUserAvatar"/>
                    </v-list-item-avatar>
                    <v-layout row class="editorContent">
                      <vue-ckeditor
                        v-model="editorData"      
                        :placeholder="commentPlaceholder"
                        :reset="reset"
                        class="mr-4 comment"/>
                      <v-btn
                        :disabled="disabledComment"
                        depressed
                        small
                        dark
                        class="mt-1 mb-2 commentBtn"
                        @click="addTaskComment()">{{ $t('homepage.task.drawer.comment') }}</v-btn>
                    </v-layout>
                  </v-list-item>
                  <a 
                    v-else 
                    class="pl-4" 
                    @click="openEditor">{{ $t('homepage.task.drawer.comment') }}</a>
                </v-list>
              </v-tab-item>
              <v-tab-item class="pt-5">
                <v-list class="py-0">
                  <v-list-item
                    v-for="(item, i) in logs"
                    :key="i"
                    class="pr-0">
                    <log-details :change-log="item"/>
                  </v-list-item>
                </v-list>
              </v-tab-item>
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
  import LogDetails from './LogDetails.vue'
  import TaskComments from './TaskComments.vue'

  import {updateTask, getTaskLogs, getTaskComments, addTaskComments} from '../tasksAPI';

  export default {
    components: {VueCkeditor, VueDatePicker,LogDetails,TaskComments},
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
        editorData: '',
        emptyValue: '',
        reset: false,
        disabledComment: true,
        priorities: [{key:'HIGH',value:this.$t('homepage.task.drawer.high')},
          {key:'NORMAL',value:this.$t('homepage.task.drawer.normal')},
          {key:'LOW',value:this.$t('homepage.task.drawer.low')},
          {key:'NONE',value:this.$t('homepage.task.drawer.none')}],

        taskStatus: [{key:'ToDo',value:this.$t('homepage.task.status.toDo')},
          {key:'InProgress',value:this.$t('homepage.task.status.inProgress')},
          {key:'WaitingOn',value:this.$t('homepage.task.status.waitingOn')},
          {key:'Done',value:this.$t('homepage.task.status.done')}],
        
        date: null,
        showEditor : true,
        commentPlaceholder : this.$t('homepage.task.drawer.addYourComment'),
        descriptionPlaceholder : this.$t('homepage.task.drawer.addDescription'),
        chips: [],
        autoSaveDelay: 1000,
        saveDescription: '',
        logs:[],
        comments:[],
      }
    },
    computed: {
      currentUserAvatar() {
        return `/rest/v1/social/users/${eXo.env.portal.userName}/avatar`;
      }
    },
    watch: {
      'task.description': function(newValue, oldValue) {  
        if (newValue !== oldValue) { 
          this.autoSaveDescription(); 
        } 
      },
      editorData(val) {
        this.disabledComment = val === '';
      } 
    },
    created() {
      this.retrieveTaskLogs();
      this.getTaskComments();
    },
    mounted() {
      window.addEventListener("click",() => {
        this.$refs.selectPriority.blur();
        this.$refs.selectStatus.blur();
      });
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
      addTaskComment() {
        addTaskComments(this.task.id,this.editorData).then((comment => {
          this.comments.push(comment)
        })
        );
        this.reset = !this.reset;
      },
      getUserAvatar(username) {
        return `/rest/v1/social/users/${username}/avatar`;
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
      },
      retrieveTaskLogs() {
        getTaskLogs(this.task.id).then(
                (data) => {
                  this.logs = data;
                });
        return this.logs
      },
      getTaskComments() {
        getTaskComments(this.task.id).then(
                (data) => {
                  this.comments = data;
                });
        return this.comments
      },
     
      navigateTo(pagelink) {
        window.open(`${ eXo.env.portal.context }/${ eXo.env.portal.portalName }/${ pagelink }`, '_blank');
      },
    }
  }
</script>
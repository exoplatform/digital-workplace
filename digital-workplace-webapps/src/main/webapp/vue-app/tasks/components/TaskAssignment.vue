<template>
  <div>
    <v-menu
      v-custom-click-outside="closeMenu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-left="40"
      attach
      transition="scale-transition"
      offset-y
      bottom>
      <template v-slot:activator="{ on }">
        <v-list-item :title="$t('homepage.tasks.drawer.clickToEdit')" style="cursor: pointer;">
          <v-list-item-avatar size="22" class="mr-2 ml-0 pt-1">
            <v-img :src="getUserAvatar(task.assignee)"/>
          </v-list-item-avatar>
          <span
            v-if="task.coworker.length > 0"
            class="user-name"
            v-on="on"> + {{ task.coworker.length }} {{ $t('homepage.task.drawer.coworker') }}</span>
          <span
            v-else
            class="user-name"
            v-on="on"
            v-html="getUserFullName(task.assignee)"></span>
        </v-list-item>
      </template>
      <v-card>
        <v-card-text class="pb-0">
          Assigned to :
        </v-card-text>
        <v-combobox
          v-model="task.assignee"
          :items="users"
          deletable-chips
          flat
          solo
          style="width: 90%"
          chips
          class="pt-0 ml-4"
          @change="updateTask()">
          <template v-slot:selection="{ attrs, item, parent, selected }">
            <v-chip
              v-bind="attrs"
              label
              dark
              color="#578DC9"
              small>
              <v-avatar left>
                <v-img :src="getUserAvatar(item)"/>
              </v-avatar>
              <span class="pr-2">
                {{ task.assignee }}
              </span>
            </v-chip>
          </template>
          <template v-slot:item="{ index, item }">
            <v-chip
              label
              color="white"
              small>
              <v-avatar left>
                <v-img :src="getUserAvatar(item)"/>
              </v-avatar>
              {{ item }}
            </v-chip>
          </template>
        </v-combobox>
        <v-divider/>
        <v-card-text class="pb-0">
          Coworkers :
        </v-card-text>
        <v-combobox
          id="coworkerInput"
          v-model="task.coworker"
          :items="users"
          deletable-chips
          flat
          multiple
          solo
          style="width: 90%"
          chips
          class="pt-0 ml-4"
          @change="updateTask()">
          <template v-slot:selection="{ attrs, item, parent, selected }">
            <v-chip
              v-bind="attrs"
              label
              dark
              color="#578DC9"
              small>
              <v-avatar left>
                <v-img :src="getUserAvatar(item)"/>
              </v-avatar>
              <span class="pr-2">
                {{ item }}
              </span>
            </v-chip>
          </template>
          <template v-slot:item="{ index, item }">
            <v-chip
              label
              color="white"
              small>
              <v-avatar left>
                <v-img :src="getUserAvatar(item)"/>
              </v-avatar>
              {{ item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  import {getAllUsers, getUserInformations, updateTask} from '../tasksAPI'

  export default {
    props: {
      task: {
        type: Object,
        default: () => {
          return {};
        }
      },
    },
    data() {
      return {
        users: [],
        userFullName: '',
        menu: false,
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        getAllUsers().then((users) => {
          this.users = users.users;
          for (let i = 0; i < this.users.length; i++) {
            this.users[i] = this.users[i].username;
          }
        })
      },
      getUserFullName(useName) {
        getUserInformations(useName).then((userInfo) => {
          this.userFullName = userInfo.fullname;
        });
        return this.userFullName;
      },
      getUserAvatar(username) {
        return `/rest/v1/social/users/${username}/avatar`;
      },
      updateTask() {
        updateTask(this.task.id, this.task);
      },
      closeMenu() {
        this.menu = false;
      }
    }
  }
</script>
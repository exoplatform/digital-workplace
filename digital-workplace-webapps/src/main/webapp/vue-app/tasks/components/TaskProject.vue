<template>
  <div @click.stop>
    <v-container
      pa-0
      fluid
      style="pointer-events: initial;">
      <v-combobox
        v-if="task.status != null"
        ref="select"
        v-model="task.status.project"
        :items="projects"
        :label="$t('homepage.task.drawer.noProject')"
        class="pt-0"
        hide-selected
        solo
        prepend-icon>
        <template v-slot:prepend>
          <i class="uiIconFolder uiIconBlue mr-1"></i>
        </template>
        <template v-slot:selection="{ attrs, item, parent, selected }">
          <v-chip
            v-if="item === Object(item)"
            v-bind="attrs"
            :color="`${item.color} lighten-3`"
            :input-value="selected"
            label
            style="height: 32px"
            small
            @click="updateTaskProject(item)">
            <span 
              style="font-size: 17px"
              title="click to edit" 
              class="px-4" 
              @click="parent.selectItem(item);deleteProject()">
              {{ item.name }}
            </span>
          </v-chip>
        </template>
        <template v-slot:item="{ index, item }">
          <v-chip
            :color="`${item.color} lighten-3`"
            dark
            label
            small>
            {{ item.name }}
          </v-chip>
        </template>
      </v-combobox>
      <v-combobox
        v-else
        ref="select"
        :items="projects"
        :label="$t('homepage.task.drawer.noProject')"
        class="pt-0"
        solo
        prepend-icon>
        <template v-slot:prepend>
          <i class="uiIconFolder uiIconBlue"></i>
        </template>
        <template v-slot:selection="{ attrs, item, parent, selected }">
          <v-chip
            v-if="item === Object(item)"
            v-bind="attrs"
            :color="`${item.color} lighten-3`"
            :input-value="selected"
            label
            lagre>
            <span class="pr-2">
              {{ item.name }}
            </span>
            <v-icon
              small
              @click="parent.selectItem(item);deleteProject()">close</v-icon>
          </v-chip>
        </template>
        <template v-slot:item="{ index, item }">
          <v-chip
            :color="`${item.color} lighten-3`"
            dark
            label
            small
            @click="updateTaskProject(item)">
            {{ item.name }}
          </v-chip>
        </template>
      </v-combobox>

    </v-container>
  </div>
</template>

<script>
    import {getProjects, updateTask, getDefaultStatusByProjectId} from '../tasksAPI'

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
                projects: [],
                search: null,
            }
        },
        mounted() {
            window.addEventListener("click", () => {
                this.$refs.select.blur();
            });
        },
        created() {
            this.getProjects();
        },
        methods: {
            getProjects() {
                getProjects().then((projects) => {
                    this.projects = projects;
                })
            },
            updateTask() {
                updateTask(this.task.id, this.task);
            },
            updateTaskProject(project) {
                getDefaultStatusByProjectId(project.id).then((status) => {
                    this.task.status = status;
                    this.updateTask();
                })
            },
            deleteProject() {
                this.task.status = null;
                this.updateTask();
            }
        }
    }
</script>
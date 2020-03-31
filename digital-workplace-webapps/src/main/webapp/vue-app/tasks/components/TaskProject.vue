<template>
  <div @click.stop>
    <v-container
      pa-0
      fluid>
      <v-combobox
        v-if="task.status != null"
        ref="select"
        :filter="filterProjects"
        v-model="task.status.project"
        :items="projects"
        :label="$t('homepage.task.drawer.noProject')"
        class="pt-0"
        solo
        prepend-icon
        @change="deleteProject()">
        <template v-slot:prepend>
          <i class="uiIconFolder uiIconBlue mr-1"></i>
        </template>
        <template v-slot:selection="{ attrs, item, parent, selected }">
          <v-chip
            v-if="item === Object(item)"
            v-bind="attrs"
            :color="`${item.color} lighten-3`"
            :input-value="selected"
            :title="$t('homepage.tasks.drawer.clickToEdit')"
            label
            class="projectName"
            small
            @click="updateTaskProject(item)">
            <span 
              class="px-4 body-2" 
              @click="parent.selectItem(item);deleteProject()">
              {{ item.name }}
            </span>
          </v-chip>
        </template>
        <template v-slot:item="{ index, item }">
          <v-list-item @click="updateTaskProject(item)">
            <v-chip
              :color="`${item.color} lighten-3`"
              dark
              label
              small>
              {{ item.name }}
            </v-chip>
          </v-list-item>
        </template>
      </v-combobox>
      <v-combobox
        v-else
        ref="select"
        :filter="filterProjects"
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
            <span
              :title="$t('homepage.tasks.drawer.clickToEdit')"
              class="px-4 body-2"
              @click="parent.selectItem(item);deleteProject()">
              {{ item.name }}
            </span>
          </v-chip>
        </template>
        <template v-slot:item="{ index, item }">
          <v-list-item @click="updateTaskProject(item)">
            <v-chip
              :color="`${item.color} lighten-3`"
              style="cursor: pointer"
              dark
              label
              small>
              {{ item.name }}
            </v-chip>
          </v-list-item>
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
              if (typeof this.$refs.select !== 'undefined') {
                this.$refs.select.blur();
              }
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
            filterProjects(item, queryText) {
              return (
                      item.name.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
                      -1 ||
                      item.name.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
              );
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
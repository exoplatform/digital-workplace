<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app
    id="digital-workplace-tasks"
    class="VuetifyApp"
    flat>
    <v-container pa-0>
      <v-layout
        row
        mx-0
        class="white">
        <v-flex
          d-flex
          xs12
          px-3>
          <v-layout
            row
            mx-0
            align-center>
            <v-flex
              d-flex
              xs12>
              <v-card
                flat
                color="transparent">
                <a href="#"><v-card-text class="body-1 text-uppercase color-title px-0">
                  {{ this.$t('homepage.tasks.header') }}
                </v-card-text></a>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          xs12
          px-3>
          <v-layout
            row
            mx-0
            align-center>
            <v-flex
              d-flex
              xs12>
              <v-layout mx-0>
                <v-flex xs12>
                  <v-card
                    class="mx-auto"
                    flat
                    color="#F7FAFD">
                    <v-layout>
                      <v-flex>
                        <v-layout
                          row
                          mx-0
                          justify-center>
                          <v-flex
                            xs12
                            d-flex>
                            <v-layout mx-0 pl-2>
                              <v-flex
                                d-flex
                                xs4>
                                <v-layout
                                  mx-0
                                  justify-center
                                  class="py-2">
                                  <template>
                                    <div class="text-center">
                                      <v-avatar tile color="#F7FAFD">
                                        <i class="uiIconEcmsViewTimeline iconlarge"></i>
                                      </v-avatar>
                                    </div>
                                  </template>
                                </v-layout>
                              </v-flex>
                              <v-flex
                                d-flex
                                xs8>
                                <v-card
                                  class="py-1"
                                  flat
                                  color="#F7FAFD">
                                  <div class="title">12 {{ this.$t('homepage.tasks') }}</div>
                                  <div class="caption color-title">{{ this.$t('homepage.tasks.inProgress') }}</div>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card
                    class="mx-auto"
                    flat
                    color="#F7FAFD">
                    <v-layout>
                      <v-flex>
                        <v-layout
                          row
                          mx-0
                          justify-center>
                          <v-flex
                            xs12
                            d-flex>
                            <v-layout mx-0>
                              <v-flex
                                d-flex
                                xs5>
                                <v-layout
                                  mx-0
                                  justify-center
                                  class="pa-2">
                                  <template>
                                    <div class="text-center">
                                      <v-avatar tile color="#F7FAFD">
                                        <v-icon
                                          size="50"
                                          color="#D07B7B">mdi-alarm</v-icon>
                                      </v-avatar>
                                    </div>
                                  </template>
                                </v-layout>
                              </v-flex>
                              <v-flex
                                d-flex
                                xs7>
                                <v-card
                                  class="py-1"
                                  flat
                                  color="#F7FAFD">
                                  <div class="title">6 {{ this.$t('homepage.tasks') }}</div>
                                  <div class="caption color-title">{{ this.$t('homepage.tasks.late') }}</div>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
          </v-flex></v-layout>
        </v-flex>
        <v-flex
          d-flex
          xs12
          pl-2
          pt-4>
          <v-layout
            row
            mx-0>
            <v-flex
              xs12>
              <v-list>
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  class="px-0"
                  @click="getTaskDrawer()">
                  <v-layout
                    row
                    mx-0
                    class="white">
                    <v-flex
                      d-flex
                      xs12
                      pl-3>
                      <v-layout
                        row
                        mx-0>
                        <v-flex
                          d-flex
                          xs6>
                          <v-list-item-content class="py-0">
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on }">
                                <v-list-item-title
                                  v-on="on"
                                  v-text="item.title"/><br>
                                <v-list-item-subtitle><div class="color-title">{{ item.date }}</div></v-list-item-subtitle>
                              </template>
                              <span>{{ item.title }}</span>
                            </v-tooltip>
                          </v-list-item-content>
                        </v-flex>
                        <v-flex
                          mt-n2
                          d-flex
                          xs5
                          justify-end
                          align><v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-card
                                :color="item.color"
                                flex
                                width="200"
                                class="pa-2 my-3 Rectangular-card text-center flexCard"
                                flat
                                v-on="on" >
                                <span>{{ item.project }}</span>
                              </v-card>
                              <v-card
                                :style="{borderColor:item.color}"
                                width="18"
                                class="pa-2 my-3 Rectangular-card"
                                flat
                                outlined
                                center>
                                <v-icon class="mt-n2" color="red">mdi-flag-variant</v-icon>
                              </v-card>
                            </template><span>{{ item.project }}</span>
                        </v-tooltip></v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-list-item>
              </v-list>
        </v-flex></v-layout></v-flex>
      </v-layout>
    </v-container>
    <task-drawer :drawer="drawer"/>
  </v-app>
</template>

<script>
  import TaskDrawer from "./TaskDrawer.vue";

  export default {

    components: {TaskDrawer},
    data() {
      return {
        drawer: false,
        placeholder: '',
        items: [
          {
            title: 'Create new composer',
            project: 'Lorsum iprem. Lorsum sur iprem et, lorsa sur iprem, valum sur ipdi.',
            color: '#FFF0D8',
            status: 'en cours',
            date: "14-10-2019"
          },
          {title: 'Design new Home', project: 'Home page', color: '#E1E1E1', status: 'en retard', date: "14-10-2019"},
          {title: 'New Badges', project: 'Gamification', color: '#ECC8C8', status: 'en cours', date: "14-10-2019"},
          {title: 'My currencies', project: 'Wallet Feature', color: '#CEDEEF', status: 'en cours', date: "14-10-2019"},
          {
            title: 'File Activity design',
            project: 'Only Office',
            color: '#D4F0E7',
            status: 'en cours',
            date: "14-10-2019"
          },
          {title: 'Add domains', project: 'Gamification', color: '#ECC8C8', status: 'en cours', date: "14-10-2019"},
        ],
      }
    },
    methods: {
      getTaskDrawer() {
        this.drawer = !this.drawer;
      }
    }
  }
</script>
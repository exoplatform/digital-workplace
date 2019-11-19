<template>
  <v-app
    class="VuetifyApp">
    <v-container pa-0>
      <v-layout class="white px-3 pt-3">
        <v-btn
          icon
          class="text-xs-center"
          @click.stop="drawer = !drawer" >
          <v-badge
            flat
            color="red"
            overlap>
            <span slot="badge">2</span>
            <v-icon
              class="grey-color">
              notifications
            </v-icon>
          </v-badge>
        </v-btn>
        <v-navigation-drawer
          v-model="drawer"
          right
          absolute
          temporary
          width="420">
          <v-container pa-0>
            <v-layout row mx-0>
              <v-flex xs12 >
                <v-card flat>
                  <v-layout>
                    <v-flex xs11>
                    <v-card-text style="font-size: 17px;font-weight: bold">Notifications</v-card-text></v-flex>
                    <v-flex xs1>
                      <v-btn
                        class="my-2 grey-color"
                        icon
                        @click.stop="drawer = !drawer"><v-icon size="30">mdi-close</v-icon></v-btn></v-flex></v-layout></v-card></v-flex>
              <v-divider
                :inset="inset"
                class="mx-1 my-0"/>
              <v-flex xs12 >
                <v-card flat>
                  <v-layout>
                    <v-flex xs8>
                      <v-btn
                        style="border-radius: 1em;"
                        depressed
                        color="#E1E8EE"
                        class="my-2 ml-2"><span class="font-weight-black">See all</span></v-btn></v-flex>
                    <v-flex xs4>
                      <v-btn
                        text
                        class="my-2"><span class="primary-color--text">Mark all as read</span></v-btn></v-flex></v-layout></v-card></v-flex>
              <v-divider
                :inset="inset"
                class="mx-1 my-0"/>
              <v-flex xs12 >
                <v-card
                  flat
                  class="mx-auto">
                  <v-list three-line>

                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i">
                      <v-layout :style="{background:item.background}">
                        <v-flex xs2>
                          <v-card style="display: contents">
                            <v-list-item-avatar class="ml-4">
                              <v-img :src="item.avatar"/>
                            </v-list-item-avatar>
                          </v-card>
                        </v-flex>
                        <v-flex xs9>
                          <v-list-item-content>
                            <v-list-item-title style="white-space: normal" v-html="item.title"/>
                            <v-list-item-subtitle v-html="item.subtitle"/>
                          </v-list-item-content>
                        </v-flex>
                        <v-flex xs1>
                          <v-btn icon><v-icon small class="primary-color--text">mdi-close</v-icon></v-btn>
                        </v-flex>
                      </v-layout>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-navigation-drawer>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: "<span class='primary-color--text' span style='font-weight: bold'>Sara</span>  has commented on your task in <span style='font-weight: bold'>Maintenance Board</span> project",
            subtitle: "3 hours ago",
            background:"aliceblue",
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: "<span class='primary-color--text' span style='font-weight: bold'>Hamadi</span>  has commented on your task in <span style='font-weight: bold'>Maintenance Board</span> project",
            subtitle: "1 day ago",
            background:"",

          },
        ],
        mini: false,
        right: null
      }
    }
  }
</script>
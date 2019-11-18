<template>
  <v-layout>
    <v-container style="width:25px" px-0>
      <v-layout justify-center>
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
          width="350">
          <v-card
            flat
            class="mx-auto">
            <v-list three-line>

              <v-list-item
                v-for="(item, i) in items"
                :key="i">
                <v-card style="display: contents">
                  <v-list-item-avatar style="padding-right:12px">
                    <v-img :src="item.avatar"/>
                  </v-list-item-avatar>
                </v-card>
                <v-list-item-content>
                  <v-list-item-title style="white-space: normal" v-html="item.title"/>
                  <v-list-item-subtitle v-html="item.subtitle"/>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-navigation-drawer>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: "<span class='primary-color--text' >Sara</span>  has commented on your task in <span style='font-weight: bold'>Maintenance Board</span> project",
            subtitle: "3 hours ago",
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: "<span class='primary-color--text' >Hamadi</span>  has commented on your task in <span style='font-weight: bold'>Maintenance Board</span> project",
            subtitle: "1 day ago",
          },
        ],
        mini: false,
        right: null
      }
    }
  }
</script>
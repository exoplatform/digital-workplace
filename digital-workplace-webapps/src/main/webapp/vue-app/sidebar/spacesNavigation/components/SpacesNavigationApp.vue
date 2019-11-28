<template>
  <v-app
    id="spaces-navigation"
    class="VuetifyApp"
    flat>
    <v-container
      px-0
      pt-0
      class="white">
      <v-row
        class="mx-0 spacesNavigationTitle">
        <v-list-item>
          <v-list-item-icon class="mb-2 mt-3 mr-6 titleIcon"><i class="spacesIcon"></i></v-list-item-icon>
          <v-list-item-content class="subtitle-1 titleLabel">
            {{ this.$t('homepage.spaces.title') }}
          </v-list-item-content>

          <v-list-item-action class="my-0" @click.stop="getRecentsSpaces()">
            <i class="uiArrowRightIcon" color="grey lighten-1"></i>
          </v-list-item-action>

        </v-list-item>
      </v-row>
      <v-row class="mx-0 spacesNavigationContent">
        <v-list 
          class="flex pa-2" 
          shaped 
          dense>
          <v-list-item
            v-for="space in spacesList"
            :key="space.spaceLink"
            class="ml-12 px-2 spaceItem"
            @click="navigateTo(space.link)">
            <v-list-item-avatar 
              size="26"
              class="mr-3 tile my-0 spaceAvatar"
              tile>
              <v-img :src="space.avatar"/>
            </v-list-item-avatar>
            <v-list-item-content class="body-2 grey--text darken-4">{{ space.spaceName }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-container>
    <recent-spaces-app :drawer="drawer"/>
  </v-app>
</template>
<script>
  import RecentSpacesApp from "./RecentSpacesApp.vue";

  export default {
    components: {RecentSpacesApp},
    data() {
      return {
        spacesList : [
          { spaceName: 'eXo Employees',
            avatar: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            spaceLink:'#'},
          { spaceName: 'EXo Product management',
            avatar: 'https://images.unsplash.com/photo-1474564862106-1f23d10b9d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
            spaceLink:'#'
          },
          { spaceName: 'EXo platform',
            avatar: 'https://images.unsplash.com/photo-1466065478348-0b967011f8e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=744&q=80',
            spaceLink:'#'
          },
          { spaceName: 'EXo Designers',
            avatar: 'https://images.unsplash.com/photo-1517923564953-4454fb2c99df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            spaceLink:'#' },
          { spaceName: 'EXo Solidarity',
            avatar: 'https://images.unsplash.com/photo-1437750769465-301382cdf094?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
            spaceLink:'#'},
        ],
        drawer: null,
      }
      },
    methods: {
      getRecentsSpaces() {
        this.drawer = !this.drawer;
        document.getElementById("DWLeftNavigation").classList.toggle("openRecentSpaces");
      }
    }
  }
</script>

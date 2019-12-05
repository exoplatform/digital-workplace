<template>
  <v-app
    id="administration-navigation"
    class="VuetifyApp"
    flat>
    <v-container
      px-0
      py-0
      class="white">
      <v-row
        class="mx-0 administrationTitle">
        <v-list-item @mouseover.stop="getAdminMenu()">
          <v-list-item-icon class="mb-2 mt-3 mr-6 titleIcon"><i class="uiAdministrationIcon"></i></v-list-item-icon>
          <v-list-item-content class="subtitle-1 titleLabel">
            {{ this.$t('homepage.administration.title') }}
          </v-list-item-content>

          <v-list-item-action class="my-0">
            <i class="uiArrowRightIcon" color="grey lighten-1"></i>
          </v-list-item-action>
        </v-list-item>
      </v-row>
    </v-container>
    <div @mouseleave="leaveAdminMenu()">
      <administration-menu-app
        :administration-drawer="drawer"/>
    </div>
  </v-app>
</template>
<script>
  import AdministrationMenuApp from "./AdministrationMenuApp.vue";
  export default {
    components: {
      AdministrationMenuApp
    },
    data() {
      return {
        drawer: null
      }
    },
    methods: {
      getAdminMenu() {
        this.drawer = !this.drawer;
        document.getElementById("DWLeftNavigation").classList.add("openAdministrationMenu");
      },
      leaveAdminMenu() {
        this.drawer = null;
        document.getElementById("DWLeftNavigation").classList.remove("openAdministrationMenu");

      }
    }
  }
</script>

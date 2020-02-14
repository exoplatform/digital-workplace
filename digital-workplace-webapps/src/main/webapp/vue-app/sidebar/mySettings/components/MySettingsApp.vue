<template>
  <v-app
    id="digital-workplace-mySettings"
    class="VuetifyApp"
    flat>
    <v-container
      px-0
      pb-4
      pt-0
      class="white">
      <v-row class="mx-0 settingsTitle">
        <v-list-item class="settingsTitleWrapper" @click="navigateTo('settings')">
          <v-list-item-icon class="my-2 mr-6"><i class="settingsIcon"></i></v-list-item-icon>
          <v-list-item-content class="subtitle-1 text-uppercase font-weight-bold settingsTitleLabel py-2">{{ this.$t('homepage.sidebar.settings.title') }}</v-list-item-content>
        </v-list-item>
      </v-row>
      <v-row class="mx-0 logoutLinks">
        <v-list-item @click="logOut()">
          <v-list-item-icon class="my-2 mr-6"><i class="logoutIcon"></i></v-list-item-icon>
          <v-list-item-content class="subtitle-1 text-uppercase font-weight-bold settingsTitleLabel py-2">{{ this.$t('homepage.sidebar.logout.label') }}</v-list-item-content>
        </v-list-item>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    methods : {
      logOut() {
        eXo.portal.logout();
      },
      changeLanguage() {
        if(document.getElementById('UIMaskWorkspace')) {
          window.ajaxGet(eXo.env.server.createPortalURL('UIPortal', 'ChangeLanguage', true));}
      },
      accountSettings() {
        if(document.getElementById('UIMaskWorkspace')) {
         window.ajaxGet(eXo.env.server.createPortalURL('UIPortal', 'AccountSettings', true));
        }
      },
      navigateTo(pagelink) {
        location.href=`${ eXo.env.portal.context }/${ eXo.env.portal.portalName }/${ pagelink }` ;
      },
    }
  }
</script>


<template>
  <v-app
    id="digital-workplace-mySettings"
    class="VuetifyApp"
    flat>
    <v-container
      px-0
      py-4
      class="white">
      <v-row
        class="mx-0 settingsTitle">
        <v-list-item class="settingsTitleWrapper">
          <v-list-item-icon class="my-2"><i class="settingsIcon"></i></v-list-item-icon>
          <v-list-item-content class="subtitle-1 text-uppercase font-weight-bold settingsTitleLabel py-2">{{ this.$t('homepage.sidebar.settings.title') }}</v-list-item-content>
        </v-list-item>
      </v-row>
      <v-row class="mx-0 settingsLinks">
        <v-list class="flex" dense>
          <v-list-item class="pl-12" @click="accountSettings()" >
            <v-list-item-avatar size="30" class="mr-3"><i class="securityIcon"></i></v-list-item-avatar>
            <v-list-item-content class="body-2">{{ this.$t('homepage.sidebar.settings.security') }}</v-list-item-content>
          </v-list-item>

          <v-list-item class="pl-12" @click="openURI('/portal/dw/notifications', '_self')" >
            <v-list-item-avatar size="30" class="mr-3"><i class="notifIcon"></i></v-list-item-avatar>
            <v-list-item-content class="body-2">{{ this.$t('homepage.sidebar.settings.notification') }}</v-list-item-content>
          </v-list-item>

          <v-list-item class="pl-12" @click="changeLanguage()" >
            <v-list-item-avatar size="30" class="mr-3"><i class="languageIcon"></i></v-list-item-avatar>
            <v-list-item-content class="body-2">{{ this.$t('homepage.sidebar.settings.language') }}</v-list-item-content>
          </v-list-item>

          <v-list-item class="pl-12" @click="openURI('https://docs.exoplatform.org/en/5.2/', '_blank')" >
            <v-list-item-avatar size="30" class="mr-3"><i class="helpIcon"></i></v-list-item-avatar>
            <v-list-item-content class="body-2">{{ this.$t('homepage.sidebar.settings.help') }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
      <v-row
        class="mx-0 logoutLinks">
        <v-list-item @click="logOut()">
          <v-list-item-icon class="my-2"><i class="logoutIcon"></i></v-list-item-icon>
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


      openURI(uri,target) {
        window.open(uri, target);
      }
    }
  }
</script>


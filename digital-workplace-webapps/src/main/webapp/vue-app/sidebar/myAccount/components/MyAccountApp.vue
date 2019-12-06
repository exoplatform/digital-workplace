<template>
  <v-app
    id="digital-workplace-myAccount"
    class="VuetifyApp"
    flat>
    <v-container
      px-0
      py-4
      class="white">
      <v-row
        class="mx-0 accountTitle">
        <v-list-item class="accountTitleWrapper">
          <v-list-item-icon class="my-2 mr-6"><i class="accountIcon"></i></v-list-item-icon>
          <v-list-item-content class="subtitle-1 text-uppercase font-weight-bold accountTitleLabel py-2">{{ this.$t('homepage.sidebar.account.title') }}</v-list-item-content>
        </v-list-item>
      </v-row>
      <v-row class="mx-0 accountLinks">
        <v-list class="flex" dense>
          <v-list-item 
            v-for="item in pagesArray"
            :key="item.link"
            class="pl-12" 
            @click="navigateTo(item.link)">
            <v-list-item-avatar size="30" class="mr-3">
              <v-img v-if="item.pageName === 'My profile'" src="/rest/v1/social/users/root/avatar"/>
              <i v-else :class="item.link+'Icon'"></i>
            </v-list-item-avatar>
            <v-list-item-content class="body-2 myAccountItemLabel">{{ item.pageName }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data() {
      return {
        pagesArray : [
          { pageName:'My profile', link:'profile' },
          { pageName:'My Wallet', link:'wallet' },
          { pageName:'My achievements', link:'achievements' }
        ]
      }
    },
    methods: {
      navigateTo(pagelink) {
        location.href=`${eXo.env.portal.context  }/${ eXo.env.portal.portalName }/${  pagelink}` ;
      }
    }
  }
</script>


<template>
  <v-app
    id="digital-workplace-left-navigation"
    dark
    class="VuetifyApp white"
    flat>
    <v-container 
      px-0
      py-0
      class="white">
      <v-row

        class="accountTitleWrapper mx-0">
        <v-list-item
          class="accountTitleItem py-3 "
          @click="navigateTo('profile')">
          <v-list-item-avatar size="44" class="mr-3 mt-0 mb-0 elevation-1">
            <v-img src="/rest/v1/social/users/root/avatar"/>
          </v-list-item-avatar>
          <v-list-item-content class="py-0 accountTitleLabel">
            <v-list-item-title class="font-weight-bold body-2 mb-0">Sara Boutej</v-list-item-title>
            <v-list-item-subtitle class="font-italic caption">Frontend developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-row>
      <v-row
        class="mx-0">
        <v-list 
          shaped 
          dense 
          min-width="90%"
          class="pb-0">
          <v-list-item-group v-model="item">
            <v-list-item
              v-for="(item, i) in items"
              :key="i">
              <v-list-item-icon class="mr-6 my-1">
                <i :class="'icon'+item.text"></i>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="subtitle-1"
                  @click="navigateTo(`${item.url}`)"
                  v-text="item.text"/>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        { text: 'Snapshot', url: '' },
        { text: 'Stream', url: 'stream' },
        { text: 'Spaces', url: 'spaces' },
        { text: 'People', url: 'connexions' },
      ],
    }),
    methods: {
      navigateTo(pagelink) {
        location.href=`${eXo.env.portal.context}/${eXo.env.portal.portalName}/${pagelink}`;
      }
    }
  }
</script>


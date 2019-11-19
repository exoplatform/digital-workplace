<template>
  <v-app
    id="digital-workplace-left-navigation"
    dark
    class="VuetifyApp white"
    flat>
    <v-container 
      px-0 
      py-4 
      class="white">
      <v-row 
        align="center" 
        justify="center" 
        class="mx-0 pb-3">
        <a href="/portal/dw/home">
          <v-img
            src="/digital-workplace/images/logo_exo.png"
            max-width="120"/>
        </a>
      </v-row>

      <v-row
        class="mx-0">
        <v-list 
          shaped 
          dense 
          min-width="90%">
          <v-list-item-group v-model="item">
            <v-list-item
              v-for="(item, i) in items"
              :key="i">
              <v-list-item-icon>
                <i :class="'icon'+item.text"></i>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="subtitle-1" v-text="item.text"/>
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
        { text: 'Snapshot' },
        { text: 'Stream' },
        { text: 'Spaces'},
        { text: 'People' },
      ],
    }),
  }
</script>


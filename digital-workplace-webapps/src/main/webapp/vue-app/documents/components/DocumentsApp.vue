<template>
  <v-app
    class="mx-auto rounded-card"
    color="transaprent">
    <v-app-title class="ml-4">
      <h3 class="color-title text-uppercase" background-color="white">Documents</h3>
    </v-app-title>
    <v-tabs
      background-color="white"
      color="#568DC9"
      right>
      <v-tabs-slider 
        color="#568DC9"/>
      <v-tab class="ml-4 text-capitalize" >Recents</v-tab>
      <v-tab class="ml-4 text-capitalize" >Shared with me</v-tab>
      <v-tab class="ml-4 text-capitalize" >Favorites</v-tab>
      <v-tab-item 
        v-for="n in 3"
        :key="n"
        class="ml-4">
        <v-container fluid>
          <v-row>
            <v-list disabled>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i">
                  <v-list-item-icon >
                    <v-icon :color="item.iconColor" x-large>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  
                  <v-list-item-content class="ml-4 mt-1">
                    <v-list-item-title v-text="item.text"/>
                    <v-list-item-subtitle>{{ item.date }}<v-icon>mdi-menu-right</v-icon>{{ item.space }}</v-list-item-subtitle>
                  </v-list-item-content>
                  
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { text: 'Secondary line text Lorem ', iconColor:'#D07B7B',
          date:'22-05-2020',
          space:'bla bla bla',icon: 'mdi-file-pdf' },
        { text: 'Secondary line text Lorem',  iconColor:'#476A9C',
          date:'22-05-2020',
          space:'bla bla bla',icon: 'mdi-file-word' },
        { text: 'Secondary line text Lorem',  iconColor:'#368272',
          date:'22-05-2020',
          space:'bla bla bla',icon: 'mdi-file-excel' },
        { text: 'Secondary line text Lorem',  iconColor:'#FBB340',
          date:'22-05-2020',
          space:'bla bla bla',icon: 'mdi-image' },
        { text: 'Secondary line text Lorem',  iconColor:'#368272',
          date:'22-05-2020',
          space:'bla bla bla', icon: 'mdi-file-excel' },

      ],
    }),
  }
</script>
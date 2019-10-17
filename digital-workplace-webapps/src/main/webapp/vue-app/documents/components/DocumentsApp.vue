<template>
  <v-app
    class="mx-auto"
    color="transaprent">

    <v-container class="white">
      <v-flex
        d-flex
        xs12
        px-3>
        <v-layout
          row
          mx-0
          align-center>
          <v-flex
            d-flex
            xs12
            sm6>
            <v-card
              flat
              color="transparent">
              <v-card-text class="body-1 text-uppercase grey--text px-0">
                Documents
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-container>
    <v-tabs
      background-color="white"
      right>
      <v-tabs-slider class="light-blue darken-3"/>
      <v-layout>
        <v-flex
          row>
          <v-flex>
            <v-tab class="text-capitalize" >Recents</v-tab>
          </v-flex>
          <v-flex>
            <v-tab class="text-capitalize" >Shared with me</v-tab>
          </v-flex>
          <v-flex>
            <v-tab class="text-capitalize" >Favorites</v-tab>
          </v-flex>
        </v-flex>
      </v-layout>
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
                  <v-list-item-icon class="mr-0">
                    <v-icon
                      :color="item.iconColor"
                      x-large>{{ item.icon }}</v-icon>
                  
                    <v-list-item-content class="ml-3 mt-1">
                      <v-list-item-title v-text="item.text"/>
                      <v-list-item-subtitle>{{ item.date }}<v-icon>mdi-menu-right</v-icon>{{ item.space }}</v-list-item-subtitle>
                    </v-list-item-content>
                  
                </v-list-item-icon></v-list-item>
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
          space:'UX Design & Prototypes',icon: 'mdi-file-pdf' },
        { text: 'Secondary line text Lorem',  iconColor:'#476A9C',
          date:'22-05-2020',
          space:'Product Management',icon: 'mdi-file-word' },
        { text: 'Secondary line text Lorem',  iconColor:'#368272',
          date:'22-05-2020',
          space:'Product Management',icon: 'mdi-file-excel' },
        { text: 'Secondary line text Lorem',  iconColor:'#FBB340',
          date:'22-05-2020',
          space:'UX Design & Prototypes',icon: 'mdi-image' },
        { text: 'Secondary line text Lorem',  iconColor:'#368272',
          date:'22-05-2020',
          space:'UX Design & Prototypes', icon: 'mdi-file-excel' },

      ],
    }),
  }
</script>
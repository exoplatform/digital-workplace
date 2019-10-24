<template>
  <v-app
    color="transaprent"
    class="VuetifyApp"
    flat>
    <v-container pa-0>
      <v-layout
        row
        mx-0
        class="white">
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
              xs12>
              <v-card
                flat
                color="transparent">
                <a href="#"><v-card-text class="body-1 text-uppercase color-title px-0">
                  Documents
                </v-card-text>
                </a>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          xs12>
          <v-layout
            row
            mx-0>
            <v-tabs
              background-color="white"
              color="#568DC9"
              right>
              <v-layout
                row
                mx-0
                px-3>
                <v-tab class="text-capitalize subtitle-1 ml-0" > Recents</v-tab>
                <v-tab class="text-capitalize subtitle-1" >Shared with me</v-tab>
                <v-tab class="text-capitalize subtitle-1" >Favorites</v-tab>
              </v-layout>
              <v-tab-item
                v-for="n in 3"
                :key="n">
                <v-list disabled>
                  <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i">
                      <v-list-item-icon class="mx-0">
                        <v-icon
                          :color="item.iconColor"
                          x-large>{{ item.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"/>
                        <v-list-item-subtitle><div class="color-title">{{ item.date }}<v-icon color="#a8b3c5">mdi-menu-right</v-icon>{{ item.space }}</div></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-tab-item>
            </v-tabs>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { text: 'Meeting_New Features2019 ', iconColor:'#D07B7B',
          date:'22-05-2020',
          space:'UX Design & Prototypes',icon: 'mdi-file-pdf' },
        { text: 'PRD-2020',  iconColor:'#476A9C',
          date:'22-05-2020',
          space:'Product Management',icon: 'mdi-file-word' },
        { text: 'TimesheetGuilds',  iconColor:'#368272',
          date:'22-05-2020',
          space:'Product Management',icon: 'mdi-file-excel' },
        { text: 'Composer wireframe',  iconColor:'#FBB340',
          date:'22-05-2020',
          space:'UX Design & Prototypes',icon: 'mdi-image' },
        { text: 'Requirements',  iconColor:'#368272',
          date:'22-05-2020',
          space:'UX Design & Prototypes', icon: 'mdi-file-excel' },
      ],
    }),
  }
</script>
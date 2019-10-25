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
          xs12>
          <v-layout
            row
            mx-0>
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
        { text: 'Requirements',  iconColor:'#368272',
          date:'22-05-2020',
          space:'UX Design & Prototypes', icon: 'mdi-file-excel' },
      ],
    }),
  }
</script>
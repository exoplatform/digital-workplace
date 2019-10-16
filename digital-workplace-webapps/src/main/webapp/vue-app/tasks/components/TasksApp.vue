<template>
  <v-app
    id="digital-workplace-tasks"
    class=" VuetifyApp"
    color="white">
    <v-container class="white">
      <v-layout>
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
                  My Tasks
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              d-flex
              xs12
              sm6
              justify-end>
              <v-btn
                depressed
                small
                class="mx-2"
                fab>
                <v-icon large color="grey">mdi-chevron-right</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
          xs20
          sm10
          ml-6>
          <v-card
            class="mx-auto"
            flat
            color="blue lighten-5">
            <v-layout>
              <v-flex>
                <v-layout
                  row
                  mx-0
                  justify-center>
                  <v-flex
                    xs12
                    sm5
                    d-flex>
                    <v-layout row mx-0>
                      <v-flex
                        d-flex
                        xs12
                        sm6>
                        <v-icon size="60" color="green accent-2">mdi-clock-fast</v-icon>
                      </v-flex>
                      <v-flex
                        d-flex
                        xs12
                        sm6>
                        <v-card flat color="blue lighten-5">
                          <div style="font-size: large">12 Tasks</div>
                          <div class="caption grey--text">en cours</div>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-divider
                    :inset="inset"
                    style="height: 30px"
                    class="mx-4"
                    vertical/>


                  <v-flex
                    xs12
                    sm5
                    d-flex>
                    <v-layout row mx-0>
                      <v-flex
                        d-flex
                        xs12
                        sm6>
                        <v-icon size="60" style="color: #D07B7B">mdi-alarm</v-icon>
                      </v-flex>
                      <v-flex
                        d-flex
                        xs12
                        sm6>
                        <v-card flat color="blue lighten-5">
                          <div style="font-size: large">3 tasks</div>
                          <div class="caption grey--text">en Retard</div>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title">
          <v-list-item-content class="ml-4 mr-2">
            <v-list-item-title v-text="item.title"/>
            <v-list-item-subtitle v-text="item.date"/>
          </v-list-item-content>
          <v-btn
            :color="item.color"
            class="mr-8 ml-2"
            v-text="item.project"/>
        </v-list-item>
      </v-list>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      enCours:6,
      enRetard:4,
      items: [
        { title: 'Create new composer', project: 'New Feature ' ,color:'yellow lighten-3',status:'en cours',date:"14-10-2019"},
        { title: 'Design new Home', project: 'Home page',color:'grey lighten-2',status: 'en retard',date:"14-10-2019"},
        { title: 'New Badges', project: 'Gamification',color:'deep-orange lighten-3',status:'en cours' ,date:"14-10-2019"},
        { title: 'New Badges', project: 'Gamification',color:'deep-orange lighten-3',status:'en cours' ,date:"14-10-2019"},
        { title: 'New Badges', project: 'Gamification',color:'deep-orange lighten-3',status:'en cours' ,date:"14-10-2019"},
        { title: 'New Badges', project: 'Gamification',color:'deep-orange lighten-3',status:'en cours' ,date:"14-10-2019"},
      ],
    }),
  }
</script>

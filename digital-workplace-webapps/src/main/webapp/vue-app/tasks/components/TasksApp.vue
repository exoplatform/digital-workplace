<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app
    id="digital-workplace-tasks"
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
                <a href="#"><v-card-text class="body-1 text-uppercase grey--text px-0">
                  Tasks
                </v-card-text></a>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          xs12
          px-3>
          <v-layout
            row
            mx-0
            align-center>
            <v-flex
              d-flex
              xs12>
              <v-layout mx-0>
                <v-flex xs12>
                  <v-card
                    class="mx-auto"
                    flat
                    color="#F7FAFD">
                    <v-layout>
                      <v-flex>
                        <v-layout
                          row
                          mx-0
                          justify-center>
                          <v-flex
                            xs12
                            d-flex>
                            <v-layout 
                              mx-0 
                              justify-center 
                              class="pa-2">
                              <v-flex
                                d-flex
                                xs12
                                sm5>
                                <v-layout mx-0 justify-center>
                                  <v-avatar tile color="#F7FAFD">
                                    <i
                                      style ="font-size: 50px;color:#6CCBAE;font-size: 40px"
                                      class="uiIconEcmsViewTimeline"></i>
                                  </v-avatar>  
                                </v-layout>
                              </v-flex>
                              <v-flex
                                d-flex
                                xs12
                                sm7>
                                <v-card flat color="#F7FAFD">
                                  <div style="font-size: large">12 Tasks</div>
                                  <div class="caption grey--text">en cours</div>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card
                    class="mx-auto"
                    flat
                    color="#F7FAFD">
                    <v-layout>
                      <v-flex>
                        <v-layout
                          row
                          mx-0
                          justify-center>
                          <v-flex
                            xs12
                            d-flex>
                            <v-layout mx-0>
                              <v-flex
                                d-flex
                                xs12
                                sm5>
                                <v-layout 
                                  mx-0 
                                  justify-center 
                                  class="pa-2">
                                  <template>
                                    <div class="text-center">
                                      <v-avatar tile color="#F7FAFD">
                                        <v-icon
                                          size="50"
                                          class="mb-1"
                                          style="color: #D07B7B">mdi-alarm</v-icon>
                                      </v-avatar>
                                    </div>
                                  </template>      
                                </v-layout>
                              </v-flex>
                              <v-flex
                                d-flex
                                xs12
                                sm7>
                                <v-card 
                                  flat 
                                  color="#F7FAFD" 
                                  class="pt-1">
                                  <div style="font-size: large">6 Tasks</div>
                                  <div class="caption grey--text">en retard</div>
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
          </v-flex></v-layout>
        </v-flex>
        <v-flex 
          d-flex
          xs12
          px-3>
          <v-layout
            row
            mx-0>
            <v-flex
              xs12>
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    class="px-0">
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
                          mx-0>
                          <v-flex
                            d-flex
                            xs12
                            sm6>
                            <v-list-item-content>
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                  <v-list-item-title v-on="on" v-text="item.title"/><br>
                                  <v-list-item-subtitle v-text="item.date"/>
                                </template>
                                <span>{{ item.title }}</span>
                              </v-tooltip>
                            </v-list-item-content>
                          </v-flex>
                          <v-flex
                            d-flex
                            xs12
                            sm6
                            justify-end
                            align><v-tooltip bottom>
                              <template v-slot:activator="{ on }">
                                <v-card
                                  :color="item.color"
                                  height="35"
                                  width="200"
                                  class="pa-2 my-3 Rectangular-card text-center"
                                  flat
                                  v-on="on" >
                                  <span>{{ item.project }}</span>
                                </v-card>
                                <v-card
                                  height="35"
                                  class="pa-2 my-3 Rectangular-card "
                                  flat
                                  outlined
                                  style="border: 2px solid;border-color: #FFF0D8;"
                                  center>
                                  <v-icon class="mt-n2" color="red">mdi-flag-variant</v-icon>
                                </v-card>
                              </template><span>{{ item.project }}</span>
                          </v-tooltip></v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
        </v-flex></v-layout></v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Create new composer', project: 'New Feature ' ,color:'#FFF0D8',status:'en cours',date:"14-10-2019"},
        { title: 'Design new Home', project: 'Home page',color:'#E1E1E1',status: 'en retard',date:"14-10-2019"},
        { title: 'New Badges', project: 'Gamification',color:'#ECC8C8',status:'en cours' ,date:"14-10-2019"},
        { title: 'My currencies', project: 'Wallet Feature',color:'#CEDEEF',status:'en cours' ,date:"14-10-2019"},
        { title: 'File Activity design', project: 'Only Office',color:'#D4F0E7',status:'en cours' ,date:"14-10-2019"},
        { title: 'Add domains', project: 'Gamification',color:'deep-orange lighten-3',status:'en cours' ,date:"14-10-2019"},
      ],
    }),
  }
</script>

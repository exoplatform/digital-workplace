<template>
  <v-app
    id="NavigationToolbarPortlet"
    class="VuetifyApp">
    <div v-if="!isMobile()">
      <v-tabs
        center-active
        color="#578DC9">
        <v-tab class="px-0 pb-2" href="home">SNAPSHOT</v-tab>
        <v-tab class="px-0 pb-2" href="#">STREAM</v-tab>
        <v-tab class="px-0 pb-2" href="#">SPACES</v-tab>
        <v-tab class="px-0 pb-2" href="#">PEOPLE</v-tab>
        <v-tab class="px-0 pb-2" href="#">FORUMS</v-tab>
      </v-tabs>
    </div>
    <div v-else>
      <container>
        <v-bottom-navigation
          v-model="bottomNav"
          style="position: fixed;bottom: 0px">
          <v-btn>
            <span>Snapshot</span>
            <i class="snapshot"></i>
          </v-btn>

          <v-btn>
            <span>Stream</span>
            <i class="stream"></i>
          </v-btn>

          <v-btn>
            <span>Spaces</span>
            <i class="spaces"></i>
          </v-btn>

          <v-btn>
            <span>People</span>
            <i class="people"></i>
          </v-btn>
        </v-bottom-navigation>
      </container>
    </div>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
      }
    },
    methods: {
      isMobile() {
          return window.innerWidth <= 600
      }
    }
  }
</script>
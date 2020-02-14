<template>
  <v-app
    id="digital-workplace-logo"
    class="VuetifyApp"
    flat>
    <v-container
      pa-3
      class="white">
      <v-row class="mx-0">
        <a :href="homeLink" class=" pr-3 logoContainer">
          <v-img
            src="/digital-workplace/images/logo_exo.png"
            max-width="75"/>
        </a>
        <a :href="homeLink" class=" pl-2 align-self-center brandingContainer">
          <span class="subtitle-2 font-weight-bold">Digital Workplace</span>
        </a>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
        homeLink: `${eXo.env.portal.context}/${eXo.env.portal.portalName}`
      }
    },
  }
</script>
<template>
  <v-navigation-drawer
    v-model="administrationDrawer"
    class="administrationDrawer elevation-2"
    absolute
    temporary
    hide-overlay>
    <administration-menu-item-app :administration-item="usersItems" item-title="Users"/>
    <administration-menu-item-app :administration-item="contentItems" item-title="Content"/>
    <administration-menu-item-app :administration-item="gamificationItems" item-title="Gamification"/>
    <administration-menu-item-app :administration-item="rewardsItems" item-title="Reward"/>
    <administration-menu-item-app :administration-item="searchItems" item-title="Search"/>
    <administration-menu-item-app :administration-item="portalItems" item-title="Portal"/>
    <administration-menu-item-app :administration-item="spacesItems" item-title="Spaces"/>
    <administration-menu-item-app :administration-item="applicationCenterItems" item-title="Application center"/>
    <administration-menu-item-app :administration-item="othersItems" item-title="Other"/>
  </v-navigation-drawer>
</template>
<script>
  import AdministrationMenuItemApp from "./AdministrationMenuItemApp.vue";
    export default {
        name: "AdministrationMenuApp",
        components: {
            AdministrationMenuItemApp
        },
        props: {
            administrationDrawer: {
                type: Object,
                default: null
            }
        },
      data() {
          return {
            usersItems: [
              {
                name: 'Add users',
                path: 'administrators/administration/newStaff'
              },
              {
                name: 'Users & Roles',
                path:'administrators/administration/management'
              }
            ],
            contentItems: [
              {
                name: 'Explorer',
                path: 'web-contributors/siteExplorer'
              },
              {
                name: 'Repository Admin',
                path: 'web-contributors/wcmAdmin'
              }
            ],
            gamificationItems: [
              {
                name: 'Connector',
                children: [
                  {
                    name: 'Github',
                    path: '#'
                  }
                ]
              },
              {
                name: 'Rules',
                path: 'administrators/gamification/rules'
              },
              {
                name: 'Badges',
                path: 'administrators/gamification/badges'
              },
              {
                name: 'Domains',
                path: 'administrators/gamification/domains'
              },
            ],
            rewardsItems: [
              {
                name: 'Kudos',
                path: 'administrators/rewardAdministration/kudosAdministration'
              },
              {
                name: 'Wallet',
                path: 'rewarding/rewardAdministration/walletAdministration'
              },
              {
                name: 'Rewards',
                path: 'rewarding/rewardAdministration'
              }
            ],
            searchItems: [
              {
                name: 'Indexing',
                path: 'administrators/searchIndexing'
              },
              {
                name: 'Connectors',
                path: '#'
              }
            ],
            portalItems: [
              {
                name: 'Sites',
                path: 'administrators/portalnavigation'
              },
              {
                name: 'Pages',
                path: 'administrators/administration/pageManagement'
              },
              {
                name: 'Branding',
                path: 'administrators/branding'
              },
              {
                name: 'Layout composer categories',
                path: 'administrators/administration/registry'
              }
            ],
            spacesItems: [
              {
                name: 'Manage Spaces',
                path: 'users/spacesAdministration'
              },
              {
                name: 'Manage Templates',
                path: 'administrators/spacesTemplates'
              }
            ],
            othersItems: [
              {
                name: 'Applications',
                path: 'administrators/appCenterAdminSetup'
              },
              {
                name: 'Notifications',
                path: 'administrators/notification'
              },
              {
                name: 'Web Conferencing',
                path: 'administrators/webconferencing'
              }
            ],
          }
      }
    }
</script>

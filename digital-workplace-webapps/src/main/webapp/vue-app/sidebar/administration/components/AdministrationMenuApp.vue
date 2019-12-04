<template>
  <v-navigation-drawer
    v-model="administrationDrawer"
    class="administrationDrawer elevation-2"
    absolute
    temporary
    hide-overlay>
    <v-list
      dense
      rounded
      class="adminMenu communityMenuWrapper">
      <v-subheader class="text-uppercase subtitle-2 font-weight-bold">Community</v-subheader>
      <v-treeview
        :items="communityItems"
        dense
        rounded
        hoverable
        class="subItemTitle"
        item-key="name">
        <template slot="label" slot-scope="{ item }">
          <a @click="navigateTo(item.path)">{{ item.name }}</a>
        </template>
      </v-treeview>
    </v-list>
    <v-list
      dense
      rounded
      class="adminMenu contentMenuWrapper">
      <v-subheader class="text-uppercase subtitle-2 font-weight-bold">Content</v-subheader>
      <v-treeview
        :items="contentItems"
        dense
        rounded
        hoverable
        class="subItemTitle"
        item-key="name">
        <template slot="label" slot-scope="{ item }">
          <a @click="navigateTo(item.path)">{{ item.name }}</a>
        </template>
      </v-treeview>
    </v-list>
    <v-list
      dense
      rounded
      class="adminMenu contentMenuWrapper">
      <v-subheader class="text-uppercase subtitle-2 font-weight-bold">Gamification</v-subheader>
      <v-treeview
        :items="gamificationItems"
        dense
        rounded
        hoverable
        class="subItemTitle"
        item-key="name">
        <template slot="label" slot-scope="{ item }">
          <a @click="navigateTo(item.path)">{{ item.name }}</a>
        </template>
      </v-treeview>
    </v-list>
    <v-list
      dense
      rounded
      class="adminMenu contentMenuWrapper">
      <v-subheader class="text-uppercase subtitle-2 font-weight-bold">Rewards</v-subheader>

      <v-treeview
        :items="rewardsItems"
        dense
        rounded
        hoverable
        class="subItemTitle"
        item-key="name">
        <template slot="label" slot-scope="{ item }">
          <a @click="navigateTo(item.path)">{{ item.name }}</a>
        </template>
      </v-treeview>

    </v-list>
  </v-navigation-drawer>
</template>
<script>
    export default {
        name: "AdministrationMenuApp",
        props: {
            administrationDrawer: {
                type: Object,
                default: null
            }
        },
      data() {
          return {
            communityItems: [
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
                name: 'Sites Explorer',
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
            ]
          }
      },
      methods: {
        navigateTo(pagelink) {
          location.href=`/portal/g/:platform:/${ pagelink }` ;
        }
      }

    }
</script>

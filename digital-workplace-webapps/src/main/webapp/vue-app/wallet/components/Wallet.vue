<template>
  <v-app
    id="digital-workplace-perkstore"
    class="VuetifyApp"
    flat
    dark>
    <main>
      <v-container pa-0>
        <v-layout
          row
          wrap
          mx-0>
          <v-flex
            d-flex
            sx12>
            <v-layout
              row
              ma-0
              class="white">
              <v-flex d-flex xs12>
                <v-card flat>
                  <v-card-text class="subtitle-2 grey--text pa-2"><a class="grey--text" @click="navigateTo('wallet')">{{ this.$t('homepage.Wallet.header') }}</a></v-card-text>
                </v-card>
              </v-flex>
              <v-flex 
                d-flex 
                xs12 
                justify-center>
                <v-card flat>
                  <v-card-text class="display-1 font-weight-bold pa-2 big-number"><a class="blueGrey-Color" @click="navigateTo('wallet')">{{ walletBalance }} Ȼ</a></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import {getWalletAccount} from '../WalletAPI'
  export default {
    data() {
      return {
        walletBalance: ''
      }
    },
    created() {
      this.getRewardBalance();
    },
    methods: {
      getRewardBalance() {
        getWalletAccount().then(
                (data) => {
                  this.walletBalance = Math.trunc(data.tokenBalance);
                }
        )
      },
      navigateTo(pagelink) {
        location.href=`${ eXo.env.portal.context }/${ eXo.env.portal.portalName }/${ pagelink }` ;
      },
    }
  }
</script>
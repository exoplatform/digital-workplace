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
          mx-0
          style="cursor: pointer"
          class="white"
          @click="navigateTo('perkstore?notProcessedOrders=true')">
          <v-flex
            d-flex
            xs12>
            <div class="pa-2">
              <span class="subtitle-2 grey--text">{{ this.$t('homepage.Perkstore.myOrders') }}</span>
            </div>
          </v-flex>
          <v-flex 
            d-flex 
            xs12 
            justify-center>
            <v-card
              flat
              color="transparent">
              <v-list-item class="px-1 perkstore-info">
                <span class="mr-1 my-0 font-weight-bold big-number">{{ pendingOrdersSize }}</span>
                <span class="mt-4 product-label">{{ this.$t('homepage.Perkstore.orders') }}</span>
              </v-list-item>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <order-list/>
  </v-app>
</template>

<script>
  import {getPendingOrdersSize} from '../persktoreAPI'

  export default {
    data() {
      return {
        pendingOrdersSize:''
      }
    },
    created() {
      this.getPendingOrdersSize();
    },
    methods: {
      getPendingOrdersSize() {
        getPendingOrdersSize().then(
                (orders) => {
                  this.pendingOrdersSize = orders.size;
                }
        )
      },
      navigateTo(pagelink) {
        location.href=`${ eXo.env.portal.context }/${ eXo.env.portal.portalName }/${ pagelink }` ;
      },
    }
  }
</script> 

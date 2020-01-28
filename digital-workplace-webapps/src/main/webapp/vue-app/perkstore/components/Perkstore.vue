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
          class="white">
          <v-flex
            d-flex
            xs12>
            <div class="pa-2">
              <span class="subtitle-2 grey--text"><a class="grey--text" href="/portal/dw/perkstore">{{ this.$t('homepage.Perkstore.header') }}</a></span>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="amber lighten-1"
                    fab
                    depressed
                    dark
                    height="20"
                    width="20"
                    class="mb-1"
                    v-on="on">
                    <a class="white--text caption" href="/portal/dw/perkstore?notProcessedOrders=true">{{ pendingOrdersSize }}</a>
                  </v-btn>
                </template>
                <span>Pending orders</span>
              </v-tooltip>
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
                <span class="mr-1 my-0 font-weight-bold big-number"><a class="blueGrey-Color" href="/portal/dw/perkstore">{{ productsSize }}</a></span>
                <span class="mt-4 product-label">{{ this.$t('homepage.Perkstore.products') }}</span>
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
  import {getProductsSize, getPendingOrdersSize} from '../persktoreAPI'

  export default {
    data() {
      return {
        productsSize: '',
        pendingOrdersSize:''
      }
    },
    created() {
      this.getProductsSize();
      this.getPendingOrdersSize();
    },
    methods: {
      getProductsSize() {
        getProductsSize().then(
                (products) => {
                  this.productsSize = products.size;
                }
        )
      },
      getPendingOrdersSize() {
        getPendingOrdersSize().then(
                (orders) => {
                  this.pendingOrdersSize = orders.size;
                }
        )
      },
    }
  }
</script> 

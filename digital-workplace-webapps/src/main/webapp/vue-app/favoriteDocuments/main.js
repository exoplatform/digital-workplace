import favoriteDocumentsApp from './components/FavoriteDocumentsApp.vue';

import '../../css/main.less';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  dark: true,
  iconfont: '',
});

export function init() {
// init Vue app when locale ressources are ready
  new Vue({
    render: h => h(favoriteDocumentsApp),
    vuetify,
  }).$mount('#digital-workplace-favorite-documents');
}